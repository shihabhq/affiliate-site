import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Udemy Course Bangladesh",
  description:
    "Privacy policy for Udemy Course Bangladesh. How we collect, use, and protect your information.",
  alternates: { canonical: `${siteConfig.domain}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-dark">
            Home
          </Link>
          {" / "}
          <span className="text-dark font-medium">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-dark mb-6">Privacy Policy</h1>

        <div className="space-y-5 text-gray-text leading-relaxed text-sm">
          <p>
            <strong className="text-dark">Last updated: July 2026</strong>
          </p>

          <p>
            This Privacy Policy describes how {siteConfig.name} (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
            information when you visit our website at{" "}
            <span className="text-purple-primary">{siteConfig.domain}</span>.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            Information We Collect
          </h2>
          <p>
            <strong className="text-dark">
              Information you provide voluntarily:
            </strong>{" "}
            When you contact us via WhatsApp or Facebook Messenger to order a
            course, you share your name, phone number, email address, and
            payment confirmation. We use this information solely to process your
            order.
          </p>
          <p>
            <strong className="text-dark">
              Automatically collected information:
            </strong>{" "}
            Our website uses standard web analytics tools (such as those built
            into our hosting platform) that may collect information like your IP
            address, browser type, pages visited, and time on page. This data is
            aggregated and anonymous — we cannot identify individual users from
            this data.
          </p>
          <p>
            <strong className="text-dark">Cookies:</strong> Our website may use
            essential cookies required for the site to function (e.g.,
            remembering user preferences). We do not use advertising tracking
            cookies or third-party ad networks on this site.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              To process your Udemy course order and deliver it to your email
            </li>
            <li>To respond to your inquiries on WhatsApp/Messenger</li>
            <li>To improve our website and service based on usage patterns</li>
            <li>To comply with legal obligations if required</li>
          </ul>

          <h2 className="text-lg font-bold text-dark mt-6">
            Information Sharing
          </h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties, except in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong className="text-dark">Udemy:</strong> We share your email
              address with Udemy solely to enroll your purchased course.
              Udemy&apos;s own privacy policy governs how they handle your data.
            </li>
            <li>
              <strong className="text-dark">Legal requirements:</strong> If
              required by law, court order, or government authority.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-dark mt-6">
            Third-Party Links
          </h2>
          <p>
            Our website contains links to Udemy.com, Facebook, WhatsApp, and
            Instagram. These third-party websites have their own privacy
            policies, and we are not responsible for their privacy practices. We
            encourage you to review their policies before providing personal
            information.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">Data Security</h2>
          <p>
            We take reasonable steps to protect your information. However, no
            method of internet transmission is 100% secure. Order-related
            information shared via WhatsApp and Messenger is protected by the
            end-to-end encryption those platforms provide.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            Children&apos;s Privacy
          </h2>
          <p>
            This website is not directed to children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date.
          </p>

          <h2 className="text-lg font-bold text-dark mt-6">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us via:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>WhatsApp: {siteConfig.whatsappNumber}</li>
            <li>
              Facebook:{" "}
              <a
                href={siteConfig.facebook}
                className="text-purple-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/udemycoursebangladesh
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
