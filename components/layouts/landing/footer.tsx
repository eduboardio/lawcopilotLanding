"use client";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Footer = () => {
    const pathname = usePathname();
    const shouldHideHeaderFooter = ROUTES_WITHOUT_FOOTER.includes(pathname);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", { email, message });
        setEmail("");
        setMessage("");
    };

    if (shouldHideHeaderFooter) return null;

    return (
        <footer id="footer" className="w-full bg-slate-50 dark:bg-slate-900/50 border-t border-border">
            <div className="container py-6 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <Logo type="LOGO_ONLY" />
                        <p className="text-sm text-muted-foreground mb-6">
                            Have questions about Law Copilot? Our experts are ready to assist you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-medium uppercase">EMAIL ADDRESS*</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-medium uppercase">MESSAGE*</label>
                                <Textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="min-h-24"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                {/* <Link href="/contact" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    Contact Us
                                </Link> */}
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
                </div>
            </div>

            <Separator className="" />

            <div className="text-center my-4">
                <p className="text-sm text-muted-foreground">© Law Copilot. All rights reserved.</p>
            </div>
        </footer>
    );
};