import Hero from "../components/Hero";
import MetricsSection from "../components/MetricsSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-16 overflow-x-hidden md:gap-24">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Metrics Section */}
      <MetricsSection></MetricsSection>
    </main>
  );
}