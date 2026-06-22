"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import AllbirdsLogo from "../AllbirdsLogo";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/lib/cartContext";

const navItems = [
  { label: "NEW ARRIVALS", href: "/collections/new-arrivals" },
  { label: "SHOP ALL", href: "/collections/shop-all" },
  //MEN
  {
    label: "MEN",
    href: "#",
    menu: [
      {
        links: [
          { label: "NEW ARRIVALS", href: "/collections/mens-new-arrivals" },
          { label: "BESTSELLERS", href: "/collections/mens-bestsellers" },
          { label: "LEATHER ALTERNATIVES", href: "/collections/mens-terralux-cl" },
          { label: "DASHER NZ COLLECTION", href: "/collections/mens-dasher-nz-cl" },
          { label: "VARSITY COLLECTION", href: "/collections/mens-varsity-collection" },
        ],
      },
      {
        links: [
          { label: "MEN'S SHOES", href: "/collections/mens" },
          { label: "Shop All", href: "/collections/mens" },
          { label: "Sneakers", href: "/collections/mens-sneakers" },
          { label: "Slip Ons", href: "/collections/mens-loungers" },
          { label: "Slippers", href: "/collections/mens-slippers" },
          { label: "Sandals", href: "/collections/mens-sandals" },
          { label: "Active", href: "/collections/mens-active-shoes" },

          { label: "All-Weather", href: "/collections/mens-mizzles" },
        ],
      },
      {
        title: "CUSTOMER FAVORITES",
        links: [
          { label: "Runner NZ", href: "/products/mens-runner-nz-slip-on-mushroom" },
          { label: "Cruiser", href: "/products/mens-cruiser-medium-grey" },
          { label: "Tree Runner NZ", href: "/products/mens-tree-runner-nz-medium-grey" },
          { label: "Varsity", href: "/products/mens-varsity-mushroom" },
        ],
      },
      {
        title: "APPAREL & ACCESSORIES",
        links: [
          { label: "Socks", href: "/collections/mens-socks" },
          { label: "Men's Apparel", href: "/collections/mens-apparel" },
        ],

      },
    ],
  },
  //WOMEN
  {
    label: "WOMEN",
    href: "#",
    menu: [
      {
        links: [
          { label: "NEW ARRIVALS", href: "/collections/womens-new-arrivals" },
          { label: "BESTSELLERS", href: "/collections/womens-bestsellers" },
          { label: "DASHER NZ COLLECTION", href: "/collections/womens-dasher-nz-cl" },
          { label: "VARSITY Airy", href: "/collections/womens-varsity-airy" },
        ],
      },
      {
        links: [
          { label: "WOMEN'S SHOES", href: "/collections/womens" },
          { label: "Shop All", href: "/collections/womens" },
          { label: "Trainers", href: "/collections/womens-trainers" },
          { label: "Sneakers", href: "/collections/womens-sneakers" },
          { label: "Flats", href: "/collections/womens-flats" },
          { label: "Sandals", href: "/collections/womens-sandals" },
          { label: "Slip Ons", href: "/collections/womens-loungers" },
          { label: "Active", href: "/collections/womens-active-shoes" },
          { label: "All-Weather", href: "/collections/womens-mizzles" },
        ],
      },
      {
        title: "POPULAR PICKS",
        links: [
          {
            label: "Tree Runner NZ",
            href: "/products/womens-tree-runner-nz-medium-grey",
          },
          {
            label: "Canvas Cruiser",
            href: "/products/womens-cruiser-canvas-port",
          },
          {
            label: "Cruiser Slip On",
            href: "/products/womens-tree-runner-nz-medium-grey",
          },
          {
            label: "Varsity Cruiser",
            href: "/products/womens-varsity-cruiser-mushroom",
          },
        ],
      },
      {
        title: "APPAREL & ACCESSORIES",
        links: [
          { label: "Socks", href: "/collections/womens-socks" },
          { label: "Women's Apparel", href: "/collections/womens-apparel" },
        ],
      },
    ],
  },
  //SALE
  {
    label: "SALE",
    href: "#",
    menu: [
      {
        links: [
          { label: "MEN", href: "/collections/sale-mens" },
          { label: "All Sale", href: "/collections/sale-mens" },
          { label: "Sale Shoes", href: "/collections/sale-mens" },
          { label: "Sale Apparel", href: "/collections/sale-mens-apparel" },
        ],
      },
      {
        links: [
          { label: "WOMEN", href: "/collections/sale-womens" },
          { label: "All Sale", href: "/collections/sale-womens" },
          { label: "Sale Shoes", href: "/collections/sale-womens" },
          { label: "Sale Apparel", href: "/collections/sale-womens-apparel" },
        ],
      },
    ],
  },
];

export default function Header() {
  const { isOpen, closeCart, openCart, count } = useCart();

  return (
    <>
      <header className="fixed left-5 right-5 top-[50px] z-[1000]">
        <nav className="relative z-[1000] mx-auto flex h-[46px] max-w-[2560px] items-center justify-between rounded-xl bg-white px-5 shadow">
          <Link href="/" className="relative z-[1001] flex items-center">
            <AllbirdsLogo />
          </Link>

          <div className="absolute inset-x-0 flex justify-center">
            <div className="flex items-center gap-10 text-sm font-bold tracking-widest">
              {navItems.map((item) => (
                <div key={item.label} className="group">
                  <Link
                    href={item.href}
                    className="block py-4 text-[#6a6a6a] hover:text-black"
                  >
                    {item.label}
                  </Link>

                  {item.menu && (
                    <div className="invisible fixed left-[5px] top-[96px] z-[900] w-[calc(100vw-10px)] bg-[#ece9e2] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="mx-auto max-w-[1800px] px-6 pt-4">
                        <div className="rounded-[14px] bg-[#d9d4ca] py-4 text-center">
                          <h3 className="text-[18px] font-semibold">
                            {item.label === "MEN" ? "Men's" : "Women's"}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="grid w-[60%] max-w-[1800px] grid-cols-4 gap-1 px-3 py-7">
                          {item.menu.map((section, index) => (
                            <div key={section.title ?? index}>
                              {section.title && (
                                <h4 className="mb-6 whitespace-nowrap text-[12px] font-bold uppercase tracking-normal">
                                  {section.title}
                                </h4>
                              )}

                              <ul className="space-y-3">
                                {section.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className="text-[12px] text-[#555] hover:text-black"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-[1001] flex items-center gap-[10px]">
            <Link href="/search">
              <Search size={18} />
            </Link>

            <button onClick={openCart} className="relative">
              <ShoppingBag size={18} />

              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <CartDrawer open={isOpen} onClose={closeCart} />
    </>
  );
}