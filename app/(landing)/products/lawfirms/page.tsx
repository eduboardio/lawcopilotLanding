import { useState } from "react";
import { Clock, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LawFirmsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Law Firm</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Transform your practice with AI-powered tools designed specifically for the needs of modern law firms.
        </p>
        <Button size="lg" className="px-8">Schedule a Demo</Button>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Efficiency Card */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Complete tasks in a fraction of the time</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Save valuable billable hours on routine work</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Automate workflows for higher productivity</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Reduce time spent on administrative tasks by up to 40%</p>
          </CardFooter>
        </Card>

        {/* Error-free Card */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Error-free</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Built-in guardrails to prevent common mistakes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Reduce time spent cross-checking documents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Consistent quality across all firm outputs</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Reliable systems that minimize human error and maximize confidence</p>
          </CardFooter>
        </Card>

        {/* Encrypted Card */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Encrypted</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>End-to-end encryption for complete privacy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Your firm maintains full data control</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Compliant with leading security standards</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Bank-level security ensuring client confidentiality at all times</p>
          </CardFooter>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your practice?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Join leading law firms already benefiting from our innovative legal technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Book a Demo</Button>
        </div>
      </div>
    </div>
  );
}