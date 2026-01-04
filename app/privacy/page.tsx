import { BackLink } from "@/components/resources/BackLink";

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This Privacy Policy explains how personal information is handled when
          using AccountAppeal.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              1. Information Collected
            </h2>
            <p className="mt-2">
              AccountAppeal collects only the information necessary to provide
              the service. This may include name, email address, account-related
              information provided voluntarily, materials submitted during
              onboarding, and procedural confirmations related to service scope
              and acknowledgment of terms.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              2. Use of Information
            </h2>
            <p className="mt-2">
              Personal information is used solely to deliver the requested
              service, communicate with clients, and prepare documents based on
              the information provided.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              3. Data Sharing
            </h2>
            <p className="mt-2">
              Personal data is not sold or shared with third parties for
              marketing purposes.
            </p>
            <p className="mt-2">
              Payment information is handled by third-party payment providers
              and is not stored directly by AccountAppeal.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              4. Data Retention
            </h2>
            <p className="mt-2">
              Information is retained only as long as necessary to provide the
              service, maintain internal records related to service delivery and
              acknowledgements, or meet legal and operational requirements.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              5. Data Security
            </h2>
            <p className="mt-2">
              Reasonable measures are taken to protect personal information
              against unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              6. Client Rights
            </h2>
            <p className="mt-2">
              Clients may request access to, correction of, or deletion of
              personal information, subject to applicable laws and operational
              requirements.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              7. Policy Changes
            </h2>
            <p className="mt-2">
              This Privacy Policy applies as published at the time of use.
              Updates may be made to reflect changes in the service or legal
              requirements.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">8. Contact</h2>
            <p className="mt-2">
              Contact information is available on the website for privacy-related
              questions.
            </p>
          </section>
          <BackLink href="/" label="Back to home" />
        </div>
      </div>
    </section>
  );
}
