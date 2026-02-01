import "./globals.css";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme";
import { inter, nohemi } from "@/lib/fonts";

const siteUrl = "https://lawcopilot.io";
const defaultDescription =
  "AI-powered legal intelligence for Indian legal practice. Research faster, draft smarter, and deliver exceptional outcomes with Law Copilot.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Law Copilot", template: "%s | Law Copilot" },
  description: defaultDescription,
  keywords: ["legal AI", "Indian legal", "legal research", "document drafting", "case analytics", "law firm software", "legal technology"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Law Copilot",
    title: "Law Copilot | AI Legal Intelligence for India",
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Copilot | AI Legal Intelligence for India",
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nohemi.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
