import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Translation",
  description:
    "AI legal translation with jurisdiction awareness. Legal terminology, format preservation, and context intelligence for Indian legal documents.",
  alternates: { canonical: "/translation" },
};

export default function TranslationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
