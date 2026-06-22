import Hero from "@/components/home/Hero";
import CategoryRow from "@/components/home/CategoryRow";
import Bestsellers from "@/components/home/Bestsellers";
import FeatureBanners from "@/components/common/FeatureBanners";
import ValuePillars from "@/components/home/ValuePillars";

const banners = [
  {
    title: "Spring Travel Essentials",
    image:
      "//www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_SpringColor_Collections-Header_Mobile_1x1_M.jpg?v=1774909863&width=1024",
    buttons: [
      { label: "SHOP MEN", href: "/collections/best-for-traveling-mens" },
      { label: "SHOP WOMEN", href: "/collections/best-for-traveling-womens" },
    ],
  },
  {
    title: "New Arrivals",
    image:
      "https://www.allbirds.com/cdn/shop/files/TR_NZ_750x900_46107a86-ce87-4b3b-82c3-3094c199174b.jpg?v=1752710387&width=1024",
    buttons: [
      { label: "SHOP MEN", href: "/collections/mens-new-arrivals" },
      { label: "SHOP WOMEN", href: "/collections/womens-new-arrivals" },
    ],
  },
  {
    title: "Fresh Colors For Spring",
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_NA_Site_Navigation_HalfTile_Desktop-Mobile_3x2_W_3df8322f-803b-4f6e-97a9-d6ad0598e8d6.jpg?v=1775603917&width=1024",
    buttons: [
      { label: "SHOP WOMEN", href: "/collections/womens-spring-colors" },
    ],
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryRow />
      <Bestsellers />
      <FeatureBanners banners={banners}/>
      <ValuePillars />
    </main>
  );
}