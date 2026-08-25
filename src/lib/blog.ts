import fs from "fs";
import path from "path";

// Blog posts live as .mdx files in src/content/blog/ — one file per post.
// Each file exports `metadata` (this shape) plus its MDX body as the default
// export. See src/content/blog/README.md for the authoring guide.
export type BlogMetadata = {
  /** SEO title — <title> tag, OG/Twitter title. Keep this in English (with
   * your target keywords) even when the post body is Bengali. */
  title: string;
  /** SEO meta description — English, ≤160 chars. */
  description: string;
  /**
   * The headline actually shown to readers (H1 on the post, heading on the
   * /blog card). Optional — write it in Bengali when the post is; falls
   * back to `title` when omitted, so an English post doesn't need it.
   */
  displayTitle?: string;
  /** ISO date string YYYY-MM-DD */
  date: string;
  category: string;
  readTime: string;
  /** Drives the Bengali font on the article body. Site chrome is unaffected. */
  language: "bn" | "en";
  /** Path under /public, e.g. "/blog/covers/how-to-buy.jpg". Shown 16:9. */
  coverImage: string;
  coverImageAlt: string;
};

/** The headline to display to readers — `displayTitle` if set, else `title`. */
export function displayTitleOf(metadata: BlogMetadata): string {
  return metadata.displayTitle || metadata.title;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

async function importPost(slug: string) {
  // Dynamic import path must stay statically analyzable (no arbitrary
  // variables built from user input) — slugs only ever come from
  // getBlogSlugs(), which only lists real files on disk.
  return import(`@/content/blog/${slug}.mdx`);
}

export async function getPostBySlug(slug: string) {
  if (!getBlogSlugs().includes(slug)) return null;
  const { default: Post, metadata } = await importPost(slug);
  return { Post, metadata: metadata as BlogMetadata };
}

export async function getAllPosts(): Promise<
  (BlogMetadata & { slug: string })[]
> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await importPost(slug);
      return { slug, ...(metadata as BlogMetadata) };
    }),
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
