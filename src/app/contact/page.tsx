import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us — Udemy Course Bangladesh",
  description:
    "Contact Udemy Course Bangladesh via WhatsApp, Facebook Messenger, or Facebook page to buy Udemy courses with bKash payment in Bangladesh.",
  alternates: { canonical: `${siteConfig.domain}/contact` },
};

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. Can you help me?"
)}`;

export default function ContactPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-dark">Home</Link>
          {" / "}
          <span className="text-dark font-medium">Contact</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-gray-text mb-8 leading-relaxed">
          Have a question about buying a Udemy course in Bangladesh? Want to place an
          order? Reach us through any of the channels below — we respond quickly on
          WhatsApp and Facebook Messenger.
        </p>

        <div className="space-y-4">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" aria-hidden="true">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.025 7.768L0 32l8.469-2.006A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.274 19.352c-.398-.2-2.356-1.163-2.72-1.294-.364-.133-.63-.2-.895.2-.265.398-1.028 1.294-1.26 1.56-.232.266-.465.299-.863.1-.398-.2-1.68-.62-3.2-1.974-1.183-1.054-1.982-2.356-2.214-2.754-.232-.398-.025-.613.174-.812.178-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.698-.1-.2-.895-2.158-1.226-2.955-.323-.775-.65-.67-.895-.682-.232-.01-.498-.013-.763-.013s-.698.1-1.063.498c-.365.398-1.393 1.362-1.393 3.32s1.426 3.851 1.625 4.116c.2.265 2.806 4.282 6.796 6.003.95.41 1.692.655 2.27.838.954.303 1.822.26 2.508.158.765-.113 2.356-.964 2.688-1.894.332-.93.332-1.727.232-1.894-.1-.166-.365-.266-.763-.465z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-dark group-hover:text-whatsapp transition-colors">WhatsApp</h2>
              <p className="text-sm text-gray-text">{siteConfig.whatsappNumber}</p>
              <p className="text-xs text-gray-text mt-1">
                Fastest response — tap to open WhatsApp and start chatting
              </p>
            </div>
          </a>

          {/* Facebook Messenger */}
          <a
            href={`${siteConfig.facebookMessage}?ref=contact`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-messenger rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242C9.636 21.97 10.803 22.222 12 22.222c6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.194 14.963L10.5 12.103l-5.37 2.86 5.896-6.26 2.727 2.86 5.34-2.86-5.9 6.26z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-dark group-hover:text-messenger transition-colors">Facebook Messenger</h2>
              <p className="text-sm text-gray-text">m.me/udemycoursebangladesh</p>
              <p className="text-xs text-gray-text mt-1">
                Message us directly on Facebook Messenger
              </p>
            </div>
          </a>

          {/* Facebook Page */}
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-dark group-hover:text-blue-600 transition-colors">Facebook Page</h2>
              <p className="text-sm text-gray-text">facebook.com/udemycoursebangladesh</p>
              <p className="text-xs text-gray-text mt-1">
                Follow our page for deals, updates, and course announcements
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-pink-50 border border-pink-200 rounded-lg p-5 hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-dark group-hover:text-pink-500 transition-colors">Instagram</h2>
              <p className="text-sm text-gray-text">@udemybangladesh</p>
              <p className="text-xs text-gray-text mt-1">
                Follow us on Instagram for course tips and deals
              </p>
            </div>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Office address */}
          <div className="bg-bg-light border border-gray-border rounded-xl p-5 flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-dark mb-1">Office Address</h2>
              <p className="text-sm text-gray-text leading-relaxed">{siteConfig.address}</p>
            </div>
          </div>

          {/* Business hours */}
          <div className="bg-bg-light border border-gray-border rounded-xl p-5 flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-dark mb-1">Business Hours</h2>
              <p className="text-sm text-gray-text">
                Available on WhatsApp & Messenger <strong>7 days a week</strong>. Typically respond within a few hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
