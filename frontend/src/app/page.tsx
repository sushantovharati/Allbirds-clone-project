import Hero from "@/components/home/Hero";
import CategoryRow from "@/components/home/CategoryRow";
import Bestsellers from "@/components/home/Bestsellers";
import FeatureBanners from "@/components/common/FeatureBanners";
import ValuePillars from "@/components/home/ValuePillars";

const banners = [
  {
    title: "Summer Travel Essentials",
    image:
    "https://www.allbirds.com/cdn/shop/files/26Q2_PDP_Slide_Split-Text_Desktop-Mobile_2x3_ddfea8c7-0911-4b52-9b3a-2096281b7dda.jpg?v=1775252338&width=1024",
    buttons: [
      { label: "SHOP MEN", href: "/collections/best-for-traveling-mens" },
      { label: "SHOP WOMEN", href: "/collections/best-for-traveling-womens" },
    ],
  },
  {
    title: "New Arrivals",
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_LP_ShoppingGrid_Desktop_W_V2.jpg?v=1775592434&width=1024",
      buttons: [
      { label: "SHOP MEN", href: "/collections/mens-new-arrivals" },
      { label: "SHOP WOMEN", href: "/collections/womens-new-arrivals" },
    ],
  },
  {
    title: "Fresh Colors For Summer",
    image:
      "https://www.allbirds.com/cdn/shop/files/23Q2-SummerLookbook-Hero-Mobile-1650___2500-2_copy.jpg?v=1751418216&width=1024",
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