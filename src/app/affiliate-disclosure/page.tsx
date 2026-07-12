import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Udemy Course Bangladesh",
  description:
    "Affiliate disclosure for Udemy Course Bangladesh. Learn about our relationship with Udemy and how we earn commissions on purchases.",
  alternates: { canonical: `${siteConfig.domain}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-dark">Home</Link>
          {" / "}
          <span className="text-dark font-medium">Affiliate Disclosure</span>
        </nav>

        <h1 className="text-3xl font-bold text-dark mb-6">Affiliate Disclosure</h1>

        <div className="space-y-5 text-gray-text leading-relaxed text-sm">
          <p>
            <strong className="text-dark">Last updated: July 2026</strong>
          </p>

          <p>
            {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a participant in the Udemy
            affiliate program managed through the Impact affiliate network.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">What This Means</h2>
          <p>
            When you click on certain links on this website — specifically links labeled
            &quot;Get Discount on Udemy,&quot; &quot;Get up to 90% OFF on Udemy,&quot; or similar affiliate
            CTAs — and subsequently make a purchase on Udemy.com, we may earn an affiliate
            commission from Udemy, Inc.
          </p>
          <p>
            This commission comes at <strong className="text-dark">no extra cost to you</strong>.
            The price you pay on Udemy is the same whether you access it through our affiliate
            link or go directly to Udemy.com. In fact, our affiliate links often reflect
            Udemy&apos;s current sale prices, which can be up to 80–90% off the original price.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">Our Affiliate Relationship with Udemy</h2>
          <p>
            We are an independent affiliate — we do not work for Udemy, Inc. and are not
            employees or official representatives of Udemy in any capacity. The affiliate
            program simply allows us to earn a commission for referring customers to Udemy.
          </p>
          <p>
            Our affiliate links contain a tracking ID (visible in the URL) so Udemy can
            credit us for the referral if you make a purchase within the tracking window.
            All affiliate links on this site are marked with{" "}
            <code className="bg-gray-100 px-1 rounded text-xs">rel=&quot;sponsored noopener&quot;</code>{" "}
            per Google&apos;s webmaster guidelines for affiliate links.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">bKash / WhatsApp Assisted-Purchase Service</h2>
          <p>
            In addition to affiliate link referrals, we offer an assisted-purchase service
            for Bangladeshi customers who do not have a dollar or dual-currency card. In this
            service, we purchase a Udemy course on your behalf and enroll it on your Udemy
            account, in exchange for a BDT payment via bKash, Nagad, or Rocket. This service
            carries a small service fee.
          </p>
          <p>
            We are transparent about all pricing. We will always tell you the exact BDT
            price before you pay — there are no hidden charges.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">Editorial Independence</h2>
          <p>
            Our affiliate relationship with Udemy does not influence which courses we
            feature or how we describe them. We only promote courses we believe offer
            genuine value to Bangladeshi learners. We do not publish fake reviews, fake
            discounts, or fabricated coupon codes.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">FTC Compliance</h2>
          <p>
            In accordance with the Federal Trade Commission (FTC) guidelines and similar
            consumer protection norms, we are required to disclose when we have a material
            financial relationship with the companies whose products we link to. This page,
            along with the disclosure in our website footer, satisfies that requirement.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">Not Official Udemy</h2>
          <p>
            <strong className="text-dark">
              This is an independent affiliate website. We are not Udemy, Inc. and this
              site is not operated or endorsed by Udemy. Udemy is a trademark of Udemy,
              Inc. All course content, prices, and discounts are controlled by Udemy.
            </strong>
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">Contact</h2>
          <p>
            If you have questions about this disclosure, please contact us at:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>WhatsApp: {siteConfig.whatsappNumber}</li>
            <li>Facebook: <a href={siteConfig.facebook} className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/udemycoursebangladesh</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
