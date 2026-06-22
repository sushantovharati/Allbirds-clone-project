"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
  Music2,
} from "lucide-react";

const helpLinks = [
  { label: "help@allbirds.com", href: "mailto:help@allbirds.com" },
  { label: "FAQ/Contact Us", href: "/pages/help" },
  { label: "Returns/Exchanges", href: "/pages/returns-exchanges" },
];

const shopLinks = [
  { label: "Men's Shoes", href: "/collections/mens-shoes" },
  { label: "Women's Shoes", href: "/collections/womens-shoes" },
  { label: "Men's Apparel", href: "/collections/mens-apparel" },
  { label: "Women's Apparel", href: "/collections/womens-apparel" },
];

const companyLeftLinks = [
  { label: "Our Story", href: "/pages/our-story" },
  { label: "Our Materials", href: "/pages/materials" },
  { label: "Sustainability", href: "/pages/sustainability" },
  { label: "Shoe Care", href: "/pages/shoe-care" },
  { label: "Press", href: "/pages/press" },
  {
    label: "Allbirds Responsible Disclosure Program",
    href: "/pages/responsible-disclosure",
  },
  {
    label: "California Transparency Act",
    href: "/pages/california-transparency-act",
  },
  { label: "Community Offers", href: "/pages/community-offers" },
];

const companyRightLinks = [
  { label: "Our Blog", href: "/blogs/news" },
  { label: "Patents", href: "/pages/patents" },
];

const bottomLinks = [
  { label: "Refund policy", href: "/policies/refund-policy" },
  { label: "Privacy policy", href: "/policies/privacy-policy" },
  { label: "Terms of service", href: "/policies/terms-of-service" },
  {
    label: "Do Not Sell My Personal Information",
    href: "/pages/do-not-sell-my-personal-information",
  },
  {
    label: "California Transparency Act",
    href: "/pages/california-transparency-act",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#202020] px-6 pb-6 pt-24 text-white lg:px-12">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1.4fr]">
        {/* Subscribe */}
        <div>
          <h3 className="mb-10 text-[14px] font-bold uppercase tracking-[0.22em]">
            Subscribe To Our Emails
          </h3>

          <form className="flex h-[52px] max-w-[480px] overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-5 text-[15px] text-black outline-none placeholder:text-[#667085]"
            />

            <button
              type="submit"
              className="px-8 text-[12px] font-bold uppercase tracking-wide text-black"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-12 text-[14px] font-bold uppercase tracking-[0.22em]">
            Help
          </h3>

          <ul className="space-y-7">
            {helpLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[15px] hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-12 text-[14px] font-bold uppercase tracking-[0.22em]">
            Shop
          </h3>

          <ul className="space-y-7">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[15px] hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-12 text-[14px] font-bold uppercase tracking-[0.22em]">
            Company
          </h3>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <ul className="space-y-7">
              {companyLeftLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] leading-relaxed hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-7">
              {companyRightLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Follow */}
      <div className="mt-12">
        <h3 className="mb-8 text-[14px] font-bold uppercase tracking-[0.22em]">
          Follow The Flock
        </h3>

        <div className="flex flex-wrap gap-5">
          {[Instagram, Facebook, Music2, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-black"
            >
              <Icon size={28} />
            </a>
          ))}

          <a
            href="#"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white text-[28px] font-bold transition hover:bg-white hover:text-black"
          >
            𝕏
          </a>
        </div>
      </div>

      {/* Certified + Country */}
      <div className="mt-24 flex items-center gap-12">
        <div className="text-center">
          <p className="text-xs font-bold">Certified</p>
          <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-4 border-white text-[42px] leading-none">
            B
          </div>
          <p className="text-[10px] font-bold">Corporation</p>
        </div>

        <button className="flex items-center gap-4 text-[20px]">
          US <ChevronDown size={16} />
        </button>
      </div>

      <div className="mt-8 border-t border-white/30 pt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[15px]">
            © 2026 Allbirds, Inc. All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-x-20 gap-y-4">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}