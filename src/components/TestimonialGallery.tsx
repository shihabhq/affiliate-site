"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type TestimonialGalleryProps = {
  testimonials: string[];
  /** "preview" = fixed two-row grid without the load-more control (homepage). */
  variant?: "full" | "preview";
};

const waText = encodeURIComponent(
  "Hi! I read your customer testimonials and want to buy a Udemy course with bKash."
);

const PAGE_SIZE = 12;

export default function TestimonialGallery({
  testimonials,
  variant = "full",
}: TestimonialGalleryProps) {
  const isPreview = variant === "preview";
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleTestimonials = isPreview
    ? testimonials
    : testimonials.slice(0, visibleCount);
  const remaining = testimonials.length - visibleTestimonials.length;

  const openLightbox = (filename: string) => {
    setLightboxSrc(`/testimonials/${filename}`);
  };
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      {/* Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${
          isPreview ? "lg:grid-cols-6 mb-8" : "lg:grid-cols-4"
        }`}
      >
        {visibleTestimonials.map((filename, i) => {
          const src = `/testimonials/${filename}`;
          const name = filename.replace(/\.[^.]+$/, "");
          // Preview keeps two rows at every breakpoint: 4 on mobile, 6 on tablet, 12 on desktop.
          const previewVisibility = !isPreview || i < 4 ? "" : i < 6 ? "hidden sm:block" : "hidden lg:block";
          return (
            <button
              key={filename}
              onClick={() => openLightbox(filename)}
              className={`relative block w-full aspect-4/5 overflow-hidden border border-gray-border bg-white hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-primary ${previewVisibility}`}
              aria-label={`Read customer testimonial ${name}`}
            >
              <Image
                src={src}
                alt={`Customer testimonial for Udemy Course Bangladesh`}
                fill
                className="object-contain"
                sizes={
                  isPreview
                    ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
              />
            </button>
          );
        })}
      </div>

      {/* View more */}
      {!isPreview && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-text mb-3" aria-live="polite">
            Showing {visibleTestimonials.length} of {testimonials.length} testimonials
          </p>
          {remaining > 0 && (
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold px-8 py-3 transition-colors"
            >
              View more testimonials ({Math.min(PAGE_SIZE, remaining)} more)
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Testimonial image lightbox"
        >
          <div
            className="bg-white overflow-hidden max-w-lg w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video bg-gray-100">
              <Image
                src={lightboxSrc}
                alt="Customer testimonial for Udemy Course Bangladesh"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 512px"
              />
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-text text-center mb-3">
                A real customer, in their own words
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`${siteConfig.facebookMessage}?ref=testimonial`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-messenger text-white text-sm font-semibold py-3 px-4 text-center hover:opacity-90 transition-opacity"
                >
                  Message on Facebook
                </a>
                <a
                  href={`${siteConfig.whatsappLink}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-whatsapp text-white text-sm font-semibold py-3 px-4 text-center hover:opacity-90 transition-opacity"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <button
                onClick={closeLightbox}
                className="w-full text-xs text-gray-text hover:text-dark py-2 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
