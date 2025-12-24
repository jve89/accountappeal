import Link from "next/link";

export default function BasicOnboardingSubmittedPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-lg border border-slate-200 bg-white p-8 space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Onboarding submitted
        </h1>

        <p className="text-slate-600">
          Thank you. We’ve received your onboarding information and will review it
          carefully.
        </p>

        <p className="text-slate-600">
          We’ll review your onboarding information and contact you by email with the next steps before we proceed.
        </p>

        <p className="text-slate-600">
          If anything is missing or unclear, we’ll go through it together in the next step. There’s no need to resubmit the onboarding form unless we specifically ask you to.
        </p>

        <p className="pt-2 text-sm text-slate-500">
          Typical response time is within 48 hours. Platform response times and final
          outcomes are outside anyone’s control. Our role is to present your situation
          clearly, factually, and consistently.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
