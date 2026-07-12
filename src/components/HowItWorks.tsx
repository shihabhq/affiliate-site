import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "1",
    title: "Choose a Course",
    description:
      "Browse our curated list of top Udemy courses across web development, digital marketing, graphic design, data science, and more.",
    accent: "bg-purple-primary",
  },
  {
    number: "2",
    title: "Pick Your Payment Method",
    description:
      "Have a dollar card? Click 'Get Discount' and buy directly on Udemy. No card? Message us on WhatsApp or Messenger — we'll handle it.",
    accent: "bg-purple-primary",
  },
  {
    number: "3",
    title: "Pay & Get Your Course",
    description:
      "Pay in BDT via bKash, Nagad, or Rocket. We enroll the course on your Udemy account — lifetime access + certificate, usually within a few hours.",
    accent: "bg-purple-primary",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-dark text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <div className="h-1 w-10 bg-purple-primary rounded-full mt-3 mx-auto mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Buy any Udemy course in 3 simple steps — with or without a dollar card.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:border-purple-primary/40 transition-colors"
            >
              {/* connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-full w-6 h-px bg-white/20 z-10 -translate-y-1/2" />
              )}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-primary text-white rounded-2xl text-2xl font-extrabold mb-5 shadow-lg shadow-purple-primary/30">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
