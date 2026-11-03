"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin } from "lucide-react";
import { BUSINESS, ROUTES_WITHOUT_FOOTER, SOCIAL } from "@/constants";
import { LogoText } from "@/components/logo_text";
import { Container } from "@/components/home/sections/primitives";

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
            { href: "/blog", label: "Blog" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
        ],
    },
];

const SOCIAL_LINKS = [
    { href: SOCIAL.linkedin, label: "LawCopilot on LinkedIn", icon: Linkedin },
    { href: SOCIAL.instagram, label: "LawCopilot on Instagram", icon: Instagram },
].filter((link) => link.href);

export const Footer = () => {
    const pathname = usePathname();
    if (ROUTES_WITHOUT_FOOTER.includes(pathname)) return null;

    return (
        <footer id="footer" className="w-full border-t border-border bg-background">
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
                        © {new Date().getFullYear()} {BUSINESS.legalName} · Hyderabad
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
