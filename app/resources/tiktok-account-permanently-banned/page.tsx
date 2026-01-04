import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function TikTokAccountPermanentlyBannedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          TikTok account permanently banned — what it means and what options remain
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains, at a general level, what a permanent TikTok account
          ban usually means, how TikTok communicates such decisions, and what
          realistic options may remain afterward. It is informational only and
          does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What TikTok means by a “permanent ban”
            </h2>
            <p className="mt-2">
              A permanent ban indicates that TikTok has restricted access to an
              account without an automatic restoration period. In many cases,
              login access is removed and associated content becomes unavailable.
            </p>
            <p className="mt-2">
              TikTok may also use related wording such as <em>permanently
              suspended</em>. These labels reflect enforcement classification,
              not necessarily the absence of any internal review mechanism.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons cited for permanent bans
            </h2>
            <p className="mt-2">
              TikTok typically references broad policy categories rather than
              specific incidents.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Repeated or severe community guideline violations</li>
              <li>Content involving safety or integrity concerns</li>
              <li>Spam, manipulation, or coordinated behavior</li>
              <li>Suspected misuse of automation or third-party tools</li>
              <li>Account activity linked to prior enforcement</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How TikTok usually communicates a permanent ban
            </h2>
            <p className="mt-2">
              Notifications may appear in-app, by email, or upon login attempt.
              These notices often provide limited detail and may reference
              internal policy sections without quoting specific content.
            </p>
            <p className="mt-2">
              In some cases, the account becomes inaccessible before a detailed
              explanation is received.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Are appeals still possible after a permanent ban?
            </h2>
            <p className="mt-2">
              TikTok may still provide an appeal or feedback option, depending on
              region, account type, and enforcement context.
            </p>
            <p className="mt-2">
              Appeals submitted after a permanent ban are often reviewed under
              stricter criteria and may receive automated responses or no
              response at all.
            </p>
            <p className="mt-2">
              For a general explanation of how appeal systems usually work
              across platforms, see{" "}
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
              Why many appeals do not result in reinstatement
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>High confidence enforcement signals</li>
              <li>Prior warnings or temporary restrictions</li>
              <li>Automated moderation decisions</li>
              <li>Limited context provided in the appeal</li>
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
              What typically does and does not help
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Clear, factual explanations are more effective than emotional arguments</li>
              <li>Repeating the same appeal text rarely changes outcomes</li>
              <li>Speculating about algorithms or intent is usually unproductive</li>
              <li>Threatening or accusatory language can reduce the chance of review</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Related platform enforcement
            </h2>
            <p className="mt-2">
              Permanent bans on TikTok are conceptually similar to other
              high-confidence enforcement actions, such as:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link
                  href="/resources/youtube-channel-terminated"
                  className="hover:text-slate-900"
                >
                  YouTube channel terminated — strikes vs permanent termination
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What this guide does not promise
            </h2>
            <p className="mt-2">
              This guide does not imply that permanent bans can be reversed, that
              a specific appeal approach will succeed, or that TikTok will
              provide detailed explanations in every case.
            </p>
            <p className="mt-2">
              Final decisions remain solely with the platform.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Final note
            </h2>
            <p className="mt-2">
              TikTok’s enforcement systems and review processes evolve
              continuously. Calm, structured communication and realistic
              expectations are generally more productive than repeated or
              reactive submissions.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
