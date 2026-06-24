"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const announcements = [
  "Due to increased demand, orders may take up to 2 weeks to ship.",
  "Free ground shipping on orders over $100",
];

export default function AnnouncementBar() {
  return (
    <div className="fixed left-0 top-0 z-50 h-[32px] w-full bg-black text-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {announcements.map((text, index) => (
          <SwiperSlide
            key={index}
            className="!flex h-full items-center justify-center px-8"
          >
            <p className="text-center text-[10px] tracking-wider md:text-xs">
              {text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}