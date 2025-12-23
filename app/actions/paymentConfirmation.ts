"use server";

import { Resend } from "resend";
import { stripe } from "@/lib/stripe";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPaymentConfirmation(sessionId: string) {
  console.log("sendPaymentConfirmation called with:", sessionId);

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  console.log("Stripe session email fields:", {
    customer_details: session.customer_details,
    customer_email: session.customer_email,
  });

  const email =
    session.customer_details?.email ??
    session.customer_email ??
    null;

  if (!email) {
    console.error("No customer email found for session:", sessionId);
    return;
  }

  if (session.metadata?.welcome_email_sent === "true") {
    console.log("Welcome email already marked as sent:", sessionId);
    return;
  }

  const tier = session.metadata?.tier ?? "basic";

  const onboardingUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/onboarding/${tier}?session_id=${sessionId}`;

  // ✅ DEV-SAFE RECIPIENT
  const recipient =
    process.env.NODE_ENV === "development"
      ? process.env.CONTACT_TO_EMAIL!
      : email;

  const result = await resend.emails.send({
    from: "AccountAppeal <onboarding@resend.dev>",
    to: recipient,
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

  console.log("Resend result:", result);

  // ❗ ONLY mark sent if Resend succeeded
  if (!result.error) {
    await stripe.checkout.sessions.update(sessionId, {
      metadata: {
        ...session.metadata,
        welcome_email_sent: "true",
      },
    });

    console.log("Welcome email successfully sent and recorded:", sessionId);
  } else {
    console.error("Resend failed, NOT marking email as sent:", result.error);
  }
}
