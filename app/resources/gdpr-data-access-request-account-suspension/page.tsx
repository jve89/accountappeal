import Link from "next/link";

export default function GdprDataAccessAfterSuspensionPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Requesting your account data after a suspension (GDPR explained)
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains, at a high level, how GDPR data access requests
          (DSARs) relate to online account suspensions, what information they may
          provide, and — just as importantly — what they do not change. It is
          informational only and does not constitute legal advice or guarantee
          any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What this guide is — and is not
            </h2>
            <p className="mt-2">
              This page provides general information about GDPR data access
              requests in the context of account restrictions or suspensions.
              It does not replace official appeal procedures and does not imply
              that a data request influences enforcement decisions.
            </p>
            <p className="mt-2">
              Platforms treat data access rights and enforcement reviews as
              separate internal processes.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              When a GDPR data request may be relevant
            </h2>
            <p className="mt-2">
              A data access request is typically considered after one or more
              appeal attempts have already been made and the reason for the
              suspension remains unclear.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Appeals receive only generic or automated responses</li>
              <li>No clarification is provided after follow-ups</li>
              <li>The enforcement appears automated or unexplained</li>
              <li>You are an EU resident or subject to EU data protection law</li>
            </ul>
            <p className="mt-2">
              GDPR requests are transparency tools, not enforcement challenges.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What a GDPR data access request actually does
            </h2>
            <p className="mt-2">
              Under Article 15 of the GDPR, individuals may request confirmation
              of whether personal data is being processed and obtain access to
              that data.
            </p>
            <p className="mt-2">
              In suspension-related cases, this may result in a structured
              disclosure covering:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Personal data stored about the account holder</li>
              <li>Categories of data used by platform systems</li>
              <li>High-level information about automated processing</li>
              <li>Metadata related to account access or restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Automated decision-making — what this usually means
            </h2>
            <p className="mt-2">
              GDPR requires platforms to disclose whether automated
              decision-making is used. This disclosure is typically high-level.
            </p>
            <p className="mt-2">
              Platforms are not required to reveal detection thresholds,
              scoring models, or enforcement logic. Responses often confirm
              automation without explaining why a specific outcome occurred.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What a GDPR data request does not do
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>It does not force account reinstatement</li>
              <li>It does not override platform enforcement decisions</li>
              <li>It does not guarantee human review</li>
              <li>It does not require disclosure of internal algorithms</li>
            </ul>
            <p className="mt-2">
              Treating a data request as an appeal strategy often leads to
              disappointment.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why responses are often limited or redacted
            </h2>
            <p className="mt-2">
              Platforms may lawfully withhold or redact information to protect:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Internal security and moderation systems</li>
              <li>Trade secrets and proprietary processes</li>
              <li>Third-party data or user privacy</li>
            </ul>
            <p className="mt-2">
              As a result, responses rarely explain the precise cause of a
              suspension.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How this fits into a broader appeal process
            </h2>
            <p className="mt-2">
              GDPR data access requests are sometimes used alongside appeals to
              gain context, not to reverse enforcement.
            </p>
            <p className="mt-2">
              They are often relevant in cases involving silence, automation,
              or unclear enforcement status.
            </p>
            <p className="mt-2">
              Related guides:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/appeal-submitted-no-response"
                  className="hover:text-slate-900"
                >
                  Appeal submitted but no response — what that usually means
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/how-account-appeals-work"
                  className="hover:text-slate-900"
                >
                  How account appeals actually work — timelines, limits, and misconceptions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/account-disabled-vs-suspended"
                  className="hover:text-slate-900"
                >
                  Account permanently disabled vs temporarily suspended — what’s the difference?
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common mistakes to avoid
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Submitting a data request before any appeal attempt</li>
              <li>Using accusatory or legal-threat language</li>
              <li>Expecting enforcement reversal</li>
              <li>Sending overlapping or repetitive requests</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Final note
            </h2>
            <p className="mt-2">
              GDPR data access requests provide transparency, not leverage.
              They may clarify how data is processed, but platform enforcement
              outcomes remain independent.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
