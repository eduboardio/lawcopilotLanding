import { Inter, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";

/**
 * Normal/body text font - used for paragraphs, labels, nav links, buttons (text), etc.
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Bold/headline font - used for headings (h1–h6), bold text, semibold, buttons (visual weight).
 */
export const nohemi = localFont({
  src: [
    {
      path: "../public/Nohemi-Font/Nohemi-Medium-BF6438cc57ddecd.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Nohemi-Font/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

/**
 * Reading serif - briefs, quoted instructions and document excerpts.
 * Matches the app, which sets answers and drafts in Source Serif 4.
 */
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});
