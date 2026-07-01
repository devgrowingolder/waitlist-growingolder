import Image from "next/image";
import config from "@/config/general";

const Families = () => {
  const { families } = config.contents;
  return (
    <section id="families" className="bg-mint/50 py-16 sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 h-72 overflow-hidden rounded-xl shadow-card sm:h-96 lg:order-1 lg:h-full">
          <Image
            src="/care-home.jpg"
            alt="A caregiver helping a smiling older man at home"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">{families.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {families.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-inkSoft">
            {families.description}
          </p>
          <ul className="mt-6 space-y-3">
            {families.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-xs text-white">
                  ✓
                </span>
                <span className="text-base leading-relaxed text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Families;
