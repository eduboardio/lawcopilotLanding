import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Lawyers",
  description:
    "AI legal tools for lawyers. Work faster, enhance quality, and focus on strategy with Law Copilot for individual practitioners.",
  alternates: { canonical: "/products/lawyers" },
};

export default function LawyersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
