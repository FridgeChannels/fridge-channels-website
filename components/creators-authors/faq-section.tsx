"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        id: "faq-1",
        question: "Will readers actually use a magnet?",
        answer: "Yes. Placement rate 70-80% when sent to paying subscribers or sold/handed out at events. Daily visibility reminds them to engage with your content and catalog.",
    },
    {
        id: "faq-2",
        question: "What if they don't have a fridge?",
        answer: "Works as tap card. Keep in wallet, on desk, or stick anywhere. Mechanism stays the same.",
    },
    {
        id: "faq-3",
        question: "Does it feel like spam?",
        answer: "No push notifications. Readers tap when they want. Content is what they already care about.",
    },
    {
        id: "faq-4",
        question: "Best performing content?",
        answer: "Short audio previews of latest posts. Exclusive subscriber-only content. Behind-the-scenes updates. Book previews and pre-order links. Test during pilot.",
    },
    {
        id: "faq-5",
        question: "Can we A/B test?",
        answer: "Yes. Test content formats, release timing, upgrade prompts, book purchase CTAs.",
    },
    {
        id: "faq-6",
        question: "After pilot?",
        answer: "Report with churn, upgrade, and sales data. Scale if it works. No long-term commitment.",
    },
    {
        id: "faq-7",
        question: "Technical integration?",
        answer: "Minimal. UTM tracking or integrate with your platform (Substack, Patreon, Ghost, etc.) for attribution.",
    },
];

export function FaqSection() {
    return (
        <section className="py-4 md:py-4 lg:py-4 border-t border-ds-border">
            <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-ds-text leading-[1.2] tracking-tight sticky top-32">
                            FAQ
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
