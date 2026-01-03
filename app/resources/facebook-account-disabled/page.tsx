export default function FacebookAccountDisabledPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Facebook account disabled — next steps
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This guide explains what it usually means when a Facebook account is
          disabled, what options may be available to the account holder, and
          what to expect after submitting an appeal or review request. It is
          informational only and does not guarantee any outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              What does “account disabled” mean on Facebook
            </h2>
            <p className="mt-2">
              Facebook uses the term <em>disabled</em> to indicate that access to
              an account has been restricted due to a suspected violation of its
              policies or integrity checks. In some cases, users may also see
              related terms such as <em>suspended</em> or <em>restricted</em>.
            </p>
            <p className="mt-2">
              A disabled account may be temporary or permanent. The platform does
              not always clearly state which applies at the time enforcement is
              applied.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Common reasons Facebook disables accounts
            </h2>
            <p className="mt-2">
              Facebook does not always provide a detailed explanation. Commonly
              cited reasons include:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Suspected violations of community standards or content rules</li>
              <li>Account activity flagged as inauthentic or automated</li>
              <li>Identity verification issues</li>
              <li>Reports or enforcement related to linked accounts</li>
            </ul>
            <p className="mt-2">
              Enforcement actions may be initiated or reviewed automatically,
              particularly in early stages.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What options are usually available after a disablement
            </h2>
            <p className="mt-2">
              If permitted, Facebook may present an option to request a review
              through an on-screen prompt or an official help form. Users often
              refer to this process as an appeal, even when Facebook labels it as
              a review request.
            </p>
            <p className="mt-2">
              The availability of a review option depends on factors such as the
              account type, prior enforcement history, and the reason cited for
              the disablement.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              What happens after a review or appeal is submitted
            </h2>
            <p className="mt-2">
              After submission, the account may remain inaccessible while the
              review is pending. Response times vary and are not guaranteed.
            </p>
            <p className="mt-2">
              Some requests receive automated responses, while others receive no
              visible reply. A lack of response does not necessarily indicate a
              final decision.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              Important limitations to understand
            </h2>
            <p className="mt-2">
              Facebook makes final enforcement decisions internally. External
              services cannot influence or override platform outcomes.
            </p>
            <p className="mt-2">
              Providing speculative, inconsistent, or inaccurate information
              during a review may negatively affect the process. Submissions
              should be factual and limited to relevant details.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              When structured assistance may be appropriate
            </h2>
            <p className="mt-2">
              Some account holders choose to seek assistance with organizing
              timelines, clarifying enforcement context, or ensuring consistency
              across submissions. This does not change platform rules or
              outcomes, but may help reduce avoidable errors.
            </p>
            <p className="mt-2">
              All review or appeal submissions remain the responsibility of the
              account holder and must be made through official Facebook channels.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
