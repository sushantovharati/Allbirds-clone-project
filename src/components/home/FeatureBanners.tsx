"use client";

const banners = [
  {
    title: "Spring Travel Essentials",
    image:
      "//www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_SpringColor_Collections-Header_Mobile_1x1_M.jpg?v=1774909863&width=1024",
    buttons: ["SHOP MEN", "SHOP WOMEN"],
  },
  {
    title: "New Arrivals",
    image:
      "https://www.allbirds.com/cdn/shop/files/TR_NZ_750x900_46107a86-ce87-4b3b-82c3-3094c199174b.jpg?v=1752710387&width=1024",
    buttons: ["SHOP MEN", "SHOP WOMEN"],
  },
  {
    title: "Fresh Colors For Spring",
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_NA_Site_Navigation_HalfTile_Desktop-Mobile_3x2_W_3df8322f-803b-4f6e-97a9-d6ad0598e8d6.jpg?v=1775603917&width=1024",
    buttons: ["SHOP MEN", "SHOP WOMEN"],
  },
];

export default function FeatureBanners() {
  return (
    <section className="px-3 py-3">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {banners.map((item) => (
          <div
            key={item.title}
            className="group relative h-[700px] overflow-hidden rounded-[22px]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 bg-black/20
                transition-all duration-700
                group-hover:bg-black/30
              "
            />

            {/* Title */}
            <h2
              className="
                absolute left-1/2 top-[34%] z-10 w-full
                -translate-x-1/2 px-6
                text-center font-serif
                text-[52px] font-normal
                leading-none text-white
              "
            >
              {item.title}
            </h2>

            {/* Buttons */}
            <div className="absolute bottom-6 left-0 z-10 flex w-full gap-3 px-6">
              {item.buttons.map((button) => (
                <button
                  key={button}
                  className="
                    h-11 flex-1 rounded-full
                    border border-white
                    text-sm font-bold text-white
                    transition-all duration-300
                    hover:bg-white hover:text-black
                  "
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}