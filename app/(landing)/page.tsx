import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants";

const description =
  "Legal AI for law firms and in-house legal teams in India. LawCopilot reads the record, researches, drafts and keeps watch on your matters — and checks with you before anything leaves.";
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

export default function HomePage() {
  return <HomePageClient />;
}
