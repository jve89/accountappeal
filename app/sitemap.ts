import type { MetadataRoute } from "next";
import { resourceGuides } from "@/lib/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://accountappeal.net";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/company`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/process`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/resources`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const resourcePages: MetadataRoute.Sitemap = resourceGuides.map(
    ({ slug, changeFrequency, priority }) => ({
      url: `${baseUrl}/resources/${slug}`,
      changeFrequency,
      priority,
    })
  );

  return [...staticPages, ...resourcePages];
}
