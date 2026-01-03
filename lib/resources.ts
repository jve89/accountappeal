export type ResourceGuide = {
  slug: string;
  title: string;
  changeFrequency: "monthly" | "weekly";
  priority: number;
};

export const resourceGuides: ResourceGuide[] = [
  // ─────────────────────────────
  // 1. Primary panic entry points
  // ─────────────────────────────
  {
    slug: "instagram-account-suspended",
    title: "Instagram account suspended — what to do",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "facebook-account-disabled",
    title: "Facebook account disabled — next steps",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "google-account-suspended",
    title: "Google account suspended — Ads, YouTube, or login access",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "x-account-suspended",
    title: "X (Twitter) account suspended — what actually happens and what to do next",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "tiktok-account-permanently-banned",
    title: "TikTok account permanently banned — what it means and what options remain",
    changeFrequency: "monthly",
    priority: 0.6,
  },

  // ─────────────────────────────
  // 2. Platform-specific deep dives
  // ─────────────────────────────
  {
    slug: "facebook-ads-account-disabled",
    title: "Facebook Ads account disabled — what it means and what to expect",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "facebook-business-manager-restricted",
    title: "Facebook Business Manager restricted — what it means and what to expect",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "google-ads-circumventing-systems",
    title: 'Google Ads account suspended for "circumventing systems"',
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "youtube-channel-terminated",
    title: "YouTube channel terminated — strikes vs permanent termination",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "instagram-community-guidelines-disabled",
    title: 'Instagram disabled for "community guidelines" — what that actually means',
    changeFrequency: "monthly",
    priority: 0.6,
  },

  // ─────────────────────────────
  // 3. Cross-platform enforcement concepts
  // ─────────────────────────────
  {
    slug: "account-restricted-vs-suspended",
    title: "Account restricted or limited — how this differs from suspension or disablement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "permanently-disabled-vs-temporarily-suspended",
    title: "Account permanently disabled vs temporarily suspended — what’s the difference?",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
  slug: "google-account-disabled",
  title: "Google account disabled — policy or security reasons",
  changeFrequency: "monthly",
  priority: 0.6,
  },
  {
    slug: "x-account-locked-suspended-banned",
    title: "X account locked vs suspended vs banned — what’s the difference?",
    changeFrequency: "monthly",
    priority: 0.6,
  },

  // ─────────────────────────────
  // 4. Appeals & process logic (pillar cluster)
  // ─────────────────────────────
  {
    slug: "how-account-appeals-work",
    title: "How account appeals actually work — timelines, limits, and misconceptions",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "appeal-submitted-no-response",
    title: "Appeal submitted but no response — what that usually means",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "is-it-worth-appealing-again",
    title: "Is it worth appealing again? — when follow-ups help and when they don’t",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "instagram-appeal-ignored",
    title: "Instagram appeal ignored — what it actually means",
    changeFrequency: "monthly",
    priority: 0.6,
  },

  // ─────────────────────────────
  // 5. Advanced / edge-case scenarios
  // ─────────────────────────────
  {
    slug: "account-suspended-suspicious-activity",
    title: "Account suspended due to suspicious activity — what it usually means",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "linked-accounts-disabled-together",
    title: "Multiple accounts linked or disabled together — why this happens",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "payment-profile-suspended",
    title: "Payment profile suspended — Meta or Google",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    slug: "gdpr-data-access-request-account-suspension",
    title: "Requesting your account data after a suspension (GDPR explained)",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];
