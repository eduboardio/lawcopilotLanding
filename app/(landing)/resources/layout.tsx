import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and resources for Law Copilot: getting started, Indian legal AI, contract review best practices, and product deep-dives.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
