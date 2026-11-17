import type { Metadata } from "next";
import { LegalHeader } from "@/components/site/legal/legal-header";
import { TERMS_SECTIONS } from "@/components/site/legal/terms-sections";
import { LegalReader } from "@/components/site/legal-reader";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Law Copilot. Usage terms, acceptable use, and legal agreement for the AI-powered legal intelligence platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <LegalHeader current="terms" title="Terms of Service" />
      <LegalReader sections={TERMS_SECTIONS} />
      <SiteFooter />
    </>
  );
}
