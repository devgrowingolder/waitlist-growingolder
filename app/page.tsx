import {
  Header,
  Hero,
  Stats,
  Testimonials,
  Support,
  Families,
  HowWorks,
  ProviderCta,
  Faq,
  FinalCta,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <Support />
        <Families />
        <HowWorks />
        <ProviderCta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
