"use client";

// Centralized affiliate link component.
// Enforces rel="sponsored nofollow noopener" and target="_blank" on every render.
// Import this everywhere an affiliate link to Udemy is needed — never write a raw <a> to the affiliate URL.

import { siteConfig } from "@/config/site";

interface AffiliateLinkProps {
  className?: string;
  children: React.ReactNode;
  /** Optional click handler — use to close modals/drawers after the link is tapped */
  onClick?: () => void;
  /** Optional course-specific affiliate link (e.g. a course's own trk.udemy.com link).
   * Falls back to the site-wide affiliateLink when not provided. */
  href?: string;
}

export default function AffiliateLink({
  className,
  children,
  onClick,
  href,
}: AffiliateLinkProps) {
  return (
    <a
      href={href || siteConfig.affiliateLink}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
