import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PaymentMethods from "@/components/PaymentMethods";
import FinalCTA from "@/components/FinalCTA";
import SectionHeading from "@/components/SectionHeading";
import CourseGrid from "@/components/CourseGrid";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { courses, proofs, faqs } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Buy Udemy Courses in Bangladesh — Up to 90% OFF | bKash · Nagad · Rocket",
  description:
    "Buy any Udemy course in Bangladesh — web development, digital marketing, graphic design, data science & more. Pay with bKash, Nagad, Rocket. No dollar card needed. Up to 90% off. 1000+ happy learners.",
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
    description:
      "Pay with bKash, Nagad, Rocket — no dollar card needed. Web development, digital marketing, CPA marketing, graphic design and 100s more Udemy courses available in BD.",
    url: siteConfig.domain,
    images: [
      {
        url: `${siteConfig.domain}/assets/main-logo.jpg`,
        alt: "Udemy Course Bangladesh — Buy Udemy with bKash",
      },
    ],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.domain}/#webpage`,
  url: siteConfig.domain,
  name: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
  description:
    "Buy any Udemy course in Bangladesh with bKash, Nagad, Rocket — no dollar card needed.",
  isPartOf: { "@id": `${siteConfig.domain}/#website` },
  about: { "@id": `${siteConfig.domain}/#organization` },
};

const featuredCourses = courses.slice(0, 8);
const previewProofs = proofs.slice(0, 6);
const homeFaqs = faqs.slice(0, 5);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust bar */}
      <TrustBar />

      {/* 3. Featured courses */}
      <section className="py-16 px-4 bg-white" id="featured-courses">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Featured Courses — Up to 90% OFF"
            subtitle="Top-rated Udemy courses available in Bangladesh. Pay with bKash, Nagad, or Rocket — no dollar card needed."
          />
          <CourseGrid courses={featuredCourses} />
          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-block border-2 border-purple-primary text-purple-primary hover:bg-purple-primary hover:text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <HowItWorks />

      {/* 5. Payment methods */}
      <PaymentMethods />

      {/* 6. Proof preview */}
      <section className="py-16 px-4 bg-bg-light" id="proof-preview">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Real Purchase Proofs from Our Customers"
            subtitle="These are genuine Udemy course deliveries to real customers in Bangladesh who paid via bKash, Nagad, and Rocket."
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {previewProofs.map((filename) => (
              <div
                key={filename}
                className="relative aspect-square rounded-lg overflow-hidden border border-gray-border bg-gray-100"
              >
                <Image
                  src={`/proofs/${filename}`}
                  alt={`Purchase proof — ${filename.replace(/\.[^.]+$/, "")} Udemy course delivery Bangladesh`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/proofs"
              className="inline-block bg-dark text-white font-semibold px-8 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              See All Proofs →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ preview */}
      <section className="py-16 px-4 bg-white" id="faq-preview">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about buying Udemy courses in Bangladesh."
            centered
          />
          <FaqAccordion items={homeFaqs} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCTA />
    </>
  );
}
