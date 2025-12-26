export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const priceBasic = process.env.STRIPE_PRICE_BASIC;
  const priceStandard = process.env.STRIPE_PRICE_STANDARD;
  const pricePremium = process.env.STRIPE_PRICE_PREMIUM;

  if (!stripeSecretKey || !priceBasic || !priceStandard || !pricePremium) {
    return NextResponse.json(
      { error: "Payment system not configured" },
      { status: 503 }
    );
  }

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const stripe = new Stripe(stripeSecretKey);

  const PRICE_BY_TIER: Record<string, string> = {
    basic: priceBasic,
    standard: priceStandard,
    premium: pricePremium,
  };

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
    customer_creation: "always",
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
