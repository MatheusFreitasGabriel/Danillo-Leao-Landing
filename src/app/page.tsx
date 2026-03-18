import Hero from "../components/Hero";
import MetricsSection from "../components/MetricsSection";
import ICanHelp from "../components/ICanHelp/ICanHelp";
import Services from "../components/Services/Services";
import CtaSection from "../components/CtaSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-16 overflow-hidden items-center md:gap-24">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Metrics Section */}
      <MetricsSection></MetricsSection>

      {/* I Can Help Section */}
      <ICanHelp></ICanHelp>

      {/* Services Section */}
      <Services></Services>

      {/* CTA Section */}
      <CtaSection></CtaSection>
    </main>
  );
}