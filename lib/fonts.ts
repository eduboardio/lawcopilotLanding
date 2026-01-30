import { Inter } from "next/font/google";
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
      path: "../public/Nohemi-Font/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
});
