export default function V0Page() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          v0 Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Use n3wth/kit components in v0 by Vercel.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Reference registry URLs
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            v0 supports the shadcn registry protocol. You can reference
            n3wth/kit components by providing the registry URL in your prompt.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            Use the button from https://kit.newth.ai/r/button.json
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Prompt with component names
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Tell v0 which n3wth/kit components to use in your generated UI.
            Include the registry base URL so v0 can resolve them.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">{`Build a pricing page using components from
https://kit.newth.ai/r/

Use: card, button, badge, section`}</pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            3. Install generated components
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            After v0 generates your UI, install the n3wth/kit components it
            used into your local project.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">{`npx shadcn add https://kit.newth.ai/r/card.json
npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/badge.json`}</pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            Available components
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Any component in the registry can be referenced by URL. The full
            list is available at the{' '}
            <a
              href="/components"
              className="text-white underline underline-offset-4"
            >
              component gallery
            </a>
            . The registry base URL is:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            https://kit.newth.ai/r
          </pre>
        </section>
      </main>
    </div>
  )
}
