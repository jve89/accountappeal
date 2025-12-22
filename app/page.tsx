import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <p className="text-sm text-neutral-600">Service</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Account appeal help that stays calm, factual, and structured.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Placeholder copy. This page will be information-heavy. We’ll replace
            all text once you paste your preferred homepage style.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white"
            >
              See pricing
            </a>
            <a
              href="#contact"
              className="rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
            >
              Contact
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "No emotional appeals. No guessing.",
              "Clear steps and documents.",
              "Built to preserve escalation options.",
            ].map((t) => (
              <div
                key={t}
                className="rounded-lg border bg-white p-4 text-sm text-neutral-700"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="services"
        title="What you get"
        subtitle="Placeholder bullets. We’ll refine after you share your style."
      >
        <ul className="list-disc space-y-2 pl-5 text-neutral-700">
          <li>Appeal letter drafted from your facts</li>
          <li>Evidence checklist (what to gather, what to avoid)</li>
          <li>Optional follow-up / escalation drafts (later)</li>
        </ul>
      </Section>

      <Section
        id="process"
        title="How it works"
        subtitle="Simple, repeatable process."
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["1) Intake", "You share the facts + screenshots."],
            ["2) Draft", "We prepare clean, consistent documents."],
            ["3) Submit", "You submit through official channels."],
          ].map(([a, b]) => (
            <li key={a} className="rounded-lg border p-4">
              <div className="font-medium">{a}</div>
              <div className="mt-1 text-sm text-neutral-600">{b}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="pricing"
        title="Pricing"
        subtitle="Clear pricing. No surprises."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {/* BASIC */}
          <div className="rounded-lg border p-5">
            <div className="font-medium">Basic</div>
            <div className="mt-1 text-sm text-neutral-600">
              Appeal letter draft + checklist
            </div>
            <div className="mt-4 text-2xl font-semibold">€XX</div>
            <a
              href={site.stripe.basic}
              className="mt-5 inline-flex w-full justify-center rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Choose Basic
            </a>
          </div>

          {/* STANDARD */}
          <div className="rounded-lg border p-5">
            <div className="font-medium">Standard</div>
            <div className="mt-1 text-sm text-neutral-600">
              Basic + follow-up appeal + case structuring
            </div>
            <div className="mt-4 text-2xl font-semibold">€XX</div>
            <a
              href={site.stripe.standard}
              className="mt-5 inline-flex w-full justify-center rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Choose Standard
            </a>
          </div>

          {/* PREMIUM */}
          <div className="rounded-lg border p-5">
            <div className="font-medium">Premium</div>
            <div className="mt-1 text-sm text-neutral-600">
              Standard + external complaint draft + priority support
            </div>
            <div className="mt-4 text-2xl font-semibold">€XX</div>
            <a
              href={site.stripe.premium}
              className="mt-5 inline-flex w-full justify-center rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Choose Premium
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          No guarantees. You submit appeals yourself. We provide structured documents
          and guidance only.
        </p>
      </Section>


      <Section
        id="faq"
        title="FAQ"
        subtitle="Short and factual. No marketing noise."
      >
        <div className="space-y-3">
          {[
            ["Do you contact platforms for me?", "No. You submit everything."],
            [
              "Do you guarantee reinstatement?",
              "No. We improve structure and reduce self-sabotage.",
            ],
            [
              "What do you need from me?",
              "Screenshots, timeline, and any platform messages.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-lg border p-4">
              <div className="font-medium">{q}</div>
              <div className="mt-1 text-sm text-neutral-600">{a}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="For now this is a placeholder. Next step: real contact form."
      >
        <div className="rounded-lg border p-5 text-sm text-neutral-700">
          <p>
            Add your contact email here later. Next step we build a proper form
            with spam protection and email delivery.
          </p>
        </div>
      </Section>
    </>
  );
}
