import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import CourseGrid from "@/components/CourseGrid";
import CourseBuyButton from "@/components/CourseBuyButton";
import JsonLd from "@/components/JsonLd";
import { courses, detailPageCourseIds } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";
import { siteConfig } from "@/config/site";
import { categoryLabels, getCourseImageAlt } from "@/lib/categories";

type Props = { params: Promise<{ category: string; slug: string }> };

const detailIds = new Set(detailPageCourseIds);

function findCourse(category: string, slug: string) {
  return courses.find(
    (c) => c.category === category && c.slug === slug && detailIds.has(c.id)
  );
}

// Only the pilot batch in detailPageCourseIds gets a static page — everything
// else 404s instead of rendering a thin, content-less page for every catalog
// entry. Expand detailPageCourseIds (and add a matching src/data/courseDetails.ts
// entry) to bring more courses in.
export function generateStaticParams() {
  return detailPageCourseIds
    .map((id) => courses.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ category: c.category, slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const course = findCourse(category, slug);
  if (!course) return {};

  const label = categoryLabels[course.category] ?? course.category;
  const title = `${course.title} — Price in Bangladesh & bKash Payment`;
  const description = `Buy ${course.title} in Bangladesh — ${label} Udemy course, up to 90% off. Pay with bKash, Nagad, or Rocket. No dollar card needed.`;
  const url = `${siteConfig.domain}/courses/${course.category}/${course.slug}`;
  const imageAlt = getCourseImageAlt(course);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: course.image, width: 1200, height: 675, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [course.image],
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const course = findCourse(category, slug);
  if (!course) notFound();

  const label = categoryLabels[course.category] ?? course.category;
  const detail = courseDetails[course.id];
  const imageAlt = getCourseImageAlt(course);
  const url = `${siteConfig.domain}/courses/${course.category}/${course.slug}`;

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    url,
    image: `${siteConfig.domain}${course.image}`,
    provider: {
      "@type": "Organization",
      name: "Udemy",
      sameAs: "https://www.udemy.com",
    },
    ...(course.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: course.rating,
            reviewCount: course.reviewCount,
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.domain },
      { "@type": "ListItem", position: 2, name: "All Courses", item: `${siteConfig.domain}/courses` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${label} Courses`,
        item: `${siteConfig.domain}/courses/${course.category}`,
      },
      { "@type": "ListItem", position: 4, name: course.title, item: url },
    ],
  };

  const faqJsonLd =
    detail && detail.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: detail.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={courseJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
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
            <Link href={`/courses/${course.category}`} className="hover:text-dark transition-colors">
              {label}
            </Link>
            {" / "}
            <span className="text-dark font-medium">{course.title}</span>
          </nav>

          {/* Hero */}
          <div className="grid sm:grid-cols-[280px_1fr] gap-6 mb-10">
            <div className="relative aspect-video sm:aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-border">
              <Image
                src={course.image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 280px"
                priority
              />
              <span className="absolute top-2 left-2 bg-purple-primary text-white text-xs font-bold px-2 py-1 rounded">
                UP TO 90% OFF
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight mb-3 leading-tight">
                {course.title} — Buy in Bangladesh with bKash
              </h1>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-yellow-rating font-bold text-sm">{course.rating.toFixed(1)}</span>
                <span className="text-gray-text text-xs">
                  ({course.reviewCount >= 1000 ? `${(course.reviewCount / 1000).toFixed(0)}k` : course.reviewCount} ratings)
                </span>
                <span className="text-gray-text text-xs">·</span>
                <Link
                  href={`/courses/${course.category}`}
                  className="text-xs text-purple-primary hover:text-purple-hover font-medium"
                >
                  {label}
                </Link>
              </div>

              <p className="text-sm text-gray-text leading-relaxed mb-4">{course.shortDescription}</p>

              <p className="text-xs text-gray-text mb-5">
                Original price: <span className="line-through">{course.originalPrice}</span>{" "}
                <span className="text-green-price font-semibold">
                  Up to 90% off during Udemy sales — final price shown at checkout
                </span>
              </p>

              <CourseBuyButton course={course} imageAlt={imageAlt} />
              <p className="text-xs text-gray-text mt-3">বিকাশ দিয়ে পেমেন্ট করুন — কোনো ডলার কার্ড লাগবে না</p>
            </div>
          </div>

          {/* What you'll learn */}
          {detail && detail.learnPoints.length > 0 && (
            <div className="mb-10">
              <SectionHeading title="What You'll Learn" />
              <ul className="grid sm:grid-cols-2 gap-3">
                {detail.learnPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                    <span className="text-green-price mt-0.5" aria-hidden="true">
                      ✔
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Why Bangladeshi learners choose this */}
          {detail && (
            <div className="mb-10 bg-bg-light rounded-lg p-6 border border-gray-border">
              <h2 className="text-lg font-bold text-dark mb-2">Why Bangladeshi Learners Choose This Course</h2>
              <p className="text-sm text-gray-text leading-relaxed">{detail.whyBangladesh}</p>
            </div>
          )}

          {/* How to buy */}
          <div className="mb-10 bg-bg-light rounded-lg p-6 border border-gray-border">
            <h2 className="text-lg font-bold text-dark mb-2">How to Buy {course.title} in Bangladesh</h2>
            <ul className="text-sm text-gray-text space-y-2 mb-4">
              <li>
                <strong>With a dollar/dual-currency card:</strong> Click &ldquo;Get This Course&rdquo; and then
                &ldquo;Get up to 90% OFF on Udemy →&rdquo; to buy directly on Udemy.
              </li>
              <li>
                <strong>Without a card (bKash/Nagad/Rocket):</strong> Click &ldquo;Get This Course&rdquo; and choose
                &ldquo;Order via WhatsApp&rdquo; or &ldquo;Order via Facebook Messenger&rdquo;. Pay in BDT and receive
                course access on your email within a few hours.
              </li>
            </ul>
            <Link href="/how-to-buy" className="text-sm text-purple-primary hover:text-purple-hover font-medium underline">
              Read the full buying guide →
            </Link>
          </div>

          {/* FAQ */}
          {detail && detail.faqs.length > 0 && (
            <div className="mb-12 max-w-3xl">
              <h2 className="text-xl font-bold text-dark mb-1">Frequently Asked Questions</h2>
              <div className="h-1 w-8 bg-purple-primary rounded-full mb-6" />
              <FaqAccordion items={detail.faqs} />
            </div>
          )}

          {/* Related courses */}
          {relatedCourses.length > 0 && (
            <div>
              <SectionHeading
                title={`More ${label} Courses`}
                subtitle={`Browse all ${label.toLowerCase()} courses available in Bangladesh.`}
              />
              <CourseGrid courses={relatedCourses} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
