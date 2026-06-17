"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex h-[32px] w-full items-center justify-center bg-black text-sm text-white">
      <p className="text-center">
        Free ground shipping on orders over $100
      </p>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 opacity-60 transition-opacity hover:opacity-100"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}