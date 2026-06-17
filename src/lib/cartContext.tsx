"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string, color: string, size: string) => void;
  updateQuantity: (id: string, color: string, size: string, qty: number) => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === item.id &&
          i.color === item.color &&
          i.size === item.size
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id &&
          i.color === item.color &&
          i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, item];
    });

    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string, color: string, size: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.id === id && i.color === color && i.size === size)
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string, color: string, size: string, qty: number) => {
      if (qty < 1) {
        removeItem(id, color, size);
        return;
      }

      setItems((prev) =>
        prev.map((i) =>
          i.id === id && i.color === color && i.size === size
            ? { ...i, quantity: qty }
            : i
        )
      );
    },
    [removeItem]
  );

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return ctx;
}