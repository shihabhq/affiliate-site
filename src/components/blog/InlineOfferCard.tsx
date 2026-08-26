"use client";

import { useState } from "react";
import Image from "next/image";
import PurchaseModal from "@/components/PurchaseModal";

type InlineOfferCardProps = {
  title: string;
  image: string;
  /** Course-specific affiliate link, e.g. "trk.udemy.com/xxxxx" */
  link: string;
  /** Optional short note shown under the title (Bangla is fine) */
  note?: string;
  /** Label on the button — defaults to Bangla, override for an English post */
  buttonLabel?: string;
};

// Shared UI behind <CourseCTA /> and <OfferCTA /> in blog posts. Clicking it opens
// the same PurchaseModal used everywhere else on the site (WhatsApp / Messenger /
// course-specific "Get up to 90% OFF" link) — no CTA logic is duplicated here.
export default function InlineOfferCard({
  title,
  image,
  link,
  note,
  buttonLabel = "এই কোর্সটি নিন",
}: InlineOfferCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="not-prose my-6 flex items-center gap-4 rounded-xl border-2 border-purple-primary/30 bg-bg-light p-4">
        <div className="relative w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-white">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-dark leading-snug line-clamp-2">
            {title}
          </p>
          {note && <p className="text-xs text-gray-text mt-0.5">{note}</p>}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="shrink-0 bg-purple-primary hover:bg-purple-hover text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          {buttonLabel}
        </button>
      </div>

      <PurchaseModal
        isOpen={open}
        onClose={() => setOpen(false)}
        courseTitle={title}
        courseThumbnail={image}
        courseLink={link}
      />
    </>
  );
}
