import { SectionHeading } from "./Atoms";
import config from "@/config/general";

const HowWorks = () => {
  return (
    <section id="how-it-works" className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="Getting started"
        title={config.contents.howWorksHeading}
        subtitle={config.contents.howWorksSubheading}
      />

      <div className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-px bg-forest/15 md:block"
        />
        {config.contents.howWorks.map((step, i) => (
          <div key={i} className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-forest/15 bg-cream font-serif text-2xl font-semibold text-forest shadow-soft">
              {i + 1}
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-inkSoft">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
