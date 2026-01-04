import Link from "next/link";
import { BackLink } from "@/components/resources/BackLink";

export default function HowAccountAppealsWorkPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          How account appeals actually work — timelines, limits, and misconceptions
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains how account appeal systems typically work across
          major platforms, what happens after submission, and why outcomes are
          often unclear or inconsistent. It is informational only and does not
          guarantee any result.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What platforms mean by an “appeal”
            </h2>
            <p className="mt-2">
              An appeal is a request for internal review of an enforcement
              decision. It does not imply a fresh investigation, negotiation, or
              policy reinterpretation.
            </p>
            <p className="mt-2">
              Most platforms treat appeals as validation checks against existing
              enforcement signals rather than open-ended reconsiderations.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              The typical appeal lifecycle
            </h2>
            <p className="mt-2">
              While implementations vary, most appeal systems follow a similar
              internal flow:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Submission of the appeal request</li>
              <li>Automated or semi-automated triage</li>
              <li>Validation against existing enforcement signals</li>
              <li>Outcome determination or silent closure</li>
            </ul>
            <p className="mt-2">
              Human review may occur at some stages, but it is not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What typically happens after submission
            </h2>
            <p className="mt-2">
              After submission, appeals usually enter automated or prioritized
              queues. Many are resolved without direct human interaction.
            </p>
            <p className="mt-2">
              Responses may be immediate, delayed, generic, or absent altogether.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why timelines vary so widely
            </h2>
            <p className="mt-2">
              Platforms do not process appeals on a simple first-come basis.
              Review timing depends on enforcement category, confidence level,
              account history, and internal prioritization.
            </p>
            <p className="mt-2">
              As a result, silence or long delays are structurally common and do
              not reliably indicate rejection or approval.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Why appeal responses are often vague
            </h2>
            <p className="mt-2">
              Platforms intentionally limit disclosure of internal detection
              logic. Messages therefore reference policy categories instead of
              specific triggers or evidence.
            </p>
            <p className="mt-2">
              The wording of a response does not reliably reflect how deeply an
              appeal was reviewed.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              When appeals receive no response
            </h2>
            <p className="mt-2">
              A lack of response does not automatically mean rejection. Common
              causes include automated triage, enforcement confidence thresholds,
              or internal queue deprioritization.
            </p>
            <p className="mt-2">See also:</p>
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
              Hard limits of appeal systems
            </h2>
            <p className="mt-2">
              Appeals are constrained by internal rules. In many cases:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Only a limited number of appeals are allowed</li>
              <li>Repeated submissions do not reset enforcement logic</li>
              <li>High-confidence enforcement is rarely overturned</li>
              <li>Some decisions are treated as final by design</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Repeat appeals and follow-ups
            </h2>
            <p className="mt-2">
              Submitting multiple appeals rarely changes outcomes and may result
              in submissions being ignored or merged internally.
            </p>
            <p className="mt-2">For follow-up considerations, see:</p>
            <p className="mt-2">
              <Link
                href="/resources/is-it-worth-appealing-again"
                className="hover:text-slate-900"
              >
                Is it worth appealing again? — when follow-ups help and when they don’t
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Platform-specific appeal behavior
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link href="/resources/instagram-appeal-ignored" className="hover:text-slate-900">
                  Instagram appeal ignored — what it actually means
                </Link>
              </li>
              <li>
                <Link href="/resources/x-account-suspended" className="hover:text-slate-900">
                  X (Twitter) account suspended — what actually happens and what to do next
                </Link>
              </li>
              <li>
                <Link href="/resources/google-account-suspended" className="hover:text-slate-900">
                  Google account suspended — Ads, YouTube, or login access
                </Link>
              </li>
              <li>
                <Link href="/resources/facebook-account-disabled" className="hover:text-slate-900">
                  Facebook account disabled — next steps
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              Appeals do not guarantee reinstatement, detailed explanations, or
              human review. Final decisions remain solely with the platform.
            </p>
          </section>
          <BackLink href="/resources" label="Back to all guides" />
        </div>
      </div>
    </section>
  );
}
