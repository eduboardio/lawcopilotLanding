"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "./faq-data";
import { Container, SectionHeader } from "./primitives";

export function Faq() {
  return (
    <section id="faq" className="w-full scroll-mt-20 border-b border-border bg-background py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeader layout="stack" eyebrow="Questions" title="What legal teams ask first." />
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full border-t border-border">
          {FAQ_ITEMS.map(({ question, answer, link }, i) => (
            <AccordionItem key={question} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline md:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-foreground/80">
                {answer}
                {link ? (
                  <>
                    {" "}
                    <Link href={link.href} className="font-medium text-foreground underline underline-offset-4">
                      {link.label}
                    </Link>
                    {link.after}
                  </>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
