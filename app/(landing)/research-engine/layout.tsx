import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Engine",
  description:
    "AI legal research for Indian case law and statutes. Smart search, jurisdiction awareness, case summaries, and citation verification.",
  alternates: { canonical: "/research-engine" },
};

export default function ResearchEngineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
