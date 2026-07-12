import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "All Courses", href: "/courses" },
  { label: "How to Buy", href: "/how-to-buy" },
  { label: "Purchase Proofs", href: "/proofs" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/assets/main-logo.jpg"
                alt="Udemy Course Bangladesh"
                width={120}
                height={40}
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Helping students and professionals in Bangladesh access world-class
              Udemy courses — with bKash, Nagad, and Rocket payment. No dollar
              card needed.
            </p>
            {/* Address */}
            <div className="flex items-start gap-2 mt-4 mb-4">
              <svg className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              <p className="text-gray-400 text-sm leading-relaxed">{siteConfig.address}</p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Payment */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              We Accept
            </h3>
            <div className="flex flex-wrap gap-2">
              {["bKash", "Nagad", "Rocket", "Bank Transfer"].map((method) => (
                <span
                  key={method}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 space-y-4">
          {/* Affiliate disclosure */}
          <p className="text-gray-400 text-xs leading-relaxed">
            <strong className="text-gray-300">Affiliate Disclosure:</strong> We
            are a Udemy affiliate. We may earn a commission when you purchase
            through our links — at no extra cost to you. See our{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-white">
              full disclosure
            </Link>
            .
          </p>
          {/* Not-official disclaimer */}
          <p className="text-gray-500 text-xs leading-relaxed">
            This is an independent affiliate website. We are not Udemy, Inc.
            and this site is not operated or endorsed by Udemy. Udemy is a
            trademark of Udemy, Inc. All course content, prices, and discounts
            are controlled by Udemy.
          </p>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
