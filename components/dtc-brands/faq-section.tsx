"use client";

import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems: { id: string; question: string; answer: ReactNode }[] = [
    {
        id: "faq-1",
        question: "Is this replacing email, SMS, or loyalty?",
        answer:
            "No. It makes them stronger by adding a persistent real-world point of return.",
    },
    {
        id: "faq-2",
        question: "Is this only for replenishment brands?",
        answer:
            "No. It also works for education, discovery, care, offers, and repeat engagement when the next step is clear.",
    },
    {
        id: "faq-3",
        question: "How should success be judged?",
        answer: (
            <>
                <p className="mb-3">Not by novelty.</p>
                <p>
                    By whether the Presence Asset creates more owned re-entry points and more measurable downstream behavior.
                </p>
            </>
        ),
    },
    {
        id: "faq-4",
        question: "Will customers tap daily?",
        answer:
            "2-3 taps/week beats email open rates. Heavy users (8+ taps in 2 weeks) develop habits.",
    },
    {
        id: "faq-5",
        question: "AI handles customer service?",
        answer: "Common questions yes. Complex issues escalate to your team.",
    },
    {
        id: "faq-6",
        question: "Best performing content?",
        answer: "30-60 sec audio tips. AI personalized picks. Test during pilot.",
    },
    {
        id: "faq-7",
        question: "Does it feel like spam?",
        answer: "No push notifications. Customers tap when they want.",
    },
    {
        id: "faq-8",
        question: "Can we A/B test?",
        answer: "Yes. Test content, timing, offers.",
    },
];

export function FaqSection() {
    return (
        <section className="py-5 md:py-5 lg:py-5 border-t border-ds-border">
            <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-ds-text leading-[1.2] tracking-tight sticky top-32">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="md:col-span-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="text-left text-lg font-medium text-ds-text py-5">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-ds-body leading-relaxed pb-6">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
