"use client";

import { useState } from "react";
import type { Course } from "@/data/courses";
import PurchaseModal from "./PurchaseModal";

type Props = {
  course: Course;
  imageAlt: string;
  label?: string;
  className?: string;
};

// Same purchase flow as CourseCard's "Get This Course" button (opens the
// two-path PurchaseModal), extracted so the course detail page hero can
// trigger it without duplicating a full card.
export default function CourseBuyButton({
  course,
  imageAlt,
  label = "Get This Course",
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          className ??
          "w-full sm:w-auto bg-purple-primary hover:bg-purple-hover text-white text-sm font-semibold py-3 px-8 rounded transition-colors"
        }
      >
        {label}
      </button>

      <PurchaseModal
        isOpen={open}
        onClose={() => setOpen(false)}
        courseTitle={course.title}
        courseThumbnail={course.image}
        courseImageAlt={imageAlt}
        courseLink={course.link}
      />
    </>
  );
}
