import type { Metadata } from "next";
import ClientLandingLayout from "./ClientLandingLayout";

export const metadata: Metadata = {
  title: "AI Legal Intelligence for India",
  description:
    "AI-powered legal intelligence built for Indian legal practice. Research faster, draft smarter, and deliver exceptional outcomes with Law Copilot.",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <ClientLandingLayout>{children}</ClientLandingLayout>;
}
