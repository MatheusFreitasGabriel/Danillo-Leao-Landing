import Hero from "../components/Hero";
import MetricsSection from "../components/MetricsSection";
import ICanHelp from "../components/ICanHelp/ICanHelp";
import Services from "../components/Services/Services";
import CtaSection from "../components/CtaSection";
import Presentation from "../components/Presentation"

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-16 overflow-hidden items-center md:gap-24">
      {/* Hero Section */}
      <Hero/>

      {/* Metrics Section */}
      <MetricsSection/>

      {/* Metrics Section */}
      <Presentation/>

      {/* I Can Help Section */}
      <ICanHelp/>

      {/* Services Section */}
      <Services/>

      {/* CTA Section */}
      <CtaSection/>
    </main>
  );
}