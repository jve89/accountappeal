import Link from "next/link";

export default function AccountRestrictedVsSuspendedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Account restricted or limited — how this differs from suspension or disablement
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what platforms usually mean by “restricted” or
          “limited” accounts, how these states differ from suspensions or
          disablement, and what review options may exist. It is informational
          only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What a restricted or limited account means
            </h2>
            <p className="mt-2">
              A restriction limits specific features or visibility rather than
              removing full account access. Users can usually still log in and
              access core settings.
            </p>
            <p className="mt-2">
              Restrictions are typically non-terminal and are often applied as
              precautionary or quality-based controls rather than final
              enforcement decisions.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How this differs from suspension or disablement
            </h2>
            <p className="mt-2">
              A suspension usually blocks account access or core functionality,
              while a disablement removes access entirely. A restriction, by
              contrast, leaves the account active but constrained.
            </p>
            <p className="mt-2">
              For broader terminology differences, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/permanently-disabled-vs-temporarily-suspended"
                className="hover:text-slate-900"
              >
                Account permanently disabled vs temporarily suspended — what’s the difference?
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Restrictions as an early enforcement signal
            </h2>
            <p className="mt-2">
              On many platforms, restrictions function as early-stage enforcement.
              They may lift automatically if no further issues occur, or escalate
              if risk signals persist.
            </p>
            <p className="mt-2">
              In this sense, restrictions often precede stronger actions such as
              suspensions or disablement.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons restrictions are applied
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Integrity or quality signals</li>
              <li>Spam or automation indicators</li>
              <li>Policy warnings without escalation</li>
              <li>Linked account risk signals</li>
            </ul>
            <p className="mt-2">
              If the restriction appears tied to broader account linkage, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/linked-accounts-disabled-together"
                className="hover:text-slate-900"
              >
                Multiple accounts linked or disabled together — why this happens
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Do restricted accounts get reviewed?
            </h2>
            <p className="mt-2">
              Some platforms allow review requests, but many restrictions are not
              individually reviewed and instead resolve automatically over time.
            </p>
            <p className="mt-2">
              For a general explanation of how review systems work, see{" "}
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
              Related platform-specific guides
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/instagram-account-suspended"
                  className="hover:text-slate-900"
                >
                  Instagram account suspended — what to do
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/x-account-locked-suspended-banned"
                  className="hover:text-slate-900"
                >
                  X account locked vs suspended vs banned — what’s the difference?
                </Link>
              </li>
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
              Important limitations
            </h2>
            <p className="mt-2">
              Restrictions do not imply wrongdoing, but they do indicate elevated
              monitoring. This guide does not imply that restrictions will always
              be lifted or that escalation cannot occur.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
