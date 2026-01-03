import Link from "next/link";

export default function GoogleAccountDisabledPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Google account disabled — policy or security reasons
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what it usually means when a Google account is
          disabled, how Google distinguishes between policy enforcement and
          security-related lockouts, and what review or recovery options may
          exist. It is informational only and does not guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What Google means by “account disabled”
            </h2>
            <p className="mt-2">
              A disabled Google account usually loses login access entirely.
              This enforcement applies at the <em>identity level</em>, not just
              to a single service.
            </p>
            <p className="mt-2">
              As a result, multiple services may be affected simultaneously,
              including Gmail, Google Drive, YouTube, Google Ads, and account
              login itself.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Policy enforcement vs security-related disablement
            </h2>
            <p className="mt-2">
              Google uses account disablement for two broad categories that are
              often grouped together in user-facing messages:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Policy enforcement</strong> — abuse, repeated violations,
                circumvention signals, or trust-related concerns
              </li>
              <li>
                <strong>Security-related action</strong> — suspected compromise,
                automated activity, or high-risk access patterns
              </li>
            </ul>
            <p className="mt-2">
              Google rarely states which category applies in a specific case,
              and the same generic wording may be used for both.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How this differs from a suspension
            </h2>
            <p className="mt-2">
              A disabled account typically removes all login access, while a
              suspension often affects only specific services or features.
            </p>
            <p className="mt-2">
              For a clearer comparison, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/account-disabled-vs-suspended"
                className="hover:text-slate-900"
              >
                Account permanently disabled vs temporarily suspended — what’s the difference?
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common signals associated with disablement
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Unusual or automated activity patterns</li>
              <li>Repeated or escalated policy enforcement</li>
              <li>Account linkage to previously disabled accounts</li>
              <li>Security or integrity risk signals</li>
            </ul>
            <p className="mt-2">
              These signals are often evaluated in combination rather than as
              isolated events.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Appeal and recovery options
            </h2>
            <p className="mt-2">
              Google may offer a recovery or appeal form depending on the
              disablement context. These processes are typically automated and
              evaluated under strict internal criteria.
            </p>
            <p className="mt-2">
              Multiple identical submissions rarely accelerate review and may
              result in generic or no responses.
            </p>
            <p className="mt-2">
              If an appeal was submitted but no response was received, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/appeal-submitted-no-response"
                className="hover:text-slate-900"
              >
                Appeal submitted but no response — what that usually means
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related Google enforcement actions
            </h2>
            <p className="mt-2">
              Account disablement may occur alongside or instead of
              service-specific restrictions:
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
                  href="/resources/suspicious-activity-suspension"
                  className="hover:text-slate-900"
                >
                  Account suspended due to suspicious activity — what it usually means
                </Link>
              </li>
            </ul>
            <p className="mt-2">
              Each enforcement path follows its own internal logic, even when
              tied to the same Google identity.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What users can realistically infer
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Disablement usually signals higher enforcement confidence</li>
              <li>Security-related cases may behave differently than policy cases</li>
              <li>Silence or generic replies are common</li>
              <li>Recovery is possible in some cases, but never guaranteed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that disabled Google accounts can always
              be restored, that a particular recovery approach will succeed, or
              that Google will provide detailed reasoning in every case.
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
