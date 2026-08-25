import { siteConfig } from "@/config/site";
import AffiliateLink from "@/components/AffiliateLink";

// Generic bottom-of-post banner for when a post isn't pushing one specific
// course — <FinalCTA /> in MDX. Prefer <CourseCTA />/<OfferCTA /> when the
// post is about a particular course, since those link straight to it.
export default function FinalCTA() {
  const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
    "Hi! I want to buy a Udemy course with bKash. Can you help me?",
  )}`;

  return (
    <div className="not-prose bg-dark text-white rounded-2xl p-7 text-center my-10">
      <p className="font-bold text-lg mb-2">Ready to start learning?</p>
      <p className="text-gray-400 text-sm mb-5">
        Buy any Udemy course in Bangladesh — with a card or with bKash.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <AffiliateLink className="bg-purple-primary hover:bg-purple-hover text-white font-bold px-6 py-3 rounded-xl text-sm text-center transition-colors">
          Get Discount on Udemy →
        </AffiliateLink>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-whatsapp text-white font-bold px-6 py-3 rounded-xl text-sm text-center hover:opacity-90 transition-opacity"
        >
          Buy with bKash via WhatsApp
        </a>
      </div>
    </div>
  );
}
