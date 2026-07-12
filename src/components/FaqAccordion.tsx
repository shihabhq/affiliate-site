"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="divide-y divide-gray-border border border-gray-border rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left bg-white hover:bg-bg-light transition-colors gap-4"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm font-semibold text-dark">{item.question}</span>
            <span className="text-gray-text shrink-0 text-lg" aria-hidden="true">
              {openIndex === i ? "▲" : "▼"}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 bg-bg-light">
              <p className="text-sm text-gray-text leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
