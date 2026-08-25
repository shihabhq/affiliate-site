"use client";

import InlineOfferCard from "./InlineOfferCard";

type OfferCTAProps = {
  title: string;
  image: string;
  /** Affiliate link for this specific offer, e.g. "trk.udemy.com/xxxxx" */
  link: string;
  note?: string;
  buttonLabel?: string;
};

// Used inside blog post MDX as <OfferCTA title="..." image="..." link="..." /> —
// same card/modal as <CourseCTA />, for a bundle or sale that isn't a single
// catalog entry in src/data/courses.ts.
export default function OfferCTA(props: OfferCTAProps) {
  return <InlineOfferCard {...props} />;
}
