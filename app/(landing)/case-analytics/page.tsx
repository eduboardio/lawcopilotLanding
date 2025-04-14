"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Upload, BarChart2, FileText, AlertTriangle, TrendingUp, Scale, Clock } from "lucide-react";

export default function CaseAnalytics() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleUpload = () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Case Analytics</h1>
          <p className="text-xl text-muted-foreground">
            Predict case outcomes with AI precision and get data-driven insights
          </p>
        </div>

        <Card className="mb-10">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Upload Your Case Documents</h2>
                <p className="text-muted-foreground mb-6">
                  Our AI will analyze your case files and provide comprehensive insights, risk assessment, and outcome predictions.
                </p>
                <div className="flex gap-4">
                  <Button onClick={handleUpload} disabled={isAnalyzing}>
                    <Upload className="mr-2 h-4 w-4" />
                    {isAnalyzing ? "Analyzing..." : "Upload Files"}
                  </Button>
                  <Button variant="outline">View Demo</Button>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg flex flex-col justify-center items-center">
                {isAnalyzing ? (
                  <div className="w-full text-center">
                    <h3 className="font-medium mb-3">Analyzing your case...</h3>
                    <Progress value={65} className="mb-2" />
                    <p className="text-sm text-muted-foreground">Discovering precedents and calculating probabilities</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <BarChart2 className="h-16 w-16 text-primary mb-4" />
                    <h3 className="font-medium">Upload case documents to see AI-powered analytics</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Supports PDF, DOCX, and plain text files
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Analytics Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Scale className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Success Probability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Get data-driven estimates of case success probability based on precedent analysis and jurisdiction-specific factors.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <AlertTriangle className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Identify potential challenges, weaknesses in arguments, and counterarguments you might face.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Strategic Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Receive AI-generated recommendations to strengthen your case and optimize your legal strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="demo">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="demo">Demo Analysis</TabsTrigger>
            <TabsTrigger value="testimonials">Client Success</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demo">
            <Card>
              <CardHeader>
                <CardTitle>Sample Case Analysis: Johnson v. Tech Corp</CardTitle>
                <CardDescription>Intellectual Property Dispute</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Success Probability</h3>
                  <div className="flex items-center">
                    <div className="w-full mr-4">
                      <Progress value={75} className="h-4" />
                    </div>
                    <span className="font-bold text-lg">75%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Based on 87 similar precedent cases in your jurisdiction
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium flex items-center text-green-800">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Strengths
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-green-700">
                      <li>Strong documentary evidence of prior use</li>
                      <li>Clear timeline establishing precedence</li>
                      <li>Multiple expert witnesses available</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h4 className="font-medium flex items-center text-red-800">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Risks
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-red-700">
                      <li>Potential procedural challenge under Section 103</li>
                      <li>Opposing party has prevailed in similar cases (Chen v. DataSystems)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium flex items-center text-blue-800">
                      <FileText className="h-4 w-4 mr-2" />
                      Recommended Citations
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-blue-700">
                      <li>Smith v. Johnson (2023) - Favorable precedent on digital IP</li>
                      <li>MeTech v. Innovators Inc. (2022) - Similar facts, favorable outcome</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Clock className="mr-2 h-4 w-4" />
                  Try With Your Case Now
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="testimonials">
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="italic border-l-4 pl-4 border-primary">
                    "Case Analytics helped us identify a critical precedent we had overlooked. The risk assessment was spot-on and helped us prepare for opposing arguments. We won the case with a 45% increase in efficiency."
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium">Sarah J. Williams</p>
                    <p className="text-sm text-muted-foreground">Senior Partner, WLL Legal</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="italic border-l-4 pl-4 border-primary">
                    "Our firm has seen a 70% reduction in research time and a 30% increase in case success rate since implementing Law Copilot's Case Analytics. The predictive insights have been remarkably accurate."
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium">Mark R. Thompson</p>
                    <p className="text-sm text-muted-foreground">Managing Partner, Thompson & Associates</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Case Strategy?</h2>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}