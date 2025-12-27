export default function ProcessPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          How We Structure an Appeal
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This page explains, at a high level, how AccountAppeal structures appeal
          documents and guidance. It is provided for transparency only and does
          not represent a template, promise, or guarantee of outcome.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              1. Purpose of This Information
            </h2>
            <p className="mt-2">
              This description is intended to clarify the general approach used
              when preparing appeal-related materials. It is not a set of
              instructions for self-use, and it does not replace platform rules
              or official appeal procedures.
            </p>
            <p className="mt-2">
              Each case differs based on platform, enforcement context, available
              information, and jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              2. General Structuring Principles
            </h2>
            <p className="mt-2">
              When preparing appeal documents, the focus is on clarity,
              consistency, and factual accuracy. Typical elements may include:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Clear identification of the affected account</li>
              <li>A factual, time-ordered summary of relevant events</li>
              <li>
                A neutral description of the restriction or enforcement action
                as stated by the platform
              </li>
              <li>
                Consistency checks against prior submissions, if any exist
              </li>
              <li>
                A bounded request for review or clarification, without
                speculation or accusation
              </li>
            </ul>
            <p className="mt-2">
              Not all elements are present in every case. Content is adjusted
              based on what information is available and appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              3. Evidence Handling
            </h2>
            <p className="mt-2">
              Where evidence is available, it is referenced conservatively and
              only when relevant to the stated enforcement action.
            </p>
            <p className="mt-2">
              Missing or incomplete evidence is common and does not automatically
              prevent an appeal from being prepared. No fabricated, altered, or
              misleading material is used.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              4. Explicit Limits
            </h2>
            <p className="mt-2">
              AccountAppeal does not provide templates, scripts, or downloadable
              documents for general use. All materials are prepared individually
              based on the specific information supplied by the client.
            </p>
            <p className="mt-2">
              This page does not describe escalation strategies, legal arguments,
              or regulatory procedures, which may vary significantly depending
              on jurisdiction and case context.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              5. Submission Responsibility
            </h2>
            <p className="mt-2">
              All appeals, follow-ups, or complaints are submitted by the account
              holder through official platform channels.
            </p>
            <p className="mt-2">
              AccountAppeal does not submit materials on behalf of clients and
              does not influence platform decision-making.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              6. No Outcomes or Guarantees
            </h2>
            <p className="mt-2">
              The structure described here does not imply any likelihood of
              account reinstatement, response, or review outcome.
            </p>
            <p className="mt-2">
              Final decisions are made solely by the relevant platform or
              authority.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
