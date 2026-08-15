// Course data — edit this file to add/remove courses shown on the website.
// Each course entry maps to an image in public/courses/ and a category page.

export type Course = {
  id: string;
  title: string;
  slug: string;
  category: string;
  /** Path starting with /courses/ pointing to the image in public/courses/ */
  image: string;
  /** Hint of original price, e.g. "$199.99". Final price shown at Udemy checkout. */
  originalPrice: string;
  /** Rating out of 5 */
  rating: number;
  reviewCount: number;
  shortDescription: string;
  tags: string[];
};

export const categories = [
  "web-development",
  "digital-marketing",
  "graphic-design",
  "data-science",
  "english-language",
  "freelancing",
  "programming",
  "excel-finance",
  "devops",
  "cpa-marketing",
] as const;

export const courses: Course[] = [
  {
    id: "web-dev-bootcamp",
    title: "The Web Developer Bootcamp",
    slug: "the-web-developer-bootcamp",
    category: "web-development",
    image: "/courses/The-web-developer-bootcamp.png",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 280000,
    shortDescription:
      "Colt Steele's bestselling bootcamp covering HTML, CSS, JavaScript, Node.js, and MongoDB. Perfect for Bangladeshi beginners who want job-ready full-stack skills without prior experience.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    id: "100-days-code",
    title: "100 Days Of Code — Web Development Bootcamp",
    slug: "100-days-of-code-web-development-bootcamp",
    category: "web-development",
    image: "/courses/100 Days Of Code - Web Development Bootcamp.png",
    originalPrice: "$189.99",
    rating: 4.8,
    reviewCount: 95000,
    shortDescription:
      "A project-driven bootcamp where you build 100 real websites in 100 days. Highly popular among Bangladeshi freelancers who want a strong portfolio fast.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Projects"],
  },
  {
    id: "build-responsive-html-css",
    title: "Build Responsive Real-World Websites with HTML and CSS",
    slug: "build-responsive-real-world-websites-html-css",
    category: "web-development",
    image:
      "/courses/Build Responsive Real-World Websites with HTML and CSS.png",
    originalPrice: "$149.99",
    rating: 4.8,
    reviewCount: 110000,
    shortDescription:
      "Jonas Schmedtmann's hands-on HTML/CSS course — builds real websites using Flexbox, Grid, and responsive design. A top choice for BD learners starting their web career.",
    tags: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
  },
  {
    id: "ultimate-react-2025",
    title: "The Ultimate React Course 2025",
    slug: "the-ultimate-react-course-2025",
    category: "web-development",
    image: "/courses/The Ultimate React Course 2025.png",
    originalPrice: "$199.99",
    rating: 4.8,
    reviewCount: 75000,
    shortDescription:
      "The most up-to-date React course available — covers hooks, Context API, Redux, and React Query. Ideal for Bangladeshi developers targeting remote jobs or Upwork clients.",
    tags: ["React", "JavaScript", "Redux", "Hooks", "Context API"],
  },
  {
    id: "complete-digital-marketing",
    title: "The Complete Digital Marketing Guide — 27 Courses in 1",
    slug: "the-complete-digital-marketing-guide-27-courses-in-1",
    category: "digital-marketing",
    image:
      "/courses/The Complete Digital Marketing Guide - 27 Courses in 1.png",
    originalPrice: "$199.99",
    rating: 4.5,
    reviewCount: 185000,
    shortDescription:
      "27 courses in one: SEO, Facebook Ads, Google Ads, email marketing, and more. Widely used by Bangladeshi digital marketers and Fiverr freelancers to land clients.",
    tags: [
      "SEO",
      "Facebook Ads",
      "Google Ads",
      "Email Marketing",
      "Social Media",
    ],
  },
  {
    id: "graphic-design-masterclass",
    title: "Graphic Design Masterclass — Learn GREAT Design",
    slug: "graphic-design-masterclass-learn-great-design",
    category: "graphic-design",
    image: "/courses/Graphic Design Masterclass - Learn GREAT Design.png",
    originalPrice: "$199.99",
    rating: 4.6,
    reviewCount: 88000,
    shortDescription:
      "Covers Photoshop, Illustrator, InDesign, and core design principles. Perfect for Bangladeshi students who want to work as graphic designers on Fiverr or local agencies.",
    tags: ["Photoshop", "Illustrator", "InDesign", "Typography", "Branding"],
  },
  {
    id: "figma-ui-ux",
    title: "Figma UI UX Design Essentials",
    slug: "figma-ui-ux-design-essentials",
    category: "graphic-design",
    image: "/courses/Figma UI UX Design Essentials.png",
    originalPrice: "$149.99",
    rating: 4.7,
    reviewCount: 65000,
    shortDescription:
      "Learn Figma from absolute zero — wireframes, components, prototypes, and handoff. One of the most in-demand skills for Bangladeshi UI/UX freelancers right now.",
    tags: ["Figma", "UI Design", "UX Design", "Prototyping", "Wireframing"],
  },
  {
    id: "complete-figma-webflow",
    title: "Complete Web Design from Figma to Webflow to Freelancing",
    slug: "complete-web-design-figma-webflow-freelancing",
    category: "graphic-design",
    image:
      "/courses/Complete Web Design from Figma to Webflow to Freelancing.png",
    originalPrice: "$199.99",
    rating: 4.6,
    reviewCount: 42000,
    shortDescription:
      "A complete workflow from design to live website — Figma mockup, Webflow development, and freelancing strategy. Great for Bangladeshi designers who want to sell end-to-end web services.",
    tags: ["Figma", "Webflow", "Web Design", "Freelancing", "Portfolio"],
  },
  {
    id: "data-science-bootcamp",
    title: "The Data Science Course — Complete Data Science Bootcamp 2026",
    slug: "the-data-science-course-complete-data-science-bootcamp-2026",
    category: "data-science",
    image:
      "/courses/The Data Science Course Complete Data Science Bootcamp 2026.png",
    originalPrice: "$199.99",
    rating: 4.6,
    reviewCount: 130000,
    shortDescription:
      "An A-to-Z data science programme covering Statistics, Python, Machine Learning, and Deep Learning. Highly valued for Bangladeshi professionals aiming at data analyst or ML engineer roles.",
    tags: [
      "Python",
      "Machine Learning",
      "Statistics",
      "Data Analysis",
      "Deep Learning",
    ],
  },
  {
    id: "python-bootcamp",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    slug: "the-complete-python-bootcamp-from-zero-to-hero",
    category: "programming",
    image:
      "/courses/The Complete Python Bootcamp From Zero to Hero in Python.png",
    originalPrice: "$149.99",
    rating: 4.6,
    reviewCount: 520000,
    shortDescription:
      "The most reviewed Python course on Udemy — covers fundamentals through OOP, scripting, and web scraping. A smart first step for Bangladeshi students entering tech or data fields.",
    tags: ["Python", "Programming", "OOP", "Scripting", "Automation"],
  },
  {
    id: "ai-engineer-bootcamp",
    title: "The AI Engineer Course 2026 — Complete AI Engineer Bootcamp",
    slug: "the-ai-engineer-course-2026-complete-bootcamp",
    category: "programming",
    image:
      "/courses/The AI Engineer Course 2026 Complete AI Engineer Bootcamp.png",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 28000,
    shortDescription:
      "Covers LLMs, OpenAI API, LangChain, RAG systems, and AI agents from scratch. An excellent choice for Bangladeshi developers who want to future-proof their career in the AI era.",
    tags: ["AI", "LLMs", "LangChain", "OpenAI", "Python"],
  },
  {
    id: "ai-claude-code",
    title: "AI Coder — Complete Claude Code & Coding Agent Course",
    slug: "ai-coder-complete-claude-code-coding-agent-course",
    category: "programming",
    image: "/courses/AI-coder-complete-claude-code-coding-agent-course.png",
    originalPrice: "$149.99",
    rating: 4.8,
    reviewCount: 12000,
    shortDescription:
      "Learn to use Claude as a coding co-pilot — build agents, automate repetitive tasks, and ship projects faster. A productivity game-changer for Bangladeshi developers and freelancers.",
    tags: ["Claude AI", "AI Coding", "Agents", "Automation", "Productivity"],
  },
  {
    id: "excel-beginner-to-advanced",
    title: "Microsoft Excel — Excel from Beginner to Advanced",
    slug: "microsoft-excel-from-beginner-to-advanced",
    category: "excel-finance",
    image: "/courses/Microsoft Excel - Excel from Beginner to Advanced.png",
    originalPrice: "$129.99",
    rating: 4.7,
    reviewCount: 650000,
    shortDescription:
      "Udemy's most enrolled Excel course — Pivot Tables, VLOOKUP, and Macros explained simply. Essential for Bangladeshi job seekers, accountants, and data entry professionals.",
    tags: ["Excel", "Pivot Tables", "VLOOKUP", "Macros", "Data Analysis"],
  },
  {
    id: "excel-advanced-formulas",
    title: "Microsoft Excel Advanced Excel Formulas & Functions",
    slug: "microsoft-excel-advanced-formulas-functions",
    category: "excel-finance",
    image: "/courses/Microsoft Excel Advanced Excel Formulas & Functions.png",
    originalPrice: "$129.99",
    rating: 4.7,
    reviewCount: 120000,
    shortDescription:
      "Deep-dive into advanced Excel: XLOOKUP, dynamic arrays, Power Query, and VBA macros. Great for Bangladeshi finance professionals and data analysts who already know the basics.",
    tags: ["Excel", "Advanced Formulas", "Functions", "Power Query", "VBA"],
  },
  {
    id: "financial-analyst",
    title: "The Complete Financial Analyst Course 2026",
    slug: "the-complete-financial-analyst-course-2026",
    category: "excel-finance",
    image: "/courses/The Complete Financial Analyst Course 2026.png",
    originalPrice: "$199.99",
    rating: 4.5,
    reviewCount: 115000,
    shortDescription:
      "Covers financial modeling, company valuation, and Excel for finance in one course. A strong credential for Bangladeshi banking, accounting, and MBA students.",
    tags: ["Finance", "Excel", "Financial Modeling", "Valuation", "Accounting"],
  },
  {
    id: "docker-kubernetes",
    title: "Docker & Kubernetes: The Practical Guide",
    slug: "docker-and-kubernetes-the-practical-guide",
    category: "devops",
    image: "/courses/Docker & Kubernetes The Practical Guide.png",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 95000,
    shortDescription:
      "Hands-on Docker and Kubernetes training — containers, Compose files, and cloud deployment explained practically. Highly relevant for Bangladeshi developers targeting DevOps or cloud roles.",
    tags: ["Docker", "Kubernetes", "DevOps", "Containers", "Deployment"],
  },
  {
    id: "aws-solutions-architect",
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    slug: "ultimate-aws-certified-solutions-architect-associate-2026",
    category: "devops",
    image:
      "/courses/Ultimate AWS Certified Solutions Architect Associate 2026.png",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 215000,
    shortDescription:
      "Stéphane Maarek's SAA-C03 prep course with practice exams and hands-on labs. AWS certification dramatically increases earning potential for Bangladeshi cloud professionals.",
    tags: ["AWS", "Cloud", "DevOps", "Certification", "Solutions Architect"],
  },
  // --- Digital Marketing & SEO ---
  {
    id: "seo-keyword-research",
    title: "SEO Training & Keyword Research Masterclass 2026",
    slug: "seo-training-keyword-research-masterclass",
    category: "digital-marketing",
    image: "/courses/The Complete Digital Marketing Guide - 27 Courses in 1.png",
    originalPrice: "$149.99",
    rating: 4.6,
    reviewCount: 72000,
    shortDescription:
      "A thorough SEO course covering keyword research, on-page optimisation, and link building with real examples. Highly in demand among Bangladeshi digital marketers and freelancers offering SEO services.",
    tags: ["SEO", "Keyword Research", "Google", "On-Page SEO", "Backlinks"],
  },
  // --- CPA Marketing ---
  {
    id: "cpa-marketing-complete",
    title: "CPA Marketing Masterclass — Complete CPA Marketing Course",
    slug: "cpa-marketing-masterclass-complete-course",
    category: "cpa-marketing",
    image: "/courses/The Complete Digital Marketing Guide - 27 Courses in 1.png",
    originalPrice: "$199.99",
    rating: 4.5,
    reviewCount: 38000,
    shortDescription:
      "Step-by-step CPA marketing training — find offers, set up tracking, drive traffic, and earn commissions without creating a product. One of the most searched online income methods in Bangladesh.",
    tags: ["CPA Marketing", "Affiliate Marketing", "Traffic", "Monetization", "Freelancing"],
  },
  {
    id: "cpa-affiliate-zero-to-hero",
    title: "Affiliate Marketing & CPA Marketing — Zero to Hero",
    slug: "affiliate-marketing-cpa-zero-to-hero",
    category: "cpa-marketing",
    image: "/courses/The Complete Financial Analyst Course 2026.png",
    originalPrice: "$149.99",
    rating: 4.4,
    reviewCount: 25000,
    shortDescription:
      "Covers both CPA and affiliate marketing from zero — offers, funnels, traffic sources, and scaling. A practical roadmap for Bangladeshi beginners who want to earn online without a product.",
    tags: ["CPA", "Affiliate Marketing", "Make Money Online", "Funnels", "Traffic"],
  },
  // --- Freelancing ---
  {
    id: "freelancing-complete",
    title: "Complete Freelancing Course — Work From Home & Earn Online",
    slug: "complete-freelancing-course-work-from-home",
    category: "freelancing",
    image: "/courses/Complete Web Design from Figma to Webflow to Freelancing.png",
    originalPrice: "$149.99",
    rating: 4.6,
    reviewCount: 58000,
    shortDescription:
      "A practical freelancing guide covering Fiverr, Upwork, profile optimisation, and client communication. Built for beginners in Bangladesh who want to start earning in USD from home.",
    tags: ["Freelancing", "Fiverr", "Upwork", "Work from Home", "Earn Online"],
  },
  {
    id: "fiverr-success",
    title: "Fiverr Freelancing — Rank Your Gig & Get Orders Fast",
    slug: "fiverr-freelancing-rank-gig-get-orders",
    category: "freelancing",
    image: "/courses/The Complete Financial Analyst Course 2026.png",
    originalPrice: "$99.99",
    rating: 4.5,
    reviewCount: 31000,
    shortDescription:
      "Covers gig creation, SEO for Fiverr search, pricing strategy, and getting that first order. Specifically useful for Bangladeshi beginners struggling to stand out on Fiverr.",
    tags: ["Fiverr", "Freelancing", "Gig Ranking", "Client Getting", "Online Income"],
  },
  // --- English Language ---
  {
    id: "english-speaking-masterclass",
    title: "English Speaking Masterclass — Speak English Fluently",
    slug: "english-speaking-masterclass-speak-fluently",
    category: "english-language",
    image: "/courses/The Complete Python Bootcamp From Zero to Hero in Python.png",
    originalPrice: "$129.99",
    rating: 4.6,
    reviewCount: 95000,
    shortDescription:
      "Structured speaking and pronunciation training that builds real confidence. Hugely popular among Bangladeshi students preparing for job interviews, IELTS, and client calls on Upwork.",
    tags: ["English Speaking", "Pronunciation", "IELTS", "Communication", "Fluency"],
  },
  {
    id: "english-grammar-complete",
    title: "Complete English Grammar Course — Beginner to Advanced",
    slug: "complete-english-grammar-course-beginner-to-advanced",
    category: "english-language",
    image: "/courses/The Data Science Course Complete Data Science Bootcamp 2026.png",
    originalPrice: "$99.99",
    rating: 4.5,
    reviewCount: 61000,
    shortDescription:
      "Clears up tenses, articles, prepositions, and sentence structure from the ground up. A solid grammar foundation for Bangladeshi learners who want to write and communicate correctly in English.",
    tags: ["English Grammar", "Writing", "Communication", "IELTS", "Beginner"],
  },
];

