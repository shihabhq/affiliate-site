import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, displayTitleOf } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog — Udemy Course Tips & Guides for Bangladesh",
  description:
    "Guides, tips, and course reviews for Bangladeshi learners — how to buy Udemy courses with bKash, best courses by category, and more.",
  alternates: { canonical: `${siteConfig.domain}/blog` },
  openGraph: {
    title: "Blog — Udemy Course Tips & Guides for Bangladesh",
    description:
      "Guides and course reviews for Bangladeshi learners. Learn how to buy Udemy courses with bKash, Nagad, and Rocket.",
    url: `${siteConfig.domain}/blog`,
    images: [{ url: "/assets/OG.png", width: 1904, height: 982 }],
  },
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Udemy Course Bangladesh Blog",
  url: `${siteConfig.domain}/blog`,
  description:
    "Tips, guides, and course reviews for Bangladeshi Udemy learners.",
  publisher: { "@id": `${siteConfig.domain}/#organization` },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd data={blogListJsonLd} />
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark transition-colors">
              Home
            </Link>
            {" / "}
            <span className="text-dark font-medium">Blog</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-2 leading-tight">
            Blog — Tips &amp; Guides
          </h1>
          <p className="text-gray-text mb-10 max-w-2xl">
            Guides for Bangladeshi learners — how to buy Udemy courses, best
            courses by category, and tips to get the most from online education.
          </p>

          {posts.length === 0 ? (
            <div className="border border-gray-border rounded-2xl p-10 text-center bg-bg-light">
              <p className="text-2xl mb-3">✍️</p>
              <h2 className="text-lg font-bold text-dark mb-2">
                Articles coming soon
              </h2>
              <p className="text-sm text-gray-text mb-6 max-w-xs mx-auto">
                New posts weekly — covering how to buy Udemy courses in
                Bangladesh, course reviews, and earning-online tips.
              </p>
              <Link
                href="/how-to-buy"
                className="inline-block text-sm font-semibold text-purple-primary hover:text-purple-hover transition-colors underline"
              >
                Read our buying guide in the meantime →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-gray-border rounded-2xl overflow-hidden bg-white hover:border-purple-primary hover:shadow-lg transition-all group flex flex-col"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-video w-full bg-gray-100"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-text flex-wrap">
                      <span className="bg-bg-light border border-gray-border px-2 py-0.5 rounded-full font-medium">
                        {post.category}
                      </span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>{post.readTime}</span>
                    </div>
                    <h2
                      className={`text-lg font-bold text-dark group-hover:text-purple-primary transition-colors mb-2 leading-snug ${
                        post.language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        {displayTitleOf(post)}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-text leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-purple-primary hover:text-purple-hover transition-colors mt-auto"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
