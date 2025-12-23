"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  if (!name || !email || !message) {
    throw new Error("Missing fields");
  }

  await resend.emails.send({
    from: "AccountAppeal <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim(),
  });
}
