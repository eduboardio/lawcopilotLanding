import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/site/solution-page";

export const metadata: Metadata = {
  title: "LawCopilot for in-house teams",
  description:
    "Review contracts in batches, draft in Word from approved templates, read regional-language documents in English, and keep track of every dispute outside counsel is running.",
  alternates: { canonical: "/in-house-teams" },
};

const DATA: SolutionPageData = {
  crumb: "In-house teams",
  title: "In-house legal, without the backlog",
  intro:
    "Review contracts in batches, draft in Word from approved templates, read regional-language documents in English, and keep track of every dispute outside counsel is running.",
  introMaxWidth: 640,
  hero: {
    paint: "navy",
    aspectRatio: "2.1 / 1",
    image: {
      src: "/images/site/tabular-insolvency.webp",
      alt: "A tabular review of seven applications, with the source document open beside the table and the sentence behind one cell highlighted",
    },
    shot: { left: "8%", top: "12.5%", width: "84%", borderRadius: "8px" },
  },
  changesTitle: "What changes for the legal team",
  changes: [
    { title: "Contracts read in batches", detail: "Put a stack of agreements through one set of questions and get back a table you can check cell by cell." },
    { title: "Templates the business approved", detail: "Clauses and templates live in the knowledge base, so drafts start from what the business has already signed off." },
    {
      title: "Disputes you can see",
      detail: "Cases involving the company sync from the court registry, so the next date is on your dashboard even when outside counsel runs the matter.",
    },
  ],
  usesTitle: "How in-house teams use LawCopilot",
  usesPaint: "olive",
  uses: [
    {
      title: "Tasks shaped around the business",
      detail:
        "Set your profile, such as a real-estate developer, and the dashboard opens on the work by stage: land, approvals, construction, sales, handover, compliance and disputes. Each task says which documents to attach.",
      image: {
        src: "/images/site/dashboard-land-tasks.webp",
        alt: "Dashboard tasks for a real-estate developer, grouped by stage: land, approvals, construction, sales, handover, compliance and disputes",
      },
    },
    {
      title: "Contract review in batches",
      detail: "Leases, vendor agreements and NDAs read against the same questions. Where a figure is blank or unconfirmed, the cell says so instead of guessing.",
      image: { src: "/images/site/tabular-grid.webp", alt: "A tabular review of seven documents with columns for parties, date and subject" },
    },
    {
      title: "Drafting in Word",
      detail: "Open the counterparty’s Word file or start from a blank page. The chat sits beside the document, and every edit arrives as a tracked change.",
      image: { src: "/images/site/editor-start.webp", alt: "The text editor: start a blank document or open a Word file, with the chat beside it" },
    },
    {
      title: "Documents in Indian languages",
      detail:
        "Sale deeds, revenue records and notices in Telugu and other Indian languages come back in English, keeping their headings, clauses and numbering. Scanned pages are read too.",
      image: {
        src: "/images/site/translation-telugu.webp",
        alt: "A new translation from Telugu into English: the English keeps the document's headings, clauses and numbering, and scanned pages are read too",
      },
    },
    {
      title: "Disputes run by outside counsel",
      detail: "Track every case involving the company by its CNR: next date, stage and orders, with the documents, tasks and billing alongside.",
      image: { src: "/images/site/active-cases-tasks.webp", alt: "Active cases with their numbers and last update, beside active tasks with an overdue flag" },
    },
  ],
  handOverTitle: "Work the legal team can hand over today",
  tasks: [
    { label: "Contract review", prompt: "“Go through these leases. Rent, lock-in and termination for each.”", result: "One row per lease, one column per question, every cell cited." },
    { label: "Title diligence", prompt: "“Check this encumbrance certificate before we sign.”", result: "The search period and every entry read, with gaps and live charges flagged." },
    { label: "Consents", prompt: "“Find the consents still missing on this land.”", result: "Co-owners, minors, legal heirs, GPA holders and lender NOCs, checked against the deeds." },
    { label: "Drafting", prompt: "“Draft a joint development agreement from our template.”", result: "Area sharing, obligations, GPA, timelines and termination, in your format." },
    { label: "Translation", prompt: "“Translate this Telugu agreement into English.”", result: "The English keeps the agreement’s headings, clauses and numbering." },
    { label: "Disputes", prompt: "“What is the next date in every case involving us?”", result: "Next hearing, stage and orders, synced from the court registry." },
  ],
  securityNote: "The company’s contracts and disputes stay inside the company.",
};

export default function InHouseTeamsPage() {
  return <SolutionPage data={DATA} />;
}