// Proof image filenames from public/proofs/ — prefixed with /proofs/ at render time
export const proofs: string[] = [
  "agile management.jpg",
  "AI.jpg",
  "angular.jpg",
  "arduino.jpg",
  "asp.net.jpg",
  "automotive.jpg",
  "aws.png",
  "become a  wordpress developer.jpg",
  "blender.jpg",
  "bootcamp.png",
  "bootstrap.jpg",
  "business intelligence ms Excel.jpg",
  "cams-exam-prem.png",
  "clickbank.jpg",
  "coding interview.jpg",
  "coding-interview-bootcamp.jpg",
  "complete digital marketing.jpg",
  "complete react native.jpg",
  "complete wordpress.jpg",
  "construction methodology.jpg",
  "data analysis.jpg",
  "faceless history.png",
  "fb-ads.jpg",
  "financial-analyst.jpg",
  "hana.jpg",
  "hibernate.jpg",
  "illustrator-advance.png",
  "illustrator-basic.png",
  "nestjs.jpg",
  "rust.jpeg",
  "software-arhitecture.jpg",
  "solidworks.png",
  "ultimate react.png",
  "xl.png",
  "youtube.jpg",
];

// FAQ data used across the site
export const faqs = [
  {
    question: "Can I really buy Udemy courses with bKash in Bangladesh?",
    answer:
      "Yes! We offer an assisted-purchase service for learners in Bangladesh who do not have a dollar or dual-currency card. Simply message us on WhatsApp or Facebook Messenger, choose your course, and pay in BDT via bKash, Nagad, or Rocket. We handle the purchase and deliver course access to your email within a few hours.",
  },
  {
    question: "Will I get a Udemy certificate after completing the course?",
    answer:
      "Yes. Every Udemy course comes with an official certificate of completion that you earn after finishing all the course content. The certificate is issued directly by Udemy and can be shared on LinkedIn or downloaded as a PDF.",
  },
  {
    question: "Is this lifetime access?",
    answer:
      "Yes. Udemy courses come with lifetime access once purchased. You can watch the videos at your own pace, revisit lessons anytime, and access any future updates the instructor adds.",
  },
  {
    question: "How fast will I receive the course after payment?",
    answer:
      "After confirming your bKash/Nagad payment, we typically deliver course access within 1–6 hours. In most cases it is much faster. We will send the details to your email address.",
  },
  {
    question: "How much does it cost in BDT?",
    answer:
      "BDT prices depend on the current Udemy sale price (Udemy runs frequent sales offering up to 90% off). Message us on WhatsApp with the course name and we will give you the exact BDT price before you pay.",
  },
  {
    question: "Do I need a Udemy account?",
    answer:
      "Yes, you will need a free Udemy account (sign up at udemy.com with your email). We enroll the course into your account after payment. If you don't have one, we can guide you through creating it — it's free and takes under two minutes.",
  },
  {
    question: "Is this service legitimate and safe?",
    answer:
      "Absolutely. We are an official Udemy affiliate partner. Our purchase proofs page shows real deliveries to real customers across Bangladesh. Hundreds of learners have bought courses through us since we started. You can also check our Facebook page reviews, posts and stories.",
  },
  {
    question: "Can I pay with Nagad or Rocket instead of bKash?",
    answer:
      "Yes! We accept bKash, Nagad, and Rocket and Bank Transfer. Just mention your preferred payment method when you message us.",
  },
  {
    question:
      "What if I have a dollar/dual-currency card? Should I still use your service?",
    answer:
      "If you have a dollar card, you can click our affiliate link and buy directly on Udemy — you will get the same discounted price (up to 90% off during Udemy sales). Our WhatsApp/bKash service is specifically for those without a dollar card.",
  },
  {
    question: "Can I buy a course as a gift for someone else?",
    answer:
      "Yes! Just let us know the recipient's email address when you message us. We will enroll the course on their Udemy account.",
  },
  {
    question: "How do I contact you?",
    answer:
      "You can reach us on WhatsApp at +8801735857535, on Facebook Messenger at m.me/udemycoursebangladesh, or on our Facebook page facebook.com/udemycoursebangladesh.",
  },
  {
    question: "What categories of courses are available?",
    answer:
      "We offer all the courses Available on Udemy."
  },
  {
    question: "How much discount will I get on Udemy courses?",
    answer:
      "Udemy runs frequent sales offering up to 80–90% off on most courses. The exact discount depends on the current Udemy promotion. We always link to the best available discount so you get the lowest possible price.",
  },
  {
    question: "Is this website affiliated with Udemy Inc.?",
    answer:
      "No. We are an independent affiliate website operated in Bangladesh. We are not Udemy, Inc. and this site is not operated or endorsed by Udemy. We earn a small affiliate commission when you purchase through our links at no extra cost to you.",
  },
  {
    question: "Can I access the course on mobile?",
    answer:
      "Yes. Udemy has a free mobile app for Android and iOS. Once you have access to a course, you can watch it on your phone, tablet, or computer — anywhere, anytime.",
  },
  {
    question: "Are there free Udemy courses available in Bangladesh?",
    answer:
      "Udemy does offer some free courses, but most quality courses are paid. However, during Udemy's frequent sales, you can get courses for up to 90% off — sometimes as low as ৳500–৳800 BDT. That's almost free! We always share the best available discount links. For card users, click our affiliate link. For bKash users, just message us.",
  },
  {
    question: "Is there a 100% off coupon code for Udemy courses?",
    answer:
      "Legitimate 100% off coupon codes for premium Udemy courses are very rare and expire within hours. Instead of chasing expired coupons, use our service: during Udemy sales, top courses go down to $10–$15 (around ৳1,000–৳1,500 BDT). Message us on WhatsApp and we'll share the best current price.",
  },
  {
    question: "Can I learn CPA marketing through Udemy? Available in Bangladesh?",
    answer:
      "Yes! Udemy has excellent CPA marketing courses that teach you how to earn online through cost-per-action marketing. These are very popular with Bangladeshi freelancers. You can buy any CPA marketing Udemy course through our service — pay with bKash, Nagad, or Rocket. Just message us with the course name.",
  },
  {
    question: "Are there Udemy courses in Bangla (Bengali) language?",
    answer:
      "Yes, Udemy has a growing number of courses taught in Bengali/Bangla — including web development, digital marketing, freelancing, and more. You can filter by language on Udemy. To buy any Bangla Udemy course in Bangladesh with bKash payment, just message us with the course link and we'll handle the rest.",
  },
  {
    question: "Is there a good SEO course on Udemy for Bangladeshi learners?",
    answer:
      "Absolutely. Udemy has world-class SEO courses covering keyword research, on-page SEO, technical SEO, link building, and Google ranking strategies. These are in high demand among Bangladeshi digital marketers and freelancers. Message us to buy any SEO Udemy course with bKash payment.",
  },
  {
    question: "What web development courses are available on Udemy?",
    answer:
      "Udemy has hundreds of web development courses — from HTML/CSS basics to React, Node.js, Python, and full-stack development. Top courses like The Web Developer Bootcamp and The Ultimate React Course are extremely popular in Bangladesh. You can buy any of these with bKash or a dollar card through our service.",
  },
];
