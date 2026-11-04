import { Inter, Source_Serif_4 } from "next/font/google";

/**
 * Interface and body text - paragraphs, labels, nav links, buttons, bold text.
 * The app uses Inter too.
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Headlines and reading text - h1/h2, `.font-heading`, briefs and document excerpts.
 * Matches the serif wordmark and the app, which sets answers and drafts in Source Serif 4.
 * Variable weight with the optical-size axis, so large headlines get the display cut.
 */
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});
