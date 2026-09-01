"use client";

import { courses } from "@/data/courses";
import { getCourseImageAlt } from "@/lib/categories";
import InlineOfferCard from "./InlineOfferCard";

type CourseCTAProps = {
  /** Must match a course's `id` in src/data/courses.ts */
  courseId: string;
  note?: string;
  buttonLabel?: string;
};

// Used inside blog post MDX as <CourseCTA courseId="web-dev-bootcamp" />.
// Pulls title/image/link straight from src/data/courses.ts so a blog post
// never hardcodes a course link — it always stays in sync with the catalog.
export default function CourseCTA({ courseId, note, buttonLabel }: CourseCTAProps) {
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    // Visible (not silently swallowed) so a typo'd courseId is obvious in preview.
    return (
      <div className="not-prose my-6 rounded-xl border-2 border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-700">
        ⚠ CourseCTA: no course found with id &quot;{courseId}&quot;. Check the
        id against src/data/courses.ts.
      </div>
    );
  }

  return (
    <InlineOfferCard
      title={course.title}
      image={course.image}
      imageAlt={getCourseImageAlt(course)}
      link={course.link}
      note={note}
      buttonLabel={buttonLabel}
    />
  );
}
