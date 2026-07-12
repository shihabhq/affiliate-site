import Image from "next/image";
import SectionHeading from "./SectionHeading";

const methods = [
  {
    name: "bKash",
    src: "/assets/bkash-logo.svg",
    width: 120,
    height: 48,
    bg: "bg-white border-pink-100",
  },
  {
    name: "Nagad",
    src: "/assets/nagad-logo.svg",
    width: 120,
    height: 48,
    bg: "bg-white border-orange-100",
  },
  {
    name: "Rocket",
    src: "/assets/rocket-logo.svg",
    width: 120,
    height: 48,
    bg: "bg-white border-purple-100",
  },
];

export default function PaymentMethods() {
  return (
    <section className="py-14 px-4 bg-white" aria-label="Accepted payment methods">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading
          title="We Accept"
          subtitle="Pay in BDT with your preferred local payment method — no dollar card needed."
          centered
        />
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          {methods.map((method) => (
            <div
              key={method.name}
              className={`flex items-center justify-center border-2 rounded-2xl px-8 py-5 shadow-sm hover:shadow-md transition-shadow ${method.bg}`}
            >
              <Image
                src={method.src}
                alt={`${method.name} logo`}
                width={method.width}
                height={method.height}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-text">
          Have a dollar / dual-currency card? Use it to buy directly on Udemy via our affiliate link.
        </p>
      </div>
    </section>
  );
}
