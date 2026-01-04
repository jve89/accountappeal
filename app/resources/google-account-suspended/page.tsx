import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function GoogleAccountSuspendedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Google account suspended — Ads, YouTube, or login access
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains, at a general level, how Google account suspensions
          work, how they affect services such as Google Ads and YouTube, and what
          realistic review or appeal options may exist. It is informational only
          and does not guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What a Google account suspension usually means
            </h2>
            <p className="mt-2">
              A Google account suspension can affect one or more services linked
              to the same Google identity. Depending on the enforcement context,
              access may be restricted to specific products (such as Ads or
              YouTube) or to the entire account login.
            </p>
            <p className="mt-2">
              Because Google services are interconnected, a suspension in one
              area may impact others.
            </p>
            <p className="mt-2">
              Google may also use related terms such as <em>disabled</em>,
              <em>restricted</em>, or <em>terminated</em>, depending on the
              service and enforcement confidence. These labels are not always
              used consistently across products.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common types of Google-related suspensions
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Google Ads account suspension</li>
              <li>YouTube channel termination or restriction</li>
              <li>Google account login suspension</li>
              <li>Payment or billing-related restrictions</li>
              <li>Policy enforcement across linked accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Typical reasons cited by Google
            </h2>
            <p className="mt-2">
              Google usually references policy categories rather than specific
              actions. Commonly cited reasons include:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Policy violations related to content, advertising, or behavior</li>
              <li>Misrepresentation or misleading practices</li>
              <li>Abusive, unsafe, or prohibited content</li>
              <li>Circumvention of systems or repeated violations</li>
              <li>Billing, payment, or identity concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How Google communicates suspensions
            </h2>
            <p className="mt-2">
              Notices are typically sent by email and may also appear within the
              relevant service dashboard. Messages often reference policy names
              or sections without providing granular details.
            </p>
            <p className="mt-2">
              In some cases, access is restricted before a clear explanation is
              received.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Appeal and review options
            </h2>
            <p className="mt-2">
              Google usually provides a formal appeal or review form for certain
              types of suspensions. These forms are service-specific and may
              require precise factual information.
            </p>
            <p className="mt-2">
              Appeals are often reviewed under strict criteria and may result in
              automated or standardized responses.
            </p>
            <p className="mt-2">
              For a broader explanation of how these reviews typically work, see{" "}
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
              Related Google enforcement actions
            </h2>
            <p className="mt-2">
              Depending on the affected service, you may be dealing with a more
              specific type of Google enforcement:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
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
                  href="/resources/youtube-channel-terminated"
                  className="hover:text-slate-900"
                >
                  YouTube channel terminated — strikes vs permanent termination
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/google-account-disabled"
                  className="hover:text-slate-900"
                >
                  Google account disabled — policy or security reasons
                </Link>
              </li>
            </ul>
            <p className="mt-2">
              Each enforcement type has its own review process, even though they
              may share the same underlying Google account.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why many Google appeals are unsuccessful
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>High-confidence automated enforcement signals</li>
              <li>Prior warnings or enforcement history</li>
              <li>Insufficient or inconsistent appeal information</li>
              <li>Attempts to bypass or minimize policy concerns</li>
            </ul>
            <p className="mt-2">
              If you submitted an appeal and received no response, see{" "}
              <Link
                href="/resources/appeal-submitted-no-response"
                className="underline hover:text-slate-900"
              >
                what that usually means
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What typically helps — and what does not
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Clear, factual explanations over arguments</li>
              <li>Acknowledging policy context rather than disputing intent</li>
              <li>Consistency across submissions</li>
              <li>Realistic expectations about review outcomes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that suspended Google accounts can always
              be restored, that a specific appeal approach will succeed, or that
              Google will provide detailed reasoning in every case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with Google.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
