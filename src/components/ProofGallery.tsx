"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type ProofGalleryProps = { proofs: string[] };

const waText = encodeURIComponent(
  "Hi! I saw your purchase proofs and want to buy a Udemy course with bKash."
);

export default function ProofGallery({ proofs }: ProofGalleryProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (filename: string) => {
    setLightboxSrc(`/proofs/${filename}`);
  };
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      {/* Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {proofs.map((filename) => {
          const src = `/proofs/${filename}`;
          const name = filename.replace(/\.[^.]+$/, "");
          return (
            <button
              key={filename}
              onClick={() => openLightbox(filename)}
              className="block w-full break-inside-avoid rounded-lg overflow-hidden border border-gray-border hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-primary"
              aria-label={`View purchase proof for ${name}`}
            >
              <Image
                src={src}
                alt={`Purchase proof — ${name} Udemy course delivery in Bangladesh`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </button>
          );
        })}
      </div>

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
