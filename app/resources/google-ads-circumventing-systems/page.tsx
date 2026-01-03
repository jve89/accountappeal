import Link from "next/link";

export default function GoogleAdsCircumventingSystemsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Google Ads account suspended for “circumventing systems”
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what Google Ads typically means by “circumventing
          systems,” why this suspension category is treated as severe, and what
          appeal options may exist. It is informational only and does not
          guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What “circumventing systems” means
            </h2>
            <p className="mt-2">
              Google uses this category for behavior it interprets as attempts
              to bypass policy enforcement, safeguards, or prior restrictions.
              It does not necessarily imply malicious intent or deliberate abuse.
            </p>
            <p className="mt-2">
              In practice, this classification is usually based on patterns and
              signals across accounts, entities, or infrastructure — not a
              single isolated action.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common triggers
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Repeated account creation after prior enforcement</li>
              <li>Use of linked or previously restricted business entities</li>
              <li>Inconsistent billing, identity, or ownership signals</li>
              <li>Landing page, domain, or account structure reuse patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why this suspension is difficult to reverse
            </h2>
            <p className="mt-2">
              Google treats circumvention findings as high-confidence signals.
              Reviews are often automated and evaluated under strict internal
              criteria.
            </p>
            <p className="mt-2">
              As a result, appeals may be rejected even when the account holder
              believes the enforcement was unintended or incorrect.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Appeal considerations
            </h2>
            <p className="mt-2">
              Appeals typically require clear, factual clarification of account
              structure, ownership, and intent. Repeating identical submissions
              or disputing policy logic rarely changes outcomes.
            </p>
            <p className="mt-2">
              For a broader explanation of how Google and other platforms handle
              appeals, see{" "}
              <Link
                href="/resources/how-account-appeals-work"
                className="underline hover:text-slate-900"
              >
                how account appeals actually work
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              When appeals receive no response
            </h2>
            <p className="mt-2">
              A lack of response does not necessarily indicate that an appeal was
              ignored. Automated triage and enforcement confidence often limit
              manual review in circumvention cases.
            </p>
            <p className="mt-2">
              See{" "}
              <Link
                href="/resources/appeal-submitted-no-response"
                className="underline hover:text-slate-900"
              >
                what it usually means when an appeal receives no response
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related Google account issues
            </h2>
            <p className="mt-2">
              A circumvention suspension often occurs alongside broader Google
              enforcement actions, such as:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/google-account-suspended"
                  className="hover:text-slate-900"
                >
                  Google account suspended — Ads, YouTube, or login access
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Cross-platform comparison
            </h2>
            <p className="mt-2">
              Google’s circumvention enforcement is comparable to asset-based
              restrictions used by Meta when repeated or linked violations are
              detected. For a parallel example, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/facebook-business-manager-restricted"
                className="hover:text-slate-900"
              >
                Facebook Business Manager restricted — what it means and what to expect
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that circumvention suspensions can always
              be lifted, that a specific appeal approach will succeed, or that
              Google will provide detailed reasoning in every case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with Google.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
