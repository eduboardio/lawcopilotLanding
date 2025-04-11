"use client";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
    const pathname = usePathname();
    const shouldHideHeaderFooter = ROUTES_WITHOUT_FOOTER.includes(pathname);

    if (shouldHideHeaderFooter) return null;
    
    return (
        <footer id="footer" className="w-full bg-slate-50 dark:bg-slate-900/50 border-t border-border">
            <div className="container py-10 mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
                    <div className="col-span-full md:col-span-1">
                        <div className="flex flex-col justify-start items-start gap-6">
                            <Logo type="LOGO_ONLY" />
                            <div className="space-y-4">
                                <p className="text-lg font-semibold text-primary">AI-Powered Legal Solutions</p>
                                <p className="text-muted-foreground">Revolutionize your legal practice with cutting-edge AI technology.</p>
                            </div>
                            <Button variant="default" size="sm" className="group transition-all duration-300 hover:pr-6">
                                <Link href="/request-demo" className="flex items-center gap-2">
                                    Request a Demo
                                    <ArrowRight className="size-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Features</h3>
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
                            <Link href="/blog" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Blog
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
                            <Link href="/security" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Security
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                    <div className="md:max-w-md">
                        <p className="font-medium mb-2">Stay updated with our latest features</p>
                        <div className="flex gap-2">
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="max-w-xs" 
                            />
                            <Button 
                                size="sm" 
                                variant="default"
                                className="group"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Link
                            href="https://www.linkedin.com/company/counselai"
                            target="_blank"
                            className="hover:cursor-pointer transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin
                                size={20}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            />
                        </Link>
                        <Link
                            href="https://twitter.com/counselai"
                            target="_blank"
                            className="hover:cursor-pointer transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter
                                size={20}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            />
                        </Link>
                    </div>
                </div>

                <Separator className="my-6" />
                
                <section className="flex justify-center items-center">
                    <div>
                        <h4 className="text-sm text-muted-foreground">© 2025 CounselAI. All rights reserved.</h4>
                    </div>
                </section>
            </div>
        </footer>
    );
};