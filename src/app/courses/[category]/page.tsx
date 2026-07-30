import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CourseGrid from "@/components/CourseGrid";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { courses, categories } from "@/data/courses";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ category: string }> };

const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
  "graphic-design": "Graphic Design",
  "data-science": "Data Science",
  "english-language": "English Language",
  freelancing: "Freelancing",
  programming: "Programming",
  "excel-finance": "Excel & Finance",
  devops: "DevOps & Cloud",
  "cpa-marketing": "CPA Marketing",
};

const categoryDescriptions: Record<string, string> = {
  "web-development":
    "Learn web development with the best Udemy courses — HTML, CSS, JavaScript, React, Node.js, Python and more. Build real websites and web apps. Available in Bangladesh: pay with bKash, Nagad, or Rocket. Udemy web development courses in Bangla also available — just message us.",
  "digital-marketing":
    "Master digital marketing with top Udemy courses — SEO, keyword research, Facebook Ads, Google Ads, email marketing, and social media marketing. Udemy digital marketing Bangla courses also available. Buy in Bangladesh with bKash payment — no dollar card needed.",
  "graphic-design":
    "Learn Photoshop, Illustrator, Figma, Canva, and UI/UX design. Start or grow your graphic design career with top-rated Udemy courses available in Bangladesh. Pay with bKash, Nagad, or Rocket.",
  "data-science":
    "Learn Python, machine learning, data analysis, and AI. Top Udemy data science courses available in Bangladesh — pay with bKash, Nagad, or Rocket. No dollar card required.",
  programming:
    "Learn Python, Java, AI programming, and more. Best Udemy programming courses available in Bangladesh with local bKash/Nagad payment. Perfect for students and job holders.",
  "excel-finance":
    "Master Microsoft Excel, financial analysis, accounting, and more. Udemy Excel courses available in Bangladesh — no dollar card needed. Buy with bKash in BDT.",
  devops:
    "Learn Docker, Kubernetes, AWS, and cloud computing. Top Udemy DevOps and cloud courses available in Bangladesh with bKash payment. Ideal for IT professionals.",
  freelancing:
    "Start your freelancing career on Fiverr and Upwork with these Udemy freelancing courses. Learn how to earn online from Bangladesh — no dollar card needed, pay with bKash or Nagad.",
  "english-language":
    "Improve your English speaking, writing, grammar, and communication skills. These Udemy English language courses are available in Bangladesh with easy bKash payment. Perfect for IELTS prep, job interviews, and professional growth.",
  "cpa-marketing":
    "Learn CPA marketing and affiliate marketing with the best Udemy courses. CPA (Cost Per Action) marketing is one of the most popular ways to earn online in Bangladesh. Buy any CPA marketing Udemy course with bKash, Nagad, or Rocket — no dollar card needed.",
};

const categoryWhyLearn: Record<string, string> = {
  "web-development":
    "Web development is one of the most in-demand tech skills in Bangladesh. Experienced developers earn ৳30,000–৳80,000/month at local IT companies, and freelancers on Fiverr and Upwork earn in USD. With the right Udemy course, you can go from zero to job-ready in 3–6 months of consistent learning. All courses below are available in Bangladesh — with bKash, Nagad, or Rocket payment.",
  "digital-marketing":
    "Digital marketing skills are in high demand among Bangladeshi businesses, agencies, and freelancers. From SEO and Facebook Ads to email marketing and content strategy — a solid Udemy digital marketing course can help you land a job at a BD agency or build a freelance career earning in USD. Many courses also include Bangla-language content.",
  "graphic-design":
    "Graphic design is one of the top freelancing skills for Bangladeshi earners. Skilled Photoshop, Illustrator, and Figma designers regularly get orders on Fiverr and work with international clients. A good Udemy graphic design course gives you hands-on projects and a portfolio you can show clients immediately.",
  "data-science":
    "Data science and machine learning are among the fastest-growing career paths globally — and demand is growing in Bangladesh too. Udemy's top data science courses teach Python, statistics, machine learning, and AI from scratch. No prior coding experience required for beginner courses.",
  programming:
    "Programming is the foundation of every tech career. Whether you want to build websites, work with AI, automate tasks, or get a job at a software company in Bangladesh — learning to code through a structured Udemy course is one of the most effective paths available.",
  "excel-finance":
    "Microsoft Excel is used in virtually every office in Bangladesh — accounting, banking, HR, logistics, and finance teams all depend on it. A Udemy Excel course can make you significantly more productive and competitive in any data-related job.",
  devops:
    "DevOps and cloud computing skills (Docker, Kubernetes, AWS) are among the highest-paid IT skills in Bangladesh and globally. These courses are ideal for IT professionals looking to grow their career, pass certification exams, or transition into cloud roles.",
  freelancing:
    "Freelancing on Fiverr and Upwork is a major income source for Bangladeshi youth. A Udemy freelancing course teaches you how to create winning gigs, find clients, set competitive prices, and grow your freelance business — all while earning in USD from Bangladesh.",
  "english-language":
    "Strong English skills open doors to better jobs, higher-paying freelance clients, and international opportunities. Whether you are preparing for IELTS, improving your spoken English for job interviews, or writing professional emails — a structured Udemy English course is more effective than scattered YouTube videos.",
  "cpa-marketing":
    "CPA (Cost Per Action) marketing is one of Bangladesh's most popular online earning methods. You promote offers from CPA networks and earn commissions for specific user actions — signups, downloads, purchases. No product, no inventory, no client calls. A Udemy CPA course teaches you traffic generation, offer selection, and campaign optimization from scratch.",
};

