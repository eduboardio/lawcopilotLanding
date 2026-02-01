import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Drafting",
  description:
    "AI-powered legal document drafting for Indian law. Draft contracts, pleadings, and court-ready documents with Indian legal compliance and citation intelligence.",
};

export default function DocumentDraftingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
