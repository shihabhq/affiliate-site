import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, type BlogSection } from "@/data/blog";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import AffiliateLink from "@/components/AffiliateLink";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.domain}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.domain}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/assets/OG.png", width: 1904, height: 982 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/assets/OG.png"],
    },
  };
}

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. Can you help me?",
)}`;

function Section({ section, i }: { section: BlogSection; i: number }) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="text-xl font-bold text-dark mt-10 mb-3 leading-snug"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-base font-bold text-dark mt-6 mb-2">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-gray-text leading-relaxed mb-4 text-[15px]">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2 mb-4">
          {section.items.map((item, j) => (
            <li key={j} className="flex gap-2 text-gray-text text-[15px]">
              <span className="text-green-price shrink-0 mt-1">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-3 mb-4">
          {section.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-gray-text text-[15px]">
              <span className="shrink-0 w-6 h-6 bg-purple-primary text-white rounded-md flex items-center justify-center text-xs font-bold mt-0.5">
                {j + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div
          key={i}
          className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4 text-sm text-yellow-900 leading-relaxed"
        >
          <strong className="font-bold">Tip: </strong>
          {section.text}
        </div>
      );
    case "cta":
      return (
        <div
          key={i}
          className="bg-dark text-white rounded-2xl p-7 text-center my-10"
        >
          <p className="font-bold text-lg mb-2">Ready to start learning?</p>
          <p className="text-gray-400 text-sm mb-5">
            Buy any Udemy course in Bangladesh — with a card or with bKash.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <AffiliateLink className="bg-purple-primary hover:bg-purple-hover text-white font-bold px-6 py-3 rounded-xl text-sm text-center transition-colors">
              Get Discount on Udemy →
            </AffiliateLink>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white font-bold px-6 py-3 rounded-xl text-sm text-center hover:opacity-90 transition-opacity"
            >
              Buy with bKash via WhatsApp
            </a>
          </div>
        </div>
      );
  }
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
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": `${siteConfig.domain}/#organization` },
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    url: `${siteConfig.domain}/blog/${post.slug}`,
    image: `${siteConfig.domain}/assets/OG.png`,
    inLanguage: "en-BD",
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
            <span className="text-dark font-medium">{post.category}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 text-xs text-gray-text flex-wrap">
            <span className="bg-bg-light border border-gray-border px-2 py-0.5 rounded-full font-medium">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="h-1 w-10 bg-purple-primary rounded-full mb-8" />

          {/* Content */}
          <div>
            {post.sections.map((section, i) => (
              <Section key={i} section={section} i={i} />
            ))}
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
