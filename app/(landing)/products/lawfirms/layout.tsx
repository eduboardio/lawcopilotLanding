import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Law Firms",
  description:
    "AI legal intelligence for law firms. Scale practice, increase profitability, and standardize quality with Law Copilot for firms.",
};

export default function LawFirmsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
