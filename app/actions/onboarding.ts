"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

type OnboardingPayload = {
  tier: "basic" | "standard" | "premium";
  email: string;
  suspensionDescription: string;
  hasScreenshots: string;
  businessImpact?: string;
  scopeConfirmation: string;
};

export async function submitOnboarding(formData: FormData) {
  const payload: OnboardingPayload = {
    tier: String(formData.get("tier")) as OnboardingPayload["tier"],
    email: String(formData.get("email") || ""),
    suspensionDescription: String(
      formData.get("suspension_description") || ""
    ),
    hasScreenshots: String(formData.get("has_screenshots") || ""),
    businessImpact: String(formData.get("business_impact") || ""),
    scopeConfirmation: String(formData.get("scope_confirmation") || ""),
  };

  // Minimal guardrails (intentionally light)
  if (
    !payload.email ||
    !payload.suspensionDescription ||
    !payload.scopeConfirmation
  ) {
    throw new Error("Missing required onboarding fields");
  }

  await resend.emails.send({
    from: "AccountAppeal <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: payload.email,
    subject: `New onboarding (${payload.tier})`,
    text: `
Tier: ${payload.tier}
Email: ${payload.email}

--- Suspension description ---
${payload.suspensionDescription}

--- Screenshots available ---
${payload.hasScreenshots}

--- Business impact ---
${payload.businessImpact || "N/A"}

--- Scope confirmation ---
${payload.scopeConfirmation}
`,
  });

  redirect(`/onboarding/${payload.tier}/submitted`);
}
