import type { Metadata } from "next";
import { PracticePage, type PracticePageData } from "@/components/site/practice-page";

export const metadata: Metadata = {
  title: "LawCopilot for litigation and appeals",
  description:
    "A paper book becomes a brief you can read before the matter is called: what each court below held, a list of dates with page references, and research with every authority open at the paragraph relied on.",
  alternates: { canonical: "/practice-areas/litigation-and-appeals" },
};

const DATA: PracticePageData = {
  href: "/practice-areas/litigation-and-appeals",
  headline: "Walk into court knowing the record",
  intro:
    "A 484-page paper book becomes a brief you can read before the matter is called: what each court below held, a list of dates with page references, and notes where the record contradicts itself. Research on the points of law runs alongside, with every authority open at the paragraph relied on.",
  paint: "slate",
  shot: {
    src: "/images/site/brief-colour-index.webp",
    alt: "A document brief of a civil SLP paper book with its short index, page view and overview",
  },
  builtOn: "Built on Document Briefs and Research.",
  solution: { label: "See LawCopilot for litigation", href: "/litigation" },
  handOver: ["The paper book or case file, as a PDF", "The questions you need answered"],
  getBack: [
    "Short index, overview and list of dates",
    "Margin notes and an annotated PDF",
    "Regional-language pages translated",
    "Cited research on each issue",
  ],
};

export default function Page() {
  return <PracticePage data={DATA} />;
}
