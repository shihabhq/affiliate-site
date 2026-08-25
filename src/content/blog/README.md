# Writing a blog post

Each post is one `.mdx` file in this folder. The filename (minus `.mdx`) becomes
the URL: `kivabe-udemy-course-kinbo.mdx` → `/blog/kivabe-udemy-course-kinbo`.

## 1. Start the file with a `metadata` export

```mdx
export const metadata = {
  title: "...",         // English — the <title> tag, OG/Twitter title, meta title. Always English, even for a Bangla post.
  description: "...",   // English, ≤160 chars — meta description.
  displayTitle: "...",  // Optional. The headline readers actually see (H1 + /blog card). Write it in Bangla — falls back to `title` if omitted.
  date: "2026-08-25",   // ISO date
  category: "How-To",
  readTime: "5 min read",
  language: "bn",       // "bn" | "en" — "bn" switches the article body (and displayTitle heading) to a Bengali-friendly font
  coverImage: "/blog/covers/your-slug.png",   // put the file in public/blog/covers/, 16:9 works best
  coverImageAlt: "...",
};
```

`title` is what search engines and social previews see; `displayTitle` is what a reader sees on the page. Keep `title` in English with your target keywords — write `displayTitle` in Bangla for a Bangla post.

## 2. Write the body in plain Markdown

Headings (`##`, `###`), paragraphs, lists, `**bold**`, `> blockquotes`, links — all
of it is styled automatically to match the site. Bengali prose is completely fine.

## 3. Drop in these components wherever you like — no import needed

- `<BlogImage src="/blog/inline/<slug>/xxx.png" alt="..." caption="..." />` —
  an in-article image. Put the file under `public/blog/inline/<slug>/`.
- `<CourseCTA courseId="web-dev-bootcamp" note="optional Bangla note" />` —
  pulls the course's title/image/link straight from `src/data/courses.ts`.
  `courseId` must match a course's `id` there. Clicking it opens the same
  WhatsApp / Messenger / "Get up to 90% OFF" modal used everywhere else on
  the site.
- `<OfferCTA title="..." image="/courses/xxx.png" link="trk.udemy.com/xxxxx" note="..." />` —
  same card, for a bundle/offer that isn't a single catalog entry.
- `<FinalCTA />` — the generic "Ready to start learning?" banner (affiliate
  link + WhatsApp), good for the end of a post that isn't about one course.

## 4. Preview

`npm run dev` → visit `/blog/<your-slug>`.

## 5. Publish

Commit the `.mdx` file plus any images you added under `public/blog/`, and
push. That's it — no CMS, no build step beyond the normal deploy.
