"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, FileText, Check, Languages } from "lucide-react";
import Link from "next/link";

export default function LegalTranslation() {
    const languageOptions = [
        { value: "english", label: "English" },
        { value: "spanish", label: "Spanish" },
        { value: "french", label: "French" },
        { value: "german", label: "German" },
        { value: "chinese", label: "Chinese" },
        { value: "arabic", label: "Arabic" },
        { value: "russian", label: "Russian" },
        { value: "japanese", label: "Japanese" },
        { value: "portuguese", label: "Portuguese" },
        { value: "italian", label: "Italian" }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8 md:mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Legal Translation</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                        Break language barriers in legal work with AI-powered translation that preserves legal context
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
                    <Badge variant="outline" className="px-2 sm:px-3 py-1 text-sm sm:text-base border-primary">
                        <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        50+ Languages
                    </Badge>
                    <Badge variant="outline" className="px-2 sm:px-3 py-1 text-sm sm:text-base border-primary">
                        <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Legal Terminology Preserved
                    </Badge>
                    <Badge variant="outline" className="px-2 sm:px-3 py-1 text-sm sm:text-base border-primary">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Jurisdiction-Aware
                    </Badge>
                </div>

                <div className="mb-12 md:mb-16">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center sm:text-left">Translation Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        <Card className="h-full">
                            <CardHeader className="pb-2 space-y-2">
                                <Languages className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                <CardTitle className="text-lg md:text-xl">Legal Terminology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-xs sm:text-sm">
                                    Our AI preserves specialized legal terminology and concepts across all languages, ensuring technical accuracy.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="h-full">
                            <CardHeader className="pb-2 space-y-2">
                                <Globe className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                <CardTitle className="text-lg md:text-xl">Jurisdiction Awareness</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-xs sm:text-sm">
                                    Translations account for differences in legal systems and jurisdictional terminology variations.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="h-full sm:col-span-2 md:col-span-1">
                            <CardHeader className="pb-2 space-y-2">
                                <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                <CardTitle className="text-lg md:text-xl">Format Preservation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-xs sm:text-sm">
                                    Document structure, formatting, and legal document conventions are maintained in translated documents.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="bg-primary/5 p-4 sm:p-6 md:p-8 rounded-lg">
                    <div className="grid gap-6 md:gap-8">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Supported Languages</h2>
                            <p className="text-muted-foreground text-sm mb-4 md:mb-6">
                                Our AI-powered legal translation system supports over 50 languages, including:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {languageOptions.slice(0, 8).map((lang) => (
                                    <div key={lang.value} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm">{lang.label}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm">Korean</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm">Dutch</span>
                                </div>
                                {/* <div className="col-span-2 text-right mt-2">
                                    <Button variant="link" className="p-0 text-sm">View all languages</Button>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="mt-6 md:mt-0">
                            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Customer Success</h2>
                            <blockquote className="italic border-l-2 md:border-l-4 pl-3 md:pl-4 border-primary mb-3 md:mb-4 text-sm md:text-base">
                            &quot;The translation was not only accurate but preserved all the legal nuances we needed for our international contract. Saved us thousands in specialized translation costs.&quot;
                            </blockquote>
                            <div className="mt-2">
                                <p className="font-medium text-sm md:text-base">Elena Rodriguez</p>
                                <p className="text-xs md:text-sm text-muted-foreground">International Legal Counsel, Global Enterprises Inc.</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="mt-12 md:mt-16 text-center px-2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Ready to Break Language Barriers?</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto">
                        Start translating your legal documents in over 50 languages with perfect accuracy.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                            Coming Soon
                        </Button>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto mt-2 sm:mt-0">
                                Schedule a Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}