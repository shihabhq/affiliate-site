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
  link: string;
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
    link: "trk.udemy.com/n4eZQM",
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
    link: "trk.udemy.com/NGYvq1",
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
    link: "trk.udemy.com/VOjvXj",
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
    link: "trk.udemy.com/ZVevWz",
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
    link: "trk.udemy.com/WOPvoe",
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
    link: "trk.udemy.com/OYLvAP",
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
    link: "trk.udemy.com/yZxPNG",
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
    link: "trk.udemy.com/9VBjkE",
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
    link: "trk.udemy.com/k4P16V",
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
    link: "trk.udemy.com/9VBjkj",
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
    link: "trk.udemy.com/GbY4W9",
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
    link: "trk.udemy.com/WOPv5Z",
    rating: 4.8,
    reviewCount: 12000,
    shortDescription:
      "Learn to use Claude as a coding co-pilot — build agents, automate repetitive tasks, and ship projects faster. A productivity game-changer for Bangladeshi developers and freelancers.",
    tags: ["Claude AI", "AI Coding", "Agents", "Automation", "Productivity"],
  },
  {
    id: "excel-beginner-to-advanced",
    title: "Microsoft Excel — Excel from Beginner to Advanced",
    link: "trk.udemy.com/6kRQJV",
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
    link: "trk.udemy.com/dyqPmq",
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
    link: "trk.udemy.com/yZxP7v",
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
    id: "aws-solutions-architect",
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    slug: "ultimate-aws-certified-solutions-architect-associate-2026",
    category: "devops",
    link: "trk.udemy.com/jRjGvv",
    image:
      "/courses/Ultimate AWS Certified Solutions Architect Associate 2026.png",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 215000,
    shortDescription:
      "Stéphane Maarek's SAA-C03 prep course with practice exams and hands-on labs. AWS certification dramatically increases earning potential for Bangladeshi cloud professionals.",
    tags: ["AWS", "Cloud", "DevOps", "Certification", "Solutions Architect"],
  },
  {
    id: "complete-wordpress-course",
    title: "WordPress 2026: The Complete WordPress Website Course",
    slug: "complete-wp-course",
    category: "web-development",
    image: "/courses/wordpress.webp",
    link: "trk.udemy.com/aNZ9aW",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 215000,
    shortDescription:
      "Tanzeel Ur Rehman's hands-on WordPress course covering 5 real projects, from personal sites to eCommerce with WooCommerce. A practical route to freelance web design income for Bangladeshi developers.",
    tags: ["WordPress", "Web Design", "WooCommerce", "No-Code", "Elementor"],
  },
  {
    id: "complete-data-analyst-bootcamp",
    title: "Complete Data Analyst Bootcamp From Basics To Advanced",
    slug: "complete-data-analyst-bootcamp-from-basics-to-advanced",
    category: "data-science",
    link: "trk.udemy.com/OYLv2Q",
    image: "/courses/data-analyst.webp",
    originalPrice: "$199.99",
    rating: 4.5,
    reviewCount: 21616,
    shortDescription:
      "Krish Naik's end-to-end bootcamp covering Python, SQL, Statistics, Power BI, Tableau and Feature Engineering with real capstone projects. A structured path into data analyst roles for Bangladeshi professionals.",
    tags: ["Python", "SQL", "Power BI", "Statistics", "Data Analysis"],
  },
  {
    id: "after-effects-cc-bootcamp",
    title: "Adobe After Effects CC Bootcamp: Beginner to Advanced",
    slug: "after-effects-cc-bootcamp",
    category: "design",
    link: "trk.udemy.com/KBYvnn",
    image: "/courses/after-effects.webp",
    originalPrice: "$199.99",
    rating: 4.6,
    reviewCount: 39777,
    shortDescription:
      "Louay Zambarakji's hands-on bootcamp covering Motion Graphics, VFX Compositing, and 3D animation with 55+ real world projects. A strong skill set for freelance video and design work from Bangladesh.",
    tags: [
      "After Effects",
      "Motion Graphics",
      "VFX",
      "Animation",
      "Compositing",
    ],
  },
  {
    id: "sap-s4hana-mm-sourcing-procurement",
    title: "SAP S/4HANA Sourcing & Procurement (MM-Materials Management)",
    slug: "sap-s4hana-mm-sourcing-and-procurement",
    category: "business",
    link: "trk.udemy.com/PzqvLz",
    image: "/courses/SAP.webp",
    originalPrice: "$199.99",
    rating: 4.5,
    reviewCount: 8684,
    shortDescription:
      "Rana W Mehmood's configuration and end-user course covering the full P2P cycle, Fiori apps, and S/4HANA MM certification prep. A high-value ERP skill for Bangladeshis targeting corporate and consulting roles.",
    tags: ["SAP", "S/4HANA", "MM", "Procurement", "ERP"],
  },
  {
    id: "complete-web-development-course",
    title: "Complete Web Development Course",
    slug: "web-dev-master",
    category: "web-development",
    link: "trk.udemy.com/DWMZEn",
    image: "/courses/web-dev.webp",
    originalPrice: "$199.99",
    rating: 4.5,
    reviewCount: 22322,
    shortDescription:
      "Hitesh Choudhary's full-stack roadmap covering HTML, CSS, Tailwind, JavaScript, Node, React, MongoDB, Prisma and deployment with lifetime updates. A direct match for the stack Bangladeshi full-stack developers need to freelance or land junior roles.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Full Stack"],
  },
  {
    id: "adobe-illustrator-essentials",
    title: "Adobe Illustrator CC - Essentials Training Course",
    slug: "adobe-illustrator-course",
    category: "design",
    link: "trk.udemy.com/enx5oj",
    image: "/courses/illustrator.webp",
    originalPrice: "$199.99",
    rating: 4.7,
    reviewCount: 33037,
    shortDescription:
      "Daniel Walter Scott's beginner-friendly course covering logo design, typography, and Illustrator's Generative AI tools through 30+ portfolio-ready projects. A solid entry point for Bangladeshi freelancers building graphic design income.",
    tags: [
      "Illustrator",
      "Graphic Design",
      "Logo Design",
      "Vector Art",
      "Adobe",
    ],
  },
];

// Pilot batch of course `id`s that get a dedicated detail page at
// /courses/[category]/[slug] (see src/app/courses/[category]/[slug]/page.tsx and
// src/data/courseDetails.ts). Keep this list in sync with courseDetails.ts —
// every id here must have a matching entry there, and vice versa. Add more ids
// here (and write matching content in courseDetails.ts) to expand the rollout.
export const detailPageCourseIds: string[] = [
  "web-dev-bootcamp",
  "complete-digital-marketing",
  "excel-beginner-to-advanced",
  "python-bootcamp",
  "graphic-design-masterclass",
  "data-science-bootcamp",
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
    answer: "We offer all the courses Available on Udemy.",
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
    question:
      "Can I learn CPA marketing through Udemy? Available in Bangladesh?",
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
