import type { Metadata } from "next";
import { LegalHeader } from "@/components/site/legal/legal-header";
import { PRIVACY_SECTIONS } from "@/components/site/legal/privacy-sections";
import { LegalReader } from "@/components/site/legal-reader";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Law Copilot Privacy Policy. How we collect, use, and protect your data. GDPR and Indian data protection practices.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader current="privacy" title="Privacy Policy" />
      <LegalReader sections={PRIVACY_SECTIONS} />
      <SiteFooter />
    </>
  );
}
