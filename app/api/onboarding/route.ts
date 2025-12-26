import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

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
      return NextResponse.redirect(
        new URL(`/onboarding/${tier}?error=missing_fields`, req.url),
        303
      );
    }

    /* ---------- FILE HANDLING ---------- */

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

    /* ---------- ADMIN EMAIL ---------- */

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

    /* ---------- CLIENT CONFIRMATION ---------- */

    await resend.emails.send({
      from: "AccountAppeal <onboarding@resend.dev>",
      to: email,
      subject: "Onboarding received",
      text: `Thank you. We’ve received your onboarding for the ${tier} service.`,
    });

    /* ---------- CRITICAL FIX ----------
       303 forces POST → GET redirect
       Prevents 405 Method Not Allowed
    ---------------------------------- */

    return NextResponse.redirect(
      new URL(`/onboarding/${tier}/submitted`, req.url),
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
