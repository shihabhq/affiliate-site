// Extra content for the pilot batch of individual course pages
// (/courses/[category]/[slug] — see detailPageCourseIds in courses.ts).
// Keyed by course `id`. Every id in detailPageCourseIds must have an entry here.
//
// This is our own original copy, not copied from Udemy — see CLAUDE.md §11.

export type CourseDetailContent = {
  /** 4-6 short bullet points on what the course covers */
  learnPoints: string[];
  /** 2-3 sentence paragraph on why this course matters for a Bangladeshi learner */
  whyBangladesh: string;
  /** Course-specific FAQ — keep distinct from the category-page FAQ, not a repeat of it */
  faqs: { question: string; answer: string }[];
};

export const courseDetails: Record<string, CourseDetailContent> = {
  "web-dev-bootcamp": {
    learnPoints: [
      "HTML5 and CSS3 fundamentals, including Flexbox and Grid layouts",
      "JavaScript from the basics through DOM manipulation and async code",
      "Building a backend with Node.js, Express, and MongoDB",
      "Deploying real websites so you have a live portfolio, not just local files",
      "Authentication, RESTful routing, and working with APIs",
    ],
    whyBangladesh:
      "This is usually the first serious course Bangladeshi beginners take before applying for junior developer roles or picking up freelance web projects on Fiverr and Upwork. Because it goes from zero to a working full-stack app, you finish with 2-3 real projects you can show a client or an employer — not just certificates.",
    faqs: [
      {
        question: "Is The Web Developer Bootcamp good for someone with zero coding experience?",
        answer:
          "Yes — it's designed for complete beginners and starts from the very basics of HTML. No prior programming knowledge is assumed. Bangladeshi students with no CS background regularly use this as their first web development course.",
      },
      {
        question: "How long does it take to finish this course?",
        answer:
          "It's self-paced with lifetime access, so you can go as fast or slow as you like. Most learners who study a few hours a week finish the core material and their first project within 6-10 weeks.",
      },
      {
        question: "How much does The Web Developer Bootcamp cost in Bangladesh (BDT)?",
        answer:
          "The listed price is $199.99, but Udemy runs frequent sales bringing it down to $10-$20 (roughly ৳1,100-৳2,200 BDT). Message us on WhatsApp for the exact price during the current sale before you pay.",
      },
      {
        question: "Do I need a powerful laptop to follow along?",
        answer:
          "No — any laptop that can run a modern code editor (VS Code) and a browser is enough. A Core i3/Ryzen 3 with 4GB RAM handles this course fine; you don't need a gaming laptop for web development.",
      },
    ],
  },

  "complete-digital-marketing": {
    learnPoints: [
      "SEO fundamentals: keyword research, on-page and technical SEO",
      "Running Facebook Ads and Google Ads campaigns from scratch",
      "Email marketing funnels and list-building",
      "Social media marketing strategy across platforms",
      "Analytics — reading the numbers to know what's actually working",
    ],
    whyBangladesh:
      "Digital marketing is one of the most in-demand freelance skills coming out of Bangladesh, because clients on Fiverr and Upwork hire for it constantly and the work is fully remote. Because this course bundles 27 sub-courses into one, it covers enough ground (SEO, Ads, email, social) that you can pick a specialty once you see which part you enjoy most.",
    faqs: [
      {
        question: "Is this one course or a bundle of several courses?",
        answer:
          "It's a single Udemy listing that bundles 27 focused mini-courses — SEO, Facebook Ads, Google Ads, email marketing, and more — under one purchase, so you get broad coverage instead of buying each topic separately.",
      },
      {
        question: "Do I need any marketing background to start?",
        answer:
          "No. It's built for beginners and explains core concepts (what a funnel is, how ad auctions work, what SEO actually does) before going deeper into any one channel.",
      },
      {
        question: "How much does this course cost in Bangladesh (BDT)?",
        answer:
          "Listed at $199.99, but during Udemy sales it typically drops to around $10-$20 (approximately ৳1,100-৳2,200 BDT). Message us on WhatsApp for today's exact price before paying.",
      },
      {
        question: "Can I actually get freelance clients after finishing this course?",
        answer:
          "The course teaches the skills; landing clients still takes building a portfolio and pitching on platforms like Fiverr or Upwork. Many Bangladeshi digital marketers use exactly this course as their starting curriculum before building a track record.",
      },
    ],
  },

  "excel-beginner-to-advanced": {
    learnPoints: [
      "Core Excel navigation, formatting, and formulas",
      "Pivot Tables for summarizing large datasets quickly",
      "VLOOKUP and other lookup functions for cross-referencing data",
      "Basic Macros to automate repetitive spreadsheet tasks",
      "Building clean, presentation-ready reports and dashboards",
    ],
    whyBangladesh:
      "Excel is a baseline requirement for almost every office job in Bangladesh — accounting, admin, data entry, banking, and NGO roles all expect it. This is Udemy's most-enrolled Excel course, which means the explanations have been refined against millions of learners' questions, making it a reliable pick even for someone who's never opened a spreadsheet professionally before.",
    faqs: [
      {
        question: "Is this course suitable if I've never used Excel for work before?",
        answer:
          "Yes — it starts from the absolute basics (opening a workbook, entering data) before moving into Pivot Tables, VLOOKUP, and Macros, so no prior spreadsheet experience is needed.",
      },
      {
        question: "Will this help me pass a job interview Excel test in Bangladesh?",
        answer:
          "It covers the core skills most Bangladeshi employers test for — formulas, Pivot Tables, and basic data cleaning — so it's a solid preparation course, though the exact test format varies by company.",
      },
      {
        question: "How much does this Excel course cost in BDT?",
        answer:
          "Listed at $129.99, typically discounted to around $10-$15 during Udemy sales (roughly ৳1,100-৳1,650 BDT). Message us on WhatsApp for the current price.",
      },
      {
        question: "Does the course cover Excel formulas used in accounting and finance?",
        answer:
          "It covers the general-purpose formulas (VLOOKUP, SUMIF, IF statements) used across accounting, admin, and data-entry work. For deep finance-specific formulas (XLOOKUP, Power Query, VBA), see our Advanced Excel Formulas & Functions course instead.",
      },
    ],
  },

  "python-bootcamp": {
    learnPoints: [
      "Python syntax and fundamentals — variables, loops, functions",
      "Object-oriented programming (OOP) in Python",
      "Working with files, error handling, and debugging",
      "Basic web scraping and automation scripts",
      "A foundation strong enough to move into data science or web development next",
    ],
    whyBangladesh:
      "Python is usually the first language recommended to Bangladeshi students moving into tech, because it's the entry point for data science, automation, and AI roles that are currently the highest-demand areas in the local job market. It's also the most-reviewed Python course on Udemy, which is a useful signal when you're choosing between dozens of similar-sounding options.",
    faqs: [
      {
        question: "Is this a good first programming course, or should I learn something else first?",
        answer:
          "Python is widely recommended as a first language precisely because its syntax is closer to plain English than most languages, and this course assumes zero prior programming experience.",
      },
      {
        question: "Does this course lead into data science or just general programming?",
        answer:
          "It covers core Python programming (not data science libraries like Pandas or scikit-learn specifically), which makes it a solid prerequisite before taking a dedicated data science course.",
      },
      {
        question: "How much does the Python Bootcamp cost in Bangladesh (BDT)?",
        answer:
          "Listed at $149.99, usually available for $10-$15 during Udemy sales (around ৳1,100-৳1,650 BDT). Message us on WhatsApp for the exact current price.",
      },
      {
        question: "Can I run Python on a low-spec laptop?",
        answer:
          "Yes. Python and a code editor run comfortably on almost any laptop from the last decade — no special hardware is needed for this course.",
      },
    ],
  },

  "graphic-design-masterclass": {
    learnPoints: [
      "Photoshop fundamentals for photo editing and compositing",
      "Illustrator for vector graphics and logo design",
      "InDesign basics for multi-page layouts",
      "Core design principles: typography, color theory, and composition",
      "Building a portfolio of practice projects as you go",
    ],
    whyBangladesh:
      "Graphic design is one of the more accessible freelance skills to start from Bangladesh — clients on Fiverr regularly need logos, social media creatives, and print design, and the barrier to entry is a laptop and this kind of foundational course rather than expensive equipment. Covering Photoshop, Illustrator, and InDesign together means you're not locked into just one tool.",
    faqs: [
      {
        question: "Do I need Adobe Creative Cloud to follow this course?",
        answer:
          "Yes, the course teaches Photoshop, Illustrator, and InDesign directly, so you'll need access to Adobe's apps (a Creative Cloud subscription) to practice along with the lessons.",
      },
      {
        question: "Is this course enough to start freelancing as a graphic designer?",
        answer:
          "It gives you the foundational skills and principles; most learners then build a small portfolio of practice/spec projects before pitching on Fiverr or approaching local agencies for entry-level work.",
      },
      {
        question: "How much does this course cost in BDT?",
        answer:
          "Listed at $199.99, typically discounted to $10-$20 during Udemy sales (roughly ৳1,100-৳2,200 BDT). Message us on WhatsApp for today's exact price.",
      },
      {
        question: "I only want to learn Figma for UI/UX, not Photoshop/Illustrator — is this the right course?",
        answer:
          "This course focuses on the Adobe design suite for graphic design and branding work. If you specifically want Figma and UI/UX design, our Figma UI UX Design Essentials course is a closer match.",
      },
    ],
  },

  "data-science-bootcamp": {
    learnPoints: [
      "Statistics fundamentals needed to understand data correctly",
      "Python for data science — NumPy, Pandas, and data manipulation",
      "Machine learning basics: regression, classification, and model evaluation",
      "An introduction to deep learning concepts",
      "How the pieces fit together in a real data science workflow",
    ],
    whyBangladesh:
      "Data analyst and data science roles are growing in Bangladesh's tech and fintech sectors, and this A-to-Z course is built for people moving into the field without a data background, covering statistics through deep learning in one structured path instead of piecing together separate resources.",
    faqs: [
      {
        question: "Do I need to know Python before starting this course?",
        answer:
          "Basic familiarity with programming helps, but the course introduces the Python you need for data science along the way. If you're completely new to programming, working through a Python fundamentals course first will make this easier.",
      },
      {
        question: "Does this course cover Machine Learning and Deep Learning both?",
        answer:
          "Yes — it's structured to go from statistics fundamentals through Python, into Machine Learning, and finishes with an introduction to Deep Learning, so you get the full pipeline in one course.",
      },
      {
        question: "How much does this course cost in Bangladesh (BDT)?",
        answer:
          "Listed at $199.99, typically available for $10-$20 during Udemy sales (approximately ৳1,100-৳2,200 BDT). Message us on WhatsApp for the current price before you buy.",
      },
      {
        question: "Is this course enough to get a data analyst job in Bangladesh?",
        answer:
          "It gives you the technical foundation employers look for, but landing a role also depends on building your own project portfolio and, ideally, a strong Excel/SQL base alongside it — our Excel and Data Analyst Bootcamp courses pair well with this one.",
      },
    ],
  },
};
