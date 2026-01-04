import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function InstagramAppealIgnoredPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Instagram appeal rejected or ignored — what it actually means
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what it usually means when an Instagram appeal
          appears to be rejected, receives a generic response, or receives no
          response at all — and how to interpret that silence realistically. It
          is informational only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              “Rejected” vs “ignored” — the practical difference
            </h2>
            <p className="mt-2">
              In practice, the difference between a rejected appeal and an
              ignored appeal is often smaller than users expect.
            </p>
            <p className="mt-2">
              A <em>rejected</em> appeal usually means the enforcement state was
              reviewed against existing signals and left unchanged. An
              <em>ignored</em> appeal often means the system did not surface a
              visible response, even though the submission was technically
              received.
            </p>
            <p className="mt-2">
              In both cases, the outcome is typically the same: the account
              status does not change.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why Instagram responses are often generic or absent
            </h2>
            <p className="mt-2">
              Instagram processes appeals at massive scale. As a result,
              responses are intentionally brief, standardized, or omitted
              entirely. Detailed explanations are rarely provided, even when a
              review has occurred.
            </p>
            <p className="mt-2">
              The wording of a response — or the absence of one — does not
              reliably indicate whether a human review took place.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons appeals appear to stall
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Insufficient or unclear account ownership verification</li>
              <li>Limited information available to reassess enforcement</li>
              <li>High-confidence automated integrity or security signals</li>
              <li>Repeated submissions collapsing into a single review record</li>
            </ul>
            <p className="mt-2">
              These factors are common and do not necessarily reflect the merits
              of the account or the appeal itself.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How to interpret your situation realistically
            </h2>
            <p className="mt-2">
              In general:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                A short period of silence may simply reflect queue processing
              </li>
              <li>
                Long-term silence often means the enforcement state is not
                changing
              </li>
              <li>
                Generic replies usually indicate enforcement confidence, not
                negotiation
              </li>
            </ul>
            <p className="mt-2">
              Silence alone does not imply that further review will occur later.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What usually does not help after no response
            </h2>
            <p className="mt-2">
              Submitting repeated appeals with identical explanations, changing
              timelines, or contacting unofficial channels rarely improves
              outcomes.
            </p>
            <p className="mt-2">
              These actions can introduce inconsistencies that make future
              reviews — if available — less clear.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related appeal guidance
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link href="/resources/how-account-appeals-work" className="hover:text-slate-900">
                  How account appeals actually work — timelines, limits, and misconceptions
                </Link>
              </li>
              <li>
                <Link href="/resources/is-it-worth-appealing-again" className="hover:text-slate-900">
                  Is it worth appealing again? — when follow-ups help and when they don’t
                </Link>
              </li>
              <li>
                <Link href="/resources/instagram-account-suspended" className="hover:text-slate-900">
                  Instagram account suspended — what to do
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limits to understand
            </h2>
            <p className="mt-2">
              Instagram makes final enforcement decisions internally. Some cases
              are never reopened, regardless of appeal quality or clarity.
            </p>
            <p className="mt-2">
              This guide does not imply that silence will resolve itself or that
              further appeals will be accepted.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
