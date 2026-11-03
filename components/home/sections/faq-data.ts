/*
 * The questions shown in the site footer, kept as plain data so the footer and
 * the homepage's FAQPage structured data (rendered on the server) read from the
 * same source. The full list lives on /faq, which covers each of these too.
 *
 * Chosen from what buyers ask legal AI vendors most (training on their data,
 * where it lives, who can see it, accuracy, leaving) plus Indian coverage.
 * Answers only use what the product does today (roles, sharing, citations,
 * draft checks, deletion, private chats) or claims the site already makes
 * (FAQ page, compliance copy, Privacy Policy).
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is our data used to train AI models?",
    answer:
      "No. Your documents and conversations are never used to train AI models or shared with other customers. Each organisation’s data is kept separate.",
  },
  {
    question: "Where is our data stored, and are you DPDP-compliant?",
    answer:
      "Your data is stored in India, and we comply with the Digital Personal Data Protection Act, 2023. It is encrypted at rest (AES-256) and in transit (TLS 1.3). We are certified to ISO 27001 and meet SOC 2 requirements.",
  },
  {
    question: "Who in our team can see our documents?",
    answer:
      "Only the people you give access to. You invite colleagues into your organisation, give each a role — owner, admin, member or viewer — and share each case with the people working on it.",
  },
  {
    question: "How do we know its answers are right?",
    answer:
      "Every statement links to its source — the page in your record, the judgment or the provision — so you can check it in a click, and you can see each step it took. Before a brief is handed over, it is checked so that every statement has a page reference and every date appears in the sentence it cites. It can still make mistakes, so review its work before you rely on it.",
  },
  {
    question: "What happens to our data if we stop using LawCopilot?",
    answer:
      "You can delete a case, or your whole account, at any time, and private chats are deleted automatically after 7 days without activity. Data we no longer need is deleted or anonymised, as our Privacy Policy sets out.",
  },
  {
    question: "Which courts and languages does it cover?",
    answer:
      "The Supreme Court, all High Courts, District Courts and major tribunals. It translates and works with documents in major Indian languages, including Hindi, Tamil, Telugu, Bengali and Marathi.",
  },
];
