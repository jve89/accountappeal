import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function InstagramCommunityGuidelinesDisabledPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Instagram disabled for “community guidelines” — what that actually means
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains how Instagram typically uses the term “community
          guidelines” in account disablement notices, what this wording usually
          implies, and what appeal options may exist. It is informational only
          and does not guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What this message usually means
            </h2>
            <p className="mt-2">
              “Community guidelines” is a broad enforcement label. Instagram
              commonly uses it when internal systems classify content or account
              behavior under one or more policy categories.
            </p>
            <p className="mt-2">
              In most cases, this wording indicates a **disablement**, not a
              temporary limitation.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Disabled vs suspended accounts
            </h2>
            <p className="mt-2">
              Instagram uses several enforcement terms that are often confused.
              A community guidelines disablement is typically more severe than a
              temporary suspension.
            </p>
            <p className="mt-2">
              For a broader explanation, see{" "}
              <Link
                href="/resources/permanently-disabled-vs-temporarily-suspended"
                className="underline hover:text-slate-900"
              >
                the difference between permanently disabled and temporarily
                suspended accounts
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common categories involved
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Repeated content removals</li>
              <li>Integrity or authenticity concerns</li>
              <li>Spam or automated behavior signals</li>
              <li>Policy enforcement linked to connected accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why explanations are often vague
            </h2>
            <p className="mt-2">
              Instagram does not disclose internal detection logic or precise
              enforcement triggers. As a result, disablement notices often
              reference policy categories without identifying specific content.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Appeal options and limitations
            </h2>
            <p className="mt-2">
              Some accounts are offered a review or appeal option, usually
              through the app or an official Meta form. Reviews are evaluated
              under strict criteria and may be automated.
            </p>
            <p className="mt-2">
              For a general overview of how appeals are handled across platforms,
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
              When appeals receive no response
            </h2>
            <p className="mt-2">
              A lack of response does not necessarily indicate that an appeal was
              ignored. Automated triage and high-confidence enforcement signals
              often limit manual review in disablement cases.
            </p>
            <p className="mt-2">
              See{" "}
              <Link
                href="/resources/instagram-appeal-ignored"
                className="underline hover:text-slate-900"
              >
                what it usually means when an Instagram appeal is ignored
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related Instagram enforcement
            </h2>
            <p className="mt-2">
              If you are unsure whether your account was disabled or temporarily
              restricted, see{" "}
              <Link
                href="/resources/instagram-account-suspended"
                className="underline hover:text-slate-900"
              >
                Instagram account suspended — what to do
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that disabled accounts will be restored,
              that a specific appeal approach will succeed, or that Instagram
              will provide detailed explanations in every case.
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
