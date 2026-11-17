import { Host_Grotesk, Newsreader, Open_Sans } from "next/font/google";

/** Interface and body text: paragraphs, labels, nav links, buttons. */
export const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-host-grotesk",
  display: "swap",
});

/**
 * Headlines and display figures. Set at optical size 20 everywhere (see `.serif`
 * in globals.css), so large headlines keep the text cut's warmth.
 */
export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

/** Only inside product mock-ups, where it stands in for the app's interface font. */
export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-open-sans",
  display: "swap",
});
