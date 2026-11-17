import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/site/solution-page";

export const metadata: Metadata = {
  title: "LawCopilot for litigation",
  description:
    "Briefs to the page, research with the judgment open, pleadings in court format, and every hearing date where you can see it.",
  alternates: { canonical: "/litigation" },
};

const DATA: SolutionPageData = {
  crumb: "Litigation",
  title: "Walk into court knowing the record",
  intro: "Briefs to the page, research with the judgment open, pleadings in court format, and every hearing date where you can see it.",
  introMaxWidth: 620,
  hero: {
    paint: "charcoal",
    aspectRatio: "1.8 / 1",
    image: {
      src: "/images/site/brief-colour-index.webp",
      alt: "A document brief of a civil SLP paper book: the colour-coded short index, the page view with a note in the margin, and an overview of how the case travelled through the courts",
    },
    shot: { left: "7%", top: "10.5%", width: "86%", borderRadius: "8px" },
  },
  changesTitle: "What changes before the hearing",
  changes: [
    {
      title: "The record, to the page",
      detail: "Document Briefs reads the paper book end to end and returns an index, an overview, a list of dates and notes in the margin.",
    },
    { title: "Authorities you can open", detail: "Every proposition carries its citation, and the judgment opens at the paragraph relied on." },
    { title: "Every date in one place", detail: "Cases sync with the court registry, so the week’s hearings and deadlines sit on your dashboard." },
  ],
  usesTitle: "How litigation teams use LawCopilot",
  usesPaint: "slate",
  uses: [
    {
      title: "Briefs before the hearing",
      detail:
        "A full paper book read and briefed: the short index, an overview of how the matter travelled through the courts, and a list of dates with conflicts called out.",
      image: {
        src: "/images/site/brief-overview.webp",
        alt: "The brief overview of a civil SLP paper book, with chips reading 96 documents, 484 pages and 5 pages translated from Kannada and Telugu",
      },
    },
    {
      title: "The case record, synced",
      detail:
        "Registry data for every matter (stage, next hearing, presiding judge, filing details) with the full run of hearings and orders, re-synced in a click.",
      image: {
        src: "/images/site/case-registry.webp",
        alt: "A case page synced with the court registry, showing the case stage, next hearing, presiding judge and filing details",
      },
    },
    {
      title: "The week ahead",
      detail: "Hearings, mediations and client meetings for the next seven days, with saved drafts and analyses beside them.",
      image: {
        src: "/images/site/dashboard-this-week.webp",
        alt: "This week on the dashboard: a RERA final hearing, an OA hearing, a mediation and a client meeting, beside saved drafts and analyses",
      },
    },
    {
      title: "Research for the arguments",
      detail: "Issue-by-issue answers on Supreme Court and High Court authority, with each judgment open at the paragraph relied on.",
      image: {
        src: "/images/site/research-side-by-side.webp",
        alt: "A research answer on Section 138 beside the cited Supreme Court judgment, open at the paragraph relied on",
      },
    },
    {
      title: "Records in Indian languages",
      detail: "Judgments, deeds and depositions in Telugu, Kannada and other languages, translated into English and set out like the original.",
      image: {
        src: "/images/site/translation-telugu.webp",
        alt: "A new translation from Telugu into English: the English keeps the document's headings, clauses and numbering, and scanned pages are read too",
      },
    },
  ],
  handOverTitle: "Work your chamber can hand over today",
  tasks: [
    { label: "Document brief", prompt: "“Brief me on this record before Thursday’s hearing.”", result: "A short index, an overview and a list of dates, cited to the page." },
    { label: "Paper book", prompt: "“Put together the paper book for the SLP.”", result: "Numbered, indexed and bookmarked. You approve the page plan before it’s built." },
    { label: "Drafting", prompt: "“Draft the Order 6 Rule 17 petition for O.S. No. 214 of 2024.”", result: "Follows your templates. Edits arrive as tracked changes, in Word too." },
    { label: "List of dates", prompt: "“Build a list of dates from the case file.”", result: "Every date tied to the sentence and page it comes from." },
    { label: "On WhatsApp", prompt: "“@LawCopilot add this order to O.S. 214. Next date?”", result: "The order goes into the case, and the next date comes back." },
    { label: "Translation", prompt: "“Translate this Kannada judgment into English.”", result: "The English keeps the judgment’s form. Scanned pages are read too." },
  ],
  securityNote: "The record, your notes and your drafts stay with the people on the case.",
};

export default function LitigationPage() {
  return <SolutionPage data={DATA} />;
}
