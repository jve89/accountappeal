"use server";

import { Resend } from "resend";
import { getStripe } from "@/lib/stripe";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPaymentConfirmation(sessionId: string) {
  console.log("sendPaymentConfirmation called with:", sessionId);

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.retrieve(sessionId);

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

  const tier =
    session.metadata?.tier === "basic" ||
    session.metadata?.tier === "premium" ||
    session.metadata?.tier === "standard"
      ? session.metadata.tier
      : "standard";

  const onboardingUrl =
    `${process.env.NEXT_PUBLIC_BASE_URL}/onboarding?tier=${tier}&session_id=${sessionId}`;

  // DEV-safe routing
  const recipient =
    process.env.NODE_ENV === "development"
      ? process.env.CONTACT_TO_EMAIL!
      : email;

  const result = await resend.emails.send({
    from: "AccountAppeal <onboarding@mail.accountappeal.net>",
    to: recipient,
    replyTo: "support@accountappeal.net",
    subject: "Payment received – next steps",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; background-color: #ffffff; padding: 32px; color: #0f172a;">
        <div style="margin-bottom: 32px;">
          <img
            src="https://accountappeal.net/logo_email.png"
            alt="AccountAppeal"
            height="40"
            style="display: block;"
          />
        </div>

        <h1 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">
          Payment received
        </h1>

        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
          Thank you for your payment. Your <strong>${tier.toUpperCase()}</strong> service is confirmed.
        </p>

        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
          Next step: please complete the onboarding form so we can prepare your appeal properly.
        </p>

        <p style="margin-bottom: 24px;">
          <a
            href="${onboardingUrl}"
            style="
              display: inline-block;
              background-color: #2563eb;
              color: #ffffff;
              text-decoration: none;
              padding: 10px 16px;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 500;
            "
          >
            Complete onboarding
          </a>
        </p>

        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
          You can complete the onboarding now or later.
          If you submit it more than once, we will always use your latest submission.
        </p>

        <p style="font-size: 14px; line-height: 1.6;">
          We typically respond within 48 hours.
        </p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="font-size: 12px; color: #64748b; line-height: 1.5;">
          This email confirms your payment and explains the next step.
          We prepare documents and provide guidance only. You submit all appeals yourself,
          and outcomes depend solely on the platform.
        </p>

        <p style="font-size: 12px; color: #64748b; margin-top: 12px;">
          © ${new Date().getFullYear()} AccountAppeal. All rights reserved.
        </p>
      </div>
    `,
  });

  if (!result.error) {
    await stripe.checkout.sessions.update(sessionId, {
      metadata: {
        ...session.metadata,
        welcome_email_sent: "true",
      },
    });
  }
}
