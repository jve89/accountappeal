export type ResourceGuide = {
  slug: string;
  title: string;
  changeFrequency: "monthly" | "weekly";
  priority: number;
};

export const resourceGuides: ResourceGuide[] = [
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
    slug: "instagram-appeal-ignored",
    title: "Instagram appeal ignored — what it actually means",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];
