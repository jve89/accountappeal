import { stripe } from "@/lib/stripe";

export async function getCheckoutEmail(sessionId?: string | null) {
  if (!sessionId) return null;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return session.customer_details?.email || null;
  } catch {
    return null;
  }
}
