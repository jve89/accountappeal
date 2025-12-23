"use server";

import { Resend } from "resend";
import { stripe } from "@/lib/stripe";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPaymentConfirmation(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (!session.customer_details?.email) return;

  // 🔒 HARD GUARANTEE: send once
  if (session.metadata?.welcome_email_sent === "true") return;

  const tier = session.metadata?.tier ?? "basic";

  const onboardingUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/onboarding/${tier}?session_id=${sessionId}`;

  await resend.emails.send({
    from: "AccountAppeal <onboarding@resend.dev>",
    to: session.customer_details.email,
    subject: "Payment received – next steps",
    text: `
Thank you for your payment.

Your ${tier.toUpperCase()} service is confirmed.

Next step:
Please complete the onboarding form so we can prepare your appeal properly.

You can do this now or later using this link:
${onboardingUrl}

If you submit the form more than once, we will always use your latest submission.

We typically respond within 48 hours.

— AccountAppeal
`,
  });

  // ✅ Mark as sent in Stripe itself
  await stripe.checkout.sessions.update(sessionId, {
    metadata: {
      ...session.metadata,
      welcome_email_sent: "true",
    },
  });
}
