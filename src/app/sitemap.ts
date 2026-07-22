import type { MetadataRoute } from "next";
import { categories } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://udemycoursebd.com";
  const staticRoutes = [
    "/",
    "/courses",
    "/how-to-buy",
    "/free-courses",
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
          : route === "/courses" || route === "/free-courses"
          ? 0.8
          : route === "/faq" || route === "/proofs"
          ? 0.7
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
