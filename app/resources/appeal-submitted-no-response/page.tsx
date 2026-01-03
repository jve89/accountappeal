import Link from "next/link";

export default function AppealNoResponsePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Appeal submitted but no response — what that usually means
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains why appeals often receive no visible response,
          how major platforms typically process review requests, what silence
          usually does (and does not) indicate, and how to think about next
          steps realistically. It is informational only and does not guarantee
          any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              Why a lack of response is common
            </h2>
            <p className="mt-2">
              Most large platforms process appeals through automated or
              semi-automated systems designed for scale rather than individual
              communication.
            </p>
            <p className="mt-2">
              As a result, many appeals do not trigger confirmation messages,
              status updates, or explicit decisions — even when they are
              technically received and evaluated.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Typical reasons an appeal receives no visible reply
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>High appeal volume relative to review capacity</li>
              <li>Automated review pipelines without outbound messaging</li>
              <li>Enforcement classified internally as final</li>
              <li>Appeal content lacking required signals or consistency</li>
              <li>Prior enforcement history limiting further review</li>
            </ul>
            <p className="mt-2">
              Platforms rarely disclose which of these applies in an individual
              case.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What silence usually does — and does not — mean
            </h2>
            <p className="mt-2">
              A lack of response does <em>not</em> automatically mean:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>The appeal was ignored or lost</li>
              <li>The appeal was approved</li>
              <li>The appeal was explicitly rejected</li>
            </ul>
            <p className="mt-2">
              In many systems, silence simply indicates that the enforcement
              state has not changed.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Timelines — what waiting actually tells you
            </h2>
            <p className="mt-2">
              Appeal timelines vary widely by platform, account type, and
              enforcement category. Observed patterns show that:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Some appeals resolve within days</li>
              <li>Others remain silent for weeks</li>
              <li>Some never generate a visible response at all</li>
            </ul>
            <p className="mt-2">
              Time passing, by itself, is not a reliable signal of review depth,
              outcome, or approval likelihood.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What to avoid while waiting
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Submitting multiple identical appeals in quick succession</li>
              <li>Contradicting earlier explanations or timelines</li>
              <li>Speculating about internal platform intent or algorithms</li>
              <li>Using emotional, threatening, or accusatory language</li>
            </ul>
            <p className="mt-2">
              Repetition without new information rarely improves outcomes and
              can reduce internal review clarity.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What may be reasonable to prepare during silence
            </h2>
            <p className="mt-2">
              While waiting, some account holders focus on organizing:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>A clear, factual timeline of account activity</li>
              <li>Consistency across prior submissions</li>
              <li>Relevant documentation or verification materials</li>
            </ul>
            <p className="mt-2">
              This preparation does not influence platform rules, but it can
              help avoid errors if a follow-up becomes possible.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              How this fits into the appeal system overall
            </h2>
            <p className="mt-2">
              Silence is a common outcome within modern appeal systems and is
              best understood as part of how platforms manage review at scale.
            </p>
            <p className="mt-2">
              For a broader explanation of appeal mechanics, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/how-account-appeals-work"
                className="hover:text-slate-900"
              >
                How account appeals actually work — timelines, limits, and misconceptions
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Platform-specific patterns
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link href="/resources/instagram-account-suspended" className="hover:text-slate-900">
                  Instagram account suspensions
                </Link>
              </li>
              <li>
                <Link href="/resources/facebook-account-disabled" className="hover:text-slate-900">
                  Facebook account disablements
                </Link>
              </li>
              <li>
                <Link href="/resources/google-account-suspended" className="hover:text-slate-900">
                  Google account and Ads suspensions
                </Link>
              </li>
              <li>
                <Link href="/resources/x-account-suspended" className="hover:text-slate-900">
                  X (Twitter) enforcement actions
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that unanswered appeals will eventually
              receive a response, that follow-ups will be accepted, or that
              outcomes can be influenced externally.
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
