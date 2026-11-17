import type { Metadata } from "next";
import { PracticePage, type PracticePageData } from "@/components/site/practice-page";

export const metadata: Metadata = {
  title: "LawCopilot for real estate",
  description:
    "Title work for developers and property lawyers: check an encumbrance certificate, build the chain of title, reconcile extents and boundaries, and find missing consents, with a report you can act on.",
  alternates: { canonical: "/practice-areas/real-estate" },
};

const DATA: PracticePageData = {
  href: "/practice-areas/real-estate",
  headline: "Title work that starts from the right task",
  intro:
    "For developers and property lawyers, the dashboard opens on the work itself: check an encumbrance certificate, build the chain of title, reconcile extents and boundaries, find missing consents. Each task says which documents to attach and returns a report you can act on.",
  paint: "olive",
  shot: {
    src: "/images/site/dashboard-land-tasks.webp",
    alt: "Dashboard task cards for land work: encumbrance certificate check, chain of title, title defect report and more",
  },
  builtOn: "Built on Guided tasks and Drafting.",
  solution: { label: "See LawCopilot for in-house teams", href: "/in-house-teams" },
  handOver: ["Encumbrance certificate, parent and link deeds, pattas", "Sanctioned plans and revenue records"],
  getBack: [
    "Chain of title, latest to earliest, with breaks marked",
    "Each title defect, with the document that cures it",
    "Extents reconciled across deeds, plans and records",
    "A joint development agreement draft",
  ],
};

export default function Page() {
  return <PracticePage data={DATA} />;
}
