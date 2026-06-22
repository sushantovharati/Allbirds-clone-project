type Props = {
  product: {
    image: string;
    title: string;
  };
};

export default function SocksContent({ product }: Props) {
  return (
    <section className="m-2.5 my-10 rounded-lg bg-white shadow-sm lg:rounded-none lg:bg-transparent lg:shadow-none">
      {/* Mobile */}
      <div className="lg:hidden">
        <MobileSection title="Why we made this" open>
          <p className="text-base text-black">
            The Anytime Ankle Sock is our classic ankle-height silhouette. This
            sock is breathable and lightweight, featuring super-soft heel and toe
            cushioning without feeling bulky in your shoe. Perfect for workouts,
            all-day wear, and everything in between.
          </p>

          <ThoughtfullyDesigned />
          <BestFor />
          <TechnicalDetails />
        </MobileSection>

        <MobileSection title="Materials & Sustainability">
          <MaterialsList />
        </MobileSection>

        <MobileSection title="Care instructions">
          <p className="text-sm leading-5 text-black">
            Machine wash on cold using mild detergent and then air dry to
            minimize your carbon footprint and maximize your product&apos;s
            lifetime.
          </p>
        </MobileSection>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="rounded-3xl bg-white px-7 shadow-sm">
          <Header title="Why we made this" open />

          <div className="relative flex items-center justify-center gap-8 pb-4">
            <div className="w-1/3 max-w-[400px]">
              <p className="text-lg leading-7 text-black">
                The Anytime Ankle Sock is our classic ankle-height silhouette.
                This sock is breathable and lightweight, featuring super-soft
                heel and toe cushioning without feeling bulky in your shoe.
                Perfect for workouts, all-day wear, and everything in between.
              </p>

              <BestFor />
              <TechnicalDetails />
            </div>

            <div className="relative aspect-square w-1/3 max-w-[600px] grow">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 m-auto aspect-square w-[87%]">
                  <div className="absolute inset-0 rounded-full border border-[#ece9e2] opacity-70" />
                  <div className="absolute inset-4 rounded-full border border-[#ece9e2] opacity-70" />
                  <div className="absolute inset-8 rounded-full bg-[#f3f1ec]" />
                </div>

                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-8 h-[calc(100%-64px)] w-[calc(100%-64px)] object-contain"
                />
              </div>
            </div>

            <div className="w-1/3 max-w-[400px]">
              <ThoughtfullyDesigned />
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-3xl bg-white px-7 shadow-sm">
          <Header title="Materials & Sustainability" />

          <div className="pb-8">
            <MaterialsList desktop />
          </div>
        </div>

        <div className="mt-2.5 rounded-3xl bg-white px-7 shadow-sm">
          <Header title="Care instructions" />

          <div className="pb-8">
            <p className="mt-3 text-sm leading-5 text-black">
              Machine wash on cold using mild detergent and then air dry to
              minimize your carbon footprint and maximize your product&apos;s
              lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ title, open = false }: { title: string; open?: boolean }) {
  return (
    <button className="flex w-full items-center justify-between py-6" type="button">
      <span className="font-mono text-base uppercase tracking-widest">
        {title}
      </span>

      <PlusIcon open={open} />
    </button>
  );
}

function MobileSection({
  title,
  children,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <div className="border-t border-[#ece9e2] first:border-t-0">
      <button className="flex w-full items-center justify-between px-4 py-4" type="button">
        <span className="font-mono text-sm uppercase tracking-widest text-black">
          {title}
        </span>

        <PlusIcon open={open} />
      </button>

      {open && <div className="px-4 pb-8">{children}</div>}
    </div>
  );
}

function PlusIcon({ open = false }: { open?: boolean }) {
  return (
    <span className="relative size-4 cursor-pointer">
      <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
      <span
        className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${
          open ? "rotate-0" : "rotate-90"
        }`}
      />
    </span>
  );
}

function ThoughtfullyDesigned() {
  return (
    <div className="mt-8 lg:mt-0">
      <h3 className="font-mono text-sm uppercase tracking-widest text-[#555]">
        Thoughtfully designed
      </h3>

      <ul className="mt-4 list-disc pl-5">
        <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
          <strong>Soft &amp; Breathable Tree Yarn Blend</strong> - our super
          soft and breathable yarns make the ankle sock a year-round staple
        </li>

        <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
          <strong>Cushioned Heel and Toe</strong> - added cushion on the heel
          and toe provides a plush feel without being bulky or heavy
        </li>

        <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
          <strong>Supportive Arch</strong> - an elastic arch band provides
          gentle support for all-day comfort
        </li>

        <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
          <strong>Manufactured in the U.S</strong> - all of our Allbirds socks
          are proudly knit in North Carolina
        </li>
      </ul>
    </div>
  );
}

function BestFor() {
  const tags = ["Everyday", "Walking", "Workouts"];

  return (
    <div className="mt-8">
      <h3 className="font-mono text-sm uppercase tracking-widest text-[#555]">
        Best for
      </h3>

      <div className="mb-8 mt-4 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="select-none rounded-full bg-[#f3f1ec] px-2 py-1 text-sm text-black"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechnicalDetails() {
  return (
    <div>
      <button className="flex items-center gap-2 text-[#555]" type="button">
        <ArrowIcon />

        <span className="cursor-pointer text-sm underline">
          View technical details
        </span>
      </button>

      <ul className="mt-4 list-disc pl-10">
        <li className="mb-3 text-sm leading-6 text-black lg:text-base">
          <strong>Weight:</strong> 0.6oz (single sock, size L)
        </li>

        <li className="mb-3 text-sm leading-6 text-black lg:text-base">
          <strong>Country of Origin:</strong> Knit in the U.S. from imported
          yarns
        </li>
      </ul>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1464 7.52512C10.3417 7.32986 10.6583 7.32986 10.8536 7.52512L15.0962 11.7678C15.2915 11.963 15.2915 12.2796 15.0962 12.4749L10.8536 16.7175C10.6583 16.9128 10.3417 16.9128 10.1464 16.7175C9.95118 16.5222 9.95118 16.2057 10.1464 16.0104L14.0355 12.1213L10.1464 8.23223C9.95118 8.03697 9.95118 7.72039 10.1464 7.52512Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MaterialsList({ desktop = false }: { desktop?: boolean }) {
  return (
    <div
      className={
        desktop
          ? "flex max-w-[500px] flex-col gap-1"
          : "flex flex-col gap-1"
      }
    >
      <div className="flex items-baseline gap-1">
        <span className="text-base font-medium text-black">
          Material Composition
        </span>
      </div>

      <p className="text-sm leading-5 text-black">
        47% tree-derived TENCEL™ Lyocell, 32% Organic Cotton, 18% Recycled
        Nylon, 3% Spandex.
      </p>
    </div>
  );
}