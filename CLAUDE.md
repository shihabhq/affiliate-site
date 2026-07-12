@AGENTS.md

# CLAUDE.md — Udemy Course Bangladesh (Affiliate Website)

## 1. Project Overview

This is a **Next.js (App Router, `src/` folder) affiliate marketing website** for "Udemy Course Bangladesh" — a Udemy affiliate business serving learners in Bangladesh. The site has two revenue paths:

1. **Affiliate path (users WITH a dollar/dual-currency card):** Users click deal/course CTAs and are redirected to Udemy through the affiliate tracking link. The owner earns a commission on purchases.
2. **Assisted-purchase path (users WITHOUT a card — the majority in Bangladesh):** Users are directed to the owner's Facebook page or WhatsApp, where they can buy Udemy courses paying in BDT via bKash, Nagad, Rocket, and other local payment methods approved in Bangladesh.

Every conversion surface on the site must always offer BOTH paths. Never build a CTA that only works for card holders.

## 2. Business Configuration (single source of truth)

Create `src/config/site.ts` and import from it EVERYWHERE. Never hardcode these values in components:

```ts
export const siteConfig = {
  name: "Udemy Course Bangladesh",
  shortName: "UCB",
  domain: "https://udemycourse.com", // used for canonical URLs, sitemap, OG tags
  affiliateLink: "https://trk.udemy.com/xJmW2A",
  facebook: "https://www.facebook.com/udemycoursebangladesh",
  facebookMessage: "https://m.me/udemycoursebangladesh",
  instagram: "https://www.instagram.com/udemybangladesh/",
  whatsappNumber: "+8801735857535",
  whatsappLink: "https://wa.me/8801735857535",
  phone: "+8801735857535",
  locale: "en_BD",
  country: "Bangladesh",
};
```

- WhatsApp deep links must use `https://wa.me/8801735857535?text=<url-encoded prefilled message>`. Prefill contextual messages, e.g. `"Hi! I want to buy this Udemy course: {courseTitle}. I don't have a dollar card. How can I pay with bKash?"`
- Facebook Messenger deep link: `https://m.me/udemycoursebangladesh` (optionally with `?ref=` context param).
- The affiliate link must ALWAYS open in a new tab: `target="_blank" rel="noopener sponsored"`. Use `rel="sponsored"` on all affiliate links (Google requirement for paid/affiliate links — do NOT use plain dofollow).

## 3. Compliance & Trust (non-negotiable, bake into the build)

1. **Affiliate disclosure:** Add a short disclosure line in the footer of every page ("We are a Udemy affiliate. We may earn a commission when you purchase through our links — at no extra cost to you.") plus a dedicated `/affiliate-disclosure` page. This is required by Udemy's affiliate program (Impact) and FTC-style disclosure norms.
2. **Not-official disclaimer:** Footer must clearly state: "This is an independent affiliate website. We are not Udemy, Inc. and this site is not operated or endorsed by Udemy. Udemy is a trademark of Udemy, Inc. All course content, prices, and discounts are controlled by Udemy."
3. **Honest discount claims:** Phrase discounts as "up to 80–90% off during Udemy sales" — never guarantee a fixed discount, because Udemy uses dynamic pricing and promotions change. The final price is always shown at Udemy checkout.
4. **No fake urgency, no fake reviews, no fabricated coupon codes.** Only show what is real. Trust is the conversion engine for the bKash/WhatsApp path.

## 4. Tech Stack & Conventions

- **Next.js App Router**, `src/app/` directory. TypeScript. Tailwind CSS.
- **Server Components by default.** Only mark `"use client"` for interactive pieces (purchase modal, mobile nav, FAQ accordion, image lightbox).
- **next/image** for ALL images with proper `alt`, `width`, `height`, and `sizes`. Course images: `public/courses/`. Proof screenshots: `public/proofs/`. Logo & brand assets: `public/assets/`.
- **Metadata API** (`export const metadata` / `generateMetadata`) for all SEO — never manual `<head>` tags.
- File conventions: `src/components/` for shared components, `src/lib/` for utilities, `src/data/` for course/deal/FAQ data files, `src/config/` for site config.
- Course data lives in `src/data/courses.ts` as a typed array (title, slug, category, image path in `/courses/`, original price hint, rating hint, short description, tags). The site owner will edit this file to add courses — keep the shape simple and documented with comments.
- Fully responsive, mobile-first. The overwhelming majority of Bangladeshi traffic is mobile + Facebook referral. Test every layout at 360px width first.

