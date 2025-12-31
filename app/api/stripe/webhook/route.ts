import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return new NextResponse("Missing signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const body = await req.text();

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email =
      session.customer_details?.email ??
      session.customer_email ??
      "unknown";

    const tier = session.metadata?.tier ?? "standard";

    await resend.emails.send({
      from: "AccountAppeal <payments@mail.accountappeal.net>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `💳 Payment received – ${tier}`,
      text: `
NEW PAYMENT RECEIVED

Tier: ${tier}
Client email: ${email}
Amount: ${(session.amount_total ?? 0) / 100} ${session.currency?.toUpperCase()}
Session ID: ${session.id}
`,
    });
  }

  return NextResponse.json({ received: true });
}
