"use client";

import { useState } from "react";
import { SectionHeading } from "./Atoms";
import config from "@/config/general";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-16 sm:py-24">
      <SectionHeading eyebrow="Good to know" title={config.contents.faqHeading} />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-sand/80 overflow-hidden rounded-xl border border-sand/70 bg-cream shadow-soft">
        {config.contents.faq.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={index}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-mint/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest"
                >
                  <span className="font-serif text-lg font-semibold text-ink">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-mint" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                hidden={!isOpen}
                className="-mt-1 px-6 pb-6"
              >
                <p className="max-w-2xl text-base leading-relaxed text-inkSoft">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
