/**
 * Post-build step for `npm run registry:build`.
 *
 * `shadcn build` writes plain registry-item JSON to public/r/. This script
 * reopens each file and adds `meta.usageRules` — structured guidance an LLM
 * can read instead of inferring props from the raw component source.
 *
 * Curated entries live in scripts/usage-rules.ts. Everything else gets a stub
 * derived from the component's own props interface, so every registry item
 * carries at least machine-readable prop and variant data.
 *
 * `meta` is an open field in the registry-item schema, so the output stays
 * installable with `npx shadcn add`.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { curatedUsageRules, type UsageRules, type UsageRuleProp, type UsageRuleVariant } from './usage-rules.mts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public', 'r')

interface RegistryFile {
  path: string
  type: string
}

interface RegistryItem {
  name: string
  type: string
  title?: string
  description?: string
  files?: RegistryFile[]
}

/** Strip block and line comments so brace matching is not thrown off. */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
}

/** Read the body of the first `export interface <Name>Props { ... }` block. */
function extractPropsBlock(source: string): string | null {
  const match = /export\s+interface\s+\w*Props\b[^{]*\{/.exec(source)
  if (!match) return null

  let depth = 1
  let i = match.index + match[0].length
  const start = i

  while (i < source.length && depth > 0) {
    const char = source[i]
    if (char === '{') depth += 1
    else if (char === '}') depth -= 1
    i += 1
  }

  return depth === 0 ? source.slice(start, i - 1) : null
}

/**
 * Pull `name?: type` pairs out of a props interface body. Only handles the
 * flat, one-per-line style every component in this registry uses; anything
 * more exotic is left to a curated entry.
 */
function parseProps(propsBlock: string, defaults: Record<string, string>): UsageRuleProp[] {
  const props: UsageRuleProp[] = []
  const propPattern = /^\s*(\w+)(\?)?:\s*([^\n]+?)\s*$/gm

  let match: RegExpExecArray | null
  while ((match = propPattern.exec(propsBlock)) !== null) {
    const [, name, optional, rawType] = match
    const type = rawType.replace(/[;,]\s*$/, '').trim()
    if (!type || type === '{') continue

    const prop: UsageRuleProp = {
      name,
      type,
      description: '',
    }
    if (!optional) prop.required = true
    if (defaults[name] !== undefined) prop.default = defaults[name]

    props.push(prop)
  }

  return props
}

/** Read destructuring defaults, e.g. `variant = 'primary'`, from the source. */
function parseDefaults(source: string): Record<string, string> {
  const defaults: Record<string, string> = {}
  const pattern = /^\s*(\w+)\s*=\s*('[^']*'|"[^"]*"|true|false|-?\d+(?:\.\d+)?)\s*,\s*$/gm

  let match: RegExpExecArray | null
  while ((match = pattern.exec(source)) !== null) {
    defaults[match[1]] = match[2]
  }

  return defaults
}

/** Turn union-typed props into variant entries. */
function deriveVariants(props: UsageRuleProp[]): UsageRuleVariant[] {
  return props
    .filter((prop) => /^'[^']*'(\s*\|\s*'[^']*')+$/.test(prop.type))
    .map((prop) => {
      const values = [...prop.type.matchAll(/'([^']*)'/g)].map((m) => m[1])
      const variant: UsageRuleVariant = {
        name: prop.name,
        values,
        description: `Accepts ${values.map((v) => `'${v}'`).join(', ')}.`,
      }
      const fallback = prop.default?.replace(/^['"]|['"]$/g, '')
      if (fallback && values.includes(fallback)) variant.default = fallback
      return variant
    })
}

/** Collect the component's named exports. */
function parseExports(source: string): string[] {
  const names = new Set<string>()
  const pattern =
    /export\s+(?:const|function|interface|type)\s+(\w+)|export\s+\{([^}]*)\}/g

  let match: RegExpExecArray | null
  while ((match = pattern.exec(source)) !== null) {
    if (match[1]) {
      names.add(match[1])
      continue
    }
    for (const part of match[2].split(',')) {
      const name = part.trim().split(/\s+as\s+/).pop()?.trim()
      if (name) names.add(name)
    }
  }

  return [...names]
}

/** Note a11y affordances the component already implements. */
function deriveA11yNotes(source: string): string[] {
  const notes: string[] = []

  const roles = [...source.matchAll(/role="([^"]+)"/g)].map((m) => m[1])
  const uniqueRoles = [...new Set(roles)]
  if (uniqueRoles.length > 0) {
    notes.push(`Renders ARIA role(s): ${uniqueRoles.join(', ')}.`)
  }

  const ariaAttrs = [...new Set([...source.matchAll(/(aria-[a-z]+)=/g)].map((m) => m[1]))]
  if (ariaAttrs.length > 0) {
    notes.push(`Sets ${ariaAttrs.sort().join(', ')}.`)
  }

  if (source.includes('focus-ring')) {
    notes.push('Uses the focus-ring utility for a visible keyboard focus indicator; do not remove it.')
  }
  if (/motion-safe|motion-reduce|useReducedMotion|prefers-reduced-motion/.test(source)) {
    notes.push('Respects prefers-reduced-motion.')
  }
  if (source.includes('useId')) {
    notes.push('Generates ids with useId, so they are SSR-safe and unique per instance.')
  }
  if (notes.length === 0) {
    notes.push('No ARIA roles or attributes are set by this component; supply them at the call site if the usage is interactive.')
  }

  return notes
}

function componentSourcePath(item: RegistryItem): string | null {
  const file = item.files?.find((f) => /\.(tsx|ts)$/.test(f.path))
  if (!file) return null
  const abs = join(root, file.path)
  return existsSync(abs) ? abs : null
}

function importPathFor(item: RegistryItem): string {
  if (item.type === 'registry:hook') return `@/hooks/${item.name}`
  if (item.type === 'registry:lib') return `@/lib/${item.name}`
  return `@/components/ui/${item.name}`
}

/**
 * Choose the export a consumer most likely imports first: the hook, else the
 * value export matching the item name, else the first non-type value export.
 * Type-only exports (interfaces, type aliases) are ranked last so an item like
 * `icon` suggests `Icon` rather than `IconName`.
 */
function pickPrimaryExport(
  item: RegistryItem,
  exports: string[],
  source: string
): string | undefined {
  const hook = exports.find((name) => /^use[A-Z]/.test(name))
  if (hook) return hook

  const isTypeOnly = (name: string) =>
    new RegExp(`export\\s+(?:interface|type)\\s+${name}\\b`).test(source)

  const values = exports.filter((name) => !isTypeOnly(name))
  const pascal = item.name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return values.find((name) => name === pascal) ?? values[0] ?? exports[0]
}

/** Build a stub for any item without a curated entry. */
function buildStub(item: RegistryItem): UsageRules {
  const summary = item.description ?? `${item.title ?? item.name} component.`
  const base: UsageRules = {
    status: 'stub',
    summary,
    exports: [],
    import: `import { /* … */ } from '${importPathFor(item)}'`,
    props: [],
    variants: [],
    do: [
      `Install with: npx shadcn add https://kit.n3wth.com/r/${item.name}.json`,
      'Read the props list below before generating usage — this entry is derived from the component source, not hand-written.',
    ],
    dont: [
      'Do not assume shadcn/ui prop names — kit components define their own variant and size unions.',
      'Do not restyle with utility classes where a listed variant already covers the case.',
    ],
    a11y: [],
  }

  const sourcePath = componentSourcePath(item)
  if (!sourcePath) {
    // Style items carry only cssVars, so there is nothing to import or inspect.
    base.import =
      item.type === 'registry:style'
        ? 'No import — this item installs CSS variables, not a module.'
        : `import { /* … */ } from '${importPathFor(item)}'`
    base.a11y.push('No source file to derive accessibility notes from.')
    return base
  }

  const source = readFileSync(sourcePath, 'utf8')
  const cleaned = stripComments(source)

  base.exports = parseExports(cleaned)

  const propsBlock = extractPropsBlock(cleaned)
  if (propsBlock) {
    base.props = parseProps(propsBlock, parseDefaults(cleaned))
    base.variants = deriveVariants(base.props)
  }

  const primary = pickPrimaryExport(item, base.exports, cleaned)
  if (primary) {
    base.import = `import { ${primary} } from '${importPathFor(item)}'`
  }

  base.a11y = deriveA11yNotes(cleaned)

  return base
}

function main(): void {
  const registryPath = join(root, 'registry.json')
  const registry = JSON.parse(readFileSync(registryPath, 'utf8')) as {
    items: RegistryItem[]
  }

  let curated = 0
  let stubbed = 0
  let skipped = 0

  for (const item of registry.items) {
    const outPath = join(outDir, `${item.name}.json`)
    if (!existsSync(outPath)) {
      console.warn(`  skip ${item.name}: no built JSON at public/r/${item.name}.json`)
      skipped += 1
      continue
    }

    const built = JSON.parse(readFileSync(outPath, 'utf8')) as Record<string, unknown>
    const rules = curatedUsageRules[item.name] ?? buildStub(item)

    const existingMeta =
      typeof built.meta === 'object' && built.meta !== null
        ? (built.meta as Record<string, unknown>)
        : {}

    built.meta = { ...existingMeta, usageRules: rules }
    writeFileSync(outPath, `${JSON.stringify(built, null, 2)}\n`)

    if (rules.status === 'curated') curated += 1
    else stubbed += 1
  }

  console.log(
    `usage-rules: ${curated} curated, ${stubbed} stub, ${skipped} skipped (${curated + stubbed} items written)`
  )
}

main()
