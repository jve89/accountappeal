import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function FacebookBusinessManagerRestrictedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Facebook Business Manager restricted — what it means and what to expect
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains, at a general level, what it usually means when a
          Facebook Business Manager is restricted, how Meta communicates these
          decisions, and what review or appeal options may exist. It is
          informational only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What a Business Manager restriction means
            </h2>
            <p className="mt-2">
              A Business Manager restriction limits access to certain features,
              assets, or permissions within a Meta business account. This may
              affect ad accounts, Pages, Instagram profiles, or user roles
              associated with the Business Manager.
            </p>
            <p className="mt-2">
              Restrictions can be partial or broad, depending on Meta’s
              enforcement assessment and linked asset history.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common signs of a restricted Business Manager
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Inability to create or run ads</li>
              <li>Loss of access to ad accounts or Pages</li>
              <li>Disabled payment or billing functionality</li>
              <li>Removed or limited admin permissions</li>
              <li>Warnings shown in Business Settings or Account Quality</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Typical reasons cited by Meta
            </h2>
            <p className="mt-2">
              Meta usually references policy categories rather than specific
              actions. Common reasons include:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Advertising policy violations</li>
              <li>Payment, billing, or identity verification issues</li>
              <li>Suspicious or unusual account activity</li>
              <li>Repeated enforcement across connected assets</li>
              <li>Concerns related to business authenticity or compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How Meta communicates Business Manager restrictions
            </h2>
            <p className="mt-2">
              Notices typically appear in Business Settings, Account Quality, or
              by email. Messages often provide limited detail and may reference
              internal policies without specifying exact violations.
            </p>
            <p className="mt-2">
              In some cases, access is restricted before a clear explanation is
              visible.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Review and appeal options
            </h2>
            <p className="mt-2">
              Meta may provide a review or appeal option depending on the type of
              restriction and the business account’s history. Reviews are often
              limited in number and handled through standardized forms.
            </p>
            <p className="mt-2">
              For a general explanation of how platform appeals are structured,
              see{" "}
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
              When reviews receive no response
            </h2>
            <p className="mt-2">
              A lack of response does not necessarily mean the review was rejected
              on its merits. Automated triage, enforcement confidence, or prior
              violations can affect whether a manual review occurs.
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
              Related Meta account restrictions
            </h2>
            <p className="mt-2">
              A restricted Business Manager is often part of a wider enforcement
              context. In some cases, related restrictions may also affect:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/facebook-account-disabled"
                  className="hover:text-slate-900"
                >
                  Facebook account disabled — next steps
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/facebook-ads-account-disabled"
                  className="hover:text-slate-900"
                >
                  Facebook Ads account disabled — what it means and what to expect
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
            </ul>
            <p className="mt-2">
              Each restriction is reviewed separately, even when they appear
              connected from the user’s perspective.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Cross-platform comparison
            </h2>
            <p className="mt-2">
              Asset-based enforcement on Meta is comparable to certain Google Ads
              actions involving linked entities and repeated violations. For a
              parallel example, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/google-ads-circumventing-systems"
                className="hover:text-slate-900"
              >
                Google Ads account suspended for “circumventing systems”
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that restricted Business Managers can
              always be restored, that a particular review approach will
              succeed, or that Meta will provide detailed reasoning in every
              case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with Meta.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Final note
            </h2>
            <p className="mt-2">
              Business Manager enforcement is often cumulative and asset-based.
              Calm, structured communication and realistic expectations are
              generally more effective than repeated or reactive submissions.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
