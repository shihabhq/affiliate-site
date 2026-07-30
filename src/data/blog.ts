// Blog post data — add new posts here to publish them on /blog.
// Content sections are typed and rendered by src/app/blog/[slug]/page.tsx.
//
// TODO: Add human-written posts weekly. Keep the BlogPost/BlogSection types
// below — they define the schema for all future posts.

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "cta" };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string YYYY-MM-DD */
  date: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
};

// Add posts here when ready to publish. Each entry becomes a static /blog/[slug] page.
export const blogPosts: BlogPost[] = [];
