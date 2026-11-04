"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Instagram, Linkedin } from "lucide-react";
import { BUSINESS, ROUTES_WITHOUT_FOOTER, SOCIAL } from "@/constants";
import { LogoText } from "@/components/logo_text";
import { Container } from "@/components/home/sections/primitives";
import { FAQ_ITEMS } from "@/components/home/sections/faq-data";

const COLUMNS = [
    {
        title: "Product",
        links: [
            { href: "/research-engine", label: "Research" },
            { href: "/document-drafting", label: "Drafting" },
            { href: "/translation", label: "Translation" },
            { href: "/case-analytics", label: "Case analytics" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/about", label: "About" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
        ],
    },
];

const SOCIAL_LINKS = [
    { href: SOCIAL.linkedin, label: "LawCopilot on LinkedIn", icon: Linkedin },
    { href: SOCIAL.instagram, label: "LawCopilot on Instagram", icon: Instagram },
].filter((link) => link.href);

/** The questions people ask first, on every page except /faq (which lists them all). */
const FooterQuestions = () => (
    <section id="faq" aria-labelledby="footer-faq-title" className="scroll-mt-20 border-b border-border">
        <Container className="grid gap-8 py-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:gap-16">
            <div className="flex flex-col items-start gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Questions</p>
                <h2 id="footer-faq-title" className="font-heading text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-balance text-foreground">
                    What legal teams ask first.
                </h2>
                <Link
                    href="/faq"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                    See all questions
                    <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                </Link>
            </div>

            <div className="divide-y divide-border border-y border-border">
                {FAQ_ITEMS.map(({ question, answer }) => (
                    <details key={question} className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-foreground transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                            {question}
                            <ChevronDown
                                aria-hidden
                                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                            />
                        </summary>
                        <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p>
                    </details>
                ))}
            </div>
        </Container>
    </section>
);

export const Footer = () => {
    const pathname = usePathname();
    if (ROUTES_WITHOUT_FOOTER.includes(pathname)) return null;

    return (
        <footer id="footer" className="w-full border-t border-border bg-background">
            {pathname === "/faq" ? null : <FooterQuestions />}

            <Container className="grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
                <div className="flex flex-col items-start gap-4">
                    <LogoText type="LOGO_ONLY" />
                    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Legal AI for law firms and in-house legal teams in India.
                    </p>
                </div>

                <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-8">
                    {COLUMNS.map((column) => (
                        <div key={column.title} className="flex flex-col gap-3">
                            <p className="text-sm font-medium text-foreground">{column.title}</p>
                            <ul className="flex flex-col gap-2.5">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </Container>

            <div className="border-t border-border">
                <Container className="flex flex-col gap-4 py-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p suppressHydrationWarning>
                        © {new Date().getFullYear()} {BUSINESS.legalName} · Hyderabad · Visakhapatnam
                    </p>
                    <div className="flex items-center gap-5">
                        <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
                            Privacy
                        </Link>
                        <Link href="/terms" className="transition-colors hover:text-foreground">
                            Terms
                        </Link>
                        <span aria-hidden className="h-4 w-px bg-border" />
                        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground"
                            >
                                <Icon aria-hidden className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </Container>
            </div>
        </footer>
    );
};
