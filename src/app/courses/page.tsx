import type { Metadata } from "next";
import CourseGrid from "@/components/CourseGrid";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { courses } from "@/data/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "All Udemy Courses in Bangladesh — Up to 90% OFF",
  description:
    "Browse all Udemy courses available in Bangladesh. Buy with bKash, Nagad, Rocket — no dollar card needed. Web development, digital marketing, graphic design, data science and more.",
  alternates: { canonical: `${siteConfig.domain}/courses` },
  openGraph: {
    title: "All Udemy Courses in Bangladesh — Up to 90% OFF",
    description:
      "Browse 100s of Udemy courses — pay with bKash, Nagad, Rocket. No dollar card needed.",
    url: `${siteConfig.domain}/courses`,
    images: [
      {
        url: "/assets/OG.png",
        width: 1904,
        height: 982,
        alt: "Udemy Courses in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Udemy Courses in Bangladesh — Up to 90% OFF",
    description: "Browse Udemy courses — pay with bKash, Nagad, Rocket. No dollar card needed.",
    images: ["/assets/OG.png"],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Udemy Courses Available in Bangladesh",
  description: "Top Udemy courses you can buy in Bangladesh with bKash payment",
  numberOfItems: courses.length,
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    url: `${siteConfig.domain}/courses/${course.category}`,
    description: course.shortDescription,
  })),
};

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="All Udemy Courses — Up to 90% OFF"
            subtitle="Find the perfect Udemy course for you. Pay with bKash, Nagad, or Rocket — no dollar card needed."
          />
          <p className="text-sm text-gray-text mb-8 max-w-2xl">
            Browse {courses.length}+ top-rated Udemy courses available in Bangladesh.
            Use the category filter below to find courses by topic. Both purchase paths
            are available: buy directly with a dollar card on Udemy, or pay in BDT via
            bKash/Nagad through our WhatsApp service.
          </p>
          <CourseGrid courses={courses} showFilter />
        </div>
      </div>
    </>
  );
}
