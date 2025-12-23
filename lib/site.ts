const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const site = {
  name: "AccountAppeal",
  domain: "accountappeal.com", // placeholder (not used yet)
  email: "support@accountappeal.com", // placeholder (not used yet)

  stripe: {
    basic: `https://buy.stripe.com/test_9B63cv1bc5FI2CmgrQ6Na00?success_url=${encodeURIComponent(
      `${BASE_URL}/onboarding/basic`
    )}`,
    standard: `https://buy.stripe.com/test_cNifZh3jkgkmdh0ejI6Na01?success_url=${encodeURIComponent(
      `${BASE_URL}/onboarding/standard`
    )}`,
    premium: `https://buy.stripe.com/test_9B6dR93jk9VYgtcgrQ6Na02?success_url=${encodeURIComponent(
      `${BASE_URL}/onboarding/premium`
    )}`,
  },
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
