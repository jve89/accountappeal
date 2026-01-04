import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function AppealAgainGuidePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Is it worth appealing again? — when follow-ups help and when they don’t
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains when submitting another appeal may be reasonable,
          when it usually does not help, and how platforms typically interpret
          repeated submissions. It is informational only and does not guarantee
          any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              How platforms typically treat repeat appeals
            </h2>
            <p className="mt-2">
              Most platforms do not treat each appeal as a fresh review. Instead,
              follow-up submissions are usually evaluated against the same
              internal enforcement signals that triggered the original decision.
            </p>
            <p className="mt-2">
              If no new information is introduced, repeated appeals are often
              merged, deprioritized, or resolved automatically without further
              review.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              When a follow-up appeal may help
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>New verification, documentation, or clarification is available</li>
              <li>The original submission contained factual errors</li>
              <li>The platform explicitly allows or requests another review</li>
              <li>Account status or enforcement category has changed</li>
            </ul>
            <p className="mt-2">
              In these cases, a follow-up may add information the system did not
              previously evaluate.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              When repeated appeals usually do not help
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Identical appeal text is resubmitted</li>
              <li>No new facts or documentation are introduced</li>
              <li>The enforcement is labeled as permanent or final</li>
              <li>Appeals are submitted repeatedly in a short timeframe</li>
            </ul>
            <p className="mt-2">
              In these situations, additional appeals rarely change outcomes and
              may simply confirm the existing enforcement state.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What “permanent” usually signals internally
            </h2>
            <p className="mt-2">
              When a platform labels an enforcement as permanent, it typically
              means that:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Internal confidence thresholds have been met</li>
              <li>Standard review paths are exhausted</li>
              <li>Future appeals are unlikely to trigger re-evaluation</li>
            </ul>
            <p className="mt-2">
              This does not imply wrongdoing intent, but it does signal limited
              remaining review options.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Risks of over-appealing
            </h2>
            <p className="mt-2">
              Submitting repeated appeals without new information does not
              usually improve outcomes and may:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Collapse multiple submissions into a single internal record</li>
              <li>Reduce future review priority</li>
              <li>Limit visibility of genuinely new information later</li>
            </ul>
            <p className="mt-2">
              For this reason, restraint is often more effective than persistence.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related resources
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link href="/resources/appeal-submitted-no-response" className="hover:text-slate-900">
                  Appeal submitted but no response — what that usually means
                </Link>
              </li>
              <li>
                <Link href="/resources/how-account-appeals-work" className="hover:text-slate-900">
                  How account appeals actually work — timelines, limits, and misconceptions
                </Link>
              </li>
              <li>
                <Link href="/resources/account-disabled-vs-suspended" className="hover:text-slate-900">
                  Account permanently disabled vs temporarily suspended — what’s the difference?
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that repeated appeals increase success
              probability or reset enforcement logic. Final decisions remain
              solely with the platform.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
