import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WelcomeModal from "@/components/WelcomeModal";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE = {
  url: "/assets/OG.png",
  width: 1904,
  height: 982,
  alt: "Buy Udemy Courses in Bangladesh — Up to 90% OFF | bKash · Nagad · Rocket",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),

  // ── Titles ──────────────────────────────────────────────────────────
  title: {
    template: "%s | Udemy Course Bangladesh",
    default: "Buy Udemy Courses in Bangladesh — Up to 90% OFF | bKash Accepted",
  },

  // ── Description ─────────────────────────────────────────────────────
  description:
    "Buy Udemy courses in Bangladesh with bKash, Nagad, Rocket — no dollar card needed. Up to 90% off on web development, digital marketing, graphic design & more. 1000+ happy learners.",

  // ── Canonical & alternates ───────────────────────────────────────────
  alternates: { canonical: siteConfig.domain },

  // ── Keywords (helps Bing, minor signal for Google) ──────────────────
  keywords: [
    "buy udemy course bangladesh",
    "udemy bkash payment",
    "udemy course bd",
    "how to buy udemy course in bangladesh",
    "udemy free courses bangladesh",
    "udemy 100% off coupon",
    "udemy digital marketing bangla",
    "cpa marketing udemy",
    "web development course udemy",
    "udemy freelancing course bd",
    "buy udemy course without dollar card",
    "udemy nagad payment",
  ],

  // ── Open Graph (Facebook · WhatsApp · Telegram · LinkedIn) ──────────
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: siteConfig.name,
    url: siteConfig.domain,
    title: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
    description:
      "Pay with bKash, Nagad, Rocket — no dollar card needed. Web development, digital marketing, CPA marketing, freelancing & more. 1000+ happy learners.",
    images: [OG_IMAGE],
  },

  // ── Twitter / X ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@udemybd",
    title: "Buy Udemy Courses in Bangladesh — Up to 90% OFF",
    description:
      "Pay with bKash, Nagad, Rocket — no dollar card needed. Web dev, digital marketing, CPA marketing & more.",
    images: [OG_IMAGE],
  },

  // ── Robots ──────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Verification (add tokens after Search Console / Bing WMT setup) ─
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  //   other: { "msvalidate.01": "YOUR_BING_TOKEN" },
  // },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.domain}/#organization`,
      name: siteConfig.name,
      url: siteConfig.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: "68-69 Concept Tower, Greenroad",
        addressLocality: "Dhaka",
        postalCode: "1205",
        addressCountry: "BD",
      },
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/assets/main-logo.jpg`,
      },
      sameAs: [siteConfig.facebook, siteConfig.instagram],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["Bengali", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      url: siteConfig.domain,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.domain}/#organization` },
      inLanguage: "en-BD",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <WelcomeModal />
      </body>
    </html>
  );
}
