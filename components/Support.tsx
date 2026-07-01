import Image from "next/image";
import { SectionHeading } from "./Atoms";
import config from "@/config/general";

const Support = () => {
  return (
    <section id="support" className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="Care & living"
        title={config.contents.supportHeading}
        subtitle={config.contents.supportSubheading}
      />

      {/* Feature row */}
      <div className="mt-12 grid items-center gap-8 overflow-hidden rounded-xl border border-sand/70 bg-cream shadow-soft lg:grid-cols-2">
        <div className="order-2 p-8 sm:p-12 lg:order-1">
          <h3 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Everyone stays close, near or far
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-inkSoft">
            Gentle check-ins and shared updates keep the whole family in the loop —
            so a quick look tells you Mom had a good day, and no one feels like
            they&apos;re carrying it alone.
          </p>
        </div>
        <div className="order-1 h-64 w-full lg:order-2 lg:h-full">
          <Image
            src="/connected.jpg"
            alt="An older couple smiling together while looking at a tablet at home"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Category cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {config.contents.support.map((cat, i) => (
          <div
            key={i}
            className="group rounded-lg border border-sand/70 bg-cream p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-2xl transition-colors group-hover:bg-mintDeep">
              {cat.emoji}
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
              {cat.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-inkSoft">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
