import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How secure is my data with Law Copilot?",
    answer:
      "At Law Copilot, we prioritize data security and privacy. We employ industry-standard encryption, secure servers, and strict access controls to ensure your sensitive legal data remains safe and confidential.",
    value: "data-security",
  },
  {
    question: "Can Law Copilot integrate with my existing legal software?",
    answer:
      "Yes, Law Copilot is designed to seamlessly integrate with popular legal software and databases. Our API and custom integrations allow you to connect your existing tools and workflows with Law Copilot's AI-powered features.",
    value: "integrations",
  },
  {
    question: "How accurate is Law Copilot's risk analysis?",
    answer:
      "Law Copilot's risk analysis is powered by advanced AI algorithms trained on vast amounts of legal data. While no system is 100% accurate, our AI continuously learns and improves, providing highly reliable risk assessments to support your decision-making.",
    value: "risk-analysis-accuracy",
  },
  {
    question: "What languages does Law Copilot support for translation?",
    answer:
      "Law Copilot currently supports translation between English and a wide range of languages, including Spanish, French, German, Chinese, Japanese, and Arabic. We are constantly expanding our language capabilities to better serve our global user base.",
    value: "translation-languages",
  },
  {
    question: "Is Law Copilot's AI technology reliable for legal work?",
    answer:
      "Law Copilot's AI is designed specifically for the legal domain, trained on extensive legal datasets and vetted by legal experts. While AI should not replace human judgment, Law Copilot's AI-assisted features are highly reliable tools to augment and streamline your legal work.",
    value: "ai-reliability",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container mx-auto py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }, index) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left font-semibold font-title">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
