import {
  Globe,
  SearchCheck,
  Flame,
  File,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
// import { motion } from "framer-motion";

interface CustomButtonProps {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  value?: string;
  className?: string;
}

interface FeaturesProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  cta?: CustomButtonProps;
  image?: string;
  video?: string;
  badgeText?: string;
  placeHolderImage?: {
    icon: React.ReactNode;
    bgColor: string;
    iconColor: string;
  };
}

const featureList: FeaturesProps[] = [
  {
    badgeText: "FAST",
    title: "Research Cases in Seconds, Not Hours",
    description:
      "Instantly analyze thousands of legal documents, precedents, and cases with AI-powered search that understands legal context and jurisdiction",
    cta: {
      variant: "secondary",
      value: "Try Research Engine",
    },
    placeHolderImage: {
      icon: <SearchCheck className="size-1/3" />,
      bgColor: "bg-[#DEF7E5]",
      iconColor: "text-[#50C972]",
    },
  },
  {
    badgeText: "SMART",
    title: "Predict Case Outcomes with AI Precision",
    description:
      "Get data-driven insights on case risks, success probability, and potential challenges using advanced predictive analytics",
    cta: {
      variant: "secondary",
      value: "Analyze Your Case",
    },
    placeHolderImage: {
      icon: <Flame className="size-1/3" />,
      bgColor: "bg-[#FFD2B2]",
      iconColor: "text-[#FE9B54]",
    },
  },
  {
    badgeText: "GLOBAL",
    title: "Break Language Barriers in Legal Work",
    description:
      "Automatically translate legal documents and cases between 50+ languages while preserving legal terminology and context.",
    cta: {
      value: "See Languages",
      variant: "secondary",
    },
    placeHolderImage: {
      icon: <Globe className="size-1/3" />,
      bgColor: "bg-[#E9DFFF]",
      iconColor: "text-[#8F5BFF]",
    },
  },
  {
    badgeText: "PRECISE",
    title: "Draft Perfect Legal Documents Instantly",
    description:
      "Create court-ready documents, contracts, and legal correspondence using AI templates that adapt to your jurisdiction and style.",
    cta: {
      variant: "secondary",
      value: "Start Drafting",
    },
    placeHolderImage: {
      icon: <File className="size-1/3" />,
      bgColor: "bg-[#CCF9FF]",
      iconColor: "text-[#44A7FF]",
    },
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full bg-gradient-to-b from-background to-secondary/5">
      <div className="container py-24 sm:py-32 w-full">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
            POWERFUL FEATURES
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI-Powered Legal Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Revolutionize your legal practice with cutting-edge AI technology designed specifically for legal professionals.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-24 w-full mx-auto max-w-6xl">
          {featureList.map(
            (
              { title, description, badgeText, cta, placeHolderImage },
              index
            ) => (
              <div
                key={title}
                className={cn(
                  "w-full flex flex-col lg:flex-row justify-start items-start gap-12 relative",
                  {
                    "lg:flex-row-reverse": index % 2 !== 0,
                  }
                )}
              >
                {/* Image */}
                <div className="relative w-full lg:max-w-md group">
                  <Badge className="absolute -top-4 -right-4 rotate-12 bg-black dark:bg-white text-white dark:text-black font-bold px-3 py-1.5 rounded-sm z-10 shadow-lg">
                    {badgeText}
                  </Badge>

                  <div
                    className={cn(
                      "border-2 border-border dark:border-darkBorder shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl aspect-square object-cover flex justify-center items-center group-hover:scale-105",
                      placeHolderImage?.bgColor,
                      placeHolderImage?.iconColor
                    )}
                  >
                    {placeHolderImage?.icon}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-6 -right-6 h-24 w-24 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -z-10 -top-6 -left-6 h-16 w-16 bg-secondary/20 rounded-full blur-lg"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-start items-start gap-6 lg:pt-8">
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tight">
                    {title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                  <Button 
                    variant={cta?.variant || "default"} 
                    className="group transition-all duration-300 hover:pr-8"
                  >
                    <Link href="/signup" className="flex items-center gap-2">
                      {cta?.value} 
                      <ArrowRight className="size-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                    </Link>
                  </Button>
                </div>
                
                {/* Background elements for depth */}
                <div className={cn(
                  "absolute -z-10 w-full h-full blur-3xl opacity-20",
                  index % 2 === 0 ? "left-0" : "right-0",
                  placeHolderImage?.bgColor
                )}></div>
              </div>
            )
          )}
        </div>
        
        <div className="mt-24 text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base px-8"
          >
            <Link href="/signup">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};