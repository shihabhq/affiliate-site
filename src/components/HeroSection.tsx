import { siteConfig } from "@/config/site";

const waLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
  "Hi! I want to buy a Udemy course with bKash. I don't have a dollar card. Can you help me?"
)}`;

export default function HeroSection() {
  return (
    <section
      className="bg-dark relative text-white overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% -10%, #4a1572 0%, #1C1D1F 65%)" }}
    >
      {/* Subtle purple glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, #A435F0 0%, transparent 70%)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 py-20 sm:py-28 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-gray-300 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-price inline-block" />
           Top Selling Udemy Affiliate
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3">
          Buy Udemy Courses
          <br />
          <span className="text-gradient-purple">Up to 90% OFF</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-md mx-auto">
          Top courses. Lifetime access. Certificate included.
        </p>

        {/* Primary CTA — No card path (WhatsApp / Messenger) */}
        <div className="border border-white/20 bg-white/5 rounded-2xl p-5 max-w-sm mx-auto backdrop-blur-sm mb-6">
          <p className="text-sm text-gray-200 mb-1 font-semibold">
            কোর্স কিনতে এখনই মেসেজ করুন!
          </p>
          <p className="text-xs text-gray-400 mb-4">
            আমাদের মেসেজ করলে আপনার হয়ে আমরা কোর্স কিনে দেওয়ার ব্যাবস্থা করবো!
          </p>
          <div className="flex gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-whatsapp hover:opacity-90 text-white font-bold py-3 px-3 rounded-xl text-sm transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`${siteConfig.facebookMessage}?ref=hero`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-messenger hover:opacity-90 text-white font-bold py-3 px-3 rounded-xl text-sm transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.84 1.344 5.374 3.474 7.092V22l3.178-1.746A10.6 10.6 0 0 0 12 20.519c5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2Z"/>
              </svg>
              Messenger
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            বিকাশ/নগদ/রকেট দিয়ে কোর্স কিনুন — কোনো ডলার কার্ড লাগবে না!
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-6">
          <div className="flex-1 h-px bg-white/15" />
          <span className="text-xs text-gray-500 font-medium whitespace-nowrap uppercase tracking-wider">
            ডলার কার্ড আছে?
          </span>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        {/* Secondary CTA — Has card (affiliate link) */}
        <a
          href={siteConfig.affiliateLink}
          target="_blank"
          rel="sponsored noopener"
          className="inline-block bg-purple-primary hover:bg-purple-hover text-white font-bold text-base px-8 py-3 rounded-xl transition-colors mb-2"
        >
          Get Discount on Udemy →
        </a>
        <p className="text-xs text-gray-500 mb-10">
          ডুয়াল কারেন্সি কার্ড থাকলে সরাসরি Udemy থেকে ডিস্কাউন্টে কিনুন
        </p>

        {/* Bottom trust strip */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><span className="text-green-price">✔</span> 100+ happy learners</span>
          <span className="flex items-center gap-1"><span className="text-green-price">✔</span> Lifetime access</span>
          <span className="flex items-center gap-1"><span className="text-green-price">✔</span> Official certificate</span>
          <span className="flex items-center gap-1"><span className="text-green-price">✔</span> Fast delivery</span>
        </div>

      </div>
    </section>
  );
}
