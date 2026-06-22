export default function ContactSection() {
  return (
    <section className="bg-[#ece9e2] px-6 py-10 md:py-10">
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[26px] leading-[1.2] text-[#1f1f1f] md:text-[26px]">
            Still have
            <br />
            questions?
          </h2>
        </div>

        <div className="md:pt-2">
          <h3 className="text-[18px] font-bold text-black">
            Contact Us
          </h3>

          <a
            href="mailto:help@allbirds.com"
            className="mt-3 block text-[14px] text-[#1f1f1f] hover:underline"
          >
            help@allbirds.com
          </a>
        </div>
      </div>
    </section>
  );
}