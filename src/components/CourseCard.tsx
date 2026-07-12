"use client";

import { useState } from "react";
import Image from "next/image";
import type { Course } from "@/data/courses";
import PurchaseModal from "./PurchaseModal";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-rating font-bold text-sm">{rating.toFixed(1)}</span>
      <div className="flex" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars)
            return (
              <svg key={i} className="w-3.5 h-3.5 text-yellow-rating" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          if (i === fullStars && hasHalf)
            return (
              <svg key={i} className="w-3.5 h-3.5 text-yellow-rating" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#D1D7DC" />
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          return (
            <svg key={i} className="w-3.5 h-3.5 text-gray-border" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
      <span className="text-gray-text text-xs">
        ({rating >= 1000 ? (rating / 1000).toFixed(0) + "k" : rating})
      </span>
    </div>
  );
}

export default function CourseCard({ course }: { course: Course }) {
  const [modalOpen, setModalOpen] = useState(false);

  const reviewDisplay =
    course.reviewCount >= 1000
      ? `(${(course.reviewCount / 1000).toFixed(0)}k ratings)`
      : `(${course.reviewCount} ratings)`;

  return (
    <>
      <article className="bg-white border border-gray-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        {/* Course image */}
        <div className="relative aspect-video w-full bg-gray-100">
          <Image
            src={course.image}
            alt={`${course.title} — buy in Bangladesh with bKash`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Badge */}
          <span className="absolute top-2 left-2 bg-purple-primary text-white text-xs font-bold px-2 py-1 rounded">
            UP TO 90% OFF
          </span>
        </div>

        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-sm font-bold text-dark leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-text leading-relaxed mb-3 line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Rating */}
          <div className="mb-2">
            <StarRating rating={course.rating} />
            <p className="text-xs text-gray-text mt-0.5">{reviewDisplay}</p>
          </div>

          {/* Price hint */}
          <p className="text-xs text-gray-text mb-4">
            Original price:{" "}
            <span className="line-through">{course.originalPrice}</span>{" "}
            <span className="text-green-price font-semibold">Sale active!</span>
          </p>

          {/* CTA */}
          <div className="mt-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-purple-primary hover:bg-purple-hover text-white text-sm font-semibold py-2.5 px-4 rounded transition-colors"
            >
              Get This Course
            </button>
          </div>
        </div>
      </article>

      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseTitle={course.title}
        courseThumbnail={course.image}
      />
    </>
  );
}
