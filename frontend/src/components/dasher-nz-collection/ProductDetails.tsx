import Image from "next/image";

export default function ProductDetails() {
  return (
    <section className="m-2.5 my-10 min-h-[166px] rounded-xl bg-white p-5 md:rounded-3xl md:p-6">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Image */}
        <div>
          <Image
            src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_PDP_ProductDetails-SingleCard_Desktop-Mobile_2x3_2f09be32-dd3b-4e60-bf84-897deb4b31a7.jpg?v=1769627964&width=1024"
            alt="Dasher NZ"
            width={1024}
            height={675}
            className="aspect-[3/2] h-full w-full rounded-xl object-cover md:rounded-3xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-around gap-[30px] py-2.5">
          <div>
            <h3 className="text-xs font-medium leading-4 md:text-sm md:leading-4">
              LOOKS SHARP AT ANY PACE
            </h3>

            <p className="mt-3.5 text-xs leading-5 tracking-wide text-gray-700 md:text-sm md:leading-[22px]">
              A clean, modern silhouette moves easily from morning walks to
              evening plans—polished when you want it, relaxed when you don’t.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium leading-4 md:text-sm md:leading-4">
              WILDLY COMFORTABLE FROM THE FIRST STEP
            </h3>

            <p className="mt-3.5 text-xs leading-5 tracking-wide text-gray-700 md:text-sm md:leading-[22px]">
              A sock-like fit slips on easily, while breathable support flexes
              naturally with your foot to keep you comfortable all day long.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium leading-4 md:text-sm md:leading-4">
              COMFORT MADE FROM BETTER THINGS
            </h3>

            <p className="mt-3.5 text-xs leading-5 tracking-wide text-gray-700 md:text-sm md:leading-[22px]">
              Eucalyptus-derived TENCEL™ Lyocell (tree fiber) keeps air
              flowing, while our Featherbed® insole, sugarcane-based SweetFoam®
              midsole, and natural rubber outsole deliver cushioned support and
              reliable grip—using more planet-friendly materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}