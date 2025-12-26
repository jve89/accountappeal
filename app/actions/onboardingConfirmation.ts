"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOnboardingConfirmationEmail({
  email,
  tier,
}: {
  email: string;
  tier: "basic" | "standard" | "premium";
}) {
  const tierLabel = tier.charAt(0).toUpperCase() + tier.slice(1);

  await resend.emails.send({
    from: "AccountAppeal <onboarding@mail.accountappeal.net>", // ← FIX
    to: email,
    replyTo: "support@accountappeal.net", // ← ADD
    subject: "We received your onboarding information",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; background-color: #ffffff; padding: 32px; color: #0f172a;">
        <!-- Header -->
        <div style="margin-bottom: 32px;">
          <img
            src="https://accountappeal.net/logo_email.png" <!-- FIX -->
            alt="AccountAppeal"
            height="40"
            style="display: block;"
          />
        </div>

        <!-- Body -->
        <h1 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">
          Onboarding received
        </h1>

        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
          We’ve received your onboarding information for the <strong>${tierLabel}</strong> service.
        </p>

        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
          We’ll review the information you provided and contact you by email with the next steps before we proceed.
        </p>

        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
          If anything is missing or unclear, we’ll go through it together in the next step. There’s no need to resubmit the onboarding form unless we specifically ask you to.
        </p>

        <p style="font-size: 14px; line-height: 1.6;">
          Thank you,<br />
          AccountAppeal
        </p>

        <!-- Footer -->
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="font-size: 12px; color: #64748b; line-height: 1.5;">
          This email confirms that we received your onboarding information.
          We prepare documents and provide guidance only. You submit all appeals yourself,
          and outcomes depend solely on the platform.
        </p>

        <p style="font-size: 12px; color: #64748b; margin-top: 12px;">
          © ${new Date().getFullYear()} AccountAppeal. All rights reserved.
        </p>
      </div>
    `,
  });
}
