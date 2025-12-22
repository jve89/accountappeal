export const site = {
  name: "AccountAppeal",
  domain: "accountappeal.com", // placeholder
  email: "support@accountappeal.com", // placeholder

  stripe: {
    basic: "https://buy.stripe.com/6oUfZhg7S5qn4y07cA2Fa03",
    standard: "https://buy.stripe.com/5kQeVd4pa4mj4y01Sg2Fa01",
    premium: "https://buy.stripe.com/eVqeVd8Fqg51d4wcwU2Fa02",
  },
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
