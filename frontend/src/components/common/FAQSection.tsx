"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
    question: string;
    answer: string;
};

type FAQSectionProps = {
    title: string;
    description?: string;
    faqs: FAQItem[];
    defaultOpenIndex?: number | null;
};

export default function FAQSection({
    title,
    description,
    faqs,
    defaultOpenIndex = null,
}: FAQSectionProps) {
    const [open, setOpen] = useState<number | null>(defaultOpenIndex);

    return (
        <section className="bg-[#ece9e2] pt-10">
            <div className="mx-auto max-w-[850px]">
                <div className="mb-20 text-center">
                    <h2 className="mb-8 text-[18px] font-medium uppercase tracking-[0.25em]">
                        {title}
                    </h2>

                    {description && (
                        <p className="mx-auto max-w-[850px] text-[14px] leading-[1.7] text-[#3d4d64]">
                            {description}
                        </p>
                    )}
                </div>

                <div>
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div key={index} className="border-t border-[#7f7f7f]">
                                <button
                                    onClick={() => setOpen(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between py-5 text-left"
                                >
                                    <h3 className="text-[18px] font-medium">
                                        {faq.question}
                                    </h3>

                                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black">
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="max-w-[850px] whitespace-pre-line pb-10 text-[14px] leading-[1.9] text-[#3d4d64]">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className="border-t border-[#7f7f7f]" />
                </div>
            </div>
        </section>
    );
}