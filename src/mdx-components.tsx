import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import CourseCTA from "@/components/blog/CourseCTA";
import OfferCTA from "@/components/blog/OfferCTA";
import BlogImage from "@/components/blog/BlogImage";
import FinalCTA from "@/components/blog/FinalCTA";

// Required by @next/mdx for the App Router. Registers styling for plain
// Markdown output (h2, p, ul, ...) plus custom tags every post in
// src/content/blog/*.mdx can use directly with no per-file import:
// <CourseCTA />, <OfferCTA />, <BlogImage />.
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-dark mt-10 mb-3 leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-bold text-dark mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-text leading-relaxed mb-4 text-[15px]">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-4 list-none pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-4 list-decimal pl-5 text-gray-text text-[15px]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex gap-2 text-gray-text text-[15px]">
      <span className="text-green-price shrink-0 mt-1">✔</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-purple-primary bg-bg-light rounded-r-lg px-4 py-3 mb-4 text-sm text-dark leading-relaxed">
      {children}
    </blockquote>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-purple-primary hover:text-purple-hover underline underline-offset-2 font-medium"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-dark">{children}</strong>
  ),
  hr: () => <hr className="border-gray-border my-8" />,
  // Fallback for plain markdown `![]()` images — prefer <BlogImage /> for
  // captions, but this keeps a stray markdown image from breaking layout.
  img: ({ alt = "", ...rest }) => (
    <Image
      {...(rest as Omit<ImageProps, "alt">)}
      alt={alt}
      width={1200}
      height={675}
      className="w-full h-auto rounded-xl border border-gray-border my-6"
      sizes="(max-width: 768px) 100vw, 720px"
    />
  ),
  CourseCTA,
  OfferCTA,
  BlogImage,
  FinalCTA,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
