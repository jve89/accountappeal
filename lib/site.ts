const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const site = {
  name: "AccountAppeal",
  domain: "accountappeal.com",
  email: "support@accountappeal.com",

  stripe: {
    basic: `https://buy.stripe.com/test_9B63cv1bc5FI2CmgrQ6Na00?success_url=${encodeURIComponent(
      `${BASE_URL}/onboarding?tier=basic`
    )}`,
    standard: `https://buy.stripe.com/test_cNifZh3jkgkmdh0ejI6Na01?success_url=${encodeURIComponent(
      `${BASE_URL}/onboarding?tier=standard`
    )}`,
    premium: `https://buy.stripe.com/test_9B6dR93jk9VYgtcgrQ6Na02?success_url=${encodeURIComponent(
      `${BASE_URL}/onboarding?tier=premium`
    )}`,
  },
} as const;

export const nav = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What we do", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "What this is / is not", href: "#boundaries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
