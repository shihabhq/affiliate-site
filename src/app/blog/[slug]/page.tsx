import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBlogSlugs, getPostBySlug, displayTitleOf } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const { metadata } = post;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: `${siteConfig.domain}/blog/${slug}` },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteConfig.domain}/blog/${slug}`,
      type: "article",
      publishedTime: metadata.date,
      images: [{ url: metadata.coverImage, width: 1200, height: 675 }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.coverImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const { Post, metadata } = post;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: displayTitleOf(metadata),
    description: metadata.description,
    datePublished: metadata.date,
    dateModified: metadata.date,
    author: { "@id": `${siteConfig.domain}/#organization` },
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    url: `${siteConfig.domain}/blog/${slug}`,
    image: `${siteConfig.domain}${metadata.coverImage}`,
    inLanguage: metadata.language === "bn" ? "bn" : "en-BD",
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark transition-colors">
              Home
            </Link>
            {" / "}
            <Link href="/blog" className="hover:text-dark transition-colors">
              Blog
            </Link>
            {" / "}
            <span className="text-dark font-medium">{metadata.category}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 text-xs text-gray-text flex-wrap">
            <span className="bg-bg-light border border-gray-border px-2 py-0.5 rounded-full font-medium">
              {metadata.category}
            </span>
            <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
            <span>{metadata.readTime}</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight ${
              metadata.language === "bn" ? "font-bengali" : ""
            }`}
          >
            {displayTitleOf(metadata)}
          </h1>

          {/* Cover image — 16:9 */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 mb-8">
            <Image
              src={metadata.coverImage}
              alt={metadata.coverImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Content — Bengali font applied only when the post is written in Bangla */}
          <div className={metadata.language === "bn" ? "font-bengali" : undefined}>
            <Post />
          </div>

          {/* Back to blog */}
          <div className="mt-10 pt-6 border-t border-gray-border">
            <Link
              href="/blog"
              className="text-sm text-purple-primary hover:text-purple-hover font-medium transition-colors"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
