// "use client";

// import Link from "next/link";
// import { Search, ShoppingBag } from "lucide-react";
// import AllbirdsLogo from "../AllbirdsLogo";
// import { useState } from "react";
// import CartDrawer from "@/components/cart/CartDrawer";

// const navItems = [
//   { label: "NEW ARRIVALS", href: "/collections/new-arrivals" },
//   { label: "SHOP ALL", href: "/collections/shop-all" },
//   {
//     label: "MEN",
//     href: "#",
//     menu: [
//       {
//         links: [
//           { label: "NEW ARRIVALS", href: "/collections/mens-new-arrivals" },
//           { label: "BESTSELLERS", href: "/collections/mens-bestsellers" },
//         ],
//       },
//       {
//         links: [
//           { label: "MEN'S SHOES", href: "/collections/mens" },
//           { label: "Shop All", href: "/collections/mens" },
//           { label: "Sneakers", href: "/collections/mens-sneakers" },
//           { label: "Slip Ons", href: "/collections/mens-loungers" },
//         ],
//       },
//       {
//         title: "CUSTOMER FAVORITES",
//         links: [
//           { label: "Runner NZ", href: "/products/mens-runner-nz" },
//           { label: "Cruiser", href: "/products/mens-cruiser" },
//           { label: "Tree Runner NZ", href: "/products/mens-tree-runner-nz" },
//         ],
//       },
//       {
//         title: "APPAREL & ACCESSORIES",
//         links: [{ label: "Socks", href: "/collections/mens-socks" }],
//       },
//     ],
//   },
//   {
//     label: "WOMEN",
//     href: "#",
//     menu: [
//       {
//         links: [
//           { label: "NEW ARRIVALS", href: "/collections/womens-new-arrivals" },
//           { label: "BESTSELLERS", href: "/collections/womens-bestsellers" },
//         ],
//       },
//       {
//         links: [
//           { label: "WOMEN'S SHOES", href: "/collections/womens" },
//           { label: "Shop All", href: "/collections/womens" },
//           { label: "Sneakers", href: "/collections/womens-sneakers" },
//           { label: "Slip Ons", href: "/collections/womens-loungers" },
//         ],
//       },
//       {
//         title: "POPULAR PICKS",
//         links: [
//           { label: "Tree Runner NZ", href: "/products/womens-tree-runner-nz" },
//           { label: "Canvas Cruiser", href: "/products/womens-canvas-cruiser" },
//           { label: "Cruiser Slip On", href: "/products/womens-cruiser-slip-on" },
//         ],
//       },
//       {
//         title: "APPAREL & ACCESSORIES",
//         links: [{ label: "Socks", href: "/collections/womens-socks" }],
//       },
//     ],
//   },
// ];

// export default function Header() {
//   const [cartOpen, setCartOpen] = useState(false);

//   return (
//     <>
//       <header className="fixed left-5 right-5 top-[50px] z-[1000]">
//         <nav className="relative z-[1000] mx-auto flex h-[46px] max-w-[2560px] items-center justify-between rounded-xl bg-white px-5 shadow">
//           <Link href="/" className="relative z-[1001] flex items-center">
//             <AllbirdsLogo />
//           </Link>

//           <div className="absolute inset-x-0 flex justify-center">
//             <div className="flex items-center gap-10 text-sm font-bold tracking-widest">
//               {navItems.map((item) => (
//                 <div key={item.label} className="group">
//                   <Link
//                     href={item.href}
//                     className="block py-4 text-[#6a6a6a] hover:text-black"
//                   >
//                     {item.label}
//                   </Link>

//                   {item.menu && (
//                     <div className="invisible fixed left-[5px] top-[96px] z-[900] w-[calc(100vw-10px)] bg-[#ece9e2] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
//                       <div className="mx-auto max-w-[1800px] px-6 pt-4">
//                         <div className="rounded-[14px] bg-[#d9d4ca] py-5 text-center">
//                           <h3 className="text-[18px] font-semibold">
//                             {item.label === "MEN" ? "Men's" : "Women's"}
//                           </h3>
//                         </div>
//                       </div>
//                       {/* border border-red-500   */}
//                       <div className="flex items-start">
//                         <div className="grid max-w-[1800px] grid-cols-4 gap-10 px-6 py-10 w-1/2">
//                           {item.menu.map((section, index) => (
//                             <div key={section.title ?? index}>
//                               {section.title && (
//                                 <h4 className="mb-6 text-[12px] font-bold uppercase tracking-normal whitespace-nowrap">
//                                   {section.title}
//                                 </h4>
//                               )}

