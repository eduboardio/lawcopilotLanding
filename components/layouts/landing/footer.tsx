"use client";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export const Footer = () => {
    const pathname = usePathname();
    const shouldHideHeaderFooter = ROUTES_WITHOUT_FOOTER.includes(pathname);

    if (shouldHideHeaderFooter) return null;

    return (
        <footer id="footer" className="w-full bg-slate-50 dark:bg-slate-900/50 border-t border-border">
            <div className="container py-12 mx-auto px-4 md:px-6">
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                    The Future of Law Is Here
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-4">
                        <div className="flex items-center mb-4">
                            <Logo type="LOGO_ONLY" />
                            <span className="ml-2 font-bold text-xl">Law Copilot</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6 max-w-md">
                            Your AI-powered legal assistant. Get instant answers to legal questions, document drafting assistance, and case law research in seconds.
                        </p>
                    </div>

                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">Explore</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/research-engine" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Research Engine
                                </Link>
                                <Link href="/case-analytics" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Case Analytics
                                </Link>
                                <Link href="/translation" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Legal Translation
                                </Link>
                                <Link href="/document-drafting" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Document Drafting
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">Company</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/about" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    About Us
                                </Link>
                                <Link href="/contact" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                                <Link href="/careers" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">Resources</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/privacy-policy" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="/blog" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Blog
                                </Link>
                                <Link href="/faq" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    FAQ
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">Connect</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="https://www.linkedin.com/company/lawcopilot" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    <Linkedin className="h-4 w-4 text-primary" />
                                    <span>LinkedIn</span>
                                </Link>
                                <Link href="mailto:support@lawcopilot.ai" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span>Email Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="mt-6" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="py-6 flex justify-center items-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Law Copilot. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};