type FaqItem = { question: string; answer: string };

const categoryFaqs: Record<string, FaqItem[]> = {
  "web-development": [
    {
      question:
        "Which Udemy web development course is best for absolute beginners in Bangladesh?",
      answer:
        "The Web Developer Bootcamp by Colt Steele is the most recommended starting point. It covers HTML, CSS, JavaScript, Node.js, and MongoDB from scratch — with 280,000+ positive reviews and a clear, beginner-friendly teaching style. You can buy it in Bangladesh with bKash, Nagad, or Rocket through our service.",
    },
    {
      question:
        "Can I get a job as a web developer in Bangladesh after a Udemy course?",
      answer:
        "Yes — many Bangladeshi web developers have gotten their first job after completing Udemy bootcamp courses. The key is building real projects during the course and sharing them on GitHub. Udemy certificates also signal to employers that you committed to structured learning.",
    },
    {
      question:
        "How much does a Udemy web development course cost in Bangladesh (in BDT)?",
      answer:
        "During Udemy sales, most web development courses are available for $10–$20, which is approximately ৳1,100–৳2,200 BDT. Message us on WhatsApp with the course name and we will give you the exact BDT price for today's sale before you pay.",
    },
    {
      question: "Do I need a laptop to learn web development on Udemy?",
      answer:
        "You need a computer (laptop or desktop) to write and run code. A smartphone is fine for watching the video lessons but not for actually coding. Any mid-range laptop (Core i3 or Ryzen 3 with 4GB RAM) is sufficient for web development courses on Udemy.",
    },
    {
      question:
        "Are there Bangla web development courses available on Udemy in Bangladesh?",
      answer:
        "Yes — Udemy has a growing number of web development courses taught in Bengali. You can filter by language on Udemy's website. If you specifically want a Bangla course, mention that when you message us and we will help you find the right one.",
    },
  ],
  "digital-marketing": [
    {
      question:
        "Which is the best digital marketing course on Udemy for Bangladeshi learners?",
      answer:
        "The Complete Digital Marketing Guide (27 courses in 1) is the most comprehensive option on Udemy, covering SEO, Facebook Ads, Google Ads, email marketing, and more in one package. For SEO specifically, the SEO Training & Keyword Research Masterclass is excellent. Both are available through our service with bKash payment.",
    },
    {
      question: "Can I learn SEO from Udemy and actually rank on Google?",
      answer:
        "Yes. Udemy's top SEO courses cover on-page SEO, technical SEO, keyword research, link building, and content strategy — the same skills used by professional SEO agencies. Real results take time (3–6 months of applying what you learn), but Udemy courses give you the complete knowledge base to do it correctly.",
    },
    {
      question:
        "Are there Bangla digital marketing courses available on Udemy?",
      answer:
        "Yes — there are digital marketing courses on Udemy taught in Bengali, covering Facebook Ads, SEO, and content marketing. Message us with your preferred topic and we will find the best Bangla option for you. We can also help with any English-language course if you are comfortable with English.",
    },
    {
      question: "How much can I earn from digital marketing in Bangladesh?",
      answer:
        "Digital marketing freelancers in Bangladesh typically earn $300–$1,500 per month on platforms like Fiverr and Upwork, depending on skills and experience. Agency jobs in Dhaka pay ৳20,000–৳60,000/month for experienced digital marketers. SEO and Facebook Ads specialists are particularly in demand.",
    },
    {
      question:
        "Can I buy digital marketing Udemy courses with bKash in Bangladesh?",
      answer:
        "Yes — all digital marketing courses on our site can be purchased with bKash, Nagad, or Rocket. Simply message us on WhatsApp or Facebook Messenger with the course name, and we will handle the purchase. Course access is delivered to your Udemy account within a few hours.",
    },
  ],
  "cpa-marketing": [
    {
      question:
        "What is CPA marketing and can I actually do it from Bangladesh?",
      answer:
        "CPA (Cost Per Action) marketing means you get paid every time someone completes a specific action — signup, form fill, download, or purchase — through your link. Yes, Bangladeshis actively do CPA marketing and earn in USD. You need a CPA network account, traffic sources (social media, SEO, ads), and knowledge of campaign optimization — all covered in Udemy's CPA courses.",
    },
    {
      question:
        "Which CPA marketing Udemy course is best for beginners in Bangladesh?",
      answer:
        "The CPA Marketing Masterclass — Complete CPA Marketing Course is the most beginner-friendly option on Udemy. It covers CPA networks, offer selection, free and paid traffic methods, and campaign tracking step by step. Available in Bangladesh with bKash payment through our service.",
    },
    {
      question: "How much can I earn from CPA marketing in Bangladesh?",
      answer:
        "Beginners typically earn $100–$500/month after 2–3 months of learning and applying the skills. Experienced CPA marketers in Bangladesh earn $1,000–$5,000+ per month. Results depend entirely on effort, the offers you choose, and your traffic strategy.",
    },
    {
      question:
        "Do I need to invest money to start CPA marketing from Bangladesh?",
      answer:
        "No — you can start with free traffic methods: Facebook groups, YouTube, SEO content, and organic social media. Paid ads (Facebook Ads, Google Ads) can scale your campaigns later, but they are not required to get started. The Udemy course will teach both approaches.",
    },
    {
      question: "Can I buy CPA marketing Udemy courses with bKash?",
      answer:
        "Yes — all CPA marketing courses are available through our bKash service. Message us on WhatsApp (+8801735857535) or Facebook Messenger with the course name, pay with bKash, Nagad, or Rocket, and receive lifetime access to your Udemy account within a few hours.",
    },
  ],
  freelancing: [
    {
      question:
        "How do I start freelancing from Bangladesh as a complete beginner?",
      answer:
        "Start by choosing ONE skill to learn (graphic design, web development, digital marketing, etc.). Take a Udemy course on that skill, build 3–5 portfolio projects, then create profiles on Fiverr and Upwork. A Udemy freelancing course will walk you through the complete process — from skill selection to getting your first order.",
    },
    {
      question: "Is Fiverr or Upwork better for Bangladeshi freelancers?",
      answer:
        "Fiverr is generally easier for beginners in Bangladesh — you create a gig and wait for buyers to find you, which requires less active proposal writing. Upwork is more competitive but pays better per project. Most successful Bangladeshi freelancers start on Fiverr and later expand to Upwork. Udemy courses on both platforms are available through our service.",
    },
    {
      question: "What skills should I learn first for freelancing in Bangladesh?",
      answer:
        "The most in-demand freelancing skills in Bangladesh are: graphic design (logo, Photoshop, Figma), web development (HTML/CSS, WordPress, React), digital marketing (Facebook Ads, SEO), video editing, and data entry. Graphic design and web development offer the highest long-term earning potential. Udemy courses for all of these are available with bKash payment.",
    },
    {
      question: "Can I actually earn in US dollars from freelancing in Bangladesh?",
      answer:
        "Yes — Fiverr and Upwork pay in USD, which you can withdraw to your bKash account or local bank account. Many Bangladeshi freelancers earn $300–$2,000/month. Payment withdrawal to Bangladesh is straightforward and is widely done by thousands of Bangladeshi freelancers every month.",
    },
    {
      question:
        "Which Udemy freelancing course is best for Bangladeshi beginners?",
      answer:
        "The Complete Freelancing Course — Work From Home & Earn Online covers Fiverr, Upwork, and general freelancing strategies from scratch. For Fiverr specifically, Fiverr Freelancing — Rank Your Gig & Get Orders Fast is highly rated. Both are available with bKash payment through our service.",
    },
  ],
  "graphic-design": [
    {
      question:
        "Which graphic design software should I learn first in Bangladesh?",
      answer:
        "Start with Canva if you are a complete beginner — it is free and easy. Then progress to Adobe Photoshop for photo editing and raster graphics, and Adobe Illustrator for logos and vector work. Figma is essential for UI/UX design. Udemy has excellent beginner courses for all of these, available in Bangladesh with bKash payment.",
    },
    {
      question: "How much can a graphic designer earn in Bangladesh?",
      answer:
        "Entry-level graphic designers at Dhaka agencies earn ৳15,000–৳30,000/month. Experienced designers earn ৳40,000–৳80,000+. Freelancers on Fiverr and Upwork can earn $300–$2,000/month depending on their niche (logo design, UI/UX, social media graphics). A strong Udemy portfolio course is a practical first step.",
    },
    {
      question: "Are there Udemy graphic design courses in Bangla?",
      answer:
        "Yes — Udemy has graphic design courses taught in Bengali, covering Photoshop, Illustrator, and Canva. Message us on WhatsApp with your preferred topic and we will find the best Bangla-language option for you. Our bKash service makes all courses accessible without a dollar card.",
    },
    {
      question:
        "Do I need an expensive computer to learn graphic design on Udemy?",
      answer:
        "For basic courses (Canva, beginner Photoshop), any mid-range laptop will work. For advanced Photoshop, Illustrator, and video editing, you will need at least 8GB RAM and a dedicated GPU for smooth performance. A drawing tablet helps for digital illustration but is not required for most beginner courses.",
    },
    {
      question:
        "Can I learn Figma or Photoshop from Udemy courses in Bangladesh?",
      answer:
        "Yes — Udemy has top-rated courses for both Figma (UI/UX design) and Photoshop (graphic design). The Figma UI UX Design Essentials and Graphic Design Masterclass courses are both available through our bKash service. Message us with the course name to get started.",
    },
  ],
  "data-science": [
    {
      question: "Do I need prior coding experience to start a data science Udemy course?",
      answer:
        "No — the best beginner data science courses on Udemy (like The Complete Data Science Bootcamp) start from absolute zero. They teach Python from scratch before moving into statistics, data analysis, and machine learning. You do need a computer and willingness to practice consistently.",
    },
    {
      question: "Is data science in demand in Bangladesh?",
      answer:
        "Yes and growing fast. Banks, telcos, e-commerce companies, and startups in Bangladesh are increasingly looking for data analysts and data scientists. Globally, data science is one of the highest-paid tech careers, and remote jobs for Bangladeshi data scientists are also accessible.",
    },
    {
      question: "Can I buy data science Udemy courses with bKash in Bangladesh?",
      answer:
        "Yes — all data science courses on our site are available with bKash, Nagad, or Rocket payment. Message us on WhatsApp or Facebook Messenger with the course name, pay in BDT, and receive lifetime Udemy access within a few hours.",
    },
    {
      question: "Which programming language should I learn first for data science?",
      answer:
        "Python is the standard language for data science and machine learning globally. Start with Python before moving to libraries like NumPy, Pandas, Matplotlib, and Scikit-learn. Udemy's data science courses teach all of this in sequence — no need to figure out the order yourself.",
    },
  ],
  programming: [
    {
      question: "Which programming language is best to learn first in Bangladesh?",
      answer:
        "Python is the most recommended first language in 2026 — it is beginner-friendly, highly versatile (web, data science, AI, automation), and in strong demand. The Complete Python Bootcamp on Udemy is the most popular starting point and is available with bKash payment in Bangladesh.",
    },
    {
      question: "Can I get a programming job in Bangladesh after a Udemy course?",
      answer:
        "Yes — especially if you combine Udemy course knowledge with real projects and a GitHub portfolio. Many software companies in Dhaka hire junior developers based on demonstrated skills, not just degrees. A Udemy certificate plus portfolio projects is a strong combination for entry-level roles.",
    },
    {
      question: "Are AI programming courses available on Udemy in Bangladesh?",
      answer:
        "Yes — The AI Engineer Course 2026 and similar courses teach Python, LLMs, LangChain, OpenAI API, and AI agent development. These are among the most relevant courses for 2026. Available with bKash payment through our service — message us with the course name.",
    },
  ],
  "excel-finance": [
    {
      question: "Which Udemy Excel course is best for beginners in Bangladesh?",
      answer:
        "Microsoft Excel — Excel from Beginner to Advanced is the most comprehensive and highly rated Excel course on Udemy, with 650,000+ enrolled students. It covers everything from basics to Pivot Tables, VLOOKUP, and Macros. Available in Bangladesh with bKash payment through our service.",
    },
    {
      question: "Will a Udemy Excel certificate help me get a job in Bangladesh?",
      answer:
        "Yes — Excel proficiency is listed as a requirement in a large percentage of job postings in Bangladesh (banking, accounting, HR, logistics). A Udemy certificate demonstrates that you completed a structured, recognized course, which strengthens your CV.",
    },
    {
      question: "Can I buy Udemy Excel courses with bKash in Bangladesh?",
      answer:
        "Yes — all Excel and finance courses on our site are available with bKash, Nagad, or Rocket payment. No dollar card needed. Message us on WhatsApp with the course name and we will deliver course access to your Udemy account within a few hours.",
    },
  ],
  devops: [
    {
      question: "Is DevOps in demand in Bangladesh?",
      answer:
        "Yes — and globally, DevOps engineers are among the highest-paid IT professionals. AWS, Docker, and Kubernetes skills command significant salary premiums at Bangladeshi tech companies and are in very high demand for remote international roles accessible from Bangladesh.",
    },
    {
      question: "Do I need prior IT experience to learn DevOps on Udemy?",
      answer:
        "Basic Linux command line familiarity and some programming experience (Python or any language) are helpful. The best DevOps courses on Udemy (Docker & Kubernetes: The Practical Guide) assume you know basic web development concepts. Complete beginners should build some coding fundamentals first.",
    },
    {
      question: "Can I buy DevOps Udemy courses with bKash in Bangladesh?",
      answer:
        "Yes — all DevOps and cloud computing courses are available through our bKash service. Message us on WhatsApp (+8801735857535) with the course name and we will arrange the purchase in BDT.",
    },
  ],
  "english-language": [
    {
      question: "Which Udemy English course is best for improving speaking in Bangladesh?",
      answer:
        "The English Speaking Masterclass — Speak English Fluently is the most popular speaking course on Udemy. It covers pronunciation, fluency, and confidence building through practical exercises. Available in Bangladesh with bKash payment through our service.",
    },
    {
      question: "Will a Udemy English certificate help with job applications in Bangladesh?",
      answer:
        "Yes — demonstrating initiative to improve English skills through a structured course is a positive signal to employers. A Udemy certificate on your CV or LinkedIn shows you took a proactive step. For international company applications, it also shows English proficiency commitment.",
    },
    {
      question: "Are Udemy English courses helpful for IELTS preparation?",
      answer:
        "Some Udemy English courses include IELTS preparation content (grammar, reading, writing, speaking modules). They are a good supplement to dedicated IELTS prep materials. If your main goal is IELTS, look for courses that specifically mention IELTS in their title. We can help you find the right one — just message us.",
    },
  ],
};

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

