import { siteConfig } from "@/config/site";

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. Can you help me?"
)}`;

export default function FinalCTA() {
  return (
    <section className="bg-purple-primary py-16 px-4 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
          Ready to Learn? Get Your Udemy Course Today!
        </h2>
        <p className="text-purple-100 mb-2 text-lg">
          Join 1000+ learners in Bangladesh who are upskilling with Udemy courses.
        </p>
        <p className="text-purple-200 text-sm mb-8">
          আজই শুরু করুন!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.affiliateLink}
            target="_blank"
            rel="sponsored noopener"
            className="inline-block bg-white text-purple-primary font-bold text-base px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            Get Discount on Udemy →
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-whatsapp text-white font-bold text-base px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
