"use client";

import { useState, memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, BookOpen } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
  category: string;
}

const FAQ_LIST: FAQProps[] = [
  // Getting Started
  {
    question: "What is Law Copilot?",
    answer:
      "Law Copilot is an AI-powered legal intelligence platform designed specifically for Indian legal practice. We help lawyers, law firms, and legal professionals work faster and smarter with tools for drafting, research, document analysis, and case intelligence—all trained on Indian legal frameworks.",
    value: "what-is-law-copilot",
    category: "Getting Started"
  },
  {
    question: "How do I get started with Law Copilot?",
    answer:
      "Getting started is simple. Request a demo through our contact page, and our team will set up your account and provide personalized onboarding. Most firms are up and running within a week, with full training and support included.",
    value: "getting-started",
    category: "Getting Started"
  },
  {
    question: "Do I need technical knowledge to use Law Copilot?",
    answer:
      "No technical knowledge is required. Law Copilot is designed for lawyers, not engineers. Our intuitive interface works like familiar tools you already use, and our team provides comprehensive training to ensure your firm gets maximum value from day one.",
    value: "technical-knowledge",
    category: "Getting Started"
  },

  // Indian Legal Focus
  {
    question: "Is Law Copilot specifically built for Indian law?",
    answer:
      "Yes. Law Copilot is purpose-built for Indian legal practice. Our AI is trained on Indian case law, statutes, and legal frameworks. We understand jurisdiction-specific requirements, court procedures, and the nuances of Indian legal language—from Supreme Court to District Courts.",
    value: "indian-law-focus",
    category: "Indian Legal Practice"
  },
  {
    question: "What jurisdictions does Law Copilot cover?",
    answer:
      "Law Copilot covers the Supreme Court of India, all High Courts, District Courts, and major tribunals. Our AI understands jurisdictional variations and can adapt to state-specific legal requirements and procedural rules.",
    value: "jurisdictions",
    category: "Indian Legal Practice"
  },
  {
    question: "Does Law Copilot support regional languages?",
    answer:
      "Yes. Law Copilot supports translation and document processing in major Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and more. Our legal translation feature preserves legal terminology and maintains formal language appropriate for court filings.",
    value: "regional-languages",
    category: "Indian Legal Practice"
  },

  // Features & Capabilities
  {
    question: "What can I do with Law Copilot?",
    answer:
      "Law Copilot offers four core capabilities: (1) Legal Drafting - create contracts, pleadings, and legal documents with AI assistance, (2) Document Analysis - review and extract insights from large document sets, (3) Legal Research - search Indian case law and statutes with AI-powered precision, and (4) Case Intelligence - analyze judgments and build litigation strategies based on precedent analysis.",
    value: "capabilities",
    category: "Features & Capabilities"
  },
  {
    question: "How accurate is Law Copilot's legal research?",
    answer:
      "Law Copilot's legal research is powered by AI trained specifically on Indian legal databases. All citations are verified against authoritative sources, and our system provides proper case references with contextual understanding. However, AI should augment—not replace—professional legal judgment.",
    value: "research-accuracy",
    category: "Features & Capabilities"
  },
  {
    question: "Can Law Copilot draft court-ready documents?",
    answer:
      "Yes. Law Copilot generates court-ready drafts using proper legal language, formatting, and citations appropriate for Indian courts. Our AI understands the formal tone required for legal documents and follows jurisdiction-specific requirements. All documents should be reviewed by a lawyer before filing.",
    value: "court-ready-documents",
    category: "Features & Capabilities"
  },

  // Security & Privacy
  {
    question: "How secure is my data with Law Copilot?",
    answer:
      "Security is our top priority. Law Copilot uses bank-level 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. We maintain SOC 2 Type II compliance and follow strict access controls. Your data is stored in India with full compliance to local data residency requirements.",
    value: "data-security",
    category: "Security & Privacy"
  },
  {
    question: "Does Law Copilot use my data to train AI models?",
    answer:
      "Absolutely not. Your confidential data remains private and is never used to train AI models or shared with other users. Each firm's data is isolated and accessible only to authorized users within your organization.",
    value: "data-training",
    category: "Security & Privacy"
  },
  {
    question: "Is Law Copilot compliant with Indian regulations?",
    answer:
      "Yes. Law Copilot complies with Indian data protection regulations and maintains data residency within India. We undergo regular security audits and maintain compliance certifications including ISO 27001 and SOC 2 Type II.",
    value: "compliance",
    category: "Security & Privacy"
  },

  // Integrations
  {
    question: "Does Law Copilot integrate with my existing tools?",
    answer:
      "Yes. Law Copilot integrates with Microsoft Word, Google Drive, Dropbox, and major document management systems. We also offer API access for custom integrations with your case management and billing systems.",
    value: "integrations",
    category: "Integrations"
  },
  {
    question: "Can I use Law Copilot with my document management system?",
    answer:
      "Yes. Law Copilot connects with popular document management systems including SharePoint, iManage, and NetDocuments. We can also build custom integrations for proprietary systems used by your firm.",
    value: "dms-integration",
    category: "Integrations"
  },

  // Pricing & Plans
  {
    question: "How much does Law Copilot cost?",
    answer:
      "Law Copilot offers flexible pricing plans based on firm size and usage. Individual plans start at ₹4,999/month, with custom enterprise pricing for law firms. All plans include full access to our core features, unlimited document processing, and comprehensive support. Contact us for a personalized quote.",
    value: "pricing",
    category: "Pricing & Plans"
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. We offer a 14-day free trial with full access to all features so you can experience the complete Law Copilot platform. No credit card required to start your trial.",
    value: "free-trial",
    category: "Pricing & Plans"
  },
  {
    question: "What's included in enterprise plans?",
    answer:
      "Enterprise plans include everything in our standard plans plus: dedicated account management, custom integrations, priority support, advanced security features, team training sessions, and volume discounts. We also offer white-label options for larger organizations.",
    value: "enterprise-plans",
    category: "Pricing & Plans"
  }
];

