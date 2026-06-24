import { notFound } from "next/navigation";
import ProductHero from "@/components/product/ProductHero";
import ValuePillars from "@/components/home/ValuePillars";
import ProductStorySection from "@/components/product/ProductStorySection";
import RunnerNZContent from "@/components/product/RunnerNZContent";
import CruiserContent from "@/components/product/CruiserContent";
import TreeRunnerNZContent from "@/components/product/TreeRunnerNZContent";
import SocksContent from "@/components/product/SocksContent";
import RunnerNzTerraluxContent from "@/components/product/RunnerNzTerraluxContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const res = await fetch(
    `http://localhost:5000/products/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const thisProduct = await res.json();

  if (!thisProduct) {
    notFound();
  }

  return (
    <main className="bg-[#ece9e2] pt-[50px]">
      <ProductHero product={thisProduct} />

      {thisProduct.family === "runner-nz" && <RunnerNZContent />}
      {thisProduct.family === "cruiser" && <CruiserContent product={{
        title: thisProduct.title,
        image: thisProduct.images[0]?.url?.startsWith("http")
          ? thisProduct.images[0].url
          : `http://localhost:5000${thisProduct.images[0]?.url}`,
      }} />}
      {thisProduct.family === "tree-runner-nz" && <TreeRunnerNZContent product={{
        title: thisProduct.title,
        image: thisProduct.images[0]?.url?.startsWith("http")
          ? thisProduct.images[0].url
          : `http://localhost:5000${thisProduct.images[0]?.url}`,
      }} />}

      {thisProduct.family === "terralux-cl" && <RunnerNzTerraluxContent />}

      {thisProduct.productTypes?.includes("Socks") && <SocksContent product={{
        title: thisProduct.title,
        image: "https://www.allbirds.com/cdn/shop/files/A12134_25Q3_Anytime-Ankle-Sock-3-Pack-Blizzard-Blizzard-Blue-Blizzard-Green_PDP_1_Collection.png?v=1752534094&width=1024",
      }} />}

      <ProductStorySection />
      <ValuePillars />
    </main>
  );
}