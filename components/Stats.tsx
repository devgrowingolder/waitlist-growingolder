import config from "@/config/general";

const Stats = () => {
  return (
    <section className="bg-mint/70 py-14 sm:py-16">
      <div className="container-page">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-forest">
          {config.contents.statsHeading}
        </p>
        <div className="mt-9 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {config.contents.stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center sm:text-left ${
                i > 0 ? "sm:border-l sm:border-forest/15 sm:pl-6" : ""
              }`}
            >
              <p className="font-serif text-4xl font-semibold text-forest">
                {stat.value}
              </p>
              <p className="mt-1 text-base font-semibold text-ink">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
