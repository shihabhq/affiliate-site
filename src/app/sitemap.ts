import type { MetadataRoute } from "next";
import { categories } from "@/data/courses";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const staticRoutes: Array<{
    path: string;
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", lastModified: "2026-07-30", changeFrequency: "daily", priority: 1.0 },
    { path: "/how-to-buy", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.9 },
    { path: "/courses", lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.8 },
    { path: "/free-courses", lastModified: "2026-07-01", changeFrequency: "weekly", priority: 0.7 },
    { path: "/blog", lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.8 },
    { path: "/proofs", lastModified: "2026-07-15", changeFrequency: "weekly", priority: 0.7 },
    { path: "/faq", lastModified: "2026-07-01", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.5 },
    { path: "/affiliate-disclosure", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy-policy", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", lastModified: "2026-06-01", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map(({ path, lastModified, changeFrequency, priority }) => ({
      url: base + path,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    })),
    ...categories.map((cat) => ({
      url: `${base}/courses/${cat}`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
