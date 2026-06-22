"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: (
      <>
        <p>
          Our standard return policy is 30 days. You can return or exchange items that are unworn and unwashed with original product tags attached within 30 days from the date your order was delivered. For socks, undies, and accessories packaging must be unopened. Final Sale items, or returns that do not comply with our terms and conditions cannot be returned or exchanged.

Return Shipping: Customers are responsible for return shipping charges. Paid shipping fees will not be refunded. Refunds will only be applied to the original form of payment. Returns/exchanges can only be done in the country of purchase. Please note, if you purchased Allbirds items at another retailer, you’ll need to return the purchase to that retailer.

When you opt-in for coverage at checkout, your return shipping label is included, allowing you to return any item(s) in your order for a refund or exchange for free.

If you decide not to buy return coverage you can still return your items, but you will be responsible for the cost of the return shipping label.
        </p>
        <p className="mt-2">
          Return Shipping: Customers are responsible for return shipping
          charges. Paid shipping fees will not be refunded. Refunds will only be
          applied to the original form of payment.
        </p>
      </>
    ),
  },
  {
    question: "How do I return a gift?",
    answer:
      "Not your color? Not to worry. Gifts can be returned within 30 days. Just head to the top for the free returns process with your order number.",
  },
  {
    question: "What items are final sale? Can I return them?",
    answer:
      "Final Sale items cannot be returned or exchanged. Final Sale items include: gift cards, insoles, and items tagged final sale on our website.",
  },
  {
    question: "How do I send back my return?",
    answer: (
      <>
        <p>
          Customers are responsible for return shipping charges. Paid shipping
          fees will not be refunded. Refunds will only be applied to the
          original form of payment. Returns/exchanges can only be done in the
          country of purchase.
        </p>
        <p className="mt-4">
          If you placed your order <b>before June 11th 2026</b>, please contact{" "}
          <i>help@allbirds.com</i>
        </p>
      </>
    ),
  },
  {
    question: "Terms & Conditions",
    answer: (
      <>
        <p>
          *Improper Purchasing & Returns Activity: Allbirds&apos; consumer
          rights and policies are intended solely for the benefit of end
          consumers, not for those purchasing products for resale.
        </p>
        <p className="mt-3">
          *Our Right to Reject Your Purchase/Return, or Cancel An Order: The
          sale of products and fulfillment of orders is contingent upon product
          availability and discretion in managing inventory.
        </p>
      </>
    ),
  },
];

export default function ReturnsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#ece9e2] px-6 py-20">
      <div className="mx-auto max-w-[800px] rounded-[10px] bg-white px-10 py-20 md:px-24">
        <h1 className="mb-10 text-center text-[24px] font-normal text-black">
          Returns Policy FAQ
        </h1>

        <div className="border-t border-black">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-black">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left text-[13px] font-semibold text-black"
                >
                  <span>{item.question}</span>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black">
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-7 text-[11px] leading-7 text-[#333]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}