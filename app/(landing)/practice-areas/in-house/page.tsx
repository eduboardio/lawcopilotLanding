import type { Metadata } from "next";
import { PracticePage, type PracticePageData } from "@/components/site/practice-page";

export const metadata: Metadata = {
  title: "LawCopilot for in-house",
  description:
    "Open an agreement in the built-in editor and instruct changes in plain words. Edits arrive as tracked changes in a new version, so you accept only what you agree with.",
  alternates: { canonical: "/practice-areas/in-house" },
};

const DATA: PracticePageData = {
  href: "/practice-areas/in-house",
  headline: "Draft, expand and revise inside the document",
  intro:
    "Open an agreement in the built-in editor and instruct changes in plain words: tighten a clause, change a term everywhere it appears, expand the draft. Edits arrive as tracked changes in a new version, so you accept only what you agree with.",
  paint: "teal",
  shot: {
    src: "/images/site/editor-tracked-changes.png",
    alt: "A draft open in the LawCopilot editor with tracked changes to review and the Changes panel beside it",
  },
  builtOn: "Built on Drafting, Editor and Redlines.",
  solution: { label: "See LawCopilot for in-house teams", href: "/in-house-teams" },
  handOver: ["A draft, a template or the counterparty's paper","Your instructions, clause by clause or end to end"],
  getBack: [
    "Tracked changes, saved as a numbered version",
    "Redlines against the earlier draft",
    "Clause language reused from your knowledge base",
    "A clean copy ready to send",
  ],
};

export default function Page() {
  return <PracticePage data={DATA} />;
}
