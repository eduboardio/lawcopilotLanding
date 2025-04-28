"use client";

import { useState, useEffect, memo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
  category?: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How secure is my data with Law Copilot?",
    answer: "At Law Copilot, we prioritize data security and privacy. We employ industry-standard encryption, secure servers, and strict access controls to ensure your sensitive legal data remains safe and confidential.",
    value: "data-security",
    category: "Security"
  },
  {
    question: "What security certifications does Law Copilot have?",
    answer: "Law Copilot is SOC 2 Type II certified and GDPR compliant. We undergo regular security audits and penetration testing to maintain the highest standards of data protection and privacy compliance.",
    value: "security-certifications",
    category: "Security"
  },
  {
    question: "Can Law Copilot integrate with my existing legal software?",
    answer: "Yes, Law Copilot is designed to seamlessly integrate with popular legal software and databases. Our API and custom integrations allow you to connect your existing tools and workflows with Law Copilot's AI-powered features.",
    value: "integrations",
    category: "Integrations"
  },
  {
    question: "Which document management systems work with Law Copilot?",
    answer: "Law Copilot integrates with leading document management systems including iManage, NetDocuments, Clio, and SharePoint. We also offer custom integration solutions for proprietary systems used by many law firms.",
    value: "document-systems",
    category: "Integrations"
  },
  {
    question: "How accurate is Law Copilot's risk analysis?",
    answer: "Law Copilot's risk analysis is powered by advanced AI algorithms trained on vast amounts of legal data. While no system is 100% accurate, our AI continuously learns and improves, providing highly reliable risk assessments to support your decision-making.",
    value: "risk-analysis-accuracy",
    category: "Features"
  },
  {
    question: "What languages does Law Copilot support for translation?",
    answer: "Law Copilot currently supports translation between English and a wide range of languages, including Spanish, French, German, Chinese, Japanese, and Arabic. We are constantly expanding our language capabilities to better serve our global user base.",
    value: "translation-languages",
    category: "Features"
  },
  {
    question: "Is Law Copilot's AI technology reliable for legal work?",
    answer: "Law Copilot's AI is designed specifically for the legal domain, trained on extensive legal datasets and vetted by legal experts. While AI should not replace human judgment, Law Copilot's AI-assisted features are highly reliable tools to augment and streamline your legal work.",
    value: "ai-reliability",
    category: "Features"
  },
  {
    question: "How much does Law Copilot cost?",
    answer: "Law Copilot offers flexible pricing plans starting at $49/month for individual users. Enterprise plans for law firms and legal departments are custom-priced based on user count and specific requirements. All plans come with a 14-day free trial so you can experience the full benefits before committing.",
    value: "pricing",
    category: "Pricing"
  },
  {
    question: "Does Law Copilot offer educational discounts?",
    answer: "Yes, we offer special discounted rates for law schools, legal clinics, and non-profit organizations. Please contact our sales team at sales@lawcopilot.com to learn more about our educational and non-profit pricing options.",
    value: "educational-discount",
    category: "Pricing"
  },
];

const categories = Array.from(new Set(FAQList.map(item => item.category))).filter(Boolean) as string[];

const FAQItem = memo(({ item }: { item: FAQProps }) => {
  return (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionTrigger className="text-left font-semibold font-title">
        {item.question}
      </AccordionTrigger>
      
      <AccordionContent className="text-muted-foreground">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
});

FAQItem.displayName = 'FAQItem';

const CategoryFilter = memo(({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: { 
  categories: string[], 
  selectedCategory: string | null, 
  setSelectedCategory: (category: string | null) => void 
}) => {
  const pathname = usePathname();
  
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => setSelectedCategory(null)}
        className={cn(
          "px-4 py-2 text-base font-medium rounded-md transition-colors",
          selectedCategory === null 
            ? "bg-primary text-primary-foreground" 
            : "bg-secondary/50 hover:bg-secondary/80"
        )}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={cn(
            "px-4 py-2 text-base font-medium rounded-md transition-colors",
            selectedCategory === category 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary/50 hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
});

CategoryFilter.displayName = 'CategoryFilter';

const ContactSection = memo(() => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
      <p className="text-muted-foreground mb-4">
        Our support team is here to help with any other questions you might have.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/contact" 
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition font-medium">
          Contact Support
        </Link>
        <Link href="/blog" 
          className="px-6 py-3 bg-secondary/80 text-secondary-foreground rounded-md hover:bg-secondary transition font-medium">
          Browse Resources
        </Link>
      </div>
    </div>
  );
});

ContactSection.displayName = 'ContactSection';

export default function FAQPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrolled]);
  
  // Filter FAQ items based on selected category
  const filteredFAQs = selectedCategory
    ? FAQList.filter(item => item.category === selectedCategory)
    : FAQList;

  return (
    <div className={cn(
      "min-h-screen transition-all duration-300",
      scrolled ? "bg-background/80" : "bg-background"
    )}>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Find answers to common questions about Law Copilot
          </p>

          {/* Category Filter */}
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />

          {/* FAQ Accordion */}
          <div className={cn(
            "rounded-lg p-6 transition-all duration-300",
            scrolled ? "bg-background shadow-sm border border-border/20" : "bg-background/95 shadow-lg"
          )}>
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((item) => (
                <FAQItem key={item.value} item={item} />
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </div>
  );
}