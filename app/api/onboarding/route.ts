import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendOnboardingConfirmationEmail } from "@/app/actions/onboardingConfirmation";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILES = 5;
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const email = String(formData.get("email") || "");
    const tier =
      formData.get("tier") === "basic" ||
      formData.get("tier") === "premium" ||
      formData.get("tier") === "standard"
        ? String(formData.get("tier"))
        : "standard";

    const suspensionDescription = String(
      formData.get("suspension_description") || ""
    );
    const hasScreenshots = String(formData.get("has_screenshots") || "");
    const businessImpact = String(formData.get("business_impact") || "");

    const scopeAck1 = formData.get("scope_ack_1");
    const scopeAck2 = formData.get("scope_ack_2");
    const scopeAck3 = formData.get("scope_ack_3");

    const scopeAcknowledged =
      Boolean(scopeAck1) && Boolean(scopeAck2) && Boolean(scopeAck3);

    const scopeAcknowledgedAt = new Date().toISOString();

    if (!email || !suspensionDescription || !scopeAcknowledged) {
      return NextResponse.redirect(
        new URL(`/onboarding?tier=${tier}&error=missing_fields`, req.url),
        303
      );
    }

    /* ---------- FILE HANDLING (SERVER SAFETY) ---------- */

    const rawFiles = formData.getAll("attachments");

    if (rawFiles.length > MAX_FILES) {
      return NextResponse.redirect(
        new URL(`/onboarding?tier=${tier}&error=invalid_files`, req.url),
        303
      );
    }

    const attachments: { filename: string; content: string }[] = [];

    for (const item of rawFiles) {
      if (!(item instanceof File)) continue;
      if (!item.size) continue;

      if (item.size > MAX_FILE_SIZE) {
        return NextResponse.redirect(
          new URL(`/onboarding?tier=${tier}&error=invalid_files`, req.url),
          303
        );
      }

      if (
        !item.type.startsWith("image/") &&
        item.type !== "application/pdf"
      ) {
        continue;
      }

      const buffer = Buffer.from(await item.arrayBuffer());

      attachments.push({
        filename: item.name,
        content: buffer.toString("base64"),
      });
    }

    /* ---------- ADMIN EMAIL ---------- */

    await resend.emails.send({
      from: "AccountAppeal <onboarding@mail.accountappeal.net>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `[Onboarding] ${tier} – ${email}`,
      text: `NEW ONBOARDING SUBMISSION

Tier: ${tier}
Client email: ${email}

--- Scope & disclaimer confirmation ---
All required acknowledgements confirmed: YES
Acknowledged at (server time, UTC): ${scopeAcknowledgedAt}

--- Suspension description ---
${suspensionDescription}

--- Screenshots available ---
${hasScreenshots}

--- Business impact ---
${businessImpact || "N/A"}
`,
      attachments,
    });

    /* ---------- CLIENT CONFIRMATION ---------- */

    await sendOnboardingConfirmationEmail({
      email,
      tier: tier as "basic" | "standard" | "premium",
    });

    /* ---------- SUCCESS ---------- */

    return NextResponse.redirect(
      new URL(`/onboarding/submitted?tier=${tier}`, req.url),
      303
    );
  } catch (err) {
    console.error("Onboarding upload failed:", err);

    return NextResponse.redirect(
      new URL(`/onboarding/error`, req.url),
      303
    );
  }
}
