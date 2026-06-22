"use client";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import Image from "next/image";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#d4d0c8]">
          <h2 className="font-display text-xl">Your Cart</h2>
          <button
            onClick={onClose}
            className="hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
              <ShoppingBag size={48} className="text-[#d4d0c8]" />
              <div>
                <p className="font-medium text-lg mb-1">Your cart is empty</p>
                <p className="text-sm text-[#6b6b6b]">
                  Add some shoes and come back.
                </p>
              </div>
              <button onClick={onClose} className="btn-outline mt-4">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.color}-${item.size}`}
                  className="flex gap-4"
                >
                  <div className="w-24 h-24 bg-[#f5f2eb] flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#6b6b6b] mt-0.5">
                      {item.color} · Size {item.size}
                    </p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    {/* Qty control */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.color,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        className="w-7 h-7 border border-[#d4d0c8] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.color,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        className="w-7 h-7 border border-[#d4d0c8] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() =>
                          removeItem(item.id, item.color, item.size)
                        }
                        className="text-xs text-[#6b6b6b] hover:text-[#1a1a1a] ml-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#d4d0c8] px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#6b6b6b]">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6b6b6b]">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full text-center">
              Checkout — ${total.toFixed(2)}
            </button>
            <button
              onClick={onClose}
              className="btn-outline w-full text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
