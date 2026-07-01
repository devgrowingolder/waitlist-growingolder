"use client";

import { useMemo } from "react";
import Image from "next/image";
import config from "@/config/general";
import Form from "./Form";

const Hero = () => {
  const title = useMemo(() => {
    const { title, markOfTitle } = config.contents;
    const idx = title.indexOf(markOfTitle);
    if (idx >= 0) {
      return {
        before: title.slice(0, idx),
        mark: title.slice(idx, idx + markOfTitle.length),
        after: title.slice(idx + markOfTitle.length),
      };
    }
    return { before: title, mark: "", after: "" };
  }, []);

  return (
    <section id="waitlist" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-20">
        {/* Copy */}
        <div className="reveal max-w-xl">
          <p className="eyebrow">
            <span className="inline-block h-2 w-2 rounded-full bg-leaf" />
            {config.contents.eyebrow}
          </p>

          <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.06] text-ink sm:text-[3.4rem]">
            {title.before}
            <span className="relative whitespace-nowrap text-forest">
              <span className="relative z-10">{title.mark}</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-pill bg-honey/45 sm:bottom-1.5 sm:h-4"
              />
            </span>
            {title.after}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-inkSoft sm:text-xl">
            {config.contents.description}
          </p>

          <Form
            className="mt-8 max-w-lg"
            note="Free to join. No cost, no commitment — just early access."
          />

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-inkMuted">
            <Trust label="Free to join" />
            <Trust label="Private by design" />
            <Trust label="For the whole family" />
          </div>
        </div>

        {/* Image + floating stat card */}
        <div className="reveal relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative overflow-hidden rounded-xl shadow-card">
            <Image
              src="/hero.jpg"
              alt="An older woman and her adult daughter laughing together over tea at home"
              width={1600}
              height={1067}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-lg border border-sand bg-cream/95 px-4 py-3 shadow-lift backdrop-blur sm:-left-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-xl">
              🌿
            </span>
            <div>
              <p className="font-serif text-xl font-semibold leading-none text-forest">
                {config.contents.heroStatValue}
              </p>
              <p className="mt-1 text-xs text-inkSoft">
                {config.contents.heroStatLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trust = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-2">
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-mintDeep text-[10px] text-forest">
      ✓
    </span>
    {label}
  </span>
);

export default Hero;
