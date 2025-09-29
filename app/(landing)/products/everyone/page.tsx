"use client";

import { HelpCircle, FolderArchive, ArrowRight, PanelRight, Search, Scale, BookOpen, FileText, Server, Shield, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LitigantsPage() {
  return (
    <div className="container mx-auto py-8 md:py-16 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Legal Solutions for Everyone</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 md:mb-8 px-2">
          Navigate the legal system with confidence using our powerful yet accessible tools.
        </p>
        <Button size="lg" className="px-6 md:px-8 w-full sm:w-auto">Explore Solutions</Button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {/* Knowledge Assistant - Main Feature */}
        <Card className="col-span-1 md:col-span-full lg:col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-secondary/5 border border-border/40 overflow-hidden hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3 md:mb-4">
                  <HelpCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-3 md:mb-4">Knowledge Assistant</CardTitle>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Your personal legal guide powered by AI. Get answers to complex legal questions in plain language.
                </p>
                <ul className="space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                  <li className="flex items-center gap-2">
                    <Search className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                    <span>Research legal concepts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Scale className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                    <span>Understand your rights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                    <span>Ask questions in plain English</span>
                  </li>
                </ul>
              </div>
              {/* <Button className="w-fit group mt-4 text-sm md:text-base">
                Explore Assistant <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>
            {/* <div className="hidden md:flex bg-card/50 items-center justify-center p-6">
              <div className="rounded-lg overflow-hidden aspect-square w-full max-w-xs">
                <img src="/api/placeholder/400/400" alt="Knowledge Assistant interface" className="w-full h-full object-cover" />
              </div>
            </div> */}
          </div>
        </Card>

        {/* Document Storage */}
        <Card className="row-span-1 bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader>
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <FolderArchive className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <CardTitle className="text-lg md:text-xl">Document Storage</CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <p className="text-muted-foreground text-xs md:text-sm">
              Securely store all your legal documents in one place with easy search and retrieval.
            </p>
          </CardContent>
          {/* <CardFooter className="mt-auto pt-3 md:pt-4">
            <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:underline text-sm md:text-base">
              Learn more <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </CardFooter> */}
        </Card>

        {/* Document Management */}
        <Card className="row-span-1 bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader>
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <PanelRight className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <CardTitle className="text-lg md:text-xl">Document Management</CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <p className="text-muted-foreground text-xs md:text-sm">
              Organize and manage your legal documents with powerful categorization and tagging.
            </p>
          </CardContent>
          {/* <CardFooter className="mt-auto pt-3 md:pt-4">
            <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:underline text-sm md:text-base">
              Learn more <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </CardFooter> */}
        </Card>

        {/* Legal Vault - Feature Section */}
        <Card className="col-span-1 md:col-span-full bg-muted/30 border border-border/40 overflow-hidden hover:shadow-md transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
            <div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3 md:mb-4">
                <Server className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <CardTitle className="text-xl md:text-2xl mb-3 md:mb-4">Legal Vault</CardTitle>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Your comprehensive document storage and management solution with bank-level security.
              </p>
              {/* <Button className="text-sm md:text-base w-full sm:w-auto">Explore Legal Vault</Button> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="rounded-lg bg-card/70 p-3 md:p-4 border border-border/20">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1 md:mb-2" />
                <h3 className="font-medium mb-1 text-sm md:text-base">Secure Storage</h3>
                <p className="text-xs text-muted-foreground">End-to-end encryption for total privacy</p>
              </div>
              <div className="rounded-lg bg-card/70 p-3 md:p-4 border border-border/20">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1 md:mb-2" />
                <h3 className="font-medium mb-1 text-sm md:text-base">Smart Search</h3>
                <p className="text-xs text-muted-foreground">Find documents instantly with AI search</p>
              </div>
              <div className="rounded-lg bg-card/70 p-3 md:p-4 border border-border/20">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1 md:mb-2" />
                <h3 className="font-medium mb-1 text-sm md:text-base">Auto-Organize</h3>
                <p className="text-xs text-muted-foreground">AI categorization of documents</p>
              </div>
              <div className="rounded-lg bg-card/70 p-3 md:p-4 border border-border/20">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1 md:mb-2" />
                <h3 className="font-medium mb-1 text-sm md:text-base">Version History</h3>
                <p className="text-xs text-muted-foreground">Track changes and restore previous versions</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-12 md:mt-20 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 md:p-12 max-w-5xl mx-auto border border-border/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Start your legal journey today</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-2">
          Join thousands of users who are taking control of their legal needs with our powerful tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Link href="/contact">          
          <Button size="lg" className="w-full sm:w-auto">Request a demo</Button>
          </Link>
          {/* <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto mt-2 sm:mt-0">Schedule a Demo</Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}