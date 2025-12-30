import { Section } from "@/components/Section";
import { sendContactEmail } from "@/app/actions/contact";

export default function HomePage() {
  return (
    <>

      {/* LAUNCH NOTICE */}
      <div className="w-full bg-blue-50 border-b border-blue-200">
        <div className="mx-auto max-w-5xl px-6 py-3 text-center text-sm font-medium text-blue-900">
          🚧 We’re preparing our official launch. Services will open soon.
        </div>
      </div>


     {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Text */}
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Your online platform account suspended without a clear explanation?
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                If your account was restricted or suspended and the appeal process feels unclear or inconsistent, we help you slow things down, structure the situation clearly, and follow the appeal process correctly.
              </p>

              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                Many appeals fail not because the situation is bad, but because messages are unclear, inconsistent, or submitted without proper context.
              </p>

              <div className="mt-8">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
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
              "No emotional appeals. No guessing",
              "Clear structure and consistent documentation",
              "Designed to avoid preventable mistakes",
            ].map((t) => (
              <div
                key={t}
                className="rounded-lg bg-slate-50 px-5 py-6 text-center font-semibold text-slate-800 leading-relaxed"
              >
                {t}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <Section
        id="who-we-are"
        title="Who we are"
        subtitle="A careful, structured approach — handled by a real person, not an automated system."
      >
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
          <div className="space-y-4 text-slate-700">
            <p>
              AccountAppeal was created to address a recurring pattern: appeals often fail
              not because a case is weak, but because it is presented in a way review systems
              cannot reliably process.
            </p>

            <p>
              This service is shaped by experience in aviation operations and regulatory
              compliance — environments where outcomes depend on structured information,
              traceability, and disciplined communication under review.
            </p>

            <p>
              In those contexts, emotional language, improvisation, or inconsistent
              documentation does not help — it increases risk. The same principles apply to
              platform appeal processes.
            </p>

            <p>
              We therefore focus on preparing clear documentation, aligning facts across
              submissions, and guiding timing and wording — while keeping you fully in
              control of your account at all times.
            </p>
          </div>

          {/* Portrait accent (optional) */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="h-px w-20 bg-slate-200" />
            <img
              src="/circle-portrait.png"
              alt=""
              className="h-40 w-40 rounded-full object-cover"
            />
            <div className="h-px w-20 bg-slate-200" />
          </div>
        </div>
      </Section>

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
              <li>Personalised appeal document drafted based on your situation</li>
              <li>Evidence checklist (what to gather — and what to avoid)</li>
              <li>Account summary to keep information consistent (Standard / Premium)</li>
              <li>Follow-up appeal document when appropriate (Standard / Premium)</li>
              <li>Optional formal complaint document for applicable review bodies (Premium)</li>
              <li>Guidance to help you avoid common mistakes that can undermine clarity or consistency</li>
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
        subtitle="A careful, step-by-step process designed to avoid preventable mistakes."
      >
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            [
              "1. Choose the right level of support",
              "Select the package that matches the complexity and importance of your situation.",
            ],
            [
              "2. Align on your case before anything is prepared",
              "You complete a short onboarding. We review your situation, follow up where needed, and make sure everything is clear before moving forward.",
            ],
            [
              "3. Submit with confidence",
              "Once the documents and guidance are ready, you submit the appeal yourself through the platform’s official channels.",
            ],
          ].map(([title, desc]) => (
            <li
              key={title}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-6"
            >
              {/* Title block — fixed visual height */}
              <div className="min-h-[3.75rem] font-medium text-slate-900">
                {title}
              </div>

              {/* Description — now aligned across all cards */}
              <div className="mt-2 text-sm text-slate-600">
                {desc}
              </div>
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
            <h3 className="font-medium text-slate-900">This service does provide:</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Careful situation structuring</li>
              <li>Clear, neutral appeal writing</li>
              <li>Process guidance to avoid mistakes</li>
              <li>A calm, methodical approach</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-50 p-6">
            <h3 className="font-medium text-slate-900">This service does not provide:</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>A guarantee of reinstatement</li>
              <li>Legal representation</li>
              <li>Direct contact with platforms</li>
              <li>A shortcut, workaround or “inside access”</li>
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
              <div className="font-bold text-slate-900">Basic</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Personalised appeal document</li>
                <li>Evidence checklist</li>
                <li>Submission instructions</li>
              </ul>
            </div>

            <div className="flex-1" />

            <div><br></br>
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
              <div className="font-bold text-slate-900">Standard</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Everything included in Basic</li>
                <li>Account summary</li>
                <li>Optional follow-up appeal document</li>
                <li>
                  Up to 30 days of active guidance or up to two guided submission cycles
                </li>
              </ul>
            </div>

            <div className="flex-1" />

            <div><br></br>
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
              <div className="font-bold text-slate-900">Premium</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Everything included in Standard</li>
                <li>Optional formal complaint document</li>
                <li>
                  Up to 90 days of active guidance or up to three guided submission cycles
                </li>
              </ul>
            </div>

            <div className="flex-1" />

            <div><br></br>
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

        <div className="mt-10 rounded-md border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-slate-900">
            Final disclaimer
          </p>

          <p className="mt-2 text-sm text-slate-600">
            No guarantees. You submit all appeals yourself through official platform
            channels. AccountAppeal provides structured documentation and guidance only.
            We do not offer legal representation, platform access, account recovery or submission services,
            and are not affiliated with any platform.
          </p>
        </div>

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
              "No. The final decision is always made by the platform. We help you present a clear, consistent, and well-structured appeal that avoids common mistakes and preserves appropriate next-step options if needed.",
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
              "What is a follow-up appeal or escalation document?",
              "If an initial appeal is ignored or receives a generic response, a follow-up appeal can request a proper review. In Premium cases, this may extend to formal complaint templates for applicable review bodies when appropriate.",
            ],
            [
              "What types of cases do you not handle?",
              "This service is limited to accounts suspended or restricted by platform enforcement systems. We do not assist with hacked or stolen account recovery, attempts to circumvent platform safeguards, false statements or fabricated evidence, impersonation, or urgent requests promising guaranteed outcomes. If a case falls into these categories, we will decline it.",
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
