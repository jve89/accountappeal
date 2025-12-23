import { OnboardingForm } from "@/components/onboarding/OnboardingForm";
import { getCheckoutEmail } from "@/lib/getCheckoutEmail";

export default async function StandardOnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

  const email = await getCheckoutEmail(sessionId);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-8">
      {/* Soft payment guardrail */}
      {sessionId ? (
        <div className="rounded-md border border-green-300 bg-green-50 p-4 text-sm text-green-800">
          <strong>Payment received.</strong>{" "}
          You can complete this onboarding now or later. We’ve also emailed you a
          link to return here anytime.
        </div>
      ) : (
        <div className="rounded-md border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
          If you have already completed payment, you can safely continue below.
          We’ve also emailed you a link to return to this page anytime.
        </div>
      )}

      <OnboardingForm tier="standard" prefillEmail={email} />
    </main>
  );
}
