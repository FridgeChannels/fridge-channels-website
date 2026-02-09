"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        id: "faq-1",
        question: "Will supporters use a magnet?",
        answer: "70-80% placement rate when handed out at events. Visibility drives taps.",
    },
    {
        id: "faq-2",
        question: "What if no fridge?",
        answer: "Works as tap card. Keep in wallet or on desk.",
    },
    {
        id: "faq-3",
        question: "Does it feel like spam?",
        answer: "No push notifications. They tap when curious. Story-driven content.",
    },
    {
        id: "faq-4",
        question: "Can we A/B test?",
        answer: "Yes. Test stories, CTAs, timing.",
    },
    {
        id: "faq-5",
        question: "After pilot?",
        answer: "Scale if it works. No long-term commitment.",
    },
    {
        id: "faq-6",
        question: "Do we create content?",
        answer: "You provide raw material. We configure.",
    },
    {
        id: "faq-7",
        question: "How track attribution?",
        answer: "Every interaction tagged. Run control groups to compare.",
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
