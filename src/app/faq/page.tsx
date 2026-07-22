import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ — Udemy Bangladesh | bKash Payment, Free Courses, Certificates & More",
  description:
    "Answers to all common questions about buying Udemy courses in Bangladesh — bKash/Nagad payment, free courses, coupon codes, CPA marketing, Bangla tutorials, certificates, BDT pricing & more.",
  alternates: { canonical: `${siteConfig.domain}/faq` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark">Home</Link>
            {" / "}
            <span className="text-dark font-medium">FAQ</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-text mb-10 leading-relaxed">
            Got questions about buying Udemy courses in Bangladesh with bKash?
            We&apos;ve answered the most common questions below. If you don&apos;t find
            your answer here, just message us on{" "}
            <a href={siteConfig.whatsappLink} className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={siteConfig.facebookMessage} className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Facebook Messenger
            </a>
            .
          </p>

          <FaqAccordion items={faqs} />

          <div className="mt-12 bg-bg-light border border-gray-border rounded-lg p-6 text-center">
            <h2 className="text-lg font-bold text-dark mb-2">
              Still have questions?
            </h2>
            <p className="text-sm text-gray-text mb-4">
              We&apos;re here to help. Message us anytime on WhatsApp or Facebook Messenger.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`${siteConfig.whatsappLink}?text=${encodeURIComponent("Hi! I have a question about buying a Udemy course in Bangladesh.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                Ask on WhatsApp
              </a>
              <a
                href={siteConfig.facebookMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-messenger text-white font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                Ask on Messenger
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
