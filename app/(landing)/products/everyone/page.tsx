import { HelpCircle, FolderArchive, ArrowRight, PanelRight, Search, Scale, BookOpen, FileText, Server, Shield, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LitigantsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Solutions for Everyone</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Navigate the legal system with confidence using our powerful yet accessible tools.
        </p>
        <Button size="lg" className="px-8">Explore Solutions</Button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Knowledge Assistant - Main Feature */}
        <Card className="col-span-full lg:col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-secondary/5 border border-border/40 overflow-hidden hover:shadow-md transition-all">
          <div className="grid md:grid-cols-2 h-full">
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">Knowledge Assistant</CardTitle>
                <p className="text-muted-foreground mb-6">
                  Your personal legal guide powered by AI. Get answers to complex legal questions in plain language.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-primary" />
                    <span>Research legal concepts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-primary" />
                    <span>Understand your rights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>Ask questions in plain English</span>
                  </li>
                </ul>
              </div>
              <Button className="w-fit group">
                Explore Assistant <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {/* <div className="bg-card/50 flex items-center justify-center p-6">
              <div className="rounded-lg overflow-hidden aspect-square w-full max-w-xs">
                <img src="/api/placeholder/400/400" alt="Knowledge Assistant interface" className="w-full h-full object-cover" />
              </div>
            </div> */}
          </div>
        </Card>

        {/* Document Storage */}
        <Card className="row-span-1 bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <FolderArchive className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Document Storage</CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <p className="text-muted-foreground text-sm">
              Securely store all your legal documents in one place with easy search and retrieval.
            </p>
          </CardContent>
          <CardFooter className="mt-auto pt-4">
            <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:underline">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Document Management */}
        <Card className="row-span-1 bg-card/50 backdrop-blur-sm border border-border/40 hover:shadow-md transition-all">
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <PanelRight className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Document Management</CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <p className="text-muted-foreground text-sm">
              Organize and manage your legal documents with powerful categorization and tagging.
            </p>
          </CardContent>
          <CardFooter className="mt-auto pt-4">
            <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:underline">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Legal Vault - Feature Section */}
        <Card className="col-span-full bg-muted/30 border border-border/40 overflow-hidden hover:shadow-md transition-all">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-4">Legal Vault</CardTitle>
              <p className="text-muted-foreground mb-6">
                Your comprehensive document storage and management solution with bank-level security.
              </p>
              <Button>Explore Legal Vault</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-card/70 p-4 border border-border/20">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-medium mb-1">Secure Storage</h3>
                <p className="text-xs text-muted-foreground">End-to-end encryption for total privacy</p>
              </div>
              <div className="rounded-lg bg-card/70 p-4 border border-border/20">
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-medium mb-1">Smart Search</h3>
                <p className="text-xs text-muted-foreground">Find documents instantly with AI search</p>
              </div>
              <div className="rounded-lg bg-card/70 p-4 border border-border/20">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-medium mb-1">Auto-Organize</h3>
                <p className="text-xs text-muted-foreground">AI categorization of documents</p>
              </div>
              <div className="rounded-lg bg-card/70 p-4 border border-border/20">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-medium mb-1">Version History</h3>
                <p className="text-xs text-muted-foreground">Track changes and restore previous versions</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Comparison Table */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Choose the Right Plan</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left">Features</th>
                <th className="py-4 px-4 text-center">Basic</th>
                <th className="py-4 px-4 text-center">Pro</th>
                <th className="py-4 px-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/60">
                <td className="py-3 px-4">Knowledge Assistant</td>
                <td className="py-3 px-4 text-center">✓</td>
                <td className="py-3 px-4 text-center">✓</td>
                <td className="py-3 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-border/60">
                <td className="py-3 px-4">Document Storage</td>
                <td className="py-3 px-4 text-center">1GB</td>
                <td className="py-3 px-4 text-center">10GB</td>
                <td className="py-3 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-border/60">
                <td className="py-3 px-4">Document Management</td>
                <td className="py-3 px-4 text-center">–</td>
                <td className="py-3 px-4 text-center">✓</td>
                <td className="py-3 px-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Advanced Analytics</td>
                <td className="py-3 px-4 text-center">–</td>
                <td className="py-3 px-4 text-center">–</td>
                <td className="py-3 px-4 text-center">✓</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t border-border">
                <td className="py-4 px-4"></td>
                <td className="py-4 px-4 text-center">
                  <Button variant="outline" size="sm">Free</Button>
                </td>
                <td className="py-4 px-4 text-center">
                  <Button size="sm">$9.99/mo</Button>
                </td>
                <td className="py-4 px-4 text-center">
                  <Button size="sm">$29.99/mo</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-12 max-w-5xl mx-auto border border-border/30">
        <h2 className="text-3xl font-bold mb-4">Start your legal journey today</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of users who are taking control of their legal needs with our powerful tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Get Started for Free</Button>
          <Button size="lg" variant="outline">Schedule a Demo</Button>
        </div>
      </div>
    </div>
  );
}