//                               <ul className="space-y-4">
//                                 {section.links.map((link) => (
//                                   <li key={link.label}>
//                                     <Link
//                                       href={link.href}
//                                       className="text-[12px] text-[#555] hover:text-black"
//                                     >
//                                       {link.label}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative z-[1001] flex items-center gap-5">
//             <Link href="/search">
//               <Search size={22} />
//             </Link>

//             <button onClick={() => setCartOpen(true)}>
//               <ShoppingBag size={22} />
//             </button>
//           </div>
//         </nav>
//       </header>

//       <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import AllbirdsLogo from "../AllbirdsLogo";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/lib/cartContext";

const navItems = [
  { label: "NEW ARRIVALS", href: "/collections/new-arrivals" },
  { label: "SHOP ALL", href: "/collections/shop-all" },
  {
    label: "MEN",
    href: "#",
    menu: [
      {
        links: [
          { label: "NEW ARRIVALS", href: "/collections/mens-new-arrivals" },
          { label: "BESTSELLERS", href: "/collections/mens-bestsellers" },
        ],
      },
      {
        links: [
          { label: "MEN'S SHOES", href: "/collections/mens" },
          { label: "Shop All", href: "/collections/mens" },
          { label: "Sneakers", href: "/collections/mens-sneakers" },
          { label: "Slip Ons", href: "/collections/mens-loungers" },
        ],
      },
      {
        title: "CUSTOMER FAVORITES",
        links: [
          { label: "Runner NZ", href: "/products/mens-runner-nz" },
          { label: "Cruiser", href: "/products/mens-cruiser" },
          { label: "Tree Runner NZ", href: "/products/mens-tree-runner-nz" },
        ],
      },
      {
        title: "APPAREL & ACCESSORIES",
        links: [{ label: "Socks", href: "/collections/mens-socks" }],
      },
    ],
  },
  {
    label: "WOMEN",
    href: "#",
    menu: [
      {
        links: [
          { label: "NEW ARRIVALS", href: "/collections/womens-new-arrivals" },
          { label: "BESTSELLERS", href: "/collections/womens-bestsellers" },
        ],
      },
      {
        links: [
          { label: "WOMEN'S SHOES", href: "/collections/womens" },
          { label: "Shop All", href: "/collections/womens" },
          { label: "Sneakers", href: "/collections/womens-sneakers" },
          { label: "Slip Ons", href: "/collections/womens-loungers" },
        ],
      },
      {
        title: "POPULAR PICKS",
        links: [
          {
            label: "Tree Runner NZ",
            href: "/products/womens-tree-runner-nz",
          },
          {
            label: "Canvas Cruiser",
            href: "/products/womens-canvas-cruiser",
          },
          {
            label: "Cruiser Slip On",
            href: "/products/womens-cruiser-slip-on",
          },
        ],
      },
      {
        title: "APPAREL & ACCESSORIES",
        links: [{ label: "Socks", href: "/collections/womens-socks" }],
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
                        <div className="rounded-[14px] bg-[#d9d4ca] py-5 text-center">
                          <h3 className="text-[18px] font-semibold">
                            {item.label === "MEN" ? "Men's" : "Women's"}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="grid w-1/2 max-w-[1800px] grid-cols-4 gap-10 px-6 py-10">
                          {item.menu.map((section, index) => (
                            <div key={section.title ?? index}>
                              {section.title && (
                                <h4 className="mb-6 whitespace-nowrap text-[12px] font-bold uppercase tracking-normal">
                                  {section.title}
                                </h4>
                              )}

                              <ul className="space-y-4">
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

          <div className="relative z-[1001] flex items-center gap-5">
            <Link href="/search">
              <Search size={22} />
            </Link>

            <button onClick={openCart} className="relative">
              <ShoppingBag size={22} />

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