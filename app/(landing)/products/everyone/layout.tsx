import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Everyone",
  description:
    "Legal knowledge assistant and document vault for everyone. Understand your rights and manage legal documents with AI-powered Law Copilot.",
  alternates: { canonical: "/products/everyone" },
};

export default function EveryoneLayout({ children }: { children: React.ReactNode }) {
  return children;
}
