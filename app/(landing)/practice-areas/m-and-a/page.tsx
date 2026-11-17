import type { Metadata } from "next";
import { PracticePage, type PracticePageData } from "@/components/site/practice-page";

export const metadata: Metadata = {
  title: "LawCopilot for M&A",
  description:
    "Due diligence across the data room: Tabular Review reads every contract into one grid, with every answer traced to its clause, and transaction documents are drafted and revised with each change tracked.",
  alternates: { canonical: "/practice-areas/m-and-a" },
};

const DATA: PracticePageData = {
  href: "/practice-areas/m-and-a",
  headline: "The data room, read into one table",
  intro:
    "Due diligence asks the same questions of every contract in the data room. Tabular Review reads them into one grid, with a column for each question and every answer traced to its clause. The transaction documents are then drafted and revised in the editor, with each change tracked.",
  paint: "plum",
  shot: {
    src: "/images/site/editor-supplier-agreement.webp",
    alt: "A supplier agreement open in the editor beside the chat that revised it",
  },
  builtOn: "Built on Tabular Review and Drafting.",
  solution: { label: "See LawCopilot for law firms", href: "/law-firms" },
  handOver: [
    "The data room: contracts, corporate records and licences",
    "Your diligence questions, or the Corporate Due Diligence framework",
  ],
  getBack: [
    "A row per document, a column per question",
    "A citation behind every cell",
    "Flags where a term is missing or unclear",
    "Transaction drafts with tracked changes",
  ],
};

export default function Page() {
  return <PracticePage data={DATA} />;
}
