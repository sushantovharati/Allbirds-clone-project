"use client";

import Link from "next/link";

type BannerButton = {
  label: string;
  href: string;
};

type Banner = {
  title?: string;
  image?: string;
  buttons?: BannerButton[];
};

type FeatureBannersProps = {
  banners: Banner[];
};

export default function FeatureBanners({ banners }: FeatureBannersProps) {
  return (
    <section className="px-3 py-3 mt-[56px]">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {banners.map((item, index) => (
          <div
            key={index}
            className="group relative h-[700px] overflow-hidden rounded-[22px] bg-neutral-200"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title || `Banner ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-black/20 transition-all duration-700" />

            {item.title && (
              <h2 className="absolute left-1/2 top-[50%] z-10 w-full -translate-x-1/2 px-1 text-center font-serif text-[42px] font-normal leading-none text-white">
                {item.title}
              </h2>
            )}

            {item.buttons && item.buttons.length > 0 && (
              <div className="absolute bottom-5 left-0 z-10 flex w-full gap-3 px-6">
                {item.buttons.map((button) => (
                  <Link
                    key={button.href}
                    href={button.href}
                    className="flex h-8 flex-1 items-center justify-center rounded-full border border-white text-sm font-sm-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}