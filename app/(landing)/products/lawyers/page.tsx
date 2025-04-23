import { useState } from "react";
import { FileText, BookOpen, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LawyersPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tools for the Modern Lawyer</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Practice law more effectively with AI-powered assistance for drafting, research, and analysis.
        </p>
        <Button size="lg" className="px-8">Try Free for 14 Days</Button>
      </div>

      {/* Features Tabs */}
      <Tabs defaultValue="drafting" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="drafting">Document Drafting</TabsTrigger>
          <TabsTrigger value="research">Legal Research</TabsTrigger>
          <TabsTrigger value="analytics">Critical Analysis</TabsTrigger>
        </TabsList>
        
        {/* Drafting Tab */}
        <TabsContent value="drafting" className="mt-0">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Drafting Documents</h2>
              <p className="text-muted-foreground mb-6">
                Create flawless legal documents in minutes instead of hours. Our AI understands legal context and formatting requirements.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Draft contracts, briefs, motions, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Built-in citation formatting and checking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Customizable templates for firm consistency</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 bg-muted/50 rounded-xl p-6 border border-border/40">
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                <img src="/api/placeholder/600/360" alt="Document drafting interface" className="rounded-lg" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Research Tab */}
        <TabsContent value="research" className="mt-0">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Reliable Research</h2>
              <p className="text-muted-foreground mb-6">
                Access and analyze case law and legislation faster than ever with AI-powered legal research tools.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Search and summarize relevant case law</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Track latest legislation and regulatory changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Generate comprehensive research memos</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 bg-muted/50 rounded-xl p-6 border border-border/40">
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                <img src="/api/placeholder/600/360" alt="Legal research interface" className="rounded-lg" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-0">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Accurate Analytics</h2>
              <p className="text-muted-foreground mb-6">
                Build stronger cases with data-driven insights and critical reasoning assistance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Identify patterns in case outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Analyze strengths and weaknesses in arguments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Generate strategic advice based on precedent</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 bg-muted/50 rounded-xl p-6 border border-border/40">
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                <img src="/api/placeholder/600/360" alt="Legal analytics dashboard" className="rounded-lg" />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Testimonial Section */}
      <div className="mt-20 max-w-4xl mx-auto bg-muted/30 rounded-xl p-8 border border-border/30">
        <blockquote className="text-lg italic text-center">
          "This platform has completely transformed my practice. I'm drafting documents in half the time and my research is more thorough than ever before."
        </blockquote>
        <div className="mt-4 text-center">
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-sm text-muted-foreground">Corporate Attorney, Johnson & Associates</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your legal practice?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
}