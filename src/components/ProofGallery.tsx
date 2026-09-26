"use client";

import { useState } from "react";
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProofs = isPreview ? proofs : proofs.slice(0, visibleCount);
  const remaining = proofs.length - visibleProofs.length;

  const openLightbox = (filename: string) => {
    setLightboxSrc(`/proofs/${filename}`);
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
        {visibleProofs.map((filename, i) => {
          const src = `/proofs/${filename}`;
          const name = filename.replace(/\.[^.]+$/, "");
          // Preview keeps two rows at every breakpoint: 4 on mobile, 6 on tablet, 12 on desktop.
          const previewVisibility = !isPreview || i < 4 ? "" : i < 6 ? "hidden sm:block" : "hidden lg:block";
          return (
            <button
              key={filename}
              onClick={() => openLightbox(filename)}
              className={`relative block w-full aspect-4/5 rounded-lg overflow-hidden border border-gray-border bg-white hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-primary ${previewVisibility}`}
              aria-label={`View purchase proof for ${name}`}
            >
              <Image
                src={src}
                alt={`Purchase proof — ${name} Udemy course delivery in Bangladesh`}
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
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Proof image lightbox"
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video bg-gray-100">
              <Image
                src={lightboxSrc}
                alt="Purchase proof from Udemy Course Bangladesh"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 512px"
              />
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-text text-center mb-3">
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
