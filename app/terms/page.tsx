import { BackLink } from "@/components/resources/BackLink";

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          These Terms of Service describe how AccountAppeal operates and the
          conditions under which the service is provided.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">1. Scope of the Service</h2>
            <p className="mt-2">
              AccountAppeal provides document preparation and procedural guidance
              for individuals and businesses whose online platform accounts have
              been restricted or suspended.
            </p>
            <p className="mt-2">
              Depending on the package selected, the service may include appeal
              documents, follow-up appeal documents, evidence checklists, account
              summaries, optional formal complaint documents for applicable
              review bodies, and guidance on how and when to submit these
              materials.
            </p>
            <p className="mt-2">
              AccountAppeal does not submit appeals, complaints, or documents on
              behalf of clients.
            </p>
            <p className="mt-2">
              Use of the service, including submission of onboarding information,
              is conditional upon the client’s acknowledgment and acceptance of
              these Terms and the stated scope and limitations of the service.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">2. No Guarantees</h2>
            <p className="mt-2">
              AccountAppeal does not guarantee account reinstatement, platform
              responses, review timelines, or any specific outcome.
            </p>
            <p className="mt-2">
              All final decisions are made solely by the relevant platform or
              authority. The service is limited to helping clients present their
              situation clearly, factually, and consistently.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">3. Client Responsibilities</h2>
            <p className="mt-2">
              Clients are responsible for providing accurate, truthful, and
              complete information, and for submitting all appeals, follow-ups,
              or complaints themselves through official channels.
            </p>
            <p className="mt-2">
              AccountAppeal relies entirely on information supplied by the
              client and does not independently verify platform records or
              account history.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">4. Guidance Limits</h2>
            <p className="mt-2">
              Guidance is limited according to the package purchased:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Standard:</strong> Up to 30 days of active guidance or up
                to two guided submission cycles, whichever comes first.
              </li>
              <li>
                <strong>Premium:</strong> Up to 90 days of active guidance or up
                to three guided submission cycles, whichever comes first.
              </li>
            </ul>
            <p className="mt-2">
              Active guidance refers to review, clarification, and preparation
              related to submissions. Periods of platform inactivity or silence
              do not extend guidance limits.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              5. No Legal or Platform Representation
            </h2>
            <p className="mt-2">
              AccountAppeal does not provide legal advice, legal representation,
              regulatory representation, direct contact with platforms, inside
              access, shortcuts, or workarounds.
            </p>
            <p className="mt-2">
              Nothing provided by AccountAppeal should be interpreted as legal
              advice.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">6. Payment and Delivery</h2>
            <p className="mt-2">
              Fees are charged upfront based on the selected package. Delivery
              timelines apply only to the preparation of documents and guidance,
              not to platform response times.
            </p>
            <p className="mt-2">
              Due to the nature of the service, refunds are generally not
              available once work has commenced.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              7. Limitation of Liability
            </h2>
            <p className="mt-2">
              AccountAppeal is not liable for platform decisions, enforcement
              actions, delays, non-responses, or any resulting loss of access,
              revenue, or data.
            </p>
            <p className="mt-2">
              Any liability, if applicable, is limited to the amount paid for
              the service.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">8. Modifications</h2>
            <p className="mt-2">
              These Terms apply as published at the time of purchase. Updates
              may be made to reflect changes in the service.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">9. Contact</h2>
            <p className="mt-2">
              Contact information is available on the website for questions
              regarding these Terms.
            </p>
          </section>
          <BackLink href="/" label="Back to home" />
        </div>
      </div>
    </section>
  );
}
