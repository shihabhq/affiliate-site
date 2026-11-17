"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type ProofGalleryProps = {
  proofs: string[];
  /** "preview" = fixed two-row grid without the load-more control (homepage). */
  variant?: "full" | "preview";
};

const waText = encodeURIComponent(
  "Hi! I saw your purchase proofs and want to buy a Udemy course with bKash."
);

const PAGE_SIZE = 12;

export default function ProofGallery({ proofs, variant = "full" }: ProofGalleryProps) {
  const isPreview = variant === "preview";
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProofs = isPreview ? proofs : proofs.slice(0, visibleCount);
  const remaining = proofs.length - visibleProofs.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + visibleProofs.length) % visibleProofs.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % visibleProofs.length));

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, visibleProofs.length]);

  const currentFilename = lightboxIndex !== null ? visibleProofs[lightboxIndex] : null;
  const lightboxSrc = currentFilename ? `/proofs/${currentFilename}` : null;

  return (
    <>
      {/* Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${
          isPreview ? "lg:grid-cols-6 mb-8" : "lg:grid-cols-4"
        }`}
      >
        {visibleProofs.map((filename, i) => {
          const src = `/proofs/${filename}`;
          const name = filename.replace(/\.[^.]+$/, "");
          // Preview keeps two rows at every breakpoint: 4 on mobile, 6 on tablet, 12 on desktop.
          const previewVisibility = !isPreview || i < 4 ? "" : i < 6 ? "hidden sm:block" : "hidden lg:block";
          return (
            <button
              key={filename}
              onClick={() => openLightbox(i)}
              className={`relative block w-full aspect-4/5 rounded-lg overflow-hidden border border-gray-border bg-white hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-primary ${previewVisibility}`}
              aria-label={`View purchase proof for ${name}`}
            >
              <Image
                src={src}
                alt={`Purchase proof - ${name} Udemy course delivery in Bangladesh`}
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
            Showing {visibleProofs.length} of {proofs.length} proofs
          </p>
          {remaining > 0 && (
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              View more proofs ({Math.min(PAGE_SIZE, remaining)} more)
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxSrc && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Proof image viewer"
        >
          <div
            className="relative flex flex-col bg-white rounded-lg overflow-hidden max-w-3xl w-full h-[85vh] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-2 right-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            {visibleProofs.length > 1 && (
              <div className="absolute top-2 left-2 z-10 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {lightboxIndex + 1} / {visibleProofs.length}
              </div>
            )}

            {/* Image */}
            <div className="relative flex-1 min-h-0 bg-gray-100">
              <Image
                src={lightboxSrc}
                alt="Purchase proof from Udemy Course Bangladesh"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />

              {visibleProofs.length > 1 && (
                <>
                  <button
                    onClick={showPrev}
                    aria-label="Previous proof"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={showNext}
                    aria-label="Next proof"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* CTA footer */}
            <div className="shrink-0 p-4 space-y-2 border-t border-gray-border">
              <p className="text-sm text-gray-text text-center mb-1">
                Real delivery from a real customer in Bangladesh 🇧🇩
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`${siteConfig.facebookMessage}?ref=proof`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-messenger text-white text-sm font-semibold py-3 px-4 rounded text-center hover:opacity-90 transition-opacity"
                >
                  Message on Facebook
                </a>
                <a
                  href={`${siteConfig.whatsappLink}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-whatsapp text-white text-sm font-semibold py-3 px-4 rounded text-center hover:opacity-90 transition-opacity"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
