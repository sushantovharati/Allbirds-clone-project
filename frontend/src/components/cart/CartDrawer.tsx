"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cartContext";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, count, total, removeItem, updateQuantity } = useCart();

  const freeShippingTarget = 100;
  const progress = Math.min((total / freeShippingTarget) * 100, 100);
  const hasFreeShipping = total >= freeShippingTarget;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[1000] bg-black/50 transition-opacity ${open ? "visible opacity-100" : "invisible opacity-0"
          }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[1001] flex h-screen w-full max-w-[531px] flex-col bg-white shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col px-2.5 pt-1.5 pb-2.5">
          <div className="relative flex w-full items-center justify-between">
            <h2 className="text-xs font-medium uppercase">Cart ({count})</h2>

            <p className="mx-auto text-center text-xs text-[#555]">
              {hasFreeShipping
                ? "You've earned free shipping!"
                : `Add $${freeShippingTarget - total} more for free shipping`}
            </p>

            <button onClick={onClose} aria-label="Close cart">
              <X size={30} />
            </button>
          </div>

          <div className="w-full py-1.5">
            <div className="h-[7px] w-full rounded bg-[#f3f1ec]">
              <div
                className="h-[7px] rounded bg-black transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="px-10 pt-20 text-center">
            <h3 className="mb-10 text-2xl">
              Your cart is empty. Start shopping!
            </h3>

            <div className="space-y-5">
              {[
                ["SHOP WOMENS", "/collections/womens"],
                ["SHOP MENS", "/collections/mens"],
                ["SHOP SOCKS", "/collections/mens-socks"],
                ["SHOP WOMEN'S SALE", "/collections/womens-sale"],
                ["SHOP MEN'S SALE", "/collections/mens-sale"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={onClose}
                  className="block rounded-full bg-[#212121] py-3 text-sm font-bold text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <ul className="px-2.5">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="mb-2 flex items-stretch border-b border-gray-200"
                  >
                    <div className="mb-3 flex w-full items-center justify-between gap-x-3">
                      <Link href={`/products/${item.id}`} className="block shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={85}
                          height={85}
                          className="aspect-square size-[85px] rounded object-contain"
                        />
                      </Link>

                      <div className="flex grow flex-col gap-y-2.5 overflow-hidden">
                        <div className="flex flex-col gap-y-1.5">
                          <Link
                            href={`/products/${item.id}`}
                            className="text-xs font-medium uppercase tracking-wider"
                          >
                            {item.name}
                          </Link>

                          <p className="truncate text-xs text-[#555]">
                            {item.color}
                          </p>

                          <p className="truncate text-xs text-[#555]">
                            Size: {item.size}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            removeItem(item.id, item.color, item.size)
                          }
                          className="w-fit text-left text-xs text-[#555] underline hover:text-black"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex min-h-full flex-col items-end gap-y-1">
                        <p className="block text-sm font-medium">
                          ${item.price * item.quantity}
                        </p>

                        <div className="mt-auto flex items-center justify-end">
                          <div className="inline-flex min-h-[32px] min-w-[100px] items-center justify-between rounded-[20px] border border-gray-300 px-3 text-xs font-medium text-black">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.color,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              aria-label={
                                item.quantity === 1
                                  ? "Remove item"
                                  : "Decrease quantity"
                              }
                            >
                              {item.quantity === 1 ? (
                                <Trash2 size={15} />
                              ) : (
                                "-"
                              )}
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.color,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-[#f7f5f0] p-2.5">
                <h3 className="mb-3 text-xs uppercase tracking-wider">
                  Recommended for you
                </h3>

                <div className="rounded-[10px] border border-gray-200 bg-white p-2.5">
                  <div className="flex items-center gap-3">
                    <div className="size-20 rounded bg-[#f3f1ec]" />

                    <div className="flex-1">
                      <div className="mb-2 flex justify-between">
                        <p className="text-sm text-[#555]">
                          Anytime No Show Sock
                        </p>
                        <p className="text-sm font-medium">$14</p>
                      </div>

                      <button className="text-sm font-medium underline">
                        Add+
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 bg-white px-2.5 py-3.5">
              <div className="mb-2 flex items-center justify-between font-semibold">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold">Shipping</p>

                <div className="flex items-center gap-2">
                  <p className="line-through">$5.00</p>
                  <p className="uppercase">Free</p>
                </div>
              </div>

              <Link href="/checkout" onClick={onClose}>
                <button className="w-full rounded-full border border-black bg-black py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black">
                  Proceed To Checkout
                </button>
              </Link>
            </div>

            <div className="px-2.5 pb-3.5">
              <ul className="flex justify-between gap-2">
                <li className="w-full">
                  <button className="h-10 w-full rounded bg-[#fad676] text-xs font-bold">
                    Amazon Pay
                  </button>
                </li>

                <li className="w-full">
                  <button className="h-10 w-full rounded bg-black text-xs font-bold text-white">
                    G Pay
                  </button>
                </li>

                <li className="w-full">
                  <button className="h-10 w-full rounded bg-[#ffc439] text-xs font-bold">
                    PayPal
                  </button>
                </li>

                <li className="w-full">
                  <button className="h-10 w-full rounded bg-[#5a31f4] text-xs font-bold text-white">
                    Shop Pay
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </aside>
    </>
  );
}