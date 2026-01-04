import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function YouTubeChannelTerminatedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          YouTube channel terminated — strikes vs permanent termination
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains how YouTube distinguishes between strikes and full
          channel termination, what termination usually means in practice, and
          what review options may exist. It is informational only and does not
          guarantee reinstatement.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              Strikes vs channel termination
            </h2>
            <p className="mt-2">
              YouTube applies strikes for individual policy violations. Multiple
              strikes within a defined timeframe can escalate to channel
              termination, which removes access to the channel entirely.
            </p>
            <p className="mt-2">
              In some cases, channels may be terminated immediately if the
              violation is considered severe.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What happens when a channel is terminated
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Loss of access to the channel and uploaded content</li>
              <li>Removal of monetization and creator features</li>
              <li>Restrictions on creating new channels</li>
              <li>Potential impact on linked Google services</li>
            </ul>
            <p className="mt-2">
              Termination is generally treated as an end-state enforcement
              decision rather than a temporary restriction.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons cited by YouTube
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Repeated or severe Community Guidelines violations</li>
              <li>Copyright-related enforcement</li>
              <li>Spam, deceptive practices, or abuse</li>
              <li>Circumvention of enforcement systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Appeal options after termination
            </h2>
            <p className="mt-2">
              YouTube may provide a single appeal opportunity. Appeals are often
              reviewed under strict criteria and may result in automated or brief
              responses.
            </p>
            <p className="mt-2">
              For a broader explanation of how platform appeals are handled, see{" "}
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
              often limit manual review in termination cases.
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
              Related Google account enforcement
            </h2>
            <p className="mt-2">
              YouTube channel termination is handled within Google’s broader
              account enforcement framework. In some cases, additional Google
              services may also be affected.
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
            </ul>
            <p className="mt-2">
              Each service is reviewed independently, even when linked to the
              same Google account.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              Termination does not imply misconduct intent, but it does reflect
              YouTube’s enforcement conclusion. This guide does not imply that
              terminated channels can always be restored.
            </p>
            <p className="mt-2">
              Final decisions remain solely with YouTube and Google.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
