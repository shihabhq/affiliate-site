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
      "The only course you need to learn web development. HTML, CSS, JS, Node, MongoDB and more. Build real-world projects.",
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
      "Build 100 projects in 100 days and become a web developer. Master HTML, CSS, JavaScript, React, Node.js and more.",
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
      "The ultimate HTML and CSS course for beginners. Build stunning real-world websites with modern HTML5 and CSS3.",
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
      "Master modern React from beginner to advanced! Context API, React Query, Redux, Tailwind, advanced patterns.",
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
      "Learn SEO, social media marketing, Facebook ads, Google ads, email marketing and more in one complete course.",
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
      "Master the principles of graphic design. Learn Photoshop, Illustrator, InDesign and create stunning visual designs.",
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
      "Learn Figma from scratch and design professional UI/UX. Create websites, apps and prototypes.",
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
      "Design and build beautiful websites. Learn Figma for design, Webflow for development, and get freelance clients.",
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
      "Complete Data Science training. Math, Statistics, Python, Advanced Statistics, Machine Learning, Deep Learning.",
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
      "Learn Python like a professional! Start from basics and go all the way to creating your own applications.",
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
      "Become an AI Engineer. Learn LLMs, OpenAI API, LangChain, vector databases, RAG, AI agents and more.",
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
      "Master AI-powered coding with Claude. Learn to build coding agents, automate workflows and supercharge your dev productivity.",
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
      "Master Excel with this A-Z Microsoft Excel course. From beginner to advanced. Includes Pivot Tables, VLOOKUP, Macros.",
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
      "Become an Excel POWER USER! Master advanced formulas, functions, lookups and data tools that set you apart.",
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
      "Learn Excel, Financial Modeling, Valuation, Accounting, the art of presenting and more. Become a top Financial Analyst.",
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
      "Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up.",
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
      "Pass the AWS Certified Solutions Architect Associate Certification SAA-C03. Complete course with practice exams.",
    tags: ["AWS", "Cloud", "DevOps", "Certification", "Solutions Architect"],
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
];
