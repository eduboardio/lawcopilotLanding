import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Analysis",
  description:
    "AI document intelligence for legal review. Risk identification, clause extraction, bulk and comparative analysis for contracts and due diligence.",
  alternates: { canonical: "/document-analysis" },
};

export default function DocumentAnalysisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
