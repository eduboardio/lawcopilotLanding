"use client";

import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoText }from "@/components/logo_text";

export const Footer = () => {
    const pathname = usePathname();
    const shouldHideHeaderFooter = ROUTES_WITHOUT_FOOTER.includes(pathname);

    if (shouldHideHeaderFooter) return null;

    return (
        <footer id="footer" className="relative w-full overflow-hidden bg-background border-t border-border dark:border-white/10">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
                <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
                <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-foreground/[0.015] to-transparent blur-3xl dark:from-white/[0.015]"></div>
            </div>

            {/* Top CTA Section */}
            <div className="container relative z-10 py-16 mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
                        Ready to Transform Your Legal Practice?
                    </h2>
                    <p className="text-muted-foreground dark:text-white/70 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Join hundreds of legal professionals already using Law Copilot to work faster and smarter.
                    </p>
                    <Button
                        size="lg"
                        className="rounded-lg bg-foreground hover:bg-foreground/90 dark:bg-white dark:hover:bg-white/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all group"
                        asChild
                    >
                        <Link href="https://app.lawcopilot.io/signup">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Full-width Separator */}
            <div className="w-full h-px bg-border dark:bg-white/10" />

            {/* Main Footer Content */}
            <div className="container relative z-10 py-12 mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Brand Section */}
                    <div className="md:col-span-4">
                        <div className="flex items-center mb-6">
                            <LogoText type="LOGO_ONLY" />
                            {/* <span className="ml-3 font-bold text-xl text-foreground dark:text-white">Law Copilot</span> */}
                        </div>

                        <p className="text-sm text-muted-foreground dark:text-white/60 mb-6 leading-relaxed max-w-sm">
                            AI-powered legal intelligence built specifically for Indian legal practice. Research faster, draft smarter, and deliver exceptional outcomes.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <Link 
                                href="https://www.linkedin.com/company/lawcopilot"
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center justify-center h-10 w-10 rounded-lg bg-muted dark:bg-white/[0.05] hover:bg-muted/80 dark:hover:bg-white/[0.08] transition-colors group"
                            >
                                <Linkedin className="h-5 w-5 text-muted-foreground dark:text-white/60 group-hover:text-foreground dark:group-hover:text-white transition-colors" />
                            </Link>
                            <Link 
                                href="mailto:hello@lawcopilot.io" 
                                className="flex items-center justify-center h-10 w-10 rounded-lg bg-muted dark:bg-white/[0.05] hover:bg-muted/80 dark:hover:bg-white/[0.08] transition-colors group"
                            >
                                <Mail className="h-5 w-5 text-muted-foreground dark:text-white/60 group-hover:text-foreground dark:group-hover:text-white transition-colors" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Products */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-base text-foreground dark:text-white mb-2">Products</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/products/lawfirms" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    For Law Firms
                                </Link>
                                <Link href="/products/lawyers" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    For Lawyers
                                </Link>
                                <Link href="/products/everyone" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    For Everyone
                                </Link>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-base text-foreground dark:text-white mb-2">Features</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/research-engine" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Research Engine
                                </Link>
                                <Link href="/case-analytics" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Case Analytics
                                </Link>
                                <Link href="/translation" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Legal Translation
                                </Link>
                                <Link href="/document-drafting" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Document Drafting
                                </Link>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-base text-foreground dark:text-white mb-2">Company</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/about" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    About Us
                                </Link>
                                <Link href="/contact" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                                <Link href="/blog" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Blog
                                </Link>
                                <Link href="/faq" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold text-base text-foreground dark:text-white mb-2">Legal</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/privacy-policy" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-sm text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width Separator */}
            <div className="w-full h-px bg-border dark:bg-white/10" />

            {/* Bottom Bar */}
            <div className="container relative z-10 py-8 mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground dark:text-white/50">
                        © 2025 Law Copilot. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-muted-foreground dark:text-white/40">
                        <span>Made in India 🇮🇳</span>
                        <span className="hidden md:inline">•</span>
                        <span>For Indian Legal Professionals</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};