"use client";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ROUTES_WITHOUT_FOOTER } from "@/constants";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const pathname = usePathname();
    const shouldHideHeaderFooter = ROUTES_WITHOUT_FOOTER.includes(pathname);

    if (shouldHideHeaderFooter) return null
    return (
        <footer id="footer" className="container py-12 sm:py-20 mx-auto p-2">
            <div className="p-0 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                    <div className="col-span-full xl:col-span-2">
                        <div className="flex flex-col justify-start items-start gap-4">
                            <Logo type="LOGO_ONLY" />
                            <p className="font-semibold"> AI-Powered Legal Excellence </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Company</h3>
                        <div>
                            <Link href="#about" className="opacity-60 hover:opacity-100">
                                About Us
                            </Link>
                        </div>

                        <div>
                            <Link href="#contact" className="opacity-60 hover:opacity-100">
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link href="#careers" className="opacity-60 hover:opacity-100">
                                Careers
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Features</h3>
                        <div>
                            <Link
                                href="#risk-analysis"
                                className="opacity-60 hover:opacity-100"
                            >
                                Risk Analysis
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#document-drafting"
                                className="opacity-60 hover:opacity-100"
                            >
                                Document Drafting
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#legal-research"
                                className="opacity-60 hover:opacity-100"
                            >
                                Legal Research
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="#translation"
                                className="opacity-60 hover:opacity-100"
                            >
                                Translation
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Support</h3>
                        <div>
                            <Link href="#faq" className="opacity-60 hover:opacity-100">
                                FAQ
                            </Link>
                        </div>

                        <div>
                            <Link href="#guides" className="opacity-60 hover:opacity-100">
                                User Guides
                            </Link>
                        </div>

                        <div>
                            <Link href="#feedback" className="opacity-60 hover:opacity-100">
                                Feedback
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Legal</h3>
                        <div>
                            <Link href="#terms" className="opacity-60 hover:opacity-100">
                                Terms of Service
                            </Link>
                        </div>

                        <div>
                            <Link href="#privacy" className="opacity-60 hover:opacity-100">
                                Privacy Policy
                            </Link>
                        </div>

                        <div>
                            <Link href="#security" className="opacity-60 hover:opacity-100">
                                Security
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-6" />
                <section className="flex flex-col justify-start md:flex-row md:justify-between items-start md:items-center w-full gap-4">
                    <h4 className="">&copy; 2024 Law Copilot. All rights reserved.</h4>
                    <div className="flex justify-center items-center gap-2">
                        <Link
                            href={"https://www.linkedin.com/company/eduboard-io/"}
                            target="_blank"
                            className="hover:cursor-pointer"
                        >
                            <Linkedin
                                size={30}
                                className="text-blue-500 hover:text-blue-600  "
                            />
                        </Link>
                    </div>
                </section>
            </div>
        </footer>
    );
};
