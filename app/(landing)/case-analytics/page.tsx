"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart2, AlertTriangle, TrendingUp, Scale } from "lucide-react";
import Link from "next/link";

export default function CaseAnalytics() {
  const [isAnalyzing] = useState(false);

  // Uncomment when upload feature is ready
  // const handleUpload = () => {
  //   setIsAnalyzing(true);
  //   // Simulate analysis delay
  //   setTimeout(() => setIsAnalyzing(false), 2000);
  // };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Case Analytics</h1>
          <p className="text-base sm:text-xl text-muted-foreground px-2">
            Predict case outcomes with AI precision and get data-driven insights
          </p>
        </div>

        <Card className="mb-6 sm:mb-10">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Upload Your Case Documents</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Our AI will analyze your case files and provide comprehensive insights, risk assessment, and outcome predictions.
                </p>
                {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button onClick={handleUpload} disabled={isAnalyzing} className="w-full sm:w-auto">
                    <Upload className="mr-2 h-4 w-4" />
                    {isAnalyzing ? "Analyzing..." : "Upload Files"}
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">View Demo</Button>
                </div> */}
              </div>
              <div className="bg-slate-50 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center mt-4 sm:mt-0">
                {isAnalyzing ? (
                  <div className="w-full text-center">
                    <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Analyzing your case...</h3>
                    <Progress value={65} className="mb-2" />
                    <p className="text-xs sm:text-sm text-muted-foreground">Discovering precedents and calculating probabilities</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <BarChart2 className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
                    <h3 className="font-medium text-sm sm:text-base">Upload case documents to see AI-powered analytics</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                      Supports PDF, DOCX, and plain text files
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Key Analytics Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-2" />
                <CardTitle className="text-lg sm:text-xl">Success Probability</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Get data-driven estimates of case success probability based on precedent analysis and jurisdiction-specific factors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-2" />
                <CardTitle className="text-lg sm:text-xl">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Identify potential challenges, weaknesses in arguments, and counterarguments you might face.
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2 md:col-span-1">
              <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-2" />
                <CardTitle className="text-lg sm:text-xl">Strategic Insights</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Receive AI-generated recommendations to strengthen your case and optimize your legal strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <Tabs defaultValue="demo" className="mb-6 sm:mb-0">
          <TabsList className="grid grid-cols-2 mb-4 sm:mb-8 w-full">
            <TabsTrigger value="demo" className="text-sm sm:text-base">Demo Analysis</TabsTrigger>
            <TabsTrigger value="testimonials" className="text-sm sm:text-base">Client Success</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demo">
            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl">Sample Case Analysis: Johnson v. Tech Corp</CardTitle>
                <CardDescription className="text-sm">Intellectual Property Dispute</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Success Probability</h3>
                  <div className="flex items-center">
                    <div className="w-full mr-4">
                      <Progress value={75} className="h-3 sm:h-4" />
                    </div>
                    <span className="font-bold text-base sm:text-lg">75%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                    Based on 87 similar precedent cases in your jurisdiction
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium flex items-center text-green-800 text-sm sm:text-base">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Strengths
                    </h4>
                    <ul className="mt-1 sm:mt-2 space-y-1 text-xs sm:text-sm text-green-700">
                      <li>Strong documentary evidence of prior use</li>
                      <li>Clear timeline establishing precedence</li>
                      <li>Multiple expert witnesses available</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-100">
                    <h4 className="font-medium flex items-center text-red-800 text-sm sm:text-base">
                      <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Risks
                    </h4>
                    <ul className="mt-1 sm:mt-2 space-y-1 text-xs sm:text-sm text-red-700">
                      <li>Potential procedural challenge under Section 103</li>
                      <li>Opposing party has prevailed in similar cases (Chen v. DataSystems)</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium flex items-center text-blue-800 text-sm sm:text-base">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Recommended Citations
                    </h4>
                    <ul className="mt-1 sm:mt-2 space-y-1 text-xs sm:text-sm text-blue-700">
                      <li>Smith v. Johnson (2023) - Favorable precedent on digital IP</li>
                      <li>MeTech v. Innovators Inc. (2022) - Similar facts, favorable outcome</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-4 sm:px-6 pt-2 pb-4 sm:pb-6">
                <Button className="w-full py-4 sm:py-5">
                  <Clock className="mr-2 h-4 w-4" />
                  Try With Your Case Now
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="testimonials">
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <blockquote className="italic border-l-2 sm:border-l-4 pl-3 sm:pl-4 border-primary text-sm sm:text-base">
                  &quot;Case Analytics helped us identify a critical precedent we had overlooked. The risk assessment was spot-on and helped us prepare for opposing arguments. We won the case with a 45% increase in efficiency.&quot;
                  </blockquote>
                  <div className="mt-3 sm:mt-4">
                    <p className="font-medium text-sm sm:text-base">Sarah J. Williams</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Senior Partner, WLL Legal</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <blockquote className="italic border-l-2 sm:border-l-4 pl-3 sm:pl-4 border-primary text-sm sm:text-base">
                  &quot;Our firm has seen a 70% reduction in research time and a 30% increase in case success rate since implementing Law Copilot&apos;s Case Analytics. The predictive insights have been remarkably accurate.&quot;
                  </blockquote>
                  <div className="mt-3 sm:mt-4">
                    <p className="font-medium text-sm sm:text-base">Mark R. Thompson</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Managing Partner, Thompson & Associates</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs> */}

        <div className="mt-10 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Your Case Strategy?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
            <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto py-4 sm:py-5">
              Request a demo
            </Button>
            </Link>
            {/* <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto py-4 sm:py-5">
                Schedule a Demo
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