## 5. Design System — Udemy-inspired

Follow Udemy.com's visual language:

```
--purple-primary: #A435F0;   /* Udemy purple — primary CTA, links, accents */
--purple-hover:  #8710D8;
--dark:          #1C1D1F;    /* headings, footer background, primary text */
--gray-text:     #6A6F73;    /* secondary text */
--gray-border:   #D1D7DC;
--bg-light:      #F7F9FA;    /* section backgrounds */
--yellow-rating: #F69C08;    /* star ratings */
--green-price:   #1E6055;    /* deal/price highlights */
--white:         #FFFFFF;
```

- Typography: bold, heavy headings (Udemy uses a serif-ish display feel — use a bold sans like Inter/`font-bold tracking-tight` is fine), generous whitespace.
- Buttons: solid purple primary CTA, dark outline secondary (Udemy style — sharp corners or very small radius).
- Course cards: image on top, bold title (2-line clamp), rating stars, "up to 90% OFF" badge, strikethrough-style price hint, CTA button. Model them after Udemy's own course cards.
- WhatsApp green (`#25D366`) and Messenger blue (`#0084FF`) for their respective buttons so users instantly recognize them.
- Include a **floating WhatsApp button** (bottom-right, fixed) on every page.

## 6. Pages & Routes

```
/                         Home
/courses                  All courses grid (filter by category)
/courses/[category]       Category pages (web-development, digital-marketing, graphic-design, data-science, english-language, freelancing, etc.)
/how-to-buy               "How to Buy Udemy Course in Bangladesh" — the #1 SEO page
/proofs                   Purchase proofs / customer success gallery
/faq                      FAQ page
/about                    About the business
/contact                  Contact (WhatsApp, Messenger, phone, Instagram)
/affiliate-disclosure     Disclosure page
/privacy-policy           Privacy policy
/terms                    Terms of use
/blog                     (Optional, phase 2) SEO articles
```

### Home page (`/`) sections, in order:

1. **Hero:** Logo from `/assets/`, H1 = "Buy Udemy Courses in Bangladesh — Up to 90% OFF", subheading mentioning bKash/Nagad payment for users without a card. Two CTAs: "Get Discount on Udemy" (affiliate link) + "Buy with bKash" (opens purchase modal → WhatsApp/Messenger).
2. **Trust bar:** "✔ Pay with bKash/Nagad/Rocket · ✔ Lifetime access · ✔ Certificate included · ✔ 1000+ happy learners" style strip.
3. **Featured deals grid:** Course cards from `src/data/courses.ts` using images in `/courses/`. Each card opens the Purchase Modal (Section 7).
4. **How it works:** 3-step visual — (1) Choose a course, (2) Have a card? Click "Get Discount" → Udemy. No card? Message us, (3) Pay with bKash & get the course on your email.
5. **Payment methods section:** Show bKash, Nagad, Rocket, card icons (use assets from `/assets/` if present; otherwise text badges).
6. **Proof preview:** 4–6 proof images from `/proofs/` + "See all proofs" → `/proofs`.
7. **FAQ preview:** Top 4–5 questions (accordion) + link to `/faq`.
8. **Final CTA banner** + footer.

### `/how-to-buy` — the most important SEO page:

A long-form, genuinely helpful step-by-step guide targeting "how to buy udemy course in bangladesh". Two clearly separated methods:

- **Method 1: With a dollar / dual-currency card** — step-by-step of buying directly on Udemy via the discount link.
- **Method 2: Without a card (bKash/Nagad)** — step-by-step of ordering via the Facebook page/WhatsApp: message us → get BDT price → pay via bKash → receive course access on your email (lifetime access). Include screenshots if assets exist.
  Include an FAQ block at the bottom with FAQPage structured data. Include both English and key Bangla phrasing (see Section 9).

