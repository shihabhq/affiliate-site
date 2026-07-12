"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. I don't have a dollar card. Can you help me?"
)}`;

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Show after a short delay so the page settles first
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Focus the close button when modal opens
  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #3b1260 0%, #1C1D1F 70%)" }}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-primary via-[#c060ff] to-purple-primary" />

        <div className="p-7 text-white text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-primary/20 border border-purple-primary/30 text-purple-300 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
            Special Offer
          </div>

          <h2
            id="welcome-modal-title"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-2"
          >
            Buy Udemy Courses
            <br />
            <span className="text-gradient-purple">Up to 90% OFF</span>
          </h2>

          <p className="text-gray-300 text-sm mb-6 max-w-xs mx-auto">
           Buy Top career changing courses with lifetime access & certificate.
          </p>

          {/* Primary CTA */}
          <a
            href={siteConfig.affiliateLink}
            target="_blank"
            rel="sponsored noopener"
            onClick={() => setOpen(false)}
            className="block w-full bg-purple-primary hover:bg-purple-hover text-white font-extrabold text-base py-4 rounded-xl transition-colors mb-4"
            style={{ boxShadow: "0 0 30px rgba(164,53,240,0.35)" }}
          >
            Get Discount on Udemy →
          </a>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-100 uppercase tracking-wider font-medium">
              আপনার ডুয়াল কারেন্সি কার্ড নেই?
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Messaging buttons */}
          <div className="flex gap-3 mb-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-whatsapp hover:opacity-90 text-white font-bold py-3 px-3 rounded-xl text-sm transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`${siteConfig.facebookMessage}?ref=welcome-modal`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-messenger hover:opacity-90 text-white font-bold py-3 px-3 rounded-xl text-sm transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.84 1.344 5.374 3.474 7.092V22l3.178-1.746A10.6 10.6 0 0 0 12 20.519c5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2Z"/>
              </svg>
              Facebook
            </a>
          </div>

          <p className="text-xs text-gray-300">
            আপনার কাছে ডলার কার্ড না থাকলেও আমাদের মেসেজ করলে আপনার হয়ে আমরা কোর্স কিনে দেওয়ার ব্যাবস্থা করবো।
          </p>
        </div>
      </div>
    </div>
  );
}
