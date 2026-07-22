import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "How to Buy Udemy Course in Bangladesh (2026) — bKash, Nagad, Rocket or Card",
  description:
    "Complete guide: how to buy any Udemy course in Bangladesh — with bKash, Nagad, Rocket or a dollar card. Also covers buying Bangla Udemy courses, discounts, and payment methods. Step-by-step for beginners.",
  alternates: { canonical: `${siteConfig.domain}/how-to-buy` },
  openGraph: {
    title: "How to Buy Udemy Course in Bangladesh (2026)",
    description:
      "Buy Udemy courses in Bangladesh with bKash, Nagad, Rocket — no dollar card needed. Step-by-step guide with both methods.",
    url: `${siteConfig.domain}/how-to-buy`,
  },
};

const howToFaqs = [
  {
    question: "Is it safe to buy Udemy courses through your service?",
    answer:
      "Yes, completely safe. We are an official Udemy affiliate partner with 1000+ successful deliveries. Check our proofs page for real purchase screenshots.",
  },
  {
    question: "Do I get an official Udemy certificate?",
    answer:
      "Yes. Udemy issues an official certificate of completion once you finish the course — the same one you'd get buying directly on Udemy. Shareable on LinkedIn.",
  },
  {
    question: "How fast will I receive the course after paying with bKash?",
    answer:
      "Usually within 1–6 hours of confirming payment. In most cases much faster. Course access is sent to your email address.",
  },
  {
    question: "Can I pay with Nagad or Rocket instead of bKash?",
    answer:
      "Yes! We accept bKash, Nagad, and Rocket and even Bank Transfer. Just mention your preferred method when you message us.",
  },
  {
    question: "What is the BDT price of Udemy courses?",
    answer:
      "BDT prices depend on Udemy's current sale. Message us with the course name and we'll give you the exact price — no hidden fees.",
  },
  {
    question: "Do I need a Udemy account before ordering?",
    answer:
      "Yes, a free Udemy account at udemy.com with your email. It takes under two minutes to create.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy Udemy Course in Bangladesh Without a Dollar Card",
  description:
    "Step-by-step guide to buying Udemy courses in Bangladesh using bKash, Nagad, or Rocket — no international card needed.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose Your Course",
      text: "Browse our courses page and pick the Udemy course you want.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Message Us on WhatsApp or Facebook",
      text: `Send us the course name via WhatsApp (${siteConfig.phone}) or Facebook Messenger.`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Pay via bKash, Nagad, or Rocket",
      text: "Send payment to our number and share the transaction ID.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Receive Your Course",
      text: "We enroll the course on your Udemy account. Lifetime access + certificate.",
    },
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: howToFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. Can you help me?",
)}`;

function MessagingButtons({ context }: { context: string }) {
  const waContextLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
    `Hi! I want to buy a Udemy course with bKash. (via ${context})`,
  )}`;
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-5">
      <a
        href={waContextLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-6 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity text-center"
      >
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        Chat on WhatsApp
      </a>
      <a
        href={`${siteConfig.facebookMessage}?ref=${context}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-messenger text-white font-bold px-6 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity text-center"
      >
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.84 1.344 5.374 3.474 7.092V22l3.178-1.746A10.6 10.6 0 0 0 12 20.519c5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2Z" />
        </svg>
        Message on Facebook
      </a>
    </div>
  );
}

export default function HowToBuyPage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <JsonLd data={faqPageJsonLd} />

      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark">
              Home
            </Link>
            {" / "}
            <span className="text-dark font-medium">How to Buy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4 leading-tight">
            How to Buy Udemy Course in Bangladesh (2026)
          </h1>
          <div className="h-1 w-10 bg-purple-primary rounded-full mb-6" />

          <p className="text-gray-text leading-relaxed mb-8">
            Udemy requires a dollar or dual-currency card for direct payment —
            and most people in Bangladesh don&apos;t have one. The good news:
            there are two easy ways to buy any Udemy course from Bangladesh.
            Choose the method that suits you below.
          </p>

          {/* Quick pick */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <a
              href="#method-1-with-card"
              className="block border-2 border-purple-primary rounded-2xl p-5 hover:bg-purple-primary/5 transition-colors group"
            >
              <div className="text-2xl mb-2">💳</div>
              <h2 className="font-bold text-dark group-hover:text-purple-primary transition-colors">
                I have a dollar card
              </h2>
              <p className="text-sm text-gray-text mt-1">
                Buy directly on Udemy — get up to 90% off instantly
              </p>
            </a>
            <a
              href="#method-2-bkash"
              className="block border-2 border-whatsapp rounded-2xl p-5 hover:bg-green-50 transition-colors group"
            >
              <div className="text-2xl mb-2">📱</div>
              <h2 className="font-bold text-dark">I don&apos;t have a card</h2>
              <p className="text-sm text-gray-text mt-1">
                Pay with bKash, Nagad, or Rocket via WhatsApp / Facebook
              </p>
            </a>
          </div>

          {/* Method 1 */}
          <section className="mb-12" id="method-1-with-card">
            <h2 className="text-xl font-bold text-dark mb-1">
              Method 1: With a Dollar / Dual-Currency Card
            </h2>
            <div className="h-1 w-8 bg-purple-primary rounded-full mb-4" />
            <p className="text-gray-text mb-5 text-sm leading-relaxed">
              If you have a VISA or Mastercard with international transactions
              enabled, you can buy directly on Udemy at sale prices.
            </p>

            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Click Our Discount Link",
                  desc: 'Click "Get Discount on Udemy" — it opens Udemy with the best available sale price.',
                },
                {
                  n: "2",
                  title: "Find & Add Your Course to Cart",
                  desc: "Search for your course. During sales, most courses are $10–$20. Add to cart and go to checkout.",
                },
                {
                  n: "3",
                  title: "Pay with Your Card",
                  desc: "Enter your card details. Your bank may send an OTP. Payment is processed by Udemy directly.",
                },
                {
                  n: "4",
                  title: "Get Lifetime Access",
                  desc: "Udemy emails you confirmation immediately. Watch on any device, anytime. Certificate included.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex gap-4 bg-bg-light rounded-xl p-4 border border-gray-border"
                >
                  <div className="shrink-0 w-8 h-8 bg-purple-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <a
                href={siteConfig.affiliateLink}
                target="_blank"
                rel="sponsored noopener"
                className="inline-block bg-purple-primary hover:bg-purple-hover text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Get Discount on Udemy →
              </a>
            </div>
          </section>

          {/* Method 2 */}
          <section className="mb-12" id="method-2-bkash">
            <h2 className="text-xl font-bold text-dark mb-1">
              Method 2: Without a Card — Pay with bKash, Nagad, or Rocket
            </h2>
            <div className="h-1 w-8 bg-whatsapp rounded-full mb-4" />
            <p className="text-gray-text mb-1 text-sm leading-relaxed">
              This is the most popular method for Bangladeshi learners. Just
              message us — we handle the Udemy purchase, you pay in BDT.
            </p>
            <p className="text-purple-primary font-medium text-xs mb-5">
              বিকাশ/নগদ/রকেট দিয়ে পেমেন্ট করুন — কোনো ডলার কার্ড লাগবে না
            </p>

            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Choose Your Course",
                  desc: "Find a course on our site or tell us the Udemy course name / link.",
                },
                {
                  n: "2",
                  title: "Message Us",
                  desc: `Send us the course name, your email address, and preferred payment method via WhatsApp or Facebook Messenger.`,
                },
                {
                  n: "3",
                  title: "Pay in BDT",
                  desc: "We'll send you the current BDT price. Pay via bKash/Nagad/Rocket and share your TrxID.",
                },
                {
                  n: "4",
                  title: "Get Your Course",
                  desc: "We enroll the course on your Udemy account. Confirmation email from Udemy within 1–6 hours. Lifetime access + certificate.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex gap-4 bg-bg-light rounded-xl p-4 border border-gray-border"
                >
                  <div className="shrink-0 w-8 h-8 bg-whatsapp text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <MessagingButtons context="how-to-buy" />
          </section>

          {/* Why trust us */}
          <section
            className="mb-12 bg-bg-light rounded-2xl p-6 border border-gray-border"
            id="why-trust-us"
          >
            <h2 className="text-base font-bold text-dark mb-4">
              Why Trust Us?
            </h2>
            <ul className="space-y-2 text-sm text-gray-text">
              {[
                "Official Udemy affiliate partner",
                "1000+ successful course deliveries across Bangladesh",
                <>
                  Real purchase proofs on our{" "}
                  <Link
                    href="/proofs"
                    className="text-purple-primary hover:underline"
                  >
                    proofs page
                  </Link>
                </>,
                "Honest pricing — no fake discounts or hidden fees",
                "Fast response on WhatsApp and Messenger",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-green-price mt-0.5 shrink-0">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ block */}
          <section id="faq" className="mb-12">
            <h2 className="text-xl font-bold text-dark mb-1">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-8 bg-purple-primary rounded-full mb-6" />
            <FaqAccordion items={howToFaqs} />
          </section>

          {/* Bangla courses & popular topics */}
          <section className="mb-12" id="popular-courses-bangladesh">
            <h2 className="text-xl font-bold text-dark mb-1">
              Popular Udemy Courses in Bangladesh — What People Search Most
            </h2>
            <div className="h-1 w-8 bg-purple-primary rounded-full mb-4" />
            <p className="text-sm text-gray-text mb-5 leading-relaxed">
              Here are the most searched Udemy courses among Bangladeshi
              learners. All available through our bKash service — just tell us
              the course name.
            </p>
            <div className="space-y-2 text-sm text-gray-text">
              {[
                {
                  topic: "Web Development Course",
                  note: "HTML, CSS, JavaScript, React, Node.js — top pick for aspiring developers",
                  href: "/courses/web-development",
                },
                {
                  topic: "Digital Marketing Masterclass",
                  note: "SEO, Facebook Ads, Google Ads, email marketing — Bangla tutorials available",
                  href: "/courses/digital-marketing",
                },
                {
                  topic: "CPA Marketing Course",
                  note: "Earn online through cost-per-action marketing — very popular in BD",
                  href: "/courses/cpa-marketing",
                },
                {
                  topic: "SEO & Keyword Research",
                  note: "Rank websites on Google — essential for freelancers and business owners",
                  href: "/courses/digital-marketing",
                },
                {
                  topic: "Freelancing Course (Fiverr / Upwork)",
                  note: "Start earning online from Bangladesh without a dollar card for signup",
                  href: "/courses/freelancing",
                },
                {
                  topic: "Graphic Design (Photoshop, Figma)",
                  note: "UI/UX, logo design, branding — highly paid skill in Bangladesh",
                  href: "/courses/graphic-design",
                },
              ].map((item) => (
                <div
                  key={item.topic}
                  className="flex gap-3 items-start border border-gray-border rounded-xl p-3 bg-bg-light"
                >
                  <span className="text-green-price mt-0.5 shrink-0">✔</span>
                  <div>
                    <Link
                      href={item.href}
                      className="font-semibold text-dark hover:text-purple-primary transition-colors"
                    >
                      {item.topic}
                    </Link>
                    <p className="text-xs text-gray-text mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-text mt-4">
              Udemy also has courses taught in <strong>Bangla (Bengali)</strong>{" "}
              — just mention &ldquo;Bangla course&rdquo; when you message us and
              we&apos;ll help you find the right one.{" "}
              <span className="text-purple-primary">
                বাংলায় কোর্স পেতে আমাদের মেসেজ করুন।
              </span>
            </p>
          </section>

          {/* Final CTA block */}
          <div className="bg-dark text-white rounded-2xl p-7 text-center">
            <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
            <p className="text-gray-400 text-sm mb-5">
              Choose your method and start learning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.affiliateLink}
                target="_blank"
                rel="sponsored noopener"
                className="bg-purple-primary hover:bg-purple-hover text-white font-bold px-6 py-3 rounded-xl text-center transition-colors text-sm"
              >
                Get Discount on Udemy →
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white font-bold px-6 py-3 rounded-xl text-center hover:opacity-90 transition-opacity text-sm"
              >
                Buy with bKash via WhatsApp
              </a>
              <a
                href={`${siteConfig.facebookMessage}?ref=how-to-buy-cta`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-messenger text-white font-bold px-6 py-3 rounded-xl text-center hover:opacity-90 transition-opacity text-sm"
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
