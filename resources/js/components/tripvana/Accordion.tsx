import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: FaqItem[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div 
                        key={index}
                        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                            isOpen 
                                ? 'border-[var(--color-tripvana-a0f751)] bg-white shadow-md' 
                                : 'border-black/5 bg-transparent hover:border-black/10'
                        }`}
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between p-6 text-left"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <span className={`text-lg font-bold ${isOpen ? 'text-[var(--color-tripvana-a0f751)]' : 'text-[var(--color-tripvana-091733)]'}`}>
                                {item.question}
                            </span>
                            <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                                isOpen 
                                    ? 'rotate-180 border-[var(--color-tripvana-a0f751)] bg-[var(--color-tripvana-a0f751)] text-white' 
                                    : 'border-[var(--color-tripvana-091733)]/20 text-[var(--color-tripvana-091733)]'
                            }`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={isOpen ? "M2 6H10" : "M6 2V10M2 6H10"} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>
                        
                        <div 
                            className={`grid transition-all duration-300 ease-in-out ${
                                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-6 pb-6 text-[var(--color-tripvana-656e7f)] leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
