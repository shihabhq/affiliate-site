const trustItems = [
  { icon: "💳", text: "Pay with bKash / Nagad / Rocket" },
  { icon: "♾️", text: "Lifetime access guaranteed" },
  { icon: "🎓", text: "Certificate included" },
  { icon: "👥", text: "100+ happy learners" },
  { icon: "⚡", text: "Fast delivery to email" },
];

export default function TrustBar() {
  return (
    <section
      className="border-y border-gray-border py-4 px-4"
      style={{
        background:
          "linear-gradient(90deg, #f9f5ff 0%, #faf9ff 50%, #f9f5ff 100%)",
      }}
      aria-label="Trust signals"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {trustItems.map((item) => (
            <span
              key={item.text}
              className="text-sm text-dark font-medium flex items-center gap-2"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
