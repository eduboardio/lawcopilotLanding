import { FileText, BookOpen, BarChart3, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function LawyersPage() {
  return (
    <div className="container mx-auto py-16 md:py-32 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Tools for the Modern Lawyer</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 md:mb-8 px-4">
          Practice law more effectively with AI-powered assistance for drafting, research, and analysis.
        </p>
      </div>

      {/* Features Tabs */}
      <Tabs defaultValue="drafting" className="w-full px-2">
        <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
          <TabsTrigger value="drafting" className="text-sm md:text-base">Document Drafting</TabsTrigger>
          <TabsTrigger value="research" className="text-sm md:text-base">Legal Research</TabsTrigger>
          <TabsTrigger value="analytics" className="text-sm md:text-base">Critical Analysis</TabsTrigger>
        </TabsList>

        {/* Drafting Tab */}
        <TabsContent value="drafting" className="mt-0">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start md:items-center">
            <div className="md:col-span-2">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Drafting Documents</h2>
              <p className="text-muted-foreground mb-4 md:mb-6">
                Create flawless legal documents in minutes instead of hours. Our AI understands legal context and formatting requirements.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
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
            <div className="md:col-span-3 bg-muted/50 rounded-xl p-4 md:p-6 border border-border/40 mt-4 md:mt-0">
              <div className="bg-card rounded-lg overflow-hidden relative h-[200px] md:h-[400px] lg:h-[400px]">
                <Image
                  src="/draft.webp"
                  alt="Document drafting interface"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/dark_draft.webp"
                  alt="Document drafting interface"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Research Tab */}
        <TabsContent value="research" className="mt-0">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start md:items-center">
            <div className="md:col-span-2">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Reliable Research</h2>
              <p className="text-muted-foreground mb-4 md:mb-6">
                Access and analyze case law and legislation faster than ever with AI-powered legal research tools.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
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
            <div className="md:col-span-3 bg-muted/50 rounded-xl p-4 md:p-6 border border-border/40 mt-4 md:mt-0">
              <div className="bg-card rounded-lg overflow-hidden relative h-[200px] md:h-[400px] lg:h-[400px]">
                <Image
                  src="/legal.webp"
                  alt="Legal research interface"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/dark_legal.webp"
                  alt="Legal research interface"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-0">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start md:items-center">
            <div className="md:col-span-2">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Accurate Analytics</h2>
              <p className="text-muted-foreground mb-4 md:mb-6">
                Build stronger cases with data-driven insights and critical reasoning assistance.
              </p>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
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
            <div className="md:col-span-3 bg-muted/50 rounded-xl p-4 md:p-6 border border-border/40 mt-4 md:mt-0">
              <div className="bg-card rounded-lg overflow-hidden relative h-[200px] md:h-[400px] lg:h-[400px]">
                <Image
                  src="/analysis.webp"
                  alt="Legal analytics dashboard"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/dark_analysis.webp"
                  alt="Legal analytics dashboard"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}