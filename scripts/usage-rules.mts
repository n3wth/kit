/**
 * Hand-authored usage rules for the most-used kit components.
 *
 * Every entry here is derived from the component source in
 * `registry/**`, not invented. Components without an entry get a
 * generated stub (see `scripts/build-usage-rules.ts`).
 */

export interface UsageRuleProp {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

export interface UsageRuleVariant {
  name: string
  values: string[]
  default?: string
  description: string
}

export interface UsageRules {
  /** How complete this entry is: hand-authored vs derived from source. */
  status: 'curated' | 'stub'
  /** One-line statement of what the component is for. */
  summary: string
  /** Named exports the component file provides. */
  exports: string[]
  /** Import path after `npx shadcn add`. */
  import: string
  props: UsageRuleProp[]
  variants: UsageRuleVariant[]
  /** Minimal correct usage, ready to paste. */
  example?: string
  do: string[]
  dont: string[]
  a11y: string[]
}

export const curatedUsageRules: Record<string, UsageRules> = {
  button: {
    status: 'curated',
    summary:
      'Primary interactive control. Renders a <button>, or clones a single child element when asChild is set.',
    exports: ['Button', 'ButtonProps', 'ButtonSize'],
    import: "import { Button } from '@/components/ui/button'",
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'ghost' | 'glass'",
        default: "'primary'",
        description: 'Visual treatment. Primary is the filled white pill.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | { base?: ButtonSize; md?: ButtonSize; lg?: ButtonSize }",
        default: "'md'",
        description:
          'Padding and text scale. Accepts a responsive object keyed by breakpoint; omitting base falls back to sm mobile-first.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Button label. Required.',
      },
      {
        name: 'isLoading',
        type: 'boolean',
        default: 'false',
        description:
          'Replaces leftIcon with a spinner, hides rightIcon, and disables the button.',
      },
      {
        name: 'leftIcon',
        type: 'ReactNode',
        description: 'Node rendered before the label. Hidden while isLoading.',
      },
      {
        name: 'rightIcon',
        type: 'ReactNode',
        description: 'Node rendered after the label. Hidden while isLoading.',
      },
      {
        name: 'asChild',
        type: 'boolean',
        default: 'false',
        description:
          'Clone the single child element instead of rendering a <button>, merging button classes onto it. Use for links.',
      },
      {
        name: 'touchTarget',
        type: 'boolean',
        default: 'false',
        description:
          'Applies min-w-[44px] min-h-[44px] to meet the WCAG 2.5.5 target size guideline.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        description:
          'Native disabled. Also forced on while isLoading is true.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['primary', 'secondary', 'ghost', 'glass'],
        default: 'primary',
        description:
          'primary: filled white with glow. secondary: transparent with glass border. ghost: borderless, muted text. glass: translucent blurred surface.',
      },
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'sm: px-3 py-1.5 text-xs. md: px-4 py-2 text-sm. lg: px-6 py-3 text-base.',
      },
    ],
    example: `<Button variant="primary" size="md" onClick={handleSave}>
  Save changes
</Button>`,
    do: [
      'Use exactly one primary button per view section; use secondary or ghost for the rest.',
      'Set isLoading during async work instead of manually disabling and swapping children.',
      'Use asChild with a single child element (such as <Link>) rather than nesting a link inside a button.',
      'Pass a responsive size object when the control needs to grow on larger breakpoints.',
      'Set touchTarget on icon-only or compact buttons in touch surfaces.',
    ],
    dont: [
      'Do not pass shadcn/ui variant names such as default, destructive, outline, or link — this Button does not define them.',
      'Do not override the pill shape, background, or border via className; pick a variant instead.',
      'Do not render multiple children with asChild — only a single valid element is cloned.',
      'Do not pair isLoading with a leftIcon and expect both; the spinner replaces the left icon.',
    ],
    a11y: [
      'Renders a native <button> with a native disabled attribute, so keyboard and screen reader semantics come for free.',
      'Includes the focus-ring utility for a visible keyboard focus indicator; do not remove it.',
      'Icon-only buttons need an explicit aria-label — the component does not infer one.',
      'touchTarget enforces the 44x44px minimum from WCAG 2.5.5 Target Size.',
      'While isLoading the button is disabled; announce longer operations with a live region elsewhere.',
    ],
  },

  card: {
    status: 'curated',
    summary:
      'Rounded container surface with an optional compound header, content, and footer.',
    exports: [
      'Card',
      'CardHeader',
      'CardTitle',
      'CardDescription',
      'CardContent',
      'CardFooter',
    ],
    import:
      "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'",
    props: [
      {
        name: 'variant',
        type: "'default' | 'glass' | 'interactive'",
        default: "'default'",
        description:
          'Surface treatment. interactive adds hover styles, cursor-pointer, and gradient-border shine-sweep.',
      },
      {
        name: 'padding',
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Inner padding. none removes padding for edge-to-edge media.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Card contents, typically the compound sub-components.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['default', 'glass', 'interactive'],
        default: 'default',
        description:
          'default: transparent with glass border. glass: translucent blurred fill. interactive: default plus hover highlight and pointer cursor.',
      },
      {
        name: 'padding',
        values: ['none', 'sm', 'md', 'lg'],
        default: 'md',
        description: 'none: no padding. sm: p-3. md: p-5. lg: p-8.',
      },
    ],
    example: `<Card variant="glass">
  <CardHeader>
    <CardTitle>Usage</CardTitle>
    <CardDescription>Requests this billing period.</CardDescription>
  </CardHeader>
  <CardContent>{children}</CardContent>
</Card>`,
    do: [
      'Compose with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter — they supply the spacing rhythm.',
      'Set the CardTitle `as` prop to keep the page heading order correct (h1 through h4, default h3).',
      'Use padding="none" when the card wraps full-bleed media, then pad inner sections yourself.',
      'Wrap the whole card in a link or button when using variant="interactive".',
    ],
    dont: [
      'Do not use variant="interactive" on a card that is not actually clickable — it sets cursor-pointer.',
      'Do not add your own margins to the sub-components; CardContent and CardFooter already apply mt-4.',
      'Do not put more than two lines in CardDescription — it is line-clamp-2 and will truncate.',
      'Do not nest a Card inside a Card; flatten the hierarchy instead.',
    ],
    a11y: [
      'Card renders a plain <div> with no role, so it is not focusable or announced as a region on its own.',
      'variant="interactive" is styling only — put the actual interactive element (a link or button) inside or around the card so it is keyboard reachable.',
      'CardTitle renders a real heading tag; choose `as` so the document outline does not skip levels.',
    ],
  },

  input: {
    status: 'curated',
    summary:
      'Single-line text field with optional icon slots and an inline error message.',
    exports: ['Input', 'InputProps'],
    import: "import { Input } from '@/components/ui/input'",
    props: [
      {
        name: 'variant',
        type: "'default' | 'glass'",
        default: "'default'",
        description: 'Surface treatment of the field wrapper.',
      },
      {
        name: 'inputSize',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description:
          'Height and text scale. Named inputSize because size is a native input attribute.',
      },
      {
        name: 'leftIcon',
        type: 'ReactNode',
        description: 'Decorative node pinned to the left; adds matching padding.',
      },
      {
        name: 'rightIcon',
        type: 'ReactNode',
        description: 'Decorative node pinned to the right; adds matching padding.',
      },
      {
        name: 'error',
        type: 'boolean | string',
        default: 'false',
        description:
          'true applies error styling only. A string also renders the message below the field and wires aria-describedby.',
      },
      {
        name: 'labelId',
        type: 'string',
        description: 'id of an external label element, applied as aria-labelledby.',
      },
      {
        name: 'id',
        type: 'string',
        description:
          'Required for the error message to be linked — the error id is derived as `${id}-error`.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['default', 'glass'],
        default: 'default',
        description:
          'default: transparent with glass border. glass: translucent blurred fill.',
      },
      {
        name: 'inputSize',
        values: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'sm: h-8 text-xs. md: h-10 text-sm. lg: h-12 text-base.',
      },
    ],
    example: `<Input
  id="email"
  type="email"
  placeholder="you@example.com"
  error={errors.email}
/>`,
    do: [
      'Use inputSize, not size — size is forwarded to the native input as the character-width attribute.',
      'Pass an id whenever you pass a string error, so aria-describedby can point at the message.',
      'Pass the error string itself rather than rendering your own message element below the field.',
      'Pair with the Label component, or pass labelId, so the field has an accessible name.',
    ],
    dont: [
      'Do not rely on placeholder text as the label — it disappears on input.',
      'Do not put interactive controls in leftIcon or rightIcon; both slots are aria-hidden and leftIcon is pointer-events-none.',
      'Do not add width classes expecting the field to shrink — the wrapper is w-full and sizes to its container.',
    ],
    a11y: [
      'Sets aria-invalid when error is truthy.',
      'A string error renders with role="alert" and is linked via aria-describedby, but only when id is also provided.',
      'Icon slots are aria-hidden so they are not announced.',
      'The field has no implicit label; supply a <Label htmlFor>, aria-label, or labelId.',
      'Focus styling comes from focus-within on the wrapper — the inner input intentionally has focus:outline-none, so do not remove the wrapper classes.',
    ],
  },

  modal: {
    status: 'curated',
    summary:
      'Portal-rendered dialog with focus trap, scroll lock, and Escape handling. This is kit\'s dialog primitive.',
    exports: [
      'Modal',
      'ModalHeader',
      'ModalTitle',
      'ModalDescription',
      'ModalBody',
      'ModalFooter',
      'ModalClose',
    ],
    import: "import { Modal } from '@/components/ui/modal'",
    props: [
      {
        name: 'isOpen',
        type: 'boolean',
        required: true,
        description: 'Whether the modal is open. Fully controlled.',
      },
      {
        name: 'onClose',
        type: '() => void',
        required: true,
        description:
          'Called on backdrop click, Escape, and the close button. You must flip isOpen yourself.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'full'",
        default: "'md'",
        description: 'Max width of the panel. full is a screen-height sheet with no radius.',
      },
      {
        name: 'closeOnBackdropClick',
        type: 'boolean',
        default: 'true',
        description: 'Whether clicking the backdrop calls onClose.',
      },
      {
        name: 'closeOnEscape',
        type: 'boolean',
        default: 'true',
        description: 'Whether pressing Escape calls onClose.',
      },
      {
        name: 'ariaLabel',
        type: 'string',
        description:
          'Accessible name for the dialog. Use when there is no ModalTitle to label it.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Panel contents, typically the compound sub-components.',
      },
    ],
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg', 'full'],
        default: 'md',
        description:
          'sm: max-w-[400px]. md: max-w-[560px]. lg: max-w-[720px]. full: full-screen, w-screen h-[100dvh], no border radius.',
      },
    ],
    example: `const [open, setOpen] = useState(false)

<Modal isOpen={open} onClose={() => setOpen(false)} size="md">
  <Modal.Header>
    <Modal.Title>Delete project</Modal.Title>
  </Modal.Header>
  <Modal.Body>This cannot be undone.</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={confirm}>Delete</Button>
  </Modal.Footer>
</Modal>`,
    do: [
      'Drive isOpen from state and close by setting it false inside onClose.',
      'Include a Modal.Title, or pass ariaLabel when the dialog has no visible title.',
      'Give destructive confirmations an explicit Cancel action rather than relying on the backdrop.',
      'Use size="full" for mobile sheets and long forms.',
    ],
    dont: [
      'Do not render Modal conditionally with `{open && <Modal .../>}` — it handles its own mount and exit animation from isOpen.',
      'Do not set both ariaLabel and a Modal.Title; ariaLabel wins and the visible title stops being the accessible name.',
      'Do not disable both closeOnBackdropClick and closeOnEscape without providing a visible close control.',
      'Do not add your own body scroll lock — the modal already locks and restores scroll position.',
    ],
    a11y: [
      'Panel renders role="dialog" with aria-modal="true" and tabIndex={-1}.',
      'Focus moves to the first focusable element on open and returns to the previously focused element on close.',
      'Tab and Shift+Tab are trapped inside the panel.',
      'Escape closes by default; keep that unless the dialog is genuinely blocking.',
      'Respects prefers-reduced-motion — transform and transition are dropped under motion-reduce.',
    ],
  },

  dropdown: {
    status: 'curated',
    summary:
      'Listbox-style select supporting single or multi selection, optional search, and a compound API. This is kit\'s select primitive.',
    exports: [
      'Dropdown',
      'DropdownTrigger',
      'DropdownMenu',
      'DropdownItem',
      'DropdownOption',
      'DropdownProps',
    ],
    import: "import { Dropdown } from '@/components/ui/dropdown'",
    props: [
      {
        name: 'options',
        type: 'DropdownOption[]',
        required: true,
        description:
          'Items to render, each { value, label, disabled? }. Ignored when using the compound children API.',
      },
      {
        name: 'value',
        type: 'string',
        description: 'Controlled selection for single-select mode.',
      },
      {
        name: 'values',
        type: 'string[]',
        description: 'Controlled selection for multi-select mode.',
      },
      {
        name: 'defaultValue',
        type: 'string',
        description: 'Initial selection for uncontrolled single-select.',
      },
      {
        name: 'defaultValues',
        type: 'string[]',
        description: 'Initial selection for uncontrolled multi-select.',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        description: 'Fires on selection change in single-select mode.',
      },
      {
        name: 'onMultiChange',
        type: '(values: string[]) => void',
        description: 'Fires on selection change in multi-select mode.',
      },
      {
        name: 'multi',
        type: 'boolean',
        description: 'Enable multi-select. Pair with values/defaultValues and onMultiChange.',
      },
      {
        name: 'searchable',
        type: 'boolean',
        description: 'Render a filter input at the top of the menu.',
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Trigger text when nothing is selected.',
      },
      {
        name: 'searchPlaceholder',
        type: 'string',
        description: 'Placeholder for the search input when searchable is set.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Disable the trigger.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Trigger height and text scale.',
      },
      {
        name: 'variant',
        type: "'default' | 'glass'",
        default: "'default'",
        description: 'Trigger surface treatment.',
      },
      {
        name: 'menuClassName',
        type: 'string',
        description: 'Extra classes for the menu, since className targets the trigger.',
      },
      {
        name: 'portal',
        type: 'boolean',
        description: 'Render the menu in a portal to escape overflow-hidden ancestors.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        description:
          'Compound API (Dropdown.Trigger / Dropdown.Menu / Dropdown.Item). Overrides options-based rendering.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['default', 'glass'],
        default: 'default',
        description: 'default: transparent with glass border. glass: translucent blurred fill.',
      },
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'Matches the Input size scale for aligned form rows.',
      },
    ],
    example: `<Dropdown
  options={[
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
  ]}
  value={cadence}
  onChange={setCadence}
  placeholder="Select cadence"
/>`,
    do: [
      'Use onChange with value for single-select, and onMultiChange with values for multi-select.',
      'Set portal when the dropdown sits inside a container with overflow hidden or a transformed ancestor.',
      'Set searchable once the list is long enough to scan awkwardly.',
      'Use menuClassName to style the menu — className applies to the trigger.',
    ],
    dont: [
      'Do not mix value with values; pick the mode that matches the multi prop.',
      'Do not use this for menus of actions — it has listbox semantics, not menu semantics.',
      'Do not pass both options and compound children; children take over rendering entirely.',
      'Do not wrap it in a native <select> or duplicate a hidden select for forms.',
    ],
    a11y: [
      'Trigger is role="combobox" with aria-expanded, aria-haspopup="listbox", and aria-controls.',
      'Menu is role="listbox" with aria-multiselectable in multi mode; items are role="option" with aria-selected.',
      'Disabled options set aria-disabled and are skipped on selection.',
      'The search input is role="searchbox" with aria-label="Filter options".',
      'Supply a visible label or aria-label on the trigger — the placeholder alone is not an accessible name.',
    ],
  },

  tabs: {
    status: 'curated',
    summary:
      'Compound tabs with roving focus, arrow-key navigation, and an animated active indicator.',
    exports: ['Tabs', 'TabsList', 'TabsTab', 'TabsPanel'],
    import:
      "import { Tabs, TabsList, TabsTab, TabsPanel } from '@/components/ui/tabs'",
    props: [
      {
        name: 'value',
        type: 'string',
        description: 'Controlled active tab value. Omit for uncontrolled mode.',
      },
      {
        name: 'defaultValue',
        type: 'string',
        description: 'Initial active tab for uncontrolled mode.',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        description:
          'Fires when the active tab changes. Named onChange, not onValueChange.',
      },
      {
        name: 'variant',
        type: "'underline' | 'pill'",
        default: "'underline'",
        description: 'Indicator style; set on the Tabs root and read by list and tabs via context.',
      },
      {
        name: 'glass',
        type: 'boolean',
        default: 'false',
        description: 'TabsList only. Adds a blurred backdrop to the list.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['underline', 'pill'],
        default: 'underline',
        description:
          'underline: bottom border on the list with a 2px sliding indicator. pill: rounded track with a filled sliding pill.',
      },
    ],
    example: `<Tabs defaultValue="overview" variant="pill">
  <TabsList>
    <TabsTab value="overview">Overview</TabsTab>
    <TabsTab value="usage">Usage</TabsTab>
  </TabsList>
  <TabsPanel value="overview">{overview}</TabsPanel>
  <TabsPanel value="usage">{usage}</TabsPanel>
</Tabs>`,
    do: [
      'Give every TabsTab a matching TabsPanel with the same value string.',
      'Set defaultValue (or value) — with neither, the internal value starts empty and no panel renders.',
      'Set variant on the Tabs root; TabsList and TabsTab read it from context.',
      'Keep tab labels short so the sliding indicator stays legible.',
    ],
    dont: [
      'Do not render TabsList, TabsTab, or TabsPanel outside a Tabs parent — the context hook throws.',
      'Do not use onValueChange; this component calls it onChange.',
      'Do not mount panels for inactive tabs expecting hidden content — inactive panels return null and unmount.',
      'Do not put variant or glass on the wrong element: variant belongs on Tabs, glass on TabsList.',
    ],
    a11y: [
      'List is role="tablist"; tabs are role="tab" with aria-selected and aria-controls; panels are role="tabpanel" with aria-labelledby.',
      'Roving tabindex — only the active tab is in the tab order.',
      'ArrowLeft, ArrowRight, Home, and End move focus and activate, wrapping at both ends.',
      'ids are generated with useId, so they are SSR-safe and unique per instance.',
      'The indicator animation is skipped when prefers-reduced-motion is set.',
    ],
  },

  toast: {
    status: 'curated',
    summary:
      'Transient notification with a variant icon and auto-dismiss timer, plus a fixed-position container.',
    exports: [
      'Toast',
      'ToastContainer',
      'ToastProps',
      'ToastData',
      'ToastVariant',
      'ToastPosition',
    ],
    import: "import { Toast, ToastContainer } from '@/components/ui/toast'",
    props: [
      {
        name: 'variant',
        type: "'default' | 'success' | 'error' | 'warning' | 'info'",
        default: "'default'",
        description: 'Selects the border color and default icon.',
      },
      { name: 'title', type: 'string', description: 'Bold first line.' },
      { name: 'description', type: 'string', description: 'Supporting body text.' },
      {
        name: 'duration',
        type: 'number',
        default: '5000',
        description: 'Milliseconds before auto-dismiss. Set 0 to keep it until dismissed.',
      },
      {
        name: 'icon',
        type: 'ReactNode',
        description: 'Overrides the variant icon.',
      },
      {
        name: 'onDismiss',
        type: '() => void',
        description: 'Fires after the 200ms exit animation completes.',
      },
      {
        name: 'open',
        type: 'boolean',
        default: 'true',
        description: 'Set false to trigger the exit animation.',
      },
      {
        name: 'position',
        type: "'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'",
        default: "'top-right'",
        description: 'ToastContainer only. Where the stack is anchored.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['default', 'success', 'error', 'warning', 'info'],
        default: 'default',
        description:
          'default: bell icon, neutral border. success: sage. error: coral. warning: gold. info: mint.',
      },
      {
        name: 'position',
        values: [
          'top-right',
          'top-left',
          'top-center',
          'bottom-right',
          'bottom-left',
          'bottom-center',
        ],
        default: 'top-right',
        description: 'ToastContainer anchor point.',
      },
    ],
    example: `const { toast } = useToast()

toast.success({ title: 'Saved', description: 'Your changes are live.' })`,
    do: [
      'Prefer the use-toast hook and ToastProvider over rendering Toast by hand — the provider wires the container and dismissal.',
      'Set duration={0} for errors that need an explicit acknowledgement.',
      'Keep the title to a few words and put detail in description.',
      'Render one ToastContainer per position, not one per toast.',
    ],
    dont: [
      'Do not depend on the Icon component being absent — Toast imports Icon, so install icon alongside it.',
      'Do not use toasts for content the user must act on; use modal instead.',
      'Do not stack more than a few at once — use-toast caps the stack at maxToasts (default 5).',
      'Do not put interactive controls inside a toast that auto-dismisses.',
    ],
    a11y: [
      'Renders role="alert" with aria-live="polite".',
      'The dismiss button has aria-label="Dismiss notification".',
      'The variant icon is decorative — the title and description carry the message.',
      'Entrance and exit animations are wrapped in motion-safe, so they are skipped under prefers-reduced-motion.',
      'Auto-dismiss can outrun a screen reader; raise duration or use 0 for important messages.',
    ],
  },

  'use-toast': {
    status: 'curated',
    summary:
      'Toast state hook plus provider. Returns a toast function with success, error, warning, and info shortcuts.',
    exports: [
      'useToast',
      'ToastProvider',
      'ToastOptions',
      'UseToastReturn',
      'ToastFn',
    ],
    import: "import { useToast, ToastProvider } from '@/hooks/use-toast'",
    props: [
      {
        name: 'maxToasts',
        type: 'number',
        default: '5',
        description:
          'Provider and hook argument. Oldest toasts are dropped once the stack exceeds it.',
      },
      {
        name: 'position',
        type: 'ToastPosition',
        default: "'top-right'",
        description: 'ToastProvider only. Passed through to the rendered ToastContainer.',
      },
      {
        name: 'toast(options)',
        type: '(options: ToastOptions) => string',
        description:
          'Queues a toast and returns its id. Options: title, description, variant, duration, icon.',
      },
      {
        name: 'dismiss',
        type: '(id: string) => void',
        description: 'Removes one toast by the id returned from toast().',
      },
      {
        name: 'dismissAll',
        type: '() => void',
        description: 'Clears the whole stack.',
      },
    ],
    variants: [
      {
        name: 'shortcut',
        values: ['toast.success', 'toast.error', 'toast.warning', 'toast.info'],
        description:
          'Each calls toast() with the matching variant preset; they take ToastOptions without variant.',
      },
    ],
    example: `<ToastProvider position="bottom-right">
  <App />
</ToastProvider>

// anywhere inside
const { toast, dismiss } = useToast()
const id = toast.error({ title: 'Upload failed' })`,
    do: [
      'Mount ToastProvider once near the root so every consumer shares one stack.',
      'Keep the id returned by toast() when you need to dismiss it programmatically.',
      'Use the variant shortcuts rather than passing variant by hand.',
      'Install the toast and icon components too — this hook imports and renders both.',
    ],
    dont: [
      'Do not call useToast outside a ToastProvider unless you want the isolated fallback state — that instance renders no container and its toasts are invisible.',
      'Do not mount more than one ToastProvider; each has its own independent stack.',
      'Do not hold onto the toasts array to render your own container when using the provider — it already renders one.',
    ],
    a11y: [
      'Toasts inherit role="alert" and aria-live="polite" from the Toast component.',
      'Raise duration or set 0 for messages a screen reader user must not miss.',
      'Because the provider renders the container at a fixed position, keep the stack short so it does not cover focused content.',
    ],
  },

  badge: {
    status: 'curated',
    summary: 'Small inline status label. Non-interactive.',
    exports: ['Badge', 'BadgeProps'],
    import: "import { Badge } from '@/components/ui/badge'",
    props: [
      {
        name: 'variant',
        type: "'default' | 'sage' | 'coral' | 'mint' | 'gold' | 'outline'",
        default: "'default'",
        description: 'Semantic color. Each variant tints background, text, and border.',
      },
      {
        name: 'size',
        type: "'sm' | 'md'",
        default: "'sm'",
        description:
          'sm is uppercase 10px with tracking; md is sentence-case 12px.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Badge label. Required.',
      },
    ],
    variants: [
      {
        name: 'variant',
        values: ['default', 'sage', 'coral', 'mint', 'gold', 'outline'],
        default: 'default',
        description:
          'default: neutral glass. sage: positive. coral: negative. mint: informational. gold: warning. outline: transparent with border only.',
      },
      {
        name: 'size',
        values: ['sm', 'md'],
        default: 'sm',
        description: 'sm: px-2 py-0.5 text-[10px] uppercase. md: px-3 py-1 text-xs.',
      },
    ],
    example: `<Badge variant="sage">Active</Badge>`,
    do: [
      'Map status meaning to color consistently across the app — sage positive, coral negative, gold warning, mint informational.',
      'Keep labels to one or two words; the badge is whitespace-nowrap and will not wrap.',
      'Use size="md" when the label is sentence-case or sits next to body text.',
    ],
    dont: [
      'Do not attach onClick to a Badge — it renders a <span> with no button semantics or focus handling.',
      'Do not pass shadcn variant names such as secondary or destructive; this Badge does not define them.',
      'Do not rely on color alone to convey status — include the word in the label.',
    ],
    a11y: [
      'Renders a plain <span> with no role, so it is read as inline text.',
      'Color is not an accessible signal on its own; the label text must carry the meaning.',
      'For status that changes at runtime, put the badge inside your own live region — the badge does not announce updates.',
      'At size="sm" the text is 10px uppercase; keep it to short labels for legibility.',
    ],
  },

  tooltip: {
    status: 'curated',
    summary:
      'Hover and focus tooltip rendered in a portal with viewport-aware flipping.',
    exports: ['Tooltip', 'TooltipProps', 'TooltipPosition'],
    import: "import { Tooltip } from '@/components/ui/tooltip'",
    props: [
      {
        name: 'content',
        type: 'ReactNode',
        required: true,
        description: 'What the tooltip shows.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description:
          'Trigger content. Wrapped in an inline-flex <div> that owns the hover and focus handlers.',
      },
      {
        name: 'position',
        type: "'top' | 'right' | 'bottom' | 'left'",
        default: "'top'",
        description:
          'Preferred side. Flips through a fallback order when it would overflow the viewport.',
      },
      {
        name: 'showDelay',
        type: 'number',
        default: '200',
        description: 'Milliseconds before showing.',
      },
      {
        name: 'hideDelay',
        type: 'number',
        default: '0',
        description: 'Milliseconds before hiding.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Suppress the tooltip entirely.',
      },
      {
        name: 'arrow',
        type: 'boolean',
        default: 'true',
        description: 'Render the pointing arrow.',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Applies to the tooltip popup, not the trigger wrapper.',
      },
    ],
    variants: [
      {
        name: 'position',
        values: ['top', 'right', 'bottom', 'left'],
        default: 'top',
        description:
          'Preferred placement only — the component repositions to the first side that fits and clamps 8px from the viewport edge.',
      },
    ],
    example: `<Tooltip content="Copy to clipboard" position="top">
  <Button variant="ghost" aria-label="Copy">
    <Icon name="copy" />
  </Button>
</Tooltip>`,
    do: [
      'Wrap a focusable trigger so keyboard users can reach the tooltip — it opens on focus as well as hover.',
      'Keep content short; the popup is max-w-xs.',
      'Use it for supplementary hints only, never for the sole copy of critical information.',
      'Set disabled instead of conditionally unmounting when the hint is temporarily irrelevant.',
    ],
    dont: [
      'Do not use a tooltip as the only accessible name for an icon-only button — add aria-label too.',
      'Do not put interactive content inside; the popup is pointer-events-none and cannot be hovered or clicked.',
      'Do not expect it to work on touch — it is driven by mouseenter, mouseleave, focus, and blur.',
      'Do not rely on className to move the popup; it is fixed-positioned from measured coordinates.',
    ],
    a11y: [
      'The popup is role="tooltip" and the trigger wrapper gets aria-describedby while visible.',
      'Opens on focus and closes on blur, so keyboard users get it — but only if the child is focusable.',
      'Because it is aria-describedby, it supplements rather than replaces the accessible name.',
      'Rendered through a portal to document.body to escape overflow and stacking contexts.',
      'Transitions are wrapped in motion-safe and skipped under prefers-reduced-motion.',
    ],
  },
}
