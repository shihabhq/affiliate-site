import type { Metadata } from "next";
import Link from "next/link";
import ProofGallery from "@/components/ProofGallery";
import JsonLd from "@/components/JsonLd";
import { proofs } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Purchase Proofs — Real Udemy Course Deliveries in Bangladesh",
  description:
    "See real purchase proofs from 1000+ happy customers in Bangladesh who bought Udemy courses with bKash, Nagad, and Rocket through Udemy Course Bangladesh.",
  alternates: { canonical: `${siteConfig.domain}/proofs` },
  openGraph: {
    title: "Purchase Proofs — Real Udemy Course Deliveries in Bangladesh",
    description:
      "1000+ real customers in Bangladesh bought Udemy courses with bKash through us. See the proofs.",
    url: `${siteConfig.domain}/proofs`,
    images: [{ url: "/assets/OG.png", width: 1904, height: 982, alt: "Udemy Purchase Proofs Bangladesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Udemy Purchase Proofs — Bangladesh",
    description: "1000+ real customers bought Udemy courses with bKash. See proof screenshots.",
    images: ["/assets/OG.png"],
  },
};

const proofsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Purchase Proofs — Real Udemy Course Deliveries in Bangladesh",
  description:
    "Real screenshots of Udemy course deliveries to customers in Bangladesh who paid via bKash, Nagad, and Rocket.",
  url: `${siteConfig.domain}/proofs`,
};

export default function ProofsPage() {
  return (
    <>
      <JsonLd data={proofsJsonLd} />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark">
              Home
            </Link>
            {" / "}
            <span className="text-dark font-medium">Purchase Proofs</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4">
            Real Purchase Proofs from Our Customers in Bangladesh
          </h1>
          <p className="text-gray-text mb-4 max-w-2xl leading-relaxed">
            These are genuine screenshots of Udemy course deliveries to real
            customers across Bangladesh — from Dhaka to Chittagong, Sylhet to
            Rajshahi. Every single one of these learners paid in BDT via bKash,
            Nagad, or Rocket and received their course with lifetime access and
            a certificate.
          </p>
          <p className="text-sm text-gray-text mb-8">
            Wondering if our service is legitimate? These proofs speak for
            themselves. Click any image to see it larger, then message us when
            you&apos;re ready to order.
          </p>

          <div className="bg-bg-light border border-gray-border rounded-lg p-4 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <p className="font-bold text-dark">
                 Huge delivery proofs given to our customers and counting
              </p>
              <p className="text-sm text-gray-text">
                New proofs added regularly as more customers receive their
                courses.
              </p>
            </div>
            <a
              href={`${siteConfig.whatsappLink}?text=${encodeURIComponent("Hi! I saw your purchase proofs and want to buy a Udemy course with bKash.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-whatsapp text-white font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Order via WhatsApp
            </a>
          </div>

          <ProofGallery proofs={proofs} />

          <div className="mt-12 text-center bg-dark text-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-2">Ready to Join Them?</h2>
            <p className="text-gray-400 text-sm mb-6">
              Get your Udemy course delivered to your email — pay with bKash,
              Nagad, or Rocket.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/how-to-buy"
                className="bg-white text-dark font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm"
              >
                How to Buy Guide
              </Link>
              <a
                href={`${siteConfig.whatsappLink}?text=${encodeURIComponent("Hi! I saw your purchase proofs and want to buy a Udemy course with bKash.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity text-sm"
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
