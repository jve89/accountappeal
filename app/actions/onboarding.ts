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
  const scopeConfirmation = String(formData.get("scope_confirmation") || "");

  if (!email || !suspensionDescription || !scopeConfirmation) {
    throw new Error("Missing required onboarding fields");
  }

  const files = formData.getAll("attachments") as File[];

  if (files.length > MAX_FILES) {
    throw new Error("Too many attachments");
  }

  const attachments = [];

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

  // Admin intake email (WITH attachments)
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

--- Scope confirmation ---
${scopeConfirmation}`,
    attachments,
  });

  // Client confirmation email (NO attachments)
  await sendOnboardingConfirmationEmail({
    email,
    tier: tier as "basic" | "standard" | "premium",
  });

  redirect(`/onboarding/${tier}/submitted`);
}
