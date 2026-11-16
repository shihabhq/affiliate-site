import type { Metadata } from "next";
import Link from "next/link";
import TestimonialGallery from "@/components/TestimonialGallery";
import JsonLd from "@/components/JsonLd";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Testimonials - What Our Customers Say | Udemy Course Bangladesh",
  description:
    "Read real testimonials from customers in Bangladesh who bought Udemy courses with bKash through Udemy Course Bangladesh - Facebook reviews and WhatsApp messages.",
  alternates: { canonical: `${siteConfig.domain}/testimonials` },
  openGraph: {
    title: "Testimonials - What Our Customers Say",
    description:
      "Real Facebook reviews and WhatsApp messages from customers in Bangladesh who bought Udemy courses with bKash through us.",
    url: `${siteConfig.domain}/testimonials`,
    images: [
      {
        url: "/assets/OG.png",
        width: 1904,
        height: 982,
        alt: "Udemy Course Bangladesh Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials - Udemy Course Bangladesh",
    description:
      "Real customer testimonials - Facebook reviews and WhatsApp messages from Bangladesh.",
    images: ["/assets/OG.png"],
  },
};

const testimonialsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Testimonials - What Our Customers Say",
  description:
    "Real Facebook reviews and WhatsApp thank-you messages from customers in Bangladesh who bought Udemy courses with bKash, Nagad, and Rocket.",
  url: `${siteConfig.domain}/testimonials`,
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={testimonialsJsonLd} />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark">
              Home
            </Link>
            {" / "}
            <span className="text-dark font-medium">Testimonials</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
            What Our Customers Say
          </h1>
          <p className="text-gray-text mb-4 max-w-2xl leading-relaxed">
            These are real Facebook reviews and WhatsApp thank-you messages
            from customers across Bangladesh who bought Udemy courses through
            us with bKash, Nagad, or Rocket - in their own words.
          </p>
          <p className="text-sm text-gray-text mb-8">
            Want to see the actual course deliveries too? Check our{" "}
            <Link href="/proofs" className="text-purple-primary font-semibold hover:underline">
              Purchase Proofs page
            </Link>
            .
          </p>

          <div className="bg-bg-light border border-gray-border p-4 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <p className="font-bold text-dark">
                Real feedback from real customers, and counting
              </p>
              <p className="text-sm text-gray-text">
                New testimonials added regularly as more customers share their experience.
              </p>
            </div>
            <a
              href={`${siteConfig.whatsappLink}?text=${encodeURIComponent("Hi! I read your customer testimonials and want to buy a Udemy course with bKash.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-whatsapp text-white font-semibold text-sm px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Order via WhatsApp
            </a>
          </div>

          <TestimonialGallery testimonials={testimonials} />

          <div className="mt-12 text-center bg-dark text-white p-8">
            <h2 className="text-xl font-bold mb-2">Ready to Join Them?</h2>
            <p className="text-gray-400 text-sm mb-6">
              Get your Udemy course delivered to your email - pay with bKash,
              Nagad, or Rocket.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/how-to-buy"
                className="bg-white text-dark font-bold px-6 py-3 hover:bg-gray-100 transition-colors text-sm"
              >
                How to Buy Guide
              </Link>
              <a
                href={`${siteConfig.whatsappLink}?text=${encodeURIComponent("Hi! I read your customer testimonials and want to buy a Udemy course with bKash.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white font-bold px-6 py-3 hover:opacity-90 transition-opacity text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
