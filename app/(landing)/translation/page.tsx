"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, FileText, Check, ArrowRightLeft, Upload, Languages } from "lucide-react";

export default function LegalTranslation() {
    const [sourceText, setSourceText] = useState("");
    const [sourceLanguage, setSourceLanguage] = useState("english");
    const [targetLanguage, setTargetLanguage] = useState("spanish");
    const [isTranslating, setIsTranslating] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleTranslate = () => {
        if (!sourceText.trim()) return;

        setIsTranslating(true);
        // Simulate translation delay
        setTimeout(() => {
            setIsTranslating(false);
            setShowResult(true);
        }, 1500);
    };

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

    const translationResult: Record<string, string> = {
        english: "The parties hereby agree that this contract shall be governed by the laws of the State of New York. Any disputes arising under this agreement shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
        spanish: "Las partes acuerdan por la presente que este contrato se regirá por las leyes del Estado de Nueva York. Cualquier disputa que surja en virtud de este acuerdo se resolverá mediante arbitraje vinculante de acuerdo con las reglas de la Asociación Americana de Arbitraje."
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4">Legal Translation</h1>
                    <p className="text-xl text-muted-foreground">
                        Break language barriers in legal work with AI-powered translation that preserves legal context
                    </p>
                </div>

                <div className="flex items-center justify-center gap-3 mb-10">
                    <Badge variant="outline" className="px-3 py-1 text-base border-primary">
                        <Globe className="h-4 w-4 mr-2" />
                        50+ Languages
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 text-base border-primary">
                        <FileText className="h-4 w-4 mr-2" />
                        Legal Terminology Preserved
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 text-base border-primary">
                        <Check className="h-4 w-4 mr-2" />
                        Jurisdiction-Aware
                    </Badge>
                </div>

                <Tabs defaultValue="text" className="mb-12">
                    <TabsList className="grid grid-cols-2 mb-8">
                        <TabsTrigger value="text">Text Translation</TabsTrigger>
                        <TabsTrigger value="document">Document Translation</TabsTrigger>
                    </TabsList>

                    <TabsContent value="text">
                        <Card>
                            <CardHeader>
                                <CardTitle>Translate Legal Text</CardTitle>
                                <CardDescription>Enter your legal text and select languages</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm font-medium">Source Language</label>
                                            <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {languageOptions.map((lang) => (
                                                        <SelectItem key={lang.value} value={lang.value}>
                                                            {lang.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Textarea
                                            placeholder="Enter legal text to translate..."
                                            className="min-h-32"
                                            value={sourceText}
                                            onChange={(e) => setSourceText(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <Button
                                            variant="outline"
                                            className="rounded-full"
                                            onClick={() => {
                                                const temp = sourceLanguage;
                                                setSourceLanguage(targetLanguage);
                                                setTargetLanguage(temp);
                                            }}
                                        >
                                            <ArrowRightLeft className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm font-medium">Target Language</label>
                                            <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {languageOptions.map((lang) => (
                                                        <SelectItem key={lang.value} value={lang.value}>
                                                            {lang.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Textarea
                                            placeholder="Translation will appear here..."
                                            className="min-h-32"
                                            value={showResult ? translationResult[targetLanguage] : ""}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    onClick={handleTranslate}
                                    disabled={isTranslating || !sourceText.trim()}
                                >
                                    {isTranslating ? "Translating..." : "Translate"}
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="document">
                        <Card>
                            <CardHeader>
                                <CardTitle>Translate Legal Documents</CardTitle>
                                <CardDescription>Upload documents for AI-powered legal translation</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <Upload className="h-10 w-10 text-muted-foreground" />
                                        <h3 className="font-medium">Upload Your Document</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            PDF, DOCX, or TXT up to 100MB
                                        </p>
                                        <Button>Select File</Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div>
                                        <label className="text-sm font-medium">Source Language</label>
                                        <Select defaultValue="auto">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="auto">Auto-detect</SelectItem>
                                                {languageOptions.map((lang) => (
                                                    <SelectItem key={lang.value} value={lang.value}>
                                                        {lang.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Target Language</label>
                                        <Select defaultValue="english">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {languageOptions.map((lang) => (
                                                    <SelectItem key={lang.value} value={lang.value}>
                                                        {lang.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" disabled>
                                    Upload & Translate
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Translation Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader className="pb-2">
                                <Languages className="h-6 w-6 text-primary mb-2" />
                                <CardTitle>Legal Terminology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Our AI preserves specialized legal terminology and concepts across all languages, ensuring technical accuracy.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <Globe className="h-6 w-6 text-primary mb-2" />
                                <CardTitle>Jurisdiction Awareness</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Translations account for differences in legal systems and jurisdictional terminology variations.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <FileText className="h-6 w-6 text-primary mb-2" />
                                <CardTitle>Format Preservation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Document structure, formatting, and legal document conventions are maintained in translated documents.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Supported Languages</h2>
                            <p className="text-muted-foreground mb-6">
                                Our AI-powered legal translation system supports over 50 languages, including:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {languageOptions.map((lang) => (
                                    <div key={lang.value} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span>{lang.label}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Korean</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Dutch</span>
                                </div>
                                <div className="col-span-2 text-right">
                                    <Button variant="link" className="p-0">View all languages</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Customer Success</h2>
                            <blockquote className="italic border-l-4 pl-4 border-primary mb-4">
                                "The translation was not only accurate but preserved all the legal nuances we needed for our international contract. Saved us thousands in specialized translation costs."
                            </blockquote>
                            <div className="mt-2">
                                <p className="font-medium">Elena Rodriguez</p>
                                <p className="text-sm text-muted-foreground">International Legal Counsel, Global Enterprises Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-2">Ready to Break Language Barriers?</h2>
                    <p className="text-xl text-muted-foreground mb-6">
                        Start translating your legal documents in over 50 languages with perfect accuracy.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" size="lg">
                            See Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}