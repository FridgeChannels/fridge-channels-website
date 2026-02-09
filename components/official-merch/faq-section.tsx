"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        id: "faq-1",
        question: "Will fans actually buy a magnet?",
        answer: "Yes when positioned as official limited merch. Placement rate 60-70%. Daily visibility drives repeat engagement.",
    },
    {
        id: "faq-2",
        question: "What if fans don't have a fridge?",
        answer: "Works as tap card. Keep in wallet, on desk, or stick anywhere. Mechanism stays the same.",
    },
    {
        id: "faq-3",
        question: "What content performs best?",
        answer: "Exclusive first-looks and limited drops convert highest. Behind-the-scenes builds loyalty. Test during pilot.",
    },
    {
        id: "faq-4",
        question: "Does it feel like spam?",
        answer: "No push notifications. Fans tap when they want. Content is artist-driven, not ads.",
    },
    {
        id: "faq-5",
        question: "Can we A/B test?",
        answer: "Yes. Test content types, drop timing, CTA placement.",
    },
    {
        id: "faq-6",
        question: "After pilot?",
        answer: "Report with recommendations. Scale if it works. No long-term commitment.",
    },
    {
        id: "faq-7",
        question: "Technical integration?",
        answer: "Minimal. UTM tracking or Shopify integration for closed-loop attribution.",
    },
];

export function FaqSection() {
    return (
        <section className="py-5 md:py-5 lg:py-5 border-t border-ds-border">
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
