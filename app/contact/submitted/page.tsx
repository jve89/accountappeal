import Link from "next/link";

export default function ContactSubmittedPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-xl">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Message sent
          </h1>

          <p className="mt-4 text-slate-600">
            Thank you for reaching out. We’ve received your message and will review it
            shortly.
          </p>

          <p className="mt-3 text-slate-600">
            If additional clarification is needed, we’ll contact you using the email
            address you provided.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Typical response time is within 48 hours.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
