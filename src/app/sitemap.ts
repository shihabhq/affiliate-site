import type { MetadataRoute } from "next";
import { categories } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://udemycourse.com";
  const staticRoutes = [
    "/",
    "/courses",
    "/how-to-buy",
    "/proofs",
    "/faq",
    "/about",
    "/contact",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: base + route,
      lastModified: new Date(),
      changeFrequency:
        route === "/" ? ("daily" as const) : ("weekly" as const),
      priority:
        route === "/"
          ? 1.0
          : route === "/how-to-buy"
          ? 0.9
          : route === "/courses"
          ? 0.8
          : 0.6,
    })),
    ...categories.map((cat) => ({
      url: `${base}/courses/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
