import { SectionHeading } from "./Atoms";
import config from "@/config/general";

const Testimonials = () => {
  return (
    <section className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="From early families"
        title={config.contents.testimonialsHeading}
      />

      <div className="mt-12 columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
        {config.contents.testimonials.map((t, i) => (
          <figure
            key={i}
            className="break-inside-avoid rounded-lg border border-sand/70 bg-cream p-6 shadow-soft"
          >
            <div aria-hidden className="text-honey">
              ★★★★★
            </div>
            <blockquote className="mt-3 font-serif text-lg leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-inkMuted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
