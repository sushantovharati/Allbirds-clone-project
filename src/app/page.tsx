import Hero from "@/components/home/Hero";
import CategoryRow from "@/components/home/CategoryRow";
import Bestsellers from "@/components/home/Bestsellers";
import FeatureBanners from "@/components/home/FeatureBanners";
import ValuePillars from "@/components/home/ValuePillars";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryRow />
      <Bestsellers />
      <FeatureBanners />
      <ValuePillars />
    </main>
  );
}