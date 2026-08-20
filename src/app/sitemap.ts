import { MetadataRoute } from "next";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = BUSINESS.domain;
  const now = new Date().toISOString();

  const staticPages = [
    { url: domain, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${domain}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${domain}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${domain}/reviews`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${domain}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${domain}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${domain}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${domain}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaPages = SERVICE_AREAS.map((a) => ({
    url: `${domain}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_POSTS.filter((p) => p.status === "published").map((p) => ({
    url: `${domain}/blog/${p.slug}`,
    lastModified: p.dateModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