const categories = Array.from(new Set(FAQ_LIST.map((item) => item.category)));

const FAQItem = memo(({ item }: { item: FAQProps }) => {
  return (
    <AccordionItem value={item.value}>
      <AccordionTrigger className="text-left font-semibold hover:no-underline">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="leading-relaxed text-muted-foreground dark:text-white/70">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
});

FAQItem.displayName = "FAQItem";

const CategoryFilter = memo(
  ({
    categories,
    selectedCategory,
    setSelectedCategory
  }: {
    categories: string[];
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
  }) => {
    return (
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            selectedCategory === null
              ? "bg-foreground text-background dark:bg-white dark:text-black"
              : "bg-muted/50 hover:bg-muted dark:bg-white/10 dark:hover:bg-white/20"
          )}
        >
          All Questions
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === category
                ? "bg-foreground text-background dark:bg-white dark:text-black"
                : "bg-muted/50 hover:bg-muted dark:bg-white/10 dark:hover:bg-white/20"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

CategoryFilter.displayName = "CategoryFilter";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter FAQ items based on selected category
  const filteredFAQs = selectedCategory
    ? FAQ_LIST.filter((item) => item.category === selectedCategory)
    : FAQ_LIST;

  // Group FAQs by category for display
  const groupedFAQs = categories.map((category) => ({
    category,
    items: filteredFAQs.filter((item) => item.category === category)
  })).filter((group) => group.items.length > 0);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
              <HelpCircle className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                Help & Support
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="block text-foreground dark:text-white">
                Frequently Asked
              </span>
              <span className="block text-foreground/80 dark:text-white/90">Questions</span>
            </h1>

            <p className="text-lg text-muted-foreground dark:text-white/70">
              Find answers to common questions about Law Copilot and how it can transform your
              legal practice
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </motion.div>

          {/* FAQ Accordion by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {groupedFAQs.map((group) => (
              <div key={group.category}>
                {!selectedCategory && (
                  <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl dark:text-white">
                    {group.category}
                  </h2>
                )}

                <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <Accordion type="single" collapsible className="w-full">
                    {group.items.map((item) => (
                      <FAQItem key={item.value} item={item} />
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 p-10 backdrop-blur-sm dark:border-white/10 md:p-12">
              <MessageCircle className="mx-auto mb-4 h-10 w-10 text-foreground dark:text-white" />
              <h3 className="mb-2 text-2xl font-bold text-foreground dark:text-white">
                Still have questions?
              </h3>
              <p className="mb-6 text-muted-foreground dark:text-white/70">
                Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button size="lg" variant="outline" className="rounded-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}