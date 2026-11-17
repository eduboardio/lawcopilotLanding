import type { Metadata } from "next";
import { PracticePage, type PracticePageData } from "@/components/site/practice-page";

export const metadata: Metadata = {
  title: "LawCopilot for insolvency and banking",
  description:
    "Tabular Review reads every insolvency application into one grid, so the differences in amounts, dates and reliefs show at a glance and every figure traces back to its sentence.",
  alternates: { canonical: "/practice-areas/insolvency-and-banking" },
};

const DATA: PracticePageData = {
  href: "/practice-areas/insolvency-and-banking",
  headline: "Seven applications, one table",
  intro:
    "Insolvency matters arrive as stacks of applications, each reciting the amounts, dates and reliefs a little differently. Tabular Review reads them into one grid, so the differences show at a glance and every figure traces back to its sentence.",
  paint: "navy",
  shot: {
    src: "/images/site/tabular-insolvency.webp",
    alt: "A tabular review of seven insolvency applications with a cell traced to its highlighted source sentence",
  },
  builtOn: "Built on Tabular Review and Knowledge Base.",
  solution: { label: "See LawCopilot for law firms", href: "/law-firms" },
  handOver: ["The applications, orders and notices in the matter", "Your columns: parties, amounts, deadlines, reliefs"],
  getBack: [
    "A row per document, a column per question",
    "A citation behind every cell",
    "Flags where a figure is blank or unconfirmed",
    "A recall or set-aside draft from your own templates",
  ],
};

export default function Page() {
  return <PracticePage data={DATA} />;
}
