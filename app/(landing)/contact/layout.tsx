import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to LawCopilot about your firm or in-house legal team. Ask for a walkthrough, pricing or support. We reply within 1–2 business days.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
