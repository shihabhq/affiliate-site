import type { Metadata } from "next";
import Link from "next/link";
import CourseGrid from "@/components/CourseGrid";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { courses } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Udemy Free Courses & Discounts in Bangladesh — Up to 90% OFF (2026)",
  description:
    "Looking for Udemy free courses or 100% off coupons in Bangladesh? Get Udemy courses at up to 90% off — pay with bKash, Nagad, or Rocket. No dollar card needed. Web development, digital marketing, CPA marketing & more.",
  alternates: { canonical: `${siteConfig.domain}/free-courses` },
  openGraph: {
    title: "Udemy Free Courses & Discounts in Bangladesh — Up to 90% OFF",
    description:
      "Get heavily discounted Udemy courses in Bangladesh. Pay with bKash — no dollar card needed. Web dev, digital marketing, CPA marketing and 100s more.",
    url: `${siteConfig.domain}/free-courses`,
  },
};

const faqItems = [
  {
    question: "Are there really free Udemy courses in Bangladesh?",
    answer:
      "Udemy offers a small number of genuinely free courses. However, most premium courses (the ones with certificates, projects, and instructor support) are paid. The good news: during Udemy's frequent sales, courses can be up to 90% off — sometimes as low as $10–$15 (around ৳1,000–৳1,500 BDT). That's almost free for a lifetime-access course with certificate! We always share the best current discount. Message us on WhatsApp to get today's BDT price for any course.",
  },
  {
    question: "What is a Udemy 100% off coupon code? Do they work in Bangladesh?",
    answer:
      "Udemy 100% off coupon codes are special codes that instructors occasionally share to give free access to their courses. However, these codes expire within hours, are limited to a few hundred users, and are mostly available for low-demand courses. Instead of hunting expired coupons, use Udemy's official sales — you get the same result (very low prices) reliably. Our service helps you buy during sales with bKash at the best current BDT price.",
  },
  {
    question: "Can I get a free Udemy course with certificate?",
    answer:
      "Free Udemy courses (the genuinely free ones) do offer certificates of completion. For paid courses bought during sales, you also get an official Udemy certificate — shareable on LinkedIn. When you buy through our bKash service, you get lifetime access + the same official certificate as buying directly.",
  },
  {
    question: "How do I get Udemy courses at the lowest price in Bangladesh?",
    answer:
      "The best way is: (1) Use our affiliate discount link which always links to the current Udemy sale price — up to 90% off. (2) If you don't have a dollar card, message us on WhatsApp and we'll give you today's BDT price for bKash payment. Udemy runs sales almost constantly so the discount is almost always active.",
  },
  {
    question: "Which Udemy courses are most popular in Bangladesh?",
    answer:
      "The most searched Udemy courses in Bangladesh are: web development bootcamp, digital marketing masterclass, CPA marketing, SEO and keyword research, graphic design (Photoshop/Figma), Python programming, Microsoft Excel, and freelancing courses. All are available through our bKash service.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I'm looking for a discounted Udemy course. Can you help me with today's BDT price?",
)}`;

const featuredCourses = courses.slice(0, 8);

export default function FreeCoursesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark">
              Home
            </Link>
            {" / "}
            <span className="text-dark font-medium">
              Udemy Free Courses &amp; Discounts
            </span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4 leading-tight">
            Udemy Free Courses &amp; Discounts in Bangladesh (2026)
          </h1>
          <div className="h-1 w-10 bg-purple-primary rounded-full mb-6" />

          {/* Intro */}
          <div className="prose prose-sm max-w-none text-gray-text leading-relaxed mb-10 space-y-4">
            <p>
              Searching for <strong>Udemy free courses</strong> or a{" "}
              <strong>100% off coupon code</strong> in Bangladesh? You&apos;re
              not alone — thousands of Bangladeshi learners search for this
              every day. Here&apos;s the honest truth and the smartest way to
              get Udemy courses at the lowest possible price.
            </p>
            <p>
              Udemy offers a small number of genuinely free courses, but the
              premium courses — the ones with hands-on projects, certificates,
              and instructor Q&amp;A — are paid. <strong>However</strong>,
              Udemy runs aggressive sales almost every week where courses drop
              to up to <strong>90% off</strong>. A course originally priced at
              $199 can come down to just $10–$15{" "}
              <span className="text-purple-primary font-medium">
                (roughly ৳1,000–৳1,500 BDT)
              </span>{" "}
              — that&apos;s essentially the price of a cup of coffee for
              lifetime access and an official certificate.
            </p>
          </div>

          {/* Two-path highlight box */}
          <div className="bg-bg-light border border-gray-border rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-bold text-dark mb-4">
              Get the Best Udemy Discount — Two Ways
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-border rounded-xl p-4">
                <div className="text-2xl mb-2">💳</div>
                <h3 className="font-bold text-dark text-sm mb-1">
                  Have a Dollar / Dual-Currency Card?
                </h3>
                <p className="text-xs text-gray-text mb-3 leading-relaxed">
                  Click our discount link — it takes you directly to Udemy with
                  the best available sale price (up to 90% off). Pay in USD
                  with your card.
                </p>
                <a
                  href={siteConfig.affiliateLink}
                  target="_blank"
                  rel="sponsored noopener"
                  className="block text-center bg-purple-primary hover:bg-purple-hover text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors"
                >
                  Get Discount on Udemy →
                </a>
              </div>
              <div className="bg-white border border-gray-border rounded-xl p-4">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-bold text-dark text-sm mb-1">
                  No Card? Pay with bKash / Nagad
                </h3>
                <p className="text-xs text-gray-text mb-3 leading-relaxed">
                  Message us the course name on WhatsApp or Facebook. We&apos;ll
                  give you today&apos;s BDT price. Pay via bKash/Nagad/Rocket
                  and get lifetime access on your email.
                  <span className="block mt-1 text-purple-primary">
                    বিকাশ/নগদ দিয়ে পেমেন্ট করুন — কোনো ডলার কার্ড লাগবে না
                  </span>
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-whatsapp hover:opacity-90 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-opacity"
                >
                  Ask Today&apos;s Price on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* About 100% off coupons — honest section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-dark mb-3">
              The Truth About Udemy 100% Off Coupon Codes
            </h2>
            <div className="space-y-3 text-sm text-gray-text leading-relaxed">
              <p>
                Udemy 100% off coupons <em>do</em> exist — instructors
                occasionally release them to boost enrollment. But they come
                with big limitations:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>They expire within 1–3 days (sometimes hours)</li>
                <li>
                  Limited to 100–500 redemptions — gone by the time most people
                  find them
                </li>
                <li>
                  Usually for newer or less popular courses, not the top-rated
                  bootcamps
                </li>
                <li>
                  Many sites sharing "coupon codes" are outdated or scams
                </li>
              </ul>
              <p>
                <strong>Our recommendation:</strong> Instead of hunting coupons,
                use Udemy&apos;s official sale prices which are active almost
                24/7. A $10–$15 course with 90% off is just as good as a free
                coupon — and far more reliable.
              </p>
            </div>
          </section>

          {/* Popular categories */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-dark mb-2">
              Most Searched Udemy Courses in Bangladesh
            </h2>
            <p className="text-sm text-gray-text mb-5 leading-relaxed">
              These are the course categories Bangladeshi learners search most.
              All available through our bKash service.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                {
                  label: "Web Development",
                  href: "/courses/web-development",
                  emoji: "💻",
                },
                {
                  label: "Digital Marketing & SEO",
                  href: "/courses/digital-marketing",
                  emoji: "📈",
                },
                {
                  label: "CPA Marketing",
                  href: "/courses/cpa-marketing",
                  emoji: "💰",
                },
                {
                  label: "Graphic Design",
                  href: "/courses/graphic-design",
                  emoji: "🎨",
                },
                {
                  label: "Freelancing",
                  href: "/courses/freelancing",
                  emoji: "🏠",
                },
                {
                  label: "Python & Data Science",
                  href: "/courses/data-science",
                  emoji: "🤖",
                },
              ].map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="flex items-center gap-2 border border-gray-border rounded-xl p-3 hover:border-purple-primary hover:bg-purple-primary/5 transition-colors text-sm font-medium text-dark"
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Featured courses */}
        <div className="max-w-7xl mx-auto mb-12">
          <SectionHeading
            title="Top Udemy Courses — Available in Bangladesh"
            subtitle="Browse our top picks. All courses available with bKash payment — no dollar card needed."
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

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark mb-1">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-8 bg-purple-primary rounded-full mb-6" />
          <FaqAccordion items={faqItems} />

          {/* Final CTA */}
          <div className="mt-10 bg-dark text-white rounded-2xl p-7 text-center">
            <h2 className="text-lg font-bold mb-2">
              Ready to Buy a Udemy Course in Bangladesh?
            </h2>
            <p className="text-gray-400 text-sm mb-5">
              Don&apos;t wait for a coupon. Get today&apos;s best price — up to
              90% off — right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.affiliateLink}
                target="_blank"
                rel="sponsored noopener"
                className="bg-purple-primary hover:bg-purple-hover text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Get Discount on Udemy →
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Buy with bKash via WhatsApp
              </a>
              <a
                href={`${siteConfig.facebookMessage}?ref=free-courses-cta`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-messenger text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
