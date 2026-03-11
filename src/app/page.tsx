import Hero from "../components/Hero";
import MetricsSection from "../components/MetricsSection";
import ICanHelp from "../components/ICanHelp/ICanHelp";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-16 overflow-x-hidden items-center md:gap-24">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Metrics Section */}
      <MetricsSection></MetricsSection>

      {/* I Can Help Section */}
      <ICanHelp></ICanHelp>
    </main>
  );
}