import { siteConfig } from "@/config/site";

const waLink = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(
  "Hi! I'm reaching out about partnering with Udemy Course Bangladesh for our event/organization.",
)}`;

export default function PartnerWithUs() {
  return (
    <section className="bg-dark py-16 px-4 text-white text-center" id="partner-with-us">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
          Partner With Us
        </h2>
        <p className="text-gray-300 mb-2 text-lg">
          We team up with events, organizations, and university clubs to
          bring affordable Udemy courses to their members and attendees.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          ইভেন্ট, সংগঠন বা ইউনিভার্সিটি ক্লাবের জন্য পার্টনারশিপ করতে যোগাযোগ করুন
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-block bg-white text-dark font-bold text-base px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            Call {siteConfig.phone}
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
