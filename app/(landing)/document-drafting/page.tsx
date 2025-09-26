"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, LayoutTemplate, Edit3 } from "lucide-react";
import Link from "next/link";

export default function DocumentDrafting() {
  const documentTypes = [
    { value: "contract", label: "Contract" },
    { value: "motion", label: "Motion" },
    { value: "brief", label: "Legal Brief" },
    { value: "complaint", label: "Complaint" },
    { value: "cease-desist", label: "Cease and Desist" },
    { value: "agreement", label: "Settlement Agreement" },
    { value: "nda", label: "Non-Disclosure Agreement" },
    { value: "incorporation", label: "Articles of Incorporation" },
    { value: "will", label: "Last Will & Testament" },
    { value: "power-attorney", label: "Power of Attorney" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Document Drafting</h1>
          <p className="text-lg md:text-xl text-muted-foreground px-2">
            Draft perfect legal documents instantly with AI that adapts to your jurisdiction and style
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          <Badge variant="outline" className="px-2 md:px-3 py-1 text-sm md:text-base border-primary">
            <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Minutes, Not Hours
          </Badge>
          <Badge variant="outline" className="px-2 md:px-3 py-1 text-sm md:text-base border-primary">
            <Shield className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Jurisdiction Compliant
          </Badge>
          <Badge variant="outline" className="px-2 md:px-3 py-1 text-sm md:text-base border-primary">
            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Court-Ready
          </Badge>
        </div>

        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">Document Drafting Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Jurisdiction Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Every document is tailored to meet specific jurisdictional requirements and legal standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <LayoutTemplate className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Smart Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Professional templates with intelligent adaptation based on your specific case details.
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2 md:col-span-1">
              <CardHeader className="pb-2">
                <Edit3 className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Seamless Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Easily customize and refine AI-generated documents with our integrated editing tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 p-4 md:p-8 rounded-lg">
          <div className="grid gap-6 md:gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Supported Document Types</h2>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                Our AI can draft a wide variety of legal documents, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {documentTypes.map((type) => (
                  <div key={type.value} className="flex items-center gap-2">
                    <Badge className="h-4 w-4 text-primary flex-shrink-0">✓</Badge>
                    <span className="text-sm md:text-base">{type.label}</span>
                  </div>
                ))}
                {/* <div className="col-span-1 sm:col-span-2 text-right mt-2">
                  <Button variant="link" className="p-0 text-sm md:text-base">View all document types</Button>
                </div> */}
              </div>
            </div>
            {/* <div className="mt-6 md:mt-0">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Customer Success</h2>
              <blockquote className="italic border-l-4 pl-3 md:pl-4 border-primary mb-3 md:mb-4 text-sm md:text-base">
              &quot;Law Copilot helped our firm draft complex contracts in minutes instead of hours. The quality is on par with what our senior associates produce, and the jurisdiction-specific compliance is spot on.&quot;
              </blockquote>
              <div className="mt-2">
                <p className="font-medium text-sm md:text-base">Sarah Williams</p>
                <p className="text-xs md:text-sm text-muted-foreground">Legal Operations Director, Williams & Partners</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Document Drafting?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 px-2">
            Create perfect legal documents in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Request a demo
              </Button></Link>
            {/* <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto mt-2 sm:mt-0">
                Schedule a Demo
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}