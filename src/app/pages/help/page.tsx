import ValuePillars from "@/components/home/ValuePillars";

export default function HelpPage() {
  return (
    <main className="bg-[#1f1f1f] pt-36">
      <section className="flex min-h-[190px] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[26px] font-normal leading-tight text-white md:text-[44px] font-['Times_New_Roman']">
          How Can We Help?
        </h1>

        <a
          href="mailto:help@allbirds.com"
          className="mt-6 text-lg font-bold text-white hover:underline "
        >
          Email us at help@allbirds.com
        </a>
      </section>
      <div className="bg-[#ece9e2]">
        <ValuePillars />
      </div>
    </main>
  );
}