### `/proofs`:

- Responsive masonry/grid gallery of all images from `public/proofs/` (read the folder at build time with `fs.readdirSync` in a server component, or list them in `src/data/proofs.ts`).
- Clicking a proof image opens a lightbox with the image plus two buttons: "Message on Facebook" and "Chat on WhatsApp" (prefilled: "Hi! I saw your purchase proofs and want to buy a Udemy course with bKash.").
- Heading: "Real Purchase Proofs from Our Customers in Bangladesh". Short intro paragraph explaining these are genuine deliveries via bKash payments.

## 7. Purchase Modal (core conversion component)

`src/components/PurchaseModal.tsx` (`"use client"`). Triggered when a user clicks any course card or "Get Discount" button on a course.

Content:

- Course title + thumbnail.
- Question: **"Do you have a Dollar Card / Dual Currency Card?"**
- **Option A — "Yes, I have a card":** Button "Get up to 90% OFF on Udemy →" → opens `siteConfig.affiliateLink` in a new tab (`rel="noopener sponsored"`).
- **Option B — "No, I don't have a card":** Two buttons:
  - "Order via WhatsApp" → `wa.me` link with prefilled message including the course title.
  - "Order via Facebook Page" → `m.me/udemycoursebangladesh`.
  - Small note: "Pay easily with bKash, Nagad or Rocket. Course delivered to your email with lifetime access."
- Accessible: focus trap, `Esc` to close, click-outside to close, `aria-modal`.
- Persist nothing; keep it stateless per open.

## 8. SEO Strategy (this is a primary requirement — implement thoroughly)

### 8.1 Target keywords (from research on actual Bangladeshi search behavior)

**Primary:**

- buy udemy course in bangladesh
- buy udemy course from bangladesh
- how to buy udemy course in bangladesh
- udemy bangladesh / udemy bd
- buy udemy course with bkash / udemy course bkash payment

**Secondary / long-tail:**

- udemy course price in bangladesh
- udemy discount bangladesh / udemy 90% off
- udemy coupon bangladesh
- buy udemy course without credit card / without dollar card
- how to pay for udemy in bangladesh
- udemy subscription bd / udemy personal plan bangladesh
- cheap udemy courses bd
- udemy course with certificate bangladesh
- Category long-tails: "web development course udemy bangladesh", "digital marketing udemy course bd", "graphic design udemy course price in bangladesh", etc.

**Bangla-intent keywords (people search in Banglish and Bangla):**

- udemy course kivabe kinbo
- bkash diye udemy course
- ইউডেমি কোর্স কিনুন / বিকাশ দিয়ে ইউডেমি কোর্স

Map keywords → pages: primary "buy in bangladesh / how to buy / bkash" keywords → `/how-to-buy` and Home; "udemy discount/coupon/90% off" → Home and `/courses`; category keywords → `/courses/[category]`; trust keywords ("is it real", "proof") → `/proofs` and `/faq`.

### 8.2 Technical SEO implementation

- **Root layout metadata:** `metadataBase: new URL(siteConfig.domain)`, default title template `"%s | Udemy Course Bangladesh"`, full description with primary keywords, `openGraph` and `twitter` card config, canonical URLs on every page via `alternates.canonical`.
- **Per-page `generateMetadata`** with unique, keyword-targeted titles (≤60 chars) and descriptions (≤160 chars). Examples:
  - Home: "Buy Udemy Courses — Up to 90% OFF | bKash Accepted"
  - How to buy: "How to Buy Udemy Course in Bangladesh (2026) — With or Without a Card"
  - Proofs: "Purchase Proofs — Real Udemy Course Deliveries in Bangladesh"
- **JSON-LD structured data** (render via `<script type="application/ld+json">` in server components):
  - `Organization` + `WebSite` (with `sameAs`: Facebook, Instagram) in root layout.
  - `FAQPage` on `/faq` and on the `/how-to-buy` FAQ block.
  - `HowTo` schema on `/how-to-buy`.
  - `BreadcrumbList` on category and inner pages.
  - `ItemList` of courses on `/courses`.
