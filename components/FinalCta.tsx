import Form from "./Form";
import config from "@/config/general";

const FinalCta = () => {
  const { finalCta } = config.contents;
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-xl border border-sand/70 bg-gradient-to-br from-mint via-cream to-honeySoft/70 px-8 py-14 text-center shadow-soft sm:px-14 sm:py-20">
        <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-leaf/10 blur-2xl" />
        <h2 className="relative mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
          {finalCta.title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-inkSoft">
          {finalCta.description}
        </p>
        <Form
          className="relative mx-auto mt-8 max-w-lg"
          note="Free to join. No cost, no commitment — just early access."
        />
      </div>
    </section>
  );
};

export default FinalCta;
