import { getStripe } from "@/lib/stripe";

export async function getCheckoutEmail(sessionId?: string | null) {
  if (!sessionId) return null;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return (
      session.customer_details?.email ??
      session.customer_email ??
      null
    );
  } catch (err) {
    console.error("Failed to retrieve checkout email:", err);
    return null;
  }
}
