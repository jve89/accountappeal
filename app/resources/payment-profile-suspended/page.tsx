import Link from "next/link";

export default function PaymentProfileSuspendedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Payment profile suspended — Meta or Google
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what it usually means when a payment profile is
          suspended on platforms such as Meta or Google, why billing enforcement
          often affects multiple accounts, and what this realistically implies
          for review or appeal options. It is informational only and does not
          guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What a payment profile suspension actually means
            </h2>
            <p className="mt-2">
              A payment profile suspension restricts the ability to process
              payments across one or more linked services. This can affect ad
              accounts, subscriptions, or monetization features tied to the same
              billing entity.
            </p>
            <p className="mt-2">
              On platforms like Meta and Google, payment profiles often act as
              shared infrastructure. Enforcement therefore propagates across
              connected assets rather than remaining isolated.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Billing issues vs billing risk
            </h2>
            <p className="mt-2">
              Not all payment profile suspensions are caused by simple payment
              failures.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Billing issues</strong> include failed, reversed, or
                disputed transactions
              </li>
              <li>
                <strong>Billing risk classifications</strong> involve identity,
                consistency, or enforcement signals tied to the profile
              </li>
            </ul>
            <p className="mt-2">
              Platforms rarely disclose which category applies in a specific
              case.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common triggers
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Chargebacks, reversals, or disputed payments</li>
              <li>Inconsistent billing, tax, or business information</li>
              <li>Identity or ownership verification mismatches</li>
              <li>Risk signals across linked accounts or assets</li>
              <li>Prior enforcement involving the same payment profile</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why payment profiles trigger broader enforcement
            </h2>
            <p className="mt-2">
              Payment profiles are often treated as high-trust anchors within
              platform systems. When risk is detected at the billing level,
              platforms may restrict all connected services to prevent
              circumvention.
            </p>
            <p className="mt-2">
              This can occur even if individual accounts have not themselves
              violated a content or advertising policy.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What this means for appeals
            </h2>
            <p className="mt-2">
              Appeals involving suspended payment profiles are typically reviewed
              under stricter criteria.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Reviews may focus on the billing entity rather than the account</li>
              <li>Clearing one service does not automatically restore others</li>
              <li>Generic or silent responses are common</li>
            </ul>
            <p className="mt-2">
              Updating payment details alone does not usually reset enforcement
              logic.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related enforcement scenarios
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/linked-accounts-disabled-together"
                  className="hover:text-slate-900"
                >
                  Multiple accounts linked or disabled together — why this happens
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
                  href="/resources/facebook-business-manager-restricted"
                  className="hover:text-slate-900"
                >
                  Facebook Business Manager restricted — what it means and what to expect
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
              This guide does not imply that payment profile suspensions can
              always be resolved, that a specific appeal approach will succeed,
              or that platforms will provide detailed reasoning in every case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with the platform.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
