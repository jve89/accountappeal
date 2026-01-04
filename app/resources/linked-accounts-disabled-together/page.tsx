import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function LinkedAccountsDisabledPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Multiple accounts linked or disabled together — why this happens
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains why platforms often restrict or disable multiple
          accounts at once, how account linkage is typically inferred, and what
          this realistically means for review or appeal options. It is
          informational only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              How platforms infer account linkage
            </h2>
            <p className="mt-2">
              Platforms do not rely on a single signal to determine whether
              accounts are linked. Instead, they evaluate patterns across
              multiple technical, behavioral, and administrative signals.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Shared login, device, or session signals</li>
              <li>Overlapping payment methods or billing profiles</li>
              <li>Reused domains, apps, ad assets, or websites</li>
              <li>Behavioral similarity across accounts over time</li>
              <li>Prior enforcement history associated with related entities</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Soft vs high-confidence linkage
            </h2>
            <p className="mt-2">
              Not all linkage is treated equally.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Low or soft linkage</strong> may trigger monitoring,
                restrictions, or warnings
              </li>
              <li>
                <strong>High-confidence linkage</strong> often results in
                immediate or propagated enforcement
              </li>
            </ul>
            <p className="mt-2">
              Platforms rarely disclose which level applies in a specific case.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why enforcement propagates across accounts
            </h2>
            <p className="mt-2">
              Once one account is classified internally as high-risk, platforms
              often restrict connected assets to prevent circumvention of prior
              enforcement.
            </p>
            <p className="mt-2">
              This propagation can occur even when the connected accounts have
              not themselves violated a policy.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What this means for appeals
            </h2>
            <p className="mt-2">
              Appeals involving linked accounts are typically reviewed under
              stricter criteria.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Appeals may be evaluated at an account-group level</li>
              <li>Clearing one account does not automatically restore others</li>
              <li>Generic or silent responses are common</li>
            </ul>
            <p className="mt-2">
              Removing or changing links after enforcement does not usually
              reset review logic.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related enforcement scenarios
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/account-suspended-suspicious-activity"
                  className="hover:text-slate-900"
                >
                  Account suspended due to suspicious activity — what it usually means
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/google-ads-circumventing-systems"
                  className="hover:text-slate-900"
                >
                  Google Ads account suspended for “circumventing systems”
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/payment-profile-suspended"
                  className="hover:text-slate-900"
                >
                  Payment profile suspended — Meta or Google
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
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that linked accounts can always be
              separated for review purposes or that appeals will succeed once
              linkage is established.
            </p>
            <p className="mt-2">
              Final enforcement decisions remain solely with the platform.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
