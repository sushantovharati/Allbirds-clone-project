"use client";

const pillars = [
  {
    title: "WEAR ALL DAY COMFORT",
    description:
      "Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.",
  },
  {
    title: "SUSTAINABILITY IN EVERY STEP",
    description:
      "From materials to transport, we're working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn't a 30-year goal—it's now.",
  },
  {
    title: "MATERIALS FROM THE EARTH",
    description:
      "We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugarcane. They're soft, breathable, and better for the planet—win, win, win.",
  },
];

export default function ValuePillars() {
  return (
    <section className="px-3 py-3 mt-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="h-[205px] rounded-[22px] bg-white px-10 py-5"
          >
            <h3 className="mb-8 text-[14px] font-medium uppercase tracking-[0.25em] text-black">
              {pillar.title}
            </h3>

            <p className="max-w-[530px] text-[13px] font-medium leading-[1.5] text-black">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}