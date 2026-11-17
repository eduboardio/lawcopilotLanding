import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/site/solution-page";

export const metadata: Metadata = {
  title: "LawCopilot for law firms",
  description:
    "Matters, research, drafts and deadlines live in one place, shared with the people working on them. LawCopilot reads the file, does the groundwork, and returns it for review.",
  alternates: { canonical: "/law-firms" },
};

const DATA: SolutionPageData = {
  crumb: "Law firms",
  title: "Every matter in the firm, on one platform",
  intro:
    "Matters, research, drafts and deadlines live in one place, shared with the people working on them. LawCopilot reads the file, does the groundwork, and returns it for review.",
  introMaxWidth: 620,
  hero: {
    paint: "plum",
    aspectRatio: "1.8 / 1",
    image: {
      src: "/images/site/case-management.webp",
      alt: "Case and suit management: a searchable list of the firm's matters with status, priority, next date and counts of chats, documents and artifacts",
    },
    shot: { left: "8%", top: "9%", width: "84%", borderRadius: "8px 8px 0 0" },
  },
  changesTitle: "What changes for the firm",
  changes: [
    { title: "First drafts, not blank pages", detail: "Associates start from a cited draft built on the firm’s own templates, and spend their time on judgment." },
    { title: "Review you can verify", detail: "Every statement links to the page, judgment or provision it rests on, so a partner can check it in a click." },
    { title: "Nothing lost between people", detail: "Chats, documents, tasks and dates stay on the matter, so the work carries on when the people on it change." },
  ],
  usesTitle: "How law firms use LawCopilot",
  usesPaint: "teal",
  uses: [
    {
      title: "Matters in step with the court",
      detail:
        "Add a case by its CNR and the registry record keeps itself current: stage, next hearing, presiding judge and every order. Chats, documents, tasks and billing sit on the same page.",
      image: {
        src: "/images/site/case-registry.webp",
        alt: "A case page synced with the court registry, showing the parties, case stage, next hearing, presiding judge and filing details",
      },
    },
    {
      title: "Research partners can check",
      detail: "Ask in plain language and get an answer by issue, on Indian authority, with each judgment open at the paragraph relied on.",
      image: { src: "/images/site/research-side-by-side.webp", alt: "A research answer beside the cited Supreme Court judgment, open at the paragraph relied on" },
    },
    {
      title: "Diligence and document review",
      detail: "Read a data room or a stack of applications into one table: a row per document, a column per question, every cell cited.",
      image: { src: "/images/site/tabular-grid.webp", alt: "A tabular review of seven documents with columns for parties, date and subject" },
    },
    {
      title: "The firm’s own knowledge",
      detail: "Templates, reusable clauses, procedures and precedents in one library, so every draft starts from the way the firm already works.",
      image: {
        src: "/images/site/knowledge-base.webp",
        alt: "The knowledge base: drafting templates and reusable sections, including NCLT recall applications and a prayer for dishonour of cheque",
      },
    },
    {
      title: "Drafting in the document",
      detail: "Instruct changes in plain words beside the draft. Edits arrive as tracked changes in a new version, ready for partner review.",
      image: { src: "/images/site/editor-supplier-agreement.webp", alt: "A supplier agreement open in the editor beside the chat that revised it" },
    },
  ],
  handOverTitle: "Work an associate can hand over today",
  tasks: [
    { label: "Document brief", prompt: "“Brief me on this record before Thursday’s hearing.”", result: "A short index, an overview and a list of dates, cited to the page." },
    { label: "Research", prompt: "“Find the authorities on part-payment before a cheque is presented.”", result: "An answer by issue, each judgment open at the paragraph relied on." },
    { label: "Tabular review", prompt: "“Go through these leases. Rent, lock-in and termination for each.”", result: "One row per lease, one column per question, every cell cited." },
    { label: "Drafting", prompt: "“Draft the Order 6 Rule 17 petition for O.S. No. 214 of 2024.”", result: "A draft in the firm’s format, with edits as tracked changes." },
    { label: "Joins the case", prompt: "“Join O.S. 214 with the team and get up to speed.”", result: "It reads everything on the case, and anyone on it can hand it work." },
    { label: "Standing task", prompt: "“Check the cause list every morning and report to this case.”", result: "A task that runs on a schedule and reports where the work lives." },
  ],
  securityNote: "Client files are handled the way your engagement letters promise.",
};

export default function LawFirmsPage() {
  return <SolutionPage data={DATA} />;
}
