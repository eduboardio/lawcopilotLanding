import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants";
import { FAQ_ITEMS } from "@/components/home/sections/faq-data";

const description =
  "Legal AI for advocates and law firms in India. LawCopilot reads the record, researches, drafts and keeps watch on your matters — and checks with you before anything leaves.";
const socialTitle = "LawCopilot — Hand over the file. Get back the work.";

export const metadata: Metadata = {
  title: {
    absolute: "LawCopilot",
  },
  description,
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
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
  },
};

// FAQPage structured data, from the same copy the homepage accordion shows.
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
      <HomePageClient />
    </>
  );
}