const categoryMetaOverrides: Record<
  string,
  { title: string; description: string }
> = {
  "web-development": {
    title: "Web Development Udemy Courses in Bangladesh — Buy with bKash",
    description:
      "Best web development Udemy courses in Bangladesh — HTML, CSS, JavaScript, React, Node.js. Buy with bKash, Nagad, or Rocket. No dollar card. Up to 90% off.",
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO Udemy Courses Bangladesh — bKash Payment",
    description:
      "Top Udemy digital marketing courses — SEO, keyword research, Facebook Ads, Google Ads & more. Udemy digital marketing Bangla courses also available. Buy with bKash in Bangladesh.",
  },
  "cpa-marketing": {
    title: "CPA Marketing Udemy Courses in Bangladesh — Buy with bKash",
    description:
      "Learn CPA marketing and affiliate marketing with top Udemy courses. Available in Bangladesh — pay with bKash, Nagad, or Rocket. No dollar card needed. Up to 90% off.",
  },
  freelancing: {
    title: "Freelancing Udemy Courses Bangladesh — Fiverr, Upwork & Earn Online",
    description:
      "Best Udemy freelancing courses in Bangladesh — Fiverr, Upwork, online earning, and more. Pay with bKash or Nagad — no dollar card needed. Start earning online from Bangladesh.",
  },
  "english-language": {
    title: "English Language Udemy Courses in Bangladesh — Speak Fluently",
    description:
      "Top Udemy English courses in Bangladesh — speaking, grammar, IELTS prep, and professional communication. Buy with bKash, Nagad, Rocket. No dollar card needed.",
  },
};

