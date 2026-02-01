import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Law Copilot Privacy Policy. How we collect, use, and protect your data. GDPR and Indian data protection practices.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
