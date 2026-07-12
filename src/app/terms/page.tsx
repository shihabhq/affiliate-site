import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use — Udemy Course Bangladesh",
  description:
    "Terms of use for the Udemy Course Bangladesh website and bKash course purchase service.",
  alternates: { canonical: `${siteConfig.domain}/terms` },
};

export default function TermsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-dark">
            Home
          </Link>
          {" / "}
          <span className="text-dark font-medium">Terms of Use</span>
        </nav>

        <h1 className="text-3xl font-bold text-dark mb-6">Terms of Use</h1>

        <div className="space-y-5 text-gray-text leading-relaxed text-sm">
          <p>
            <strong className="text-dark">Last updated: July 2026</strong>
          </p>

          <p>
            By using the {siteConfig.name} website (&quot;{siteConfig.domain}
            &quot;) or our assisted-purchase service, you agree to these Terms
            of Use. Please read them carefully.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">1. Who We Are</h2>
          <p>
            {siteConfig.name} is an independent Udemy affiliate business based
            in Bangladesh. We are not Udemy, Inc. and are not affiliated with or
            endorsed by Udemy beyond the affiliate program. Udemy is a trademark
            of Udemy, Inc.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">2. Our Services</h2>
          <p>We provide two services:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong className="text-dark">Affiliate referrals:</strong> We
              link to Udemy courses through affiliate links. When you purchase
              through our links, we may earn a commission at no cost to you.
            </li>
            <li>
              <strong className="text-dark">Assisted purchases:</strong> For
              customers without a dollar card, we purchase Udemy courses on your
              behalf and enroll them on your account, in exchange for BDT
              payment via bKash, Nagad, or Rocket.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-dark mt-6">
            3. Pricing and Payment
          </h2>
          <p>
            Udemy course prices change based on Udemy&apos;s promotions. We will
            always tell you the exact BDT price before you pay for an assisted
            purchase. Prices we quote reflect Udemy&apos;s current sale price
            plus our service fee. Once you confirm payment, the price is final.
          </p>
          <p>
            We cannot guarantee that a specific discount percentage will always
            be available — Udemy controls its own pricing and promotions. We
            describe discounts as &quot;up to 80–90% off&quot; because that is
            the range during Udemy&apos;s regular sales, not a guaranteed fixed
            discount.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">4. Delivery</h2>
          <p>
            For assisted purchases, we aim to enroll your course within 1–6
            hours of payment confirmation. Delivery times may vary. We are not
            liable for delays caused by Udemy platform issues or factors outside
            our control.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">5. Refunds</h2>
          <p>
            Once a Udemy course has been enrolled on your account, it cannot be
            returned or exchanged. Please verify the course name, instructor,
            and your email address carefully before payment. If we make an error
            (wrong course enrolled), we will correct it at no additional charge.
          </p>
          <p>
            For affiliate link purchases, Udemy&apos;s own refund policy applies
            (typically 30-day refund for most courses). We have no control over
            Udemy&apos;s refund decisions.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            6. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Use our service to purchase courses for commercial resale</li>
            <li>
              Share purchased course credentials with others (violates Udemy
              ToS)
            </li>
            <li>
              Provide false payment information or fraudulent transaction IDs
            </li>
            <li>
              Use our website in any way that violates applicable laws in
              Bangladesh
            </li>
          </ul>

          <h2 className="text-lg font-bold text-dark mt-6">
            7. Disclaimer of Warranties
          </h2>
          <p>
            This website and service are provided &quot;as is&quot; without
            warranties of any kind. Course content quality and availability are
            controlled entirely by Udemy, Inc. We make no representations about
            course outcomes or results.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, {siteConfig.name} is not
            liable for any indirect, incidental, or consequential damages
            arising from use of our website or services. Our total liability
            shall not exceed the amount you paid for the specific order in
            question.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            9. Changes to Terms
          </h2>
          <p>
            We may update these Terms of Use at any time. Continued use of our
            website after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">10. Contact</h2>
          <p>
            Questions about these terms? Contact us via WhatsApp at{" "}
            {siteConfig.whatsappNumber} or on{" "}
            <a
              href={siteConfig.facebook}
              className="text-purple-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
