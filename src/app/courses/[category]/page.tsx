import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CourseGrid from "@/components/CourseGrid";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { courses, categories } from "@/data/courses";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ category: string }> };

const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
  "graphic-design": "Graphic Design",
  "data-science": "Data Science",
  "english-language": "English Language",
  freelancing: "Freelancing",
  programming: "Programming",
  "excel-finance": "Excel & Finance",
  devops: "DevOps & Cloud",
  "cpa-marketing": "CPA Marketing",
};

const categoryDescriptions: Record<string, string> = {
  "web-development":
    "Learn web development with the best Udemy courses — HTML, CSS, JavaScript, React, Node.js, Python and more. Build real websites and web apps. Available in Bangladesh: pay with bKash, Nagad, or Rocket. Udemy web development courses in Bangla also available — just message us.",
  "digital-marketing":
    "Master digital marketing with top Udemy courses — SEO, keyword research, Facebook Ads, Google Ads, email marketing, and social media marketing. Udemy digital marketing Bangla courses also available. Buy in Bangladesh with bKash payment — no dollar card needed.",
  "graphic-design":
    "Learn Photoshop, Illustrator, Figma, Canva, and UI/UX design. Start or grow your graphic design career with top-rated Udemy courses available in Bangladesh. Pay with bKash, Nagad, or Rocket.",
  "data-science":
    "Learn Python, machine learning, data analysis, and AI. Top Udemy data science courses available in Bangladesh — pay with bKash, Nagad, or Rocket. No dollar card required.",
  programming:
    "Learn Python, Java, AI programming, and more. Best Udemy programming courses available in Bangladesh with local bKash/Nagad payment. Perfect for students and job holders.",
  "excel-finance":
    "Master Microsoft Excel, financial analysis, accounting, and more. Udemy Excel courses available in Bangladesh — no dollar card needed. Buy with bKash in BDT.",
  devops:
    "Learn Docker, Kubernetes, AWS, and cloud computing. Top Udemy DevOps and cloud courses available in Bangladesh with bKash payment. Ideal for IT professionals.",
  freelancing:
    "Start your freelancing career on Fiverr and Upwork with these Udemy freelancing courses. Learn how to earn online from Bangladesh — no dollar card needed, pay with bKash or Nagad.",
  "english-language":
    "Improve your English speaking, writing, grammar, and communication skills. These Udemy English language courses are available in Bangladesh with easy bKash payment. Perfect for IELTS prep, job interviews, and professional growth.",
  "cpa-marketing":
    "Learn CPA marketing and affiliate marketing with the best Udemy courses. CPA (Cost Per Action) marketing is one of the most popular ways to earn online in Bangladesh. Buy any CPA marketing Udemy course with bKash, Nagad, or Rocket — no dollar card needed.",
};

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

const categoryMetaOverrides: Record<
  string,
  { title: string; description: string }
> = {
  "web-development": {
    title: "Web Development Udemy Courses in Bangladesh — Buy with bKash",
    description:
      "Best web development Udemy courses in Bangladesh — HTML, CSS, JavaScript, React, Node.js. Buy with bKash, Nagad, or Rocket. No dollar card. Up to 90% off.",
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO Udemy Courses Bangladesh — bKash Payment",
    description:
      "Top Udemy digital marketing courses — SEO, keyword research, Facebook Ads, Google Ads & more. Udemy digital marketing Bangla courses also available. Buy with bKash in Bangladesh.",
  },
  "cpa-marketing": {
    title: "CPA Marketing Udemy Courses in Bangladesh — Buy with bKash",
    description:
      "Learn CPA marketing and affiliate marketing with top Udemy courses. Available in Bangladesh — pay with bKash, Nagad, or Rocket. No dollar card needed. Up to 90% off.",
  },
  freelancing: {
    title: "Freelancing Udemy Courses Bangladesh — Fiverr, Upwork & Earn Online",
    description:
      "Best Udemy freelancing courses in Bangladesh — Fiverr, Upwork, online earning, and more. Pay with bKash or Nagad — no dollar card needed. Start earning online from Bangladesh.",
  },
  "english-language": {
    title: "English Language Udemy Courses in Bangladesh — Speak Fluently",
    description:
      "Top Udemy English courses in Bangladesh — speaking, grammar, IELTS prep, and professional communication. Buy with bKash, Nagad, Rocket. No dollar card needed.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category];
  if (!label) return {};
  const override = categoryMetaOverrides[category];
  return {
    title:
      override?.title ?? `${label} Udemy Courses in Bangladesh — Up to 90% OFF`,
    description:
      override?.description ??
      `Buy ${label} Udemy courses in Bangladesh with bKash, Nagad, Rocket — no dollar card needed. Up to 90% off on top-rated ${label.toLowerCase()} courses.`,
    alternates: { canonical: `${siteConfig.domain}/courses/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = categoryLabels[category];
  if (!label) notFound();

  const categoryCourses = courses.filter((c) => c.category === category);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "All Courses",
        item: `${siteConfig.domain}/courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${label} Courses`,
        item: `${siteConfig.domain}/courses/${category}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark transition-colors">
              Home
            </Link>
            {" / "}
            <Link href="/courses" className="hover:text-dark transition-colors">
              Courses
            </Link>
            {" / "}
            <span className="text-dark font-medium">{label}</span>
          </nav>

          <SectionHeading
            title={`${label} Courses in Bangladesh — Up to 90% OFF`}
            subtitle={
              categoryDescriptions[category] ||
              `Top Udemy ${label} courses available in Bangladesh with bKash payment.`
            }
          />

          {categoryCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-text mb-4">
                No courses found in this category yet.
              </p>
              <Link
                href="/courses"
                className="inline-block bg-purple-primary text-white font-semibold px-6 py-3 rounded hover:bg-purple-hover transition-colors"
              >
                Browse All Courses
              </Link>
            </div>
          ) : (
            <CourseGrid courses={categoryCourses} />
          )}

          <div className="mt-12 bg-bg-light rounded-lg p-6 border border-gray-border">
            <h2 className="text-lg font-bold text-dark mb-2">
              How to buy {label} Udemy courses in Bangladesh
            </h2>
            <p className="text-sm text-gray-text mb-4">
              You can buy any of these {label.toLowerCase()} courses in two
              ways:
            </p>
            <ul className="text-sm text-gray-text space-y-2 mb-4">
              <li>
                <strong>With a dollar/dual-currency card:</strong> Click "Get
                This Course" and then "Get up to 90% OFF on Udemy →" to buy
                directly on Udemy.
              </li>
              <li>
                <strong>Without a card (bKash/Nagad/Rocket):</strong> Click "Get
                This Course" and choose "Order via WhatsApp" or "Order via
                Facebook Messenger". Pay in BDT and receive course access on
                your email within a few hours.
              </li>
            </ul>
            <Link
              href="/how-to-buy"
              className="text-sm text-purple-primary hover:text-purple-hover font-medium underline"
            >
              Read the full buying guide →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
