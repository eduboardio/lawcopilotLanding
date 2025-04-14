"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckCircle, Shield, Clock, Download, Copy, LayoutTemplate, Edit3, Cpu } from "lucide-react";

export default function DocumentDrafting() {
  const [documentType, setDocumentType] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [documentDetails, setDocumentDetails] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDocument, setGeneratedDocument] = useState("");

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

  const jurisdictions = [
    { value: "us-federal", label: "US Federal" },
    { value: "california", label: "California" },
    { value: "new-york", label: "New York" },
    { value: "texas", label: "Texas" },
    { value: "florida", label: "Florida" },
    { value: "illinois", label: "Illinois" },
    { value: "pennsylvania", label: "Pennsylvania" },
    { value: "ohio", label: "Ohio" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" }
  ];

  const handleGenerateDocument = () => {
    if (!documentType || !jurisdiction || !documentDetails.trim()) return;
    
    setIsGenerating(true);
    // Simulate document generation delay
    setTimeout(() => {
      setIsGenerating(false);
      // Sample generated document
      setGeneratedDocument(`SETTLEMENT AGREEMENT AND RELEASE

THIS SETTLEMENT AGREEMENT AND RELEASE (the "Agreement") is made and entered into as of the Effective Date, by and between the undersigned parties.

WHEREAS, a dispute has arisen between the Parties regarding [dispute subject matter]; and

WHEREAS, the Parties wish to resolve all claims and controversies between them;

NOW, THEREFORE, in consideration of the mutual covenants and promises contained herein, and other good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, the Parties agree as follows:

1. SETTLEMENT PAYMENT
   1.1 [Payment details based on user input]

2. RELEASE OF CLAIMS
   2.1 Upon execution of this Agreement and receipt of the Settlement Payment, each Party hereby releases and forever discharges the other Party from any and all claims...
   
[Document continues with jurisdiction-specific language and terms...]`);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Document Drafting</h1>
          <p className="text-xl text-muted-foreground">
            Draft perfect legal documents instantly with AI that adapts to your jurisdiction and style
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <Badge variant="outline" className="px-3 py-1 text-base border-primary">
            <Clock className="h-4 w-4 mr-2" />
            Minutes, Not Hours
          </Badge>
          <Badge variant="outline" className="px-3 py-1 text-base border-primary">
            <Shield className="h-4 w-4 mr-2" />
            Jurisdiction Compliant
          </Badge>
          <Badge variant="outline" className="px-3 py-1 text-base border-primary">
            <CheckCircle className="h-4 w-4 mr-2" />
            Court-Ready
          </Badge>
        </div>

        <Tabs defaultValue="generate" className="mb-12">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="generate">Generate Document</TabsTrigger>
            <TabsTrigger value="template">Use Template</TabsTrigger>
            <TabsTrigger value="revise">Revise Existing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle>Generate Legal Document</CardTitle>
                <CardDescription>Create a professional legal document tailored to your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Document Type</label>
                      <Select value={documentType} onValueChange={setDocumentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          {documentTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Jurisdiction</label>
                      <Select value={jurisdiction} onValueChange={setJurisdiction}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select jurisdiction" />
                        </SelectTrigger>
                        <SelectContent>
                          {jurisdictions.map((j) => (
                            <SelectItem key={j.value} value={j.value}>
                              {j.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Document Details</label>
                    <Textarea 
                      placeholder="Describe the details of your document. Include parties involved, key terms, important dates, and any specific clauses you want included..." 
                      className="min-h-32"
                      value={documentDetails}
                      onChange={(e) => setDocumentDetails(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 bg-primary/5 p-3 rounded-md">
                    <Cpu className="h-5 w-5 text-primary" />
                    <p className="text-sm">Our AI will generate a document that complies with {jurisdiction ? jurisdictions.find(j => j.value === jurisdiction)?.label : "your jurisdiction's"} legal requirements.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleGenerateDocument}
                  disabled={isGenerating || !documentType || !jurisdiction || !documentDetails.trim()}
                >
                  {isGenerating ? "Generating..." : "Generate Document"}
                </Button>
              </CardFooter>
            </Card>
            
            {generatedDocument && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Generated Document</CardTitle>
                  <CardDescription>Review your AI-generated legal document</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                    <pre className="whitespace-pre-wrap text-sm">{generatedDocument}</pre>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Edit3 className="mr-2 h-4 w-4" />
                    Edit Document
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Text
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="template">
            <Card>
              <CardHeader>
                <CardTitle>Document Templates</CardTitle>
                <CardDescription>Choose from our library of professional legal templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documentTypes.map((type) => (
                    <Button 
                      key={type.value} 
                      variant="outline" 
                      className="h-auto p-4 justify-start"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-3 text-primary" />
                        <div className="text-left">
                          <p className="font-medium">{type.label}</p>
                          <p className="text-sm text-muted-foreground">Professional template</p>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revise">
            <Card>
              <CardHeader>
                <CardTitle>Revise Existing Document</CardTitle>
                <CardDescription>Upload or paste your document for AI-powered revisions and improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-6 text-center mb-6">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FileText className="h-10 w-10 text-muted-foreground" />
                    <h3 className="font-medium">Upload Your Document</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      PDF, DOCX, or TXT up to 100MB
                    </p>
                    <Button>Select File</Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Or paste your document text:</p>
                  <Textarea className="min-h-32" placeholder="Paste your document content here for revision..." />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Revision Type</label>
                    <Select defaultValue="improve">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="improve">Improve Language</SelectItem>
                        <SelectItem value="compliance">Update for Compliance</SelectItem>
                        <SelectItem value="simplify">Simplify & Clarify</SelectItem>
                        <SelectItem value="strengthen">Strengthen Provisions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Jurisdiction</label>
                    <Select defaultValue="us-federal">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {jurisdictions.map((j) => (
                          <SelectItem key={j.value} value={j.value}>
                            {j.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Revise Document
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Document Drafting Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Jurisdiction Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Every document is tailored to meet specific jurisdictional requirements and legal standards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <LayoutTemplate className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Smart Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Professional templates with intelligent adaptation based on your specific case details.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Edit3 className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Seamless Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Easily customize and refine AI-generated documents with our integrated editing tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Supported Document Types</h2>
              <p className="text-muted-foreground mb-6">
                Our AI can draft a wide variety of legal documents, including:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {documentTypes.map((type) => (
                  <div key={type.value} className="flex items-center gap-2">
                    <Badge className="h-4 w-4 text-primary">✓</Badge>
                    <span>{type.label}</span>
                  </div>
                ))}
                <div className="col-span-2 text-right">
                  <Button variant="link" className="p-0">View all document types</Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Customer Success</h2>
              <blockquote className="italic border-l-4 pl-4 border-primary mb-4">
              &quot;Law Copilot helped our firm draft complex contracts in minutes instead of hours. The quality is on par with what our senior associates produce, and the jurisdiction-specific compliance is spot on.&quot;
              </blockquote>
              <div className="mt-2">
                <p className="font-medium">Sarah Williams</p>
                <p className="text-sm text-muted-foreground">Legal Operations Director, Williams & Partners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-2">Ready to Transform Your Document Drafting?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Create perfect legal documents in minutes, not hours.
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