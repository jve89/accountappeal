import { Section } from "@/components/Section";
import { sendContactEmail } from "@/app/actions/contact";

export default function HomePage() {
  return (
    <>
     {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Text */}
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Social media account suspended without a clear explanation?
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                If your account was restricted or suspended and the appeal process
                feels unclear or inconsistent, we help you slow things down and
                handle it properly.
              </p>

              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                Many appeals fail not because the situation is bad — but because
                messages are unclear, inconsistent, or sent at the wrong time.
              </p>

              <div className="mt-8">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  View pricing & next steps
                </a>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src="/hero_1.png"
                alt="Reviewing documents calmly in a quiet workspace"
                className="w-full rounded-lg object-cover"
              />
            </div>

          </div>

          {/* Supporting points */}
          <div className="mt-12 grid gap-6 md:grid-cols-3 text-m text-slate-700">
            {[
              "No emotional appeals. No guessing.",
              "Clear structure and consistent documents.",
              "Designed to avoid preventable mistakes.",
            ].map((t) => (
              <div
                key={t}
                className="rounded-lg bg-slate-50 px-5 py-6 text-center font-medium text-slate-800 leading-relaxed"
              >
                {t}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <Section
        id="services"
        title="What we do"
        subtitle="Clear structure, careful wording, and guidance through the appeal process."
      >
        <div className="rounded-lg bg-slate-50 p-8">
          <div className="space-y-4 text-slate-700">
            <p className="text-base font-large text-slate-900">
              We help you structure your situation clearly and prepare appeal
              documents that are calm, factual, and consistent.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Personalised appeal drafted from your situation</li>
              <li>Evidence checklist (what to gather — and what to avoid)</li>
              <li>Account summary to keep information consistent (Standard / Premium)</li>
              <li>Follow-up appeal if appropriate (Standard / Premium)</li>
              <li>External complaint or escalation document when included (Premium)</li>
              <li>Guidance to help you avoid weakening your position</li>
            </ul>

            <p className="pt-4 text-sm text-slate-500">
              This is a document preparation and guidance service — not an automated tool.
            </p>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        id="process"
        title="How it works"
        subtitle="A simple, careful process designed to reduce mistakes."
      >
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            [
              "1. Choose a package",
              "Select the level of support that fits your situation.",
            ],
            [
              "2. Share the details",
              "Complete the onboarding step so we can prepare the right materials.",
            ],
            [
              "3. Submit carefully",
              "You submit the appeal yourself through the platform’s official channels.",
            ],
          ].map(([title, desc]) => (
            <li
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="font-medium text-slate-900">{title}</div>
              <div className="mt-2 text-sm text-slate-600">{desc}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* WHAT THIS IS / IS NOT */}
      <Section
        id="boundaries"
        title="What this service is — and is not"
        subtitle="Clear boundaries to avoid confusion."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="font-medium text-slate-900">What this is</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Careful situation structuring</li>
              <li>Clear, neutral appeal writing</li>
              <li>Process guidance to avoid mistakes</li>
              <li>A calm, methodical approach</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="font-medium text-slate-900">What this is not</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>A guarantee of reinstatement</li>
              <li>Legal representation</li>
              <li>Direct contact with platforms</li>
              <li>A shortcut or “inside access”</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          All final decisions are made by the platform. Our role is to help you
          present your situation as clearly and safely as possible.
        </p>
      </Section>

      {/* PRICING */}
      <Section
        id="pricing"
        title="Pricing"
        subtitle="Clear pricing. No surprises."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {/* BASIC */}
          <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6">
            <div>
              <div className="font-medium text-slate-900">Basic</div>
              <div className="mt-1 text-sm text-slate-600">
                Appeal document + evidence checklist + submission instructions
              </div>
            </div>

            <div className="flex-1" />

            <div>
              <div className="text-2xl font-semibold text-slate-900">€XX</div>
              <form action="/api/checkout?tier=basic" method="POST">
                <button
                  type="submit"
                  className="mt-5 inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Choose Basic
                </button>
              </form>
            </div>
          </div>

          {/* STANDARD */}
          <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6">
            <div>
              <div className="font-medium text-slate-900">Standard</div>
              <div className="mt-1 text-sm text-slate-600">
                Basic + account summary + follow-up appeal + guidance period
              </div>
            </div>

            <div className="flex-1" />

            <div>
              <div className="text-2xl font-semibold text-slate-900">€XX</div>
              <form action="/api/checkout?tier=standard" method="POST">
                <button
                  type="submit"
                  className="mt-5 inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Choose Standard
                </button>
              </form>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6">
            <div>
              <div className="font-medium text-slate-900">Premium</div>
              <div className="mt-1 text-sm text-slate-600">
                Standard + external complaint or escalation document + extended guidance
              </div>
            </div>

            <div className="flex-1" />

            <div>
              <div className="text-2xl font-semibold text-slate-900">€XX</div>
              <form action="/api/checkout?tier=premium" method="POST">
                <button
                  type="submit"
                  className="mt-5 inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Choose Premium
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          No guarantees. You submit appeals yourself. We provide structured documents
          and guidance only.
        </p>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="FAQ"
        subtitle="Short, factual answers."
      >
        <div className="space-y-3">
          {[
            [
              "Can you guarantee my account will be reinstated?",
              "No. The final decision is always made by the platform. We help you present a clear, consistent, and well-structured appeal that avoids common mistakes and preserves escalation options.",
            ],
            [
              "Do you contact platforms on my behalf?",
              "No. You submit all appeals yourself through the platform’s official channels. We prepare the documents and guide you on when and how to submit them correctly.",
            ],
            [
              "How do I know which package is right for me?",
              "Basic is suitable for a first, straightforward appeal. Standard adds structure and a follow-up strategy. Premium is for more complex situations or high-value accounts that require a full escalation plan. If you’re unsure, you can contact us before ordering.",
            ],
            [
              "How long does the appeal process take?",
              "The delivery time applies only to the documents we prepare. Platform response times vary widely and are outside anyone’s control. Reviews may take days or weeks, and silence is common.",
            ],
            [
              "What do you need from me to get started?",
              "After payment, you’ll receive an evidence checklist explaining exactly what information and screenshots to provide. You don’t need everything — we work with what’s available.",
            ],
            [
              "What if I don’t have screenshots or complete evidence?",
              "You can still proceed. Stronger evidence helps, but missing items are common. We’ll assess what’s possible based on what you can provide.",
            ],
            [
              "Do you help with hacked or taken-over accounts?",
              "No. This service is for accounts suspended or restricted by platform enforcement systems. Hacked or compromised accounts follow a different recovery process and are not covered.",
            ],
            [
              "What is a follow-up appeal or escalation document?",
              "If an initial appeal is ignored or receives a generic response, a follow-up appeal can request a proper review. In Premium cases, this may extend to formal complaints with relevant authorities when appropriate.",
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              className="group rounded-lg border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                <span>{q}</span>

                {/* Chevron */}
                <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-transform duration-200 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-3 text-sm text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <div className="mx-auto max-w-xl">
              <form
                action={sendContactEmail}
                className="space-y-4"
              >
                <h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
                  Contact
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Use this only if you’re unsure which package fits your situation or
                  have a specific question before ordering.
                </p>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
