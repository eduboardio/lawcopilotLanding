"use client";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
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
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-10">
                    <div className="col-span-full xl:col-span-2">
                        <div className="flex flex-col justify-start items-start gap-6">
                            <Logo type="LOGO_ONLY" />
                            <div className="space-y-4">
                                <p className="text-lg font-semibold text-primary"> AI-Powered Legal Excellence </p>
                                <p className="text-muted-foreground pr-8">Transforming legal practice with cutting-edge AI technology for research, document drafting, and case analysis.</p>
                            </div>
                            
                            {/* Contact Our Team Section */}
                            <div className="w-full mt-2">
                                <p className="font-medium text-lg mb-3">Contact Our Team</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <Mail size={16} className="text-primary" />
                                        <a href="mailto:contact@lawcopilot.ai" className="hover:text-primary transition-colors">
                                            contact@lawcopilot.ai
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} className="text-primary" />
                                        <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                                            +1 (555) 123-4567
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" />
                                        <span>123 Legal Tech Avenue, San Francisco, CA 94107</span>
                                    </div>
                                    <Button variant="outline" size="sm" className="mt-2 w-fit">
                                        <Link href="/contact">Schedule a Consultation</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Company</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="#about" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <Link href="#contact" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Contact Us
                            </Link>
                            <Link href="#careers" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Careers
                            </Link>
                            <Link href="#press" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Press
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Features</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="#risk-analysis" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Risk Analysis
                            </Link>
                            <Link href="#document-drafting" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Document Drafting
                            </Link>
                            <Link href="#legal-research" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Legal Research
                            </Link>
                            <Link href="#translation" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Translation
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Support</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="#faq" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                FAQ
                            </Link>
                            <Link href="#guides" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                User Guides
                            </Link>
                            <Link href="#feedback" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Feedback
                            </Link>
                            <Link href="#contact-support" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Legal</h3>
                        <div className="flex flex-col gap-2.5">
                            <Link href="#terms" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#privacy" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#security" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Security
                            </Link>
                            <Link href="#compliance" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                Compliance
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-6" />
                
                {/* Newsletter Signup moved to bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                    <div className="md:max-w-md">
                        <p className="font-medium mb-2">Subscribe to our newsletter</p>
                        <div className="flex gap-2">
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="max-w-xs" 
                            />
                            <Button size="sm" variant="default">Subscribe</Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Link
                            href={"https://www.linkedin.com/company/lawcopilot/"}
                            target="_blank"
                            className="hover:cursor-pointer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin
                                size={20}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            />
                        </Link>
                        <Link
                            href={"https://twitter.com/lawcopilot"}
                            target="_blank"
                            className="hover:cursor-pointer"
                            aria-label="Twitter"
                        >
                            <Twitter
                                size={20}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            />
                        </Link>
                        <Link
                            href={"https://facebook.com/lawcopilot"}
                            target="_blank"
                            className="hover:cursor-pointer"
                            aria-label="Facebook"
                        >
                            <Facebook
                                size={20}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            />
                        </Link>
                        <Link
                            href={"https://instagram.com/lawcopilot"}
                            target="_blank"
                            className="hover:cursor-pointer"
                            aria-label="Instagram"
                        >
                            <Instagram
                                size={20}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            />
                        </Link>
                    </div>
                </div>

                <Separator className="my-4" />
                
                <section className="flex flex-col md:flex-row md:justify-between center items-center md:items-center w-full gap-6">
                    <h4 className="text-sm text-muted-foreground">&copy; 2024 Law Copilot. All rights reserved.</h4>
                </section>
            </div>
        </footer>
    );
};