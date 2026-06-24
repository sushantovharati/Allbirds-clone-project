import { notFound } from "next/navigation";
import ProductHero from "@/components/product/ProductHero";
import ValuePillars from "@/components/home/ValuePillars";
import ProductStorySection from "@/components/product/ProductStorySection";
import RunnerNZContent from "@/components/product/RunnerNZContent";
import CruiserContent from "@/components/product/CruiserContent";
import TreeRunnerNZContent from "@/components/product/TreeRunnerNZContent";
import SocksContent from "@/components/product/SocksContent";
import RunnerNzTerraluxContent from "@/components/product/RunnerNzTerraluxContent";
import MenDasherNz from "@/components/product/details-page-content/MenDasherNz";
import WomenDasherNz from "@/components/product/details-page-content/WomenDasherNz";
import Slide from "@/components/product/details-page-content/Slide";
import MenVarsityContent from "@/components/product/details-page-content/MenVarsityContent";
import WomenVarsityContent from "@/components/product/details-page-content/WomenVarsityContent";
import Sandals from "@/components/product/details-page-content/Sandals";
import SoftMerinoContent from "@/components/product/details-page-content/SoftMerinoLong";
import MerinoBlendSweatshirt from "@/components/product/details-page-content/MerinoBlendSweatshirt";
import MerinoBlendSweatPant from "@/components/product/details-page-content/MmerinoBlendSweatpant";

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

      {thisProduct.family === "runner-nz" && thisProduct.gender === "men" && <RunnerNZContent gender="men" />}
      {thisProduct.family === "runner-nz" && thisProduct.gender === "women" && <RunnerNZContent gender="women" />}

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


      {thisProduct.family === "dasher-nz" && thisProduct.gender === "men" && <MenDasherNz gender="men" />}
      {thisProduct.family === "dasher-nz" && thisProduct.gender === "women" && <WomenDasherNz gender="women" />}


      {thisProduct.family === "slide" && thisProduct.gender === "men" && <Slide gender="men" />}
      {thisProduct.family === "slide" && thisProduct.gender === "women" && <Slide gender="women" />}


      {thisProduct.family === "sandals" && thisProduct.gender === "men" && <Sandals gender="men" />}
      {thisProduct.family === "sandals" && thisProduct.gender === "women" && <Sandals gender="women" />}


      {thisProduct.family === "men-varsity" && thisProduct.gender === "men" && <MenVarsityContent gender="men" />}
      {thisProduct.family === "women-varsity" && thisProduct.gender === "women" && <WomenVarsityContent gender="women" />}


      {thisProduct.family === "soft-merino-tee" && thisProduct.gender === "men" && <SoftMerinoContent gender="men" />}


      {thisProduct.family === "soft-merino-long-sleeve-tee" && thisProduct.gender === "men" && <SoftMerinoContent gender="men" />}


      {thisProduct.family === "merino-blend-sweatshirt" && thisProduct.gender === "women" && <MerinoBlendSweatshirt gender="women" />}
      {thisProduct.family === "soft-merino-tee" && thisProduct.gender === "women" && <MerinoBlendSweatshirt gender="women" />}


      {thisProduct.family === "merino-blend-sweatpant" && thisProduct.gender === "women" && <MerinoBlendSweatPant />}

      {thisProduct.productTypes?.includes("Socks") && <SocksContent product={{
        title: thisProduct.title,
        image: "https://www.allbirds.com/cdn/shop/files/A12134_25Q3_Anytime-Ankle-Sock-3-Pack-Blizzard-Blizzard-Blue-Blizzard-Green_PDP_1_Collection.png?v=1752534094&width=1024",
      }} />}
      <ProductStorySection />
      <ValuePillars />
    </main>
  );
}