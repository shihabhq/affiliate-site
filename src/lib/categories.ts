import type { Course } from "@/data/courses";

// Human-readable labels for course category slugs (see `categories` in
// src/data/courses.ts). Single source of truth — import this everywhere a
// category needs a display label instead of redefining the map locally.
export const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
  "graphic-design": "Graphic Design",
  "data-science": "Data Science",
  "english-language": "English Language",
  freelancing: "Freelancing",
  programming: "Programming",
  "excel-finance": "Excel & Finance",
  devops: "DevOps & Cloud",
  "cpa-marketing": "CPA Marketing",
};

/**
 * Descriptive, keyword-rich alt text for a course thumbnail, e.g.
 * "The Web Developer Bootcamp — Web Development Udemy course, buy in Bangladesh with bKash".
 * Used on course cards and the purchase modal so images carry real search-intent
 * keywords instead of just the bare course title.
 */
export function getCourseImageAlt(course: Course): string {
  const label = categoryLabels[course.category] ?? course.category;
  return `${course.title} — ${label} Udemy course, buy in Bangladesh with bKash`;
}