- **`src/app/sitemap.ts`:** generate sitemap dynamically from all static routes + category slugs, with `lastModified`, `changeFrequency`, `priority` (Home & how-to-buy = 1.0/0.9).
- **`src/app/robots.ts`:**
  ```ts
  export default function robots() {
    return {
      rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
      sitemap: "https://udemycourse.com/sitemap.xml",
    };
  }
  ```
- **Semantic HTML:** exactly one `<h1>` per page, logical h2/h3 hierarchy containing keywords naturally, `<main>`, `<nav>`, `<footer>` landmarks.
- **Performance = ranking:** all pages statically generated (no unnecessary client JS), `next/image` with proper sizing, font via `next/font`, aim for Lighthouse 95+ on mobile. No layout shift on course cards (fixed aspect ratios).
- **Internal linking:** every page links to `/how-to-buy` and `/courses`; course cards link to category pages; footer links to all pages.
- `lang="en"` on `<html>`; Bangla text inline is fine.
- Descriptive image `alt` text with keywords where honest, e.g. `alt="Web Development Udemy course — buy in Bangladesh with bKash"`.

### 8.3 Content SEO rules

- Write substantial, genuinely useful copy (the `/how-to-buy` page should be 1,200+ words). Answer the real questions: Can I pay with bKash? Will I get a certificate? Is lifetime access real? How fast is delivery? Is this legit (→ link proofs)?
- Sprinkle primary keywords into headings and first paragraphs naturally — never keyword-stuff.
- FAQ answers should be direct 2–4 sentence answers (featured-snippet friendly).

## 9. Language & Tone

- Primary language: **English**, with short **Bangla lines mixed in** where they build trust and match search intent (e.g., under CTAs: "বিকাশ দিয়ে পেমেন্ট করুন — কোনো ডলার কার্ড লাগবে না"). This mirrors how successful BD pages communicate.
- Tone: friendly, trustworthy, direct. Target audience: students, freelancers, and job holders in Bangladesh.
- Currency: mention BDT (৳) for the bKash path; USD prices are decided at Udemy checkout for the card path.

## 10. Components to Build

- `Header` (logo from `/assets/`, nav, mobile drawer, CTA button)
- `Footer` (nav, socials, disclosure + not-official disclaimer, payment badges)
- `HeroSection`, `TrustBar`, `HowItWorks`, `PaymentMethods`, `FinalCTA`
- `CourseCard` + `CourseGrid` (+ category filter)
- `PurchaseModal` (Section 7)
- `ProofGallery` + `ProofLightbox`
- `FaqAccordion`
- `FloatingWhatsApp`
- `JsonLd` helper component
- `SectionHeading` (consistent heading style)

## 11. Do / Don't

**Do:**

- Route every single "buy/discount" intent through the two-path pattern (card → affiliate link, no card → WhatsApp/Messenger).
- Use `rel="sponsored noopener"` + `target="_blank"` on every affiliate link.
- Keep all business data in `src/config/site.ts` and `src/data/`.
- Keep bundle small; server components by default.

**Don't:**

- Don't hardcode the affiliate link, phone number, or social URLs inside components.
- Don't claim to BE Udemy, use Udemy's logo as the site's own logo, or copy text from udemy.com.
- Don't promise fixed discounts or fake coupon codes.
- Don't add heavy client libraries (no carousel/animation libs unless essential; CSS-first).
- Don't use `<form>` submissions anywhere — all conversion is via link-outs to Udemy/WhatsApp/Messenger.

## 12. Definition of Done (checklist for any feature)

- [ ] Mobile-first responsive (360px → desktop)
- [ ] Both purchase paths present on every conversion surface
- [ ] Unique metadata + canonical for the page
- [ ] Relevant JSON-LD added
- [ ] Images optimized via next/image with alt text
- [ ] Route added to `sitemap.ts`
- [ ] Affiliate links have `rel="sponsored noopener"` and open in new tab
- [ ] `npm run build` passes with no type errors
