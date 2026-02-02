import "./globals.css";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme";
import { inter, nohemi } from "@/lib/fonts";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SOCIAL } from "@/constants";
import { Analytics } from "@/components/analytics";

const defaultDescription =
  "AI-powered legal intelligence for Indian legal practice. Research faster, draft smarter, and deliver exceptional outcomes with Law Copilot.";

// Title 50–60 chars for SEO; template used for inner pages
const defaultTitle = "Law Copilot | AI Legal Research, Drafting & Case Analytics for India";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s | ${SITE_NAME}` },
  description: defaultDescription,
  keywords: ["legal AI", "Indian legal", "legal research", "document drafting", "case analytics", "law firm software", "legal technology"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    ...(SOCIAL.facebook ? { facebook: { appId: "" } } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    ...(SOCIAL.x ? { site: SOCIAL.x, creator: "@lawcopilot" } : {}),
  },
  robots: { index: true, follow: true },
};

function JsonLdSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Law Copilot",
    legalName: "Law Co-Pilot LLP",
    url: SITE_URL,
    logo: `${SITE_URL}/Light-Logo.png`,
    description: defaultDescription,
    email: "hello@lawcopilot.io",
    telephone: "+91-9603354488",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [SOCIAL.instagram, SOCIAL.linkedin].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@lawcopilot.io",
      telephone: "+91-9603354488",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English, Hindi",
      url: `${SITE_URL}/contact`,
      hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Law Copilot",
    image: `${SITE_URL}/website.png`,
    url: SITE_URL,
    telephone: "+91-9603354488",
    email: "hello@lawcopilot.io",
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: defaultDescription,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/research-engine?q={search_term_string}` }, "query-input": "required name=search_term_string" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nohemi.variable}`}>
      <body className="font-sans antialiased">
        <JsonLdSchema />
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
