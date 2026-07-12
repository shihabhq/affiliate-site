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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    template: "%s | Udemy Course Bangladesh",
    default: "Buy Udemy Courses in Bangladesh — Up to 90% OFF | bKash Accepted",
  },
  description:
    "Buy Udemy courses in Bangladesh with bKash, Nagad, Rocket — no dollar card needed. Up to 90% off on top Udemy courses. 1000+ happy learners.",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image" },
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
