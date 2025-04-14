"use client";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Footer = () => {
    const pathname = usePathname();
    const shouldHideHeaderFooter = ROUTES_WITHOUT_FOOTER.includes(pathname);

    if (shouldHideHeaderFooter) return null;
    
    return (
        <footer id="footer" className="w-full bg-slate-50 dark:bg-slate-900/50 border-t border-border">
            <div className="container py-10 mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
                    <div className="col-span-full md:col-span-1 flex flex-col gap-4">
                        <Logo type="LOGO_ONLY" />
                        <p className="text-lg font-semibold text-primary">AI-Powered Legal Solutions</p>
                        <p className="text-muted-foreground">Revolutionize your legal practice with cutting-edge AI technology.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Explore</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/research-engine" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Research Engine
                            </Link>
                            <Link href="/case-analytics" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Case Analytics
                            </Link>
                            <Link href="/translation" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Legal Translation
                            </Link>
                            <Link href="/document-drafting" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Document Drafting
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Company</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/about" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <Link href="/contact" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Contact Us
                            </Link>
                            <Link href="/careers" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Careers
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Legal</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/privacy-policy" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />
                
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">© Law Copilot. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};