"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        id: "faq-1",
        question: "Will clients actually tap a magnet on their fridge?",
        answer: "Yes. Kitchen linger moments (coffee, water, microwave) are 30-60 seconds of dead time. The magnet catches attention when they're already there. Pilot data shows 8-15 taps/month per household.",
    },
    {
        id: "faq-2",
        question: "What if they don't have NFC on their phone?",
        answer: "They don't need NFC. Tap works with any smartphone. No app download, no login.",
    },
    {
        id: "faq-3",
        question: "Does it feel like spam?",
        answer: "No. It sits quietly on the fridge. They choose when to tap. No notifications, no interruptions.",
    },
    {
        id: "faq-4",
        question: "Can we A/B test different content?",
        answer: "Yes. You can test different CTAs, messaging, or timing across different client segments.",
    },
    {
        id: "faq-5",
        question: "Does it handle objection resolution?",
        answer: "It provides clear, short answers to common questions (pricing, process, timing). It doesn't replace you—it reduces hesitation so your follow-up lands better.",
    },
    {
        id: "faq-6",
        question: "What happens after the pilot?",
        answer: "You review the data: taps, engagement, conversion. If it moves deals faster, you expand. If not, you stop. No long-term commitment.",
    },
    {
        id: "faq-7",
        question: "Will this work for lower-priced properties?",
        answer: "Close Concierge is built for serious buyers making high-consideration decisions. If your clients need daily reassurance and clear next steps, it fits. If they decide in one showing, it won't add value.",
    },
];

export function FaqSection() {
    return (
        <section className="py-5 md:py-5 lg:py-5 bg-white border-t border-ds-border">
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
