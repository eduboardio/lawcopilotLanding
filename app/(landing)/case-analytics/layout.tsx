import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Analytics",
  description:
    "AI case analytics and litigation strategy. Success probability, risk identification, precedent patterns, and judgment analysis for Indian courts.",
  alternates: { canonical: "/case-analytics" },
};

export default function CaseAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
