import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PaymentMethods from "@/components/PaymentMethods";
import FinalCTA from "@/components/FinalCTA";
import SectionHeading from "@/components/SectionHeading";
import CourseGrid from "@/components/CourseGrid";
import YouTubeFacade from "@/components/YouTubeFacade";
import ProofGallery from "@/components/ProofGallery";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { courses, proofs, faqs } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Buy Udemy Courses in Bangladesh — Up to 90% OFF | bKash · Nagad · Rocket",
  description:
    "Buy any Udemy course in Bangladesh or from Bangladesh — web development, digital marketing, graphic design, data science & more. Pay with bKash, Nagad, Rocket. No dollar card needed. Up to 90% off.",
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
    description:
      "Pay with bKash, Nagad, Rocket — no dollar card needed. Web development, digital marketing, CPA marketing, graphic design and 100s more Udemy courses available in BD.",
    url: siteConfig.domain,
    images: [
      {
        url: "/assets/OG.png",
        width: 1904,
        height: 982,
        alt: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
    description:
      "Pay with bKash, Nagad, Rocket — no dollar card needed. Up to 90% off.",
    images: ["/assets/OG.png"],
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

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, 5).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const howToBuyVideoTitle =
  "How to buy Udemy course in Bangladesh | বিকাশে ইউডেমি কোর্স কিনুন। Buy Udemy Course by bkash from BD";

const featuredCourses = courses.slice(0, 8);
const previewProofs = proofs.slice(0, 12);
const homeFaqs = faqs.slice(0, 5);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <JsonLd data={homeFaqJsonLd} />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust bar */}
      <TrustBar />

      {/* 3. Video walkthrough */}
      <section className="py-16 px-4 bg-bg-light" id="how-to-buy-video">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Watch: How to Buy a Udemy Course in Bangladesh"
            subtitle="A short walkthrough of buying udemy course"
            centered
          />
          <YouTubeFacade videoId="CGtzQ0u9idI" title={howToBuyVideoTitle} />
          <div className="mt-6 text-center">
            <a
              href={`${siteConfig.whatsappLink}?text=${encodeURIComponent("Hi! I watched your video on how to buy a Udemy course in Bangladesh. I don't have a dollar card. How can I pay with bKash?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp text-white font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Message on WhatsApp
            </a>
            <p className="mt-2 text-sm text-gray-text">
              বিকাশ দিয়ে পেমেন্ট করুন — কোনো ডলার কার্ড লাগবে না
            </p>
          </div>
          <p className="mt-6 text-center text-sm text-gray-text">
            Prefer to read? See the{" "}
            <Link
              href="/how-to-buy"
              className="text-purple-primary font-semibold hover:underline"
            >
              full step-by-step guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 4. Featured courses */}
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
          <ProofGallery proofs={previewProofs} variant="preview" />
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
