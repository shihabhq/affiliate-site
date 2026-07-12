"use client";

import { useState } from "react";
import type { Course } from "@/data/courses";
import { categories } from "@/data/courses";
import CourseCard from "./CourseCard";

const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
  "graphic-design": "Graphic Design",
  "data-science": "Data Science",
  "english-language": "English Language",
  freelancing: "Freelancing",
  programming: "Programming",
  "excel-finance": "Excel & Finance",
  devops: "DevOps & Cloud",
};

type Props = { courses: Course[] };

export default function CourseGridClient({ courses }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const availableCategories = categories.filter((cat) =>
    courses.some((c) => c.category === cat)
  );

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter courses by category">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-sm font-medium rounded border transition-colors ${
            activeCategory === "all"
              ? "bg-purple-primary text-white border-purple-primary"
              : "bg-white text-dark border-gray-border hover:border-purple-primary hover:text-purple-primary"
          }`}
        >
          All Courses
        </button>
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded border transition-colors ${
              activeCategory === cat
                ? "bg-purple-primary text-white border-purple-primary"
                : "bg-white text-dark border-gray-border hover:border-purple-primary hover:text-purple-primary"
            }`}
          >
            {categoryLabels[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Course grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-text py-12">
          No courses found in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
