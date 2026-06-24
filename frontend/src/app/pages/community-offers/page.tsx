import ValuePillars from "@/components/home/ValuePillars";
import Link from "next/link";

const offers = [
  {
    title: "Healthcare, Military, Government, Teachers, Faculty, or Staff",
    text: "Verify your eligibility by clicking the link below. Once verified through GovX, you’ll receive a single-use promo code for 15% off your order.",
    image:
      "https://www.allbirds.com/cdn/shop/files/AffiliateLP_Tile1_Social_600x501_b50141b0-be07-4434-bcd3-8e97526eb9f2.jpg?v=1751420385&width=1920",
    button: "Verify Healthcare, Military, Government, Teachers, Faculty, or Staff Status",
    href: "#",
  },
  {
    title: "Students",
    text: "Verify your eligibility by clicking the link below. Once verified through StudentBeans, you’ll receive a single-use promo code for 15% off your order.",
    image:
      "https://www.allbirds.com/cdn/shop/files/45d6d65ffd26367cd8a69ab0c8e62ece363935b2.png?v=1751415327&width=1920",
    button: "Verify Student Status",
    href: "https://www.studentbeans.com/en-us/us/beansid-connect/hosted/allbirds",
  },
];

export default function CommunityOffersPage() {
  return (
    <main>
      <section className="relative m-2.5 h-[calc(100vh-80px)] overflow-hidden rounded-2xl text-white pt-[30px]">
        <img
          src="https://www.allbirds.com/cdn/shop/files/23Q4-Holiday-Ch1-LandingPage-IMG-Hero-Desktop-3840x2345.jpg?v=1751420386&width=2560"
          alt="Community Offers"
          className="hidden h-full w-full object-cover md:block"
        />

        <img
          src="https://www.allbirds.com/cdn/shop/files/23Q4-Holiday-Ch1-LandingPage-IMG-Hero-Mobile-3840x2345.jpg?v=1751420386&width=1024"
          alt="Community Offers"
          className="h-full w-full object-cover md:hidden"
        />
      </section>

      <section className="mx-auto my-5 px-4 text-center md:my-10 md:max-w-4xl">
        <h1 className="mb-4 text-3xl font-normal md:text-5xl">
          Community Offers
        </h1>
        <p className="text-sm md:text-base">
          Allbirds is proud to offer the following promotions to our community.
        </p>
      </section>

      <section className="mx-2.5 my-10 flex flex-col gap-10 text-center md:gap-10">
        {offers.map((offer, index) => (
          <div
            key={offer.title}
            className="flex flex-col gap-2.5 md:flex-row"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className={`aspect-[10/7] w-full rounded-xl object-cover md:min-w-[55vw] md:max-w-[55vw] ${index % 2 === 1 ? "md:order-2" : ""
                }`}
            />

            <div className="flex grow flex-col items-center justify-center gap-6 rounded-xl px-5 py-8 md:px-10 md:py-0 lg:gap-8">
              <h2 className="text-2xl leading-8 capitalize">
                <strong>{offer.title}</strong>
              </h2>

              <p className="px-4 text-sm leading-6">{offer.text}</p>

              <Link
                href={offer.href}
                className="text-sm capitalize underline"
              >
                {offer.button}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="px-2.5 py-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 rounded-[20px] bg-[#e0dacf] p-4 md:p-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-normal">
              Sign up for our newsletter
            </h2>

            <p className="text-center text-sm">
              Be the first to know about new products, sales, and more.
            </p>
          </div>

          <form className="w-full md:w-auto">
            <div className="relative flex w-full flex-col gap-2.5 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-base text-black outline-none transition-all placeholder:text-gray-500 focus:border-black md:w-80"
              />

              <button
                type="submit"
                className="h-12 rounded-full bg-black px-10 text-sm font-medium text-white transition hover:bg-gray-800 md:h-auto"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center text-xs text-gray-600">
            <p>
              Note: You can opt-out at any time. See our{" "}
              <a href="/policies/privacy-policy" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/pages/terms-of-service" className="underline">
                Terms
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <ValuePillars />
    </main>
  );
}