import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants";
import { HomeCases } from "@/components/site/home/home-cases";
import { HomeFaq, HomeWhatsApp } from "@/components/site/home/home-closing";
import { HomeHero, HomeIntegrations, HomeNumbers, HomeSolutions } from "@/components/site/home/home-intro";
import { HomePlatform } from "@/components/site/home/home-platform";
import { FAQ_ITEMS } from "@/components/site/home/faq-data";
import { DEFAULT_CTA, SiteFooter } from "@/components/site/site-footer";

const description =
  "Legal AI for law firms and in-house legal teams in India. LawCopilot reads the record, researches, drafts and keeps watch on your matters — and checks with you before anything leaves.";
const socialTitle = "LawCopilot — Hand over the file. Get back the work.";

export const metadata: Metadata = {
  title: {
    absolute: "LawCopilot",
  },
  description,
  alternates: { canonical: "/" },
  // Page-level openGraph/twitter replace the layout's, so the shared fields are repeated here.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: socialTitle,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", title: socialTitle, description },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomeHero />
      <HomeSolutions />
      <HomeNumbers />
      <HomeIntegrations />
      <HomePlatform />
      <HomeCases />
      <HomeWhatsApp />
      <HomeFaq />
      <SiteFooter cta={{ ...DEFAULT_CTA, maxSize: 88, letterSpacing: "-0.025em" }} />
    </>
  );
}
