"use client";

import { siteConfig } from "@/config/site";

const prefillMessage = encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. Can you help me?"
);

export default function FloatingWhatsApp() {
  const href = `${siteConfig.whatsappLink}?text=${prefillMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 bg-whatsapp text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
    >
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-white shrink-0"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.025 7.768L0 32l8.469-2.006A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.85l-.485-.288-5.026 1.19 1.218-4.904-.315-.503A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.981c-.398-.2-2.356-1.163-2.72-1.294-.364-.133-.63-.2-.895.2-.265.398-1.028 1.294-1.26 1.56-.232.266-.465.299-.863.1-.398-.2-1.68-.62-3.2-1.974-1.183-1.054-1.982-2.356-2.214-2.754-.232-.398-.025-.613.174-.812.178-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.698-.1-.2-.895-2.158-1.226-2.955-.323-.775-.65-.67-.895-.682-.232-.01-.498-.013-.763-.013s-.698.1-1.063.498c-.365.398-1.393 1.362-1.393 3.32s1.426 3.851 1.625 4.116c.2.265 2.806 4.282 6.796 6.003.95.41 1.692.655 2.27.838.954.303 1.822.26 2.508.158.765-.113 2.356-.964 2.688-1.894.332-.93.332-1.727.232-1.894-.1-.166-.365-.266-.763-.465z" />
      </svg>
      <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">
        Chat on WhatsApp
      </span>
      {/* Mobile tooltip */}
      <span className="sm:hidden absolute right-full mr-3 bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
