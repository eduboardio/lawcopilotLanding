"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, FileText, Clock, ArrowRight, Filter, SlidersHorizontal, BookMarked, SortAsc } from "lucide-react";

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  jurisdiction: string;
  relevance: number;
  date: string;
}

export default function ResearchEngine() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      setSearchResults([
        { 
          id: 1, 
          title: "Smith v. Johnson (2023)", 
          excerpt: "The court ruled that in cases of contractual disputes where electronic signatures are contested, the burden of proof lies with the party seeking to enforce the contract...",
          jurisdiction: "Federal",
          relevance: 98,
          date: "Mar 15, 2023"
        },
        { 
          id: 2, 
          title: "Hernandez v. City of Oakland (2022)", 
          excerpt: "This case established precedent regarding municipal liability in cases where administrative oversight resulted in procedural violations...",
          jurisdiction: "California",
          relevance: 92,
          date: "Nov 8, 2022"
        },
        { 
          id: 3, 
          title: "United States v. Donovan (2021)", 
          excerpt: "The Supreme Court clarified the standards for evidence admissibility when digital forensics are involved in warrant execution...",
          jurisdiction: "Supreme Court",
          relevance: 87,
          date: "Jun 22, 2021"
        }
      ]);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Legal Research Engine</h1>
          <p className="text-lg md:text-xl text-muted-foreground px-2">
            Research cases in seconds, not hours with AI-powered legal search
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          <Badge variant="outline" className="px-2 md:px-3 py-1 text-sm md:text-base border-primary">
            <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            70% Time Savings
          </Badge>
          <Badge variant="outline" className="px-2 md:px-3 py-1 text-sm md:text-base border-primary">
            <BookMarked className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Millions of Cases
          </Badge>
          <Badge variant="outline" className="px-2 md:px-3 py-1 text-sm md:text-base border-primary">
            <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Jurisdiction-Aware
          </Badge>
        </div>

        <Card className="mb-8 md:mb-12">
          <CardHeader>
            <CardTitle>Find Relevant Legal Precedents</CardTitle>
            <CardDescription>Enter your search query and our AI will find the most relevant cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Describe your legal question or enter case details..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="w-full sm:w-auto"
              >
                {isSearching ? "Searching..." : "Search"}
                {!isSearching && <Search className="ml-2 h-4 w-4" />}
              </Button>
            </div>
            
            <div className="mt-6 overflow-x-auto">
              <Tabs defaultValue="all">
                <TabsList className="w-full grid grid-cols-4 min-w-[400px]">
                  <TabsTrigger value="all" className="text-xs md:text-sm">All Sources</TabsTrigger>
                  <TabsTrigger value="cases" className="text-xs md:text-sm">Cases</TabsTrigger>
                  <TabsTrigger value="statutes" className="text-xs md:text-sm">Statutes</TabsTrigger>
                  <TabsTrigger value="articles" className="text-xs md:text-sm">Articles</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
              <p className="text-sm text-muted-foreground">Advanced filters:</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-xs md:text-sm">
                  Jurisdiction <Filter className="ml-1 md:ml-2 h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">
                  Date Range <Clock className="ml-1 md:ml-2 h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">
                  Sort <SortAsc className="ml-1 md:ml-2 h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">
                  More Filters <SlidersHorizontal className="ml-1 md:ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="w-full mt-4 flex justify-center">
              <Badge variant="secondary" className="text-xs">Coming Soon: Citation Analysis</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            {searchResults.length > 0 && (
              <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Search Results</h3>
                  <span className="text-sm text-muted-foreground">{searchResults.length} results found</span>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {searchResults.map((result) => (
                    <div key={result.id} className="border rounded-lg p-3 md:p-4 hover:border-primary transition-colors">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h3 className="font-bold text-base md:text-lg">{result.title}</h3>
                        <Badge className="w-fit">{result.relevance}% Match</Badge>
                      </div>
                      <p className="text-sm mb-3">{result.excerpt}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{result.jurisdiction}</Badge>
                          <Badge variant="outline">{result.date}</Badge>
                        </div>
                        <Button variant="link" className="p-0 justify-start sm:justify-center">
                          View Full Case <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardFooter>
        </Card>

        <div className="mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Research Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <Search className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Smart Legal Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Our AI understands legal terminology and context, finding relevant cases even when keywords don&apos;t match exactly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader className="pb-2">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Jurisdiction Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Search filters automatically prioritize cases from relevant jurisdictions based on your case details.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader className="pb-2">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
                <CardTitle className="text-lg md:text-xl">Case Summaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Get AI-generated summaries of complex cases, highlighting the most important points and precedents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 p-4 md:p-8 rounded-lg mb-8 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Supported Research Materials</h2>
              <p className="text-muted-foreground mb-4 md:mb-6">
                Our research engine covers a comprehensive range of legal sources:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <Badge className="h-4 w-4 text-primary">✓</Badge>
                  <span>Federal Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="h-4 w-4 text-primary">✓</Badge>
                  <span>State Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="h-4 w-4 text-primary">✓</Badge>
                  <span>Statutes & Regulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="h-4 w-4 text-primary">✓</Badge>
                  <span>Law Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="h-4 w-4 text-primary">✓</Badge>
                  <span>Legal Treatises</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="h-4 w-4 text-primary">✓</Badge>
                  <span>International Law</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Customer Success</h2>
              <blockquote className="italic border-l-4 pl-4 border-primary mb-4">
              &quot;Law Copilot&apos;s research engine found a precedent that completely changed our approach to a difficult case. What would have taken days of research was done in minutes.&quot;
              </blockquote>
              <div className="mt-2">
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Partner, Chen & Associates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-16 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-2">Ready to Transform Your Legal Research?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6">
            Join thousands of legal professionals saving 70% of their research time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}