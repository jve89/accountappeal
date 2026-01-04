import { BackLink } from "@/components/resources/BackLink";

export default function ProcessPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          How We Structure an Appeal
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This page explains, at a high level, how AccountAppeal approaches the
          preparation of appeal-related documents and guidance. It is provided
          for transparency only and does not represent a template, promise, or
          guarantee of outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              Why This Page Exists
            </h2>
            <p className="mt-2">
              Most people who reach this page are dealing with an account
              restriction, suspension, or termination and are unsure how appeal
              processes actually work behind the scenes.
            </p>
            <p className="mt-2">
              The purpose of this page is not to provide instructions for
              self-submission or to suggest strategies for influencing outcomes.
              Instead, it explains the general thinking behind how appeal
              materials are structured when clarity, accuracy, and restraint
              matter.
            </p>
            <p className="mt-2">
              This information is intended to reduce uncertainty and explain the
              approach in broad terms, not to replace platform rules or official
              appeal procedures.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What “Structure” Means in This Context
            </h2>
            <p className="mt-2">
              Appeal systems used by large platforms are designed to process high
              volumes of submissions. Unstructured, emotional, speculative, or
              inconsistent appeals are often filtered or deprioritized without
              meaningful review.
            </p>
            <p className="mt-2">
              Structure, in this context, refers to presenting available
              information in a clear, bounded, and internally consistent manner
              that aligns with how enforcement actions are typically reviewed.
            </p>
            <p className="mt-2">
              A structured appeal does not increase the likelihood of
              reinstatement by itself, and it does not bypass platform policies.
              It reduces ambiguity and avoids introducing unnecessary friction
              during review.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              General Structuring Principles
            </h2>
            <p className="mt-2">
              While each case differs, appeal materials are typically prepared
              with an emphasis on:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Clear identification of the affected account or asset</li>
              <li>A factual, time-ordered summary of relevant events</li>
              <li>
                A neutral description of the enforcement action as stated by the
                platform
              </li>
              <li>
                Consistency with any prior submissions, if they exist
              </li>
              <li>
                A limited request for review or clarification, without
                speculation or accusation
              </li>
            </ul>
            <p className="mt-2">
              Not all elements are present in every case. Content is adjusted
              based on what information is available, appropriate, and relevant
              to the stated restriction.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Evidence Handling
            </h2>
            <p className="mt-2">
              Where evidence is available, it is referenced conservatively and
              only when it directly relates to the enforcement action described
              by the platform.
            </p>
            <p className="mt-2">
              Missing or incomplete evidence is common and does not automatically
              prevent appeal materials from being prepared. No fabricated,
              altered, or misleading material is used.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Explicit Limits
            </h2>
            <p className="mt-2">
              AccountAppeal does not provide templates, scripts, or downloadable
              appeal documents for general use. All materials are prepared
              individually based on the specific information supplied by the
              client.
            </p>
            <p className="mt-2">
              This page does not describe escalation tactics, legal arguments, or
              regulatory procedures. These vary significantly by platform,
              jurisdiction, and case context.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Submission Responsibility
            </h2>
            <p className="mt-2">
              All appeals, follow-ups, or complaints are submitted by the account
              holder through official platform channels.
            </p>
            <p className="mt-2">
              AccountAppeal does not submit materials on behalf of clients and
              does not influence platform decision-making.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              No Outcomes or Guarantees
            </h2>
            <p className="mt-2">
              The structure described on this page does not imply any likelihood
              of account reinstatement, response timing, or review outcome.
            </p>
            <p className="mt-2">
              Final decisions are made solely by the relevant platform or
              authority, based on their internal policies and review processes.
            </p>
          </section>
          <BackLink href="/" label="Back to home" />
        </div>
      </div>
    </section>
  );
}
