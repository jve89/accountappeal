"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";
import { sendOnboardingConfirmationEmail } from "@/app/actions/onboardingConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function submitOnboarding(formData: FormData) {
  const email = String(formData.get("email") || "");
  const tier = String(formData.get("tier") || "basic");
  const suspensionDescription = String(
    formData.get("suspension_description") || ""
  );
  const hasScreenshots = String(formData.get("has_screenshots") || "");
  const businessImpact = String(formData.get("business_impact") || "");

  const scopeAck1 = formData.get("scope_ack_1");
  const scopeAck2 = formData.get("scope_ack_2");
  const scopeAck3 = formData.get("scope_ack_3");

  if (
    !email ||
    !suspensionDescription ||
    !scopeAck1 ||
    !scopeAck2 ||
    !scopeAck3
  ) {
    // ❗ NEVER throw — redirect instead
    redirect(`/onboarding/${tier}?error=missing_fields`);
  }

  /* ---------- SAFE FILE HANDLING ---------- */

  const rawFiles = formData.getAll("attachments");
  const attachments: { filename: string; content: string }[] = [];

  for (const item of rawFiles) {
    if (!(item instanceof File)) continue;
    if (!item.size) continue;
    if (attachments.length >= MAX_FILES) break;
    if (item.size > MAX_FILE_SIZE) continue;
    if (
      !item.type.startsWith("image/") &&
      item.type !== "application/pdf"
    )
      continue;

    const buffer = Buffer.from(await item.arrayBuffer());

    attachments.push({
      filename: item.name,
      content: buffer.toString("base64"),
    });
  }

  /* ---------- EMAILS ---------- */

  await resend.emails.send({
    from: "AccountAppeal <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `[Onboarding] ${tier} – ${email}`,
    text: `NEW ONBOARDING SUBMISSION

Tier: ${tier}
Client email: ${email}

--- Suspension description ---
${suspensionDescription}

--- Screenshots available ---
${hasScreenshots}

--- Business impact ---
${businessImpact || "N/A"}
`,
    attachments,
  });

  await sendOnboardingConfirmationEmail({
    email,
    tier: tier as "basic" | "standard" | "premium",
  });

  redirect(`/onboarding/${tier}/submitted`);
}
