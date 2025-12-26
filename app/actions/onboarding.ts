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

  // ✅ Correct checkbox handling (matches form names)
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
    throw new Error("Missing required onboarding fields");
  }

  // ✅ CRITICAL FIX: safely read optional file uploads
  const files = formData
    .getAll("attachments")
    .filter((f): f is File => f instanceof File && f.size > 0);

  if (files.length > MAX_FILES) {
    throw new Error("Too many attachments");
  }

  const attachments: {
    filename: string;
    content: string;
  }[] = [];

  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`File too large: ${file.name}`);
    }

    if (
      !file.type.startsWith("image/") &&
      file.type !== "application/pdf"
    ) {
      throw new Error(`Invalid file type: ${file.name}`);
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    attachments.push({
      filename: file.name,
      content: buffer.toString("base64"),
    });
  }

  const receivedAt = new Date().toISOString();

  // Admin intake email (attachments included)
  await resend.emails.send({
    from: "AccountAppeal <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `[Onboarding] ${tier} – ${email}`,
    text: `NEW ONBOARDING SUBMISSION
Received: ${receivedAt}

Tier: ${tier}
Client email: ${email}

--- Suspension description ---
${suspensionDescription}

--- Screenshots available ---
${hasScreenshots}

--- Business impact ---
${businessImpact || "N/A"}

--- Scope acknowledgements ---
• No guarantee of reinstatement acknowledged
• Platform decision authority acknowledged
• Information accuracy confirmed
`,
    attachments,
  });

  // Client confirmation email (no attachments)
  await sendOnboardingConfirmationEmail({
    email,
    tier: tier as "basic" | "standard" | "premium",
  });

  redirect(`/onboarding/${tier}/submitted`);
}
