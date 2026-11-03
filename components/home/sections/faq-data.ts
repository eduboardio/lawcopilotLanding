/*
 * Homepage FAQ copy, kept as plain data so the client accordion and the page's
 * FAQPage structured data (rendered on the server) read from the same source.
 *
 * Answers only use claims the site already makes (FAQ page, compliance copy) or
 * that the product does today (approvals, tracked changes, private chats, plans).
 */
export type FaqItem = {
  question: string;
  answer: string;
  /** Optional trailing link, shown in the accordion only. */
  link?: { label: string; href: string; after: string };
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
      "LawCopilot is built for Indian legal work, not general chat. It reads your case files, cites the page or judgment behind each statement, follows your firm’s templates, and works inside the case alongside its dates and tasks. It shows every step it took, asks when something is unclear, and waits for your sign-off before anything leaves.",
  },
  {
    question: "Will it replace my juniors?",
    answer:
      "No. It takes on the groundwork — reading the record, the list of dates, first drafts, the morning cause list — so your juniors spend their time on the work that needs judgment. You and your team decide what goes out.",
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
  {
    question: "How much does it cost?",
    answer:
      "There are plans for individual advocates and per-seat plans for law firms, billed monthly or yearly. Start on your own and bring your firm in later.",
    link: { label: "Talk to us", href: "/contact", after: " about pricing for your firm." },
  },
];
