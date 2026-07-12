"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type PurchaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseThumbnail: string;
};

export default function PurchaseModal({
  isOpen,
  onClose,
  courseTitle,
  courseThumbnail,
}: PurchaseModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Focus trap & body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const waMessage = encodeURIComponent(
    `Hi! I want to buy this Udemy course: ${courseTitle}. I don't have a dollar card. How can I pay with bKash?`
  );
  const waLink = `${siteConfig.whatsappLink}?text=${waMessage}`;
  const fbLink = `${siteConfig.facebookMessage}?ref=course_${encodeURIComponent(courseTitle)}`;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      aria-modal="true"
      role="dialog"
      aria-label={`Purchase options for ${courseTitle}`}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 border-b border-gray-border">
          <div className="flex gap-3 items-start">
            <div className="relative w-16 h-12 shrink-0 rounded overflow-hidden bg-gray-100">
              <Image
                src={courseThumbnail}
                alt={courseTitle}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <p className="text-sm font-semibold text-dark line-clamp-3 leading-snug">
              {courseTitle}
            </p>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close modal"
            className="ml-2 shrink-0 text-gray-text hover:text-dark transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-base font-bold text-dark mb-5 text-center">
            Do you have a Dollar Card / Dual Currency Card?
          </p>

          {/* Option A */}
          <div className="border border-gray-border rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-dark mb-1">
              ✅ Yes, I have a card
            </p>
            <p className="text-xs text-gray-text mb-3">
              Buy directly on Udemy with your international card and get up to 90% off.
            </p>
            <a
              href={siteConfig.affiliateLink}
              target="_blank"
              rel="sponsored noopener"
              className="block w-full bg-purple-primary hover:bg-purple-hover text-white text-sm font-semibold py-3 px-4 rounded text-center transition-colors"
            >
              Get up to 90% OFF on Udemy →
            </a>
          </div>

          {/* Option B */}
          <div className="border border-gray-border rounded-lg p-4">
            <p className="text-sm font-semibold text-dark mb-1">
              🔴 No, I don&apos;t have a card
            </p>
            <p className="text-xs text-gray-text mb-3">
              Pay with bKash, Nagad, or Rocket. Course delivered to your email
              within a few hours.
            </p>
            <p className="text-xs font-medium text-green-price mb-3">
              বিকাশ/নগদ দিয়ে পেমেন্ট করুন
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp hover:opacity-90 text-white text-sm font-semibold py-3 px-4 rounded text-center transition-opacity"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white" aria-hidden="true">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.025 7.768L0 32l8.469-2.006A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.274 19.352c-.398-.2-2.356-1.163-2.72-1.294-.364-.133-.63-.2-.895.2-.265.398-1.028 1.294-1.26 1.56-.232.266-.465.299-.863.1-.398-.2-1.68-.62-3.2-1.974-1.183-1.054-1.982-2.356-2.214-2.754-.232-.398-.025-.613.174-.812.178-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.698-.1-.2-.895-2.158-1.226-2.955-.323-.775-.65-.67-.895-.682-.232-.01-.498-.013-.763-.013s-.698.1-1.063.498c-.365.398-1.393 1.362-1.393 3.32s1.426 3.851 1.625 4.116c.2.265 2.806 4.282 6.796 6.003.95.41 1.692.655 2.27.838.954.303 1.822.26 2.508.158.765-.113 2.356-.964 2.688-1.894.332-.93.332-1.727.232-1.894-.1-.166-.365-.266-.763-.465z" />
                </svg>
                Order via WhatsApp
              </a>
              <a
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-messenger hover:opacity-90 text-white text-sm font-semibold py-3 px-4 rounded text-center transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242C9.636 21.97 10.803 22.222 12 22.222c6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.194 14.963L10.5 12.103l-5.37 2.86 5.896-6.26 2.727 2.86 5.34-2.86-5.9 6.26z" />
                </svg>
                Order via Facebook Messenger
              </a>
            </div>
            <p className="text-xs text-gray-text mt-3 text-center">
              Pay easily with bKash, Nagad or Rocket. Course delivered to your
              email with lifetime access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
