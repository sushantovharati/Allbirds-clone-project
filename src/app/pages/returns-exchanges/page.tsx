import ValuePillars from "@/components/home/ValuePillars";
import ContactSection from "@/components/returns/ContactSection";
import ReturnLoginSection from "@/components/returns/ReturnLoginSection";
import ReturnsFAQ from "@/components/returns/ReturnsFAQ";

export default function ReturnsExchangesPage() {
  return (
    <main className="bg-[#ece9e2] pt-20">
      <ReturnsFAQ />
      <ReturnLoginSection />
      <ContactSection />
      <ValuePillars />
    </main>
  );
}