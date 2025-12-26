import { OnboardingForm } from "@/components/onboarding/OnboardingForm";
import { getCheckoutEmail } from "@/lib/getCheckoutEmail";
import { sendPaymentConfirmation } from "@/app/actions/paymentConfirmation";

export default async function BasicOnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

let email: string | null = null;

if (sessionId) {
  try {
    await sendPaymentConfirmation(sessionId);
    email = await getCheckoutEmail(sessionId);
  } catch (err) {
    // Do not block onboarding if payment confirmation fails
    console.error("Payment confirmation failed:", err);
  }
}

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-8">
      {sessionId ? (
        <div className="rounded-md border border-green-300 bg-green-50 p-4 text-sm text-green-800">
          <strong>Payment received.</strong> You can complete this onboarding now
          or later. We’ve also emailed you a link to return here anytime.
        </div>
      ) : (
        <div className="rounded-md border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
          If you have already completed payment, you can safely continue below.
          We’ve also emailed you a link to return to this page anytime.
        </div>
      )}

      <OnboardingForm tier="basic" prefillEmail={email} />
    </main>
  );
}
