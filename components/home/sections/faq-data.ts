/*
 * The questions shown in the site footer, kept as plain data so the footer and
 * the homepage's FAQPage structured data (rendered on the server) read from the
 * same source. The full list lives on /faq; every question here is also there.
 *
 * Answers only use claims the site already makes (FAQ page, compliance copy) or
 * that the product does today (approvals, tracked changes, private chats).
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is my clients’ data safe?",
    answer:
      "Your files are stored and processed in India. We meet SOC 2 requirements, are certified to ISO 27001 and comply with the DPDP Act, 2023. Your data is never used to train AI models, and private chats are deleted after 7 days without activity.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "LawCopilot is built for Indian legal work, not general chat. It reads your case files, cites the page or judgment behind each statement, follows your templates, and works inside the matter alongside its dates and tasks. It shows every step it took, asks when something is unclear, and waits for your sign-off before anything leaves.",
  },
  {
    question: "Can it send or file anything on its own?",
    answer:
      "No. Email replies it drafts wait for your approval, and its edits to a draft arrive as tracked changes for you to accept. Nothing leaves without you.",
  },
  {
    question: "Which courts and languages does it cover?",
    answer:
      "The Supreme Court, all High Courts, District Courts and major tribunals. It translates and works with documents in major Indian languages, including Hindi, Tamil, Telugu, Bengali and Marathi.",
  },
];
