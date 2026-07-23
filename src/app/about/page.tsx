import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us — Udemy Course Bangladesh",
  description:
    "Learn about Udemy Course Bangladesh — an independent Udemy affiliate service helping Bangladeshi learners buy Udemy courses with bKash, Nagad, and Rocket.",
  alternates: { canonical: `${siteConfig.domain}/about` },
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-dark">
            Home
          </Link>
          {" / "}
          <span className="text-dark font-medium">About</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/assets/main-logo.jpg"
            alt="Udemy Course Bangladesh Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-dark">About Us</h1>
            <p className="text-gray-text text-sm">Udemy Course Bangladesh</p>
          </div>
        </div>

        <div className="space-y-6 text-gray-text leading-relaxed">
          <p>
            <strong className="text-dark">Udemy Course Bangladesh</strong> is an
            independent Udemy affiliate business based in Bangladesh, created to
            help Bangladeshi students, freelancers, and professionals access
            world-class online education at affordable prices.
          </p>

          <p>
            We recognized a major barrier: most Bangladeshis cannot buy Udemy
            courses directly because Udemy requires an international dollar or
            dual-currency card — which the majority of people in Bangladesh
            don&apos;t have. Our service solves this problem. We act as an
            authorized affiliate reseller, handling the Udemy purchase on your
            behalf so you can pay in BDT using bKash, Nagad, Rocket, or any
            other local payment method you prefer.
          </p>

          <h2 className="text-xl font-bold text-dark mt-8">Our Mission</h2>
          <p>
            To make quality online education accessible to every learner in
            Bangladesh — regardless of whether they have an international card.
            We believe that access to world-class courses should not be limited
            by payment infrastructure, and we&apos;re working to bridge that gap
            every day.
          </p>

          <h2 className="text-xl font-bold text-dark mt-8">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access to 1,000+ Udemy courses across every category</li>
            <li>
              BDT payment via bKash, Nagad, Rocket — no dollar card needed
            </li>
            <li>Up to 80–90% discount during Udemy sales</li>
            <li>Fast delivery — course access to your email within hours</li>
            <li>
              Lifetime access and official Udemy certificate of completion
            </li>
            <li>
              Responsive customer support via WhatsApp and Facebook Messenger
            </li>
          </ul>

          <h2 className="text-xl font-bold text-dark mt-8">Our Track Record</h2>
          <p>
            We have served{" "}
            <strong className="text-dark">100+ happy learners</strong> across
            Bangladesh — from students in Dhaka to freelancers in Sylhet, and
            professionals in Chittagong and beyond. Our purchase proofs are
            publicly available on our{" "}
            <Link
              href="/proofs"
              className="text-purple-primary hover:underline"
            >
              proofs page
            </Link>{" "}
            for full transparency.
          </p>

          <h2 className="text-xl font-bold text-dark mt-8">
            Affiliate Disclosure
          </h2>
          <p>
            We are a registered affiliate partner of Udemy through the Impact
            affiliate network. When you purchase a course directly through our
            affiliate link (for those with dollar cards), we earn a small
            commission from Udemy — at no extra cost to you. This commission
            helps us maintain this website and service.
          </p>
          <p>
            We are <strong className="text-dark">not</strong> Udemy, Inc. and
            are not affiliated with or endorsed by Udemy in any official
            capacity beyond the affiliate program. Udemy is a trademark of
            Udemy, Inc.
          </p>

          <div className="bg-bg-light border border-gray-border rounded-lg p-6 mt-8">
            <h2 className="text-lg font-bold text-dark mb-3">Get in Touch</h2>
            <div className="space-y-2 text-sm">
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={siteConfig.whatsappLink}
                  className="text-purple-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsappNumber}
                </a>
              </p>
              <p>
                <strong>Facebook:</strong>{" "}
                <a
                  href={siteConfig.facebook}
                  className="text-purple-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/udemycoursebangladesh
                </a>
              </p>
              <p>
                <strong>Instagram:</strong>{" "}
                <a
                  href={siteConfig.instagram}
                  className="text-purple-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @udemybangladesh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
