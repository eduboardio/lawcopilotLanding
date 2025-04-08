import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Shield, Wallet, Zap, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import React from "react";

type IconElement = React.ReactNode;

interface BenefitsProps {
  badge: {
    icon: IconElement;
    bgColor: string;
    textColor: string;
  };
  title: string;
  description: string;
  points?: string[];
}

const benefitList: BenefitsProps[] = [
  {
    badge: {
      icon: <Zap size={24} />,
      bgColor: "bg-[#FFD278]",
      textColor: "text-amber-900",
    },
    title: "Faster Case Research",
    description:
      "Our users report cutting research time from days to hours, handling more cases with greater confidence.",
    points: [
      "70% average time savings on research tasks",
      "Instant access to relevant precedents",
      "Smart keyword and context recognition"
    ]
  },
  {
    badge: {
      icon: <Wallet size={24} />,
      bgColor: "bg-[#A5FB7D]",
      textColor: "text-green-900",
    },
    title: "Cost Reduction",
    description:
      "Reduce operational costs through automation of routine legal tasks and improved resource allocation.",
    points: [
      "30% average reduction in operational costs",
      "Minimize billable hours spent on research",
      "Optimize paralegal and associate time"
    ]
  },
  {
    badge: {
      icon: <Shield size={24} />,
      bgColor: "bg-[#82BBFE]",
      textColor: "text-blue-900",
    },
    title: "Accelerate Legal Research",
    description:
      "Uncover critical insights and connections in legal data with Law Copilot's AI-enhanced research tools, simplifying complex research tasks.",
    points: [
      "Identify overlooked legal precedents",
      "Generate comprehensive case summaries",
      "Detect jurisdiction-specific nuances"
    ]
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="w-full bg-gradient-to-b from-background via-primary/5 to-background py-2 sm:py-2">
      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-1 gap-10 lg:gap-16">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
              KEY ADVANTAGES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Law Copilot?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Experience the competitive advantages that thousands of legal professionals are gaining with our AI-powered platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 w-full">
            {benefitList.map(({ badge, title, description, points }) => (
              <Card
                key={title}
                className="border border-border dark:border-darkBorder shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={cn("h-2", badge.bgColor)}></div>
                <CardHeader className="pt-8">
                  <div
                    className={cn(
                      "size-16 flex justify-center items-center rounded-lg mb-6 transition-transform duration-300 group-hover:scale-110",
                      badge.bgColor,
                      badge.textColor
                    )}
                  >
                    {badge.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {description}
                  </p>
                  
                  {points && (
                    <ul className="space-y-2 pt-2">
                      {points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-secondary/10 border border-border rounded-xl p-8 lg:p-12">
            <p className="text-center md:text-lg font-medium mb-8">
              Built by legal tech experts in collaboration with practicing
              attorneys, Law Copilot combines cutting-edge AI technology with deep
              legal industry expertise. Be among the first to revolutionize your
              legal practice.
            </p>

            <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
              <Button size="lg" className="w-full md:w-max font-medium px-8">
                <Link href="/signup"> Schedule A Demo </Link>
              </Button>
              <Button size="lg" className="w-full md:w-max" variant="secondary">
                <Link href="/#faq"> Read FAQs </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};