import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "LawCopilot is legal AI for law firms and in-house legal teams in India, built by Lawinit Private Limited, with offices in Hyderabad and Visakhapatnam. What we hold to, and the team building it.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
