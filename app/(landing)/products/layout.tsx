import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Law Copilot products for law firms, lawyers, and everyone. AI legal research, drafting, case analytics, and document intelligence for Indian legal practice.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
