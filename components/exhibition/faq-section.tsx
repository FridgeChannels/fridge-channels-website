"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "How does FC work for exhibitions?",
    answer:
      "Distribute branded magnets through VIP packs, speaker gifts, hosted-buyer kits, or post-event follow-up packages. Attendees place them on their fridge and tap anytime to access event highlights, replays, and next-edition registration.",
  },
  {
    id: "faq-2",
    question: "What content works best for exhibitions?",
    answer:
      "Speaker clips, event highlights, replay access, industry updates, curated resources, and registration prompts for the next edition all perform well. Short 30-60 second audio clips are especially effective.",
  },
  {
    id: "faq-3",
    question: "How is this different from email follow-up?",
    answer:
      "Email follow-up competes with a crowded inbox and gets ignored. FC lives on the fridge — a quiet, owned touchpoint in daily life that attendees engage with on their own terms, with no notification fatigue.",
  },
  {
    id: "faq-4",
    question: "Can we update the content between events?",
    answer:
      "Yes. FC content is fully updateable anytime — push new replays, sponsor offers, member updates, registration prompts, or community news between editions without shipping anything new.",
  },
  {
    id: "faq-5",
    question: "What can we track?",
    answer:
      "Every tap, click, and downstream action is tracked. See what brings attendees back between editions and which content drives re-registration, then optimize the loop.",
  },
  {
    id: "faq-6",
    question: "How does it support sponsors?",
    answer:
      "Route attendees to sponsor offers, partner resources, and co-branded content between events — extending sponsor value well beyond the show floor.",
  },
  {
    id: "faq-7",
    question: "What does the pilot include?",
    answer:
      "Start with one event edition and one clear return path. Full reporting with recommendations. No long-term commitment required.",
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
