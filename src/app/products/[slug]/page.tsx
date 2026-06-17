import { notFound } from "next/navigation";
import { allProducts } from "@/app/data/allProducts";
import ProductHero from "@/components/product/ProductHero";
import ValuePillars from "@/components/home/ValuePillars";
import ProductStorySection from "@/components/product/ProductStorySection";
import RunnerNZContent from "@/components/product/RunnerNZContent";
import CruiserContent from "@/components/product/CruiserContent";
import TreeRunnerNZContent from "@/components/product/TreeRunnerNZContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const thisProduct = allProducts.find((item) => item.slug === slug);

  if (!thisProduct) {
    notFound();
  }

  return (
    <main className="bg-[#ece9e2] pt-[50px]">
      <ProductHero product={thisProduct} />

      {thisProduct.family === "runner-nz" && <RunnerNZContent />}
      {thisProduct.family === "cruiser" && <CruiserContent product={{
        title: thisProduct.title,
        image: thisProduct.images[0],
      }} />}
      {thisProduct.family === "tree-runner-nz" && <TreeRunnerNZContent product={{
        title: thisProduct.title,
        image: thisProduct.images[0],
      }} />}

      <ProductStorySection />
      <ValuePillars />
    </main>
  );
}