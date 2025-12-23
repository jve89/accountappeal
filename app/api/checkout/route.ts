import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const PRICE_BY_TIER: Record<string, string> = {
  basic: process.env.STRIPE_PRICE_BASIC!,
  standard: process.env.STRIPE_PRICE_STANDARD!,
  premium: process.env.STRIPE_PRICE_PREMIUM!,
};

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const tier = searchParams.get("tier");

  if (!tier || !(tier in PRICE_BY_TIER)) {
    return NextResponse.json(
      { error: "Invalid tier" },
      { status: 400 }
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: PRICE_BY_TIER[tier],
        quantity: 1,
      },
    ],
    success_url: `${BASE_URL}/onboarding/${tier}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${BASE_URL}/pricing`,
    metadata: {
      tier,
      welcome_email_sent: "false",
    },
  });

  return NextResponse.redirect(session.url!, { status: 303 });
}