const OG_IMAGE = {
  url: "/assets/OG.png",
  width: 1904,
  height: 982,
  alt: "Udemy Courses in Bangladesh — Buy with bKash",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category];
  if (!label) return {};
  const override = categoryMetaOverrides[category];
  const title =
    override?.title ?? `${label} Udemy Courses in Bangladesh — Up to 90% OFF`;
  const description =
    override?.description ??
    `Buy ${label} Udemy courses in Bangladesh with bKash, Nagad, Rocket — no dollar card needed. Up to 90% off on top-rated ${label.toLowerCase()} courses.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.domain}/courses/${category}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.domain}/courses/${category}`,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = categoryLabels[category];
  if (!label) notFound();

  const categoryCourses = courses.filter((c) => c.category === category);
  const faqs = categoryFaqs[category] ?? [];
  const whyLearn = categoryWhyLearn[category];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.domain },
      { "@type": "ListItem", position: 2, name: "All Courses", item: `${siteConfig.domain}/courses` },
      { "@type": "ListItem", position: 3, name: `${label} Courses`, item: `${siteConfig.domain}/courses/${category}` },
    ],
  };

  const faqJsonLd = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-text mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-dark transition-colors">
              Home
            </Link>
            {" / "}
            <Link href="/courses" className="hover:text-dark transition-colors">
              Courses
            </Link>
            {" / "}
            <span className="text-dark font-medium">{label}</span>
          </nav>

          <SectionHeading
            title={`${label} Courses in Bangladesh — Up to 90% OFF`}
            subtitle={
              categoryDescriptions[category] ||
              `Top Udemy ${label} courses available in Bangladesh with bKash payment.`
            }
          />

          {categoryCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-text mb-4">
                No courses found in this category yet.
              </p>
              <Link
                href="/courses"
                className="inline-block bg-purple-primary text-white font-semibold px-6 py-3 rounded hover:bg-purple-hover transition-colors"
              >
                Browse All Courses
              </Link>
            </div>
          ) : (
            <CourseGrid courses={categoryCourses} />
          )}

          {/* Why learn section */}
          {whyLearn && (
            <div className="mt-12 bg-bg-light rounded-lg p-6 border border-gray-border">
              <h2 className="text-lg font-bold text-dark mb-2">
                Why Learn {label} in Bangladesh?
              </h2>
              <p className="text-sm text-gray-text leading-relaxed">{whyLearn}</p>
            </div>
          )}

          {/* How to buy */}
          <div className="mt-6 bg-bg-light rounded-lg p-6 border border-gray-border">
            <h2 className="text-lg font-bold text-dark mb-2">
              How to buy {label} Udemy courses in Bangladesh
            </h2>
            <p className="text-sm text-gray-text mb-4">
              You can buy any of these {label.toLowerCase()} courses in two
              ways:
            </p>
            <ul className="text-sm text-gray-text space-y-2 mb-4">
              <li>
                <strong>With a dollar/dual-currency card:</strong> Click &ldquo;Get
                This Course&rdquo; and then &ldquo;Get up to 90% OFF on Udemy →&rdquo; to buy
                directly on Udemy.
              </li>
              <li>
                <strong>Without a card (bKash/Nagad/Rocket):</strong> Click &ldquo;Get
                This Course&rdquo; and choose &ldquo;Order via WhatsApp&rdquo; or &ldquo;Order via
                Facebook Messenger&rdquo;. Pay in BDT and receive course access on
                your email within a few hours.
              </li>
            </ul>
            <Link
              href="/how-to-buy"
              className="text-sm text-purple-primary hover:text-purple-hover font-medium underline"
            >
              Read the full buying guide →
            </Link>
          </div>

          {/* FAQ section */}
          {faqs.length > 0 && (
            <div className="mt-10 max-w-3xl">
              <h2 className="text-xl font-bold text-dark mb-1">
                Frequently Asked Questions about {label} Courses in Bangladesh
              </h2>
              <div className="h-1 w-8 bg-purple-primary rounded-full mb-6" />
              <FaqAccordion items={faqs} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
