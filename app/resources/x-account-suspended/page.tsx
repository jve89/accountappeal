import Link from "next/link";

export default function XAccountSuspendedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          X (Twitter) account suspended — what actually happens and what to do next
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains, at a general level, how account suspensions on X
          (formerly Twitter) are typically handled, what suspension notices
          usually mean, and what realistic next steps look like. It is
          informational only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-8 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              How X account suspensions typically occur
            </h2>
            <p className="mt-2">
              X account suspensions are commonly triggered by automated detection
              systems, user reports, or a combination of both. Enforcement may
              occur suddenly and sometimes without prior warning.
            </p>
            <p className="mt-2">
              Initial notices often provide limited detail about the specific
              content or activity involved.
            </p>
            <p className="mt-2">
              X may also use related terms such as <em>temporarily limited</em> or
              <em>permanently suspended</em>, depending on enforcement context.
              These labels are not always clearly defined in user-facing notices.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Suspension vs other enforcement states
            </h2>
            <p className="mt-2">
              X uses several enforcement states, including temporary locks,
              suspensions, and permanent bans. These terms are not interchangeable
              and have different implications.
            </p>
            <p className="mt-2">
              If you are unsure which state applies, see:
            </p>
            <p className="mt-2">
              <Link
                href="/resources/x-account-locked-suspended-banned"
                className="hover:text-slate-900"
              >
                X account locked vs suspended vs banned — what’s the difference?
              </Link>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons cited in suspension notices
            </h2>
            <p className="mt-2">
              Suspension messages usually reference broad policy categories rather
              than specific posts or actions.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Spam or platform manipulation</li>
              <li>Abusive or hateful conduct</li>
              <li>Suspicious automation or coordinated behavior</li>
              <li>Violations related to safety or integrity policies</li>
            </ul>
            <p className="mt-2">
              Terminology may differ from older Twitter-era descriptions even
              when enforcement logic is similar.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What an appeal on X usually looks like
            </h2>
            <p className="mt-2">
              Appeals are typically submitted through X’s official appeal forms,
              either while logged into the affected account or via a linked email
              address.
            </p>
            <p className="mt-2">
              Initial responses are often automated and may not clearly indicate
              whether a human review will occur.
            </p>
            <p className="mt-2">
              For a broader explanation of how appeal processes typically work,
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
              Why some appeals receive no response
            </h2>
            <p className="mt-2">
              A lack of response does not necessarily mean an appeal was rejected
              on its merits.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>High appeal volume</li>
              <li>Automated triage systems</li>
              <li>Prior enforcement history</li>
              <li>Insufficient or inconsistent appeal context</li>
            </ul>
            <p className="mt-2">
              For a broader explanation of silent appeals, see{" "}
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
              What tends to help — and what does not
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Clear, factual explanations outperform emotional arguments</li>
              <li>Repeating identical appeals rarely changes outcomes</li>
              <li>Speculating about intent or algorithms is unproductive</li>
              <li>Threatening or accusatory language may reduce review likelihood</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations
            </h2>
            <p className="mt-2">
              This guide does not imply that a suspension can be reversed, that a
              particular appeal approach will succeed, or that X will provide
              detailed explanations in every case.
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
              X’s enforcement and review processes continue to evolve. Calm,
              structured communication and realistic expectations are generally
              more effective than repeated or reactive submissions.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
