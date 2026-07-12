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
};

const categoryDescriptions: Record<string, string> = {
  "web-development":
    "Learn HTML, CSS, JavaScript, React, Node.js and more. Build real websites and web apps with these top Udemy web development courses available in Bangladesh.",
  "digital-marketing":
    "Master SEO, Facebook Ads, Google Ads, email marketing and social media. These Udemy digital marketing courses are available in Bangladesh with bKash payment.",
  "graphic-design":
    "Learn Photoshop, Illustrator, Figma, Canva and more. Start or grow your graphic design career with these Udemy courses available in Bangladesh.",
  "data-science":
    "Learn Python, machine learning, data analysis, and AI. Top Udemy data science courses available in Bangladesh — pay with bKash, Nagad, or Rocket.",
  programming:
    "Learn Python, Java, C++, AI programming and more. Best Udemy programming courses available in Bangladesh with local bKash/Nagad payment options.",
  "excel-finance":
    "Master Microsoft Excel, financial analysis, accounting and more. These Udemy Excel and finance courses are available in Bangladesh — no dollar card needed.",
  devops:
    "Learn Docker, Kubernetes, AWS, and cloud computing. Top Udemy DevOps and cloud courses available in Bangladesh with bKash payment.",
  freelancing:
    "Learn freelancing skills for Fiverr, Upwork and more. Start your freelancing career with these Udemy courses available in Bangladesh.",
  "english-language":
    "Improve your English speaking, writing and communication skills. These Udemy English courses are available in Bangladesh with easy bKash payment.",
};

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category];
  if (!label) return {};
  return {
    title: `${label} Udemy Courses in Bangladesh — Up to 90% OFF`,
    description: `Buy ${label} Udemy courses in Bangladesh with bKash, Nagad, Rocket — no dollar card needed. Up to 90% off on top-rated ${label.toLowerCase()} courses.`,
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
