export default function CompanyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Company Information
        </h1>

        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This page provides legal and company information about the entity
          operating AccountAppeal.
        </p>

        <div className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 space-y-6 text-sm text-slate-600">
          <section>
            <h2 className="font-medium text-slate-900">
              1. Legal Entity
            </h2>
            <p className="mt-2">
              AccountAppeal is operated by <strong>AIF OÜ</strong>
              (Assets Investment Firm), a private limited company registered in
              Estonia.
            </p>
          </section>

            <section>
            <h2 className="font-medium text-slate-900">
                2. Registration Details
            </h2>

            <p className="mt-2">
                Registry code: <strong>16654436</strong>
            </p>

            <p className="mt-2">
                Public registry record:{" "}
                <a
                href="https://ariregister.rik.ee/eng/company/16654436"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                >
                Estonian Business Register
                </a>
            </p>

            <p className="mt-2">
                Date of registration: 16 January 2023
            </p>

            <p className="mt-2">
                VAT number: EE102744992
            </p>
            </section>

          <section>
            <h2 className="font-medium text-slate-900">
              3. Registered Address
            </h2>
            <p className="mt-2">
              Tehnika 27-5, 10149 Tallinn, Estonia
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              4. Contact
            </h2>
            <p className="mt-2">
              For service-related or legal inquiries, you may contact us at:
            </p>
            <p className="mt-2">
              <strong>support@accountappeal.net</strong>
            </p>
          </section>

          <section>
            <h2 className="font-medium text-slate-900">
              5. Service Scope Disclaimer
            </h2>
            <p className="mt-2">
              AccountAppeal provides document preparation and procedural guidance
              only. We do not submit appeals on behalf of clients, do not have
              privileged access to any platform, and do not guarantee outcomes.
            </p>
            <p className="mt-2">
              AccountAppeal is not affiliated with Meta, Google, X, or any social
              media platform.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
