import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function FacebookAdsAccountDisabledPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Facebook Ads account disabled — what it means and what to expect
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what it usually means when a Facebook Ads account is
          disabled, how Meta communicates these decisions, and what review options
          may exist. It is informational only and does not guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What an Ads account disablement means
            </h2>
            <p className="mt-2">
              A disabled Ads account cannot create or run advertisements. This
              restriction may apply to a single ad account or occur alongside
              broader limitations affecting a Business Manager or personal
              Facebook account.
            </p>
            <p className="mt-2">
              Ads account enforcement is often influenced by signals outside the
              ad account itself, including billing, identity, or linked asset
              activity.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons cited by Meta
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Advertising policy violations</li>
              <li>Payment or billing issues</li>
              <li>Identity or business verification concerns</li>
              <li>Repeated enforcement across linked assets</li>
            </ul>
            <p className="mt-2">
              In many cases, Ads account enforcement reflects broader risk
              assessments rather than a single rejected ad.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Review options
            </h2>
            <p className="mt-2">
              Meta may provide a review option depending on enforcement history
              and account context. Reviews are typically submitted through
              standardized forms and may result in automated or brief responses.
            </p>
            <p className="mt-2">
              For a general overview of how appeal systems usually work across
              platforms, see{" "}
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
              A lack of response does not necessarily mean a review was rejected
              on its merits. High volume, automated triage, or prior enforcement
              history can affect visibility and timing.
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
              A disabled Ads account is frequently part of a wider enforcement
              context. You may also encounter related restrictions involving:
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
                  href="/resources/facebook-business-manager-restricted"
                  className="hover:text-slate-900"
                >
                  Facebook Business Manager restricted — what it means and what to expect
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
              Each enforcement action is reviewed separately, even when they
              appear connected from the user’s perspective.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Cross-platform comparison
            </h2>
            <p className="mt-2">
              Ads enforcement on Meta is conceptually similar to certain Google
              Ads actions, especially in cases involving repeated violations or
              linked entities. For comparison, see:
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
              This guide does not imply that disabled Ads accounts can always be
              restored, that a particular review approach will succeed, or that
              Meta will provide detailed reasoning in every case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with Meta.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
