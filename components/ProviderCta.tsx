import config from "@/config/general";

const ProviderCta = () => {
  const { providerCta } = config.contents;
  return (
    <section className="container-page py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-xl bg-forestDeep px-8 py-12 sm:px-14 sm:py-16">
        <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-leaf/20 blur-2xl" />
        <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-honey/15 blur-2xl" />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mintDeep">
              {providerCta.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              {providerCta.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mint/90">
              {providerCta.description}
            </p>
          </div>
          <a
            href={`mailto:${config.socials.email}`}
            className="inline-flex shrink-0 items-center justify-center rounded-pill bg-cream px-8 py-4 text-base font-semibold text-forestDeep transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-forestDeep"
          >
            {providerCta.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProviderCta;
