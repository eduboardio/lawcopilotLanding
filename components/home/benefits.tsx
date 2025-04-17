"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Shield, Wallet, Zap, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import React, { useEffect, useRef, memo } from "react";

type IconElement = React.ReactNode;

interface BenefitsProps {
  icon: IconElement;
  title: string;
  description: string;
  points?: string[];
  // gradient: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: <Zap size={24} />,
    title: "Faster Case Research",
    description:
      "Our users report cutting research time from days to hours, handling more cases with greater confidence.",
    points: [
      "70% average time savings on research tasks",
      "Instant access to relevant precedents",
      "Smart keyword and context recognition"
    ],
    // gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    icon: <Wallet size={24} />,
    title: "Cost Reduction",
    description:
      "Reduce operational costs through automation of routine legal tasks and improved resource allocation.",
    points: [
      "30% average reduction in operational costs",
      "Minimize billable hours spent on research",
      "Optimize paralegal and associate time"
    ],
    // gradient: "from-secondary/20 via-secondary/10 to-transparent"
  },
  {
    icon: <Shield size={24} />,
    title: "Accelerate Legal Research",
    description:
      "Uncover critical insights and connections in legal data with Law Copilot's AI-enhanced research tools, simplifying complex tasks.",
    points: [
      "Identify overlooked legal precedents",
      "Generate comprehensive case summaries",
      "Detect jurisdiction-specific nuances"
    ],
    // gradient: "from-primary/20 via-secondary/10 to-transparent"
  },
];

const BenefitPoint = memo(({ point }: { point: string }) => (
  <li className="flex items-start gap-2 point-item">
    <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
    <span className="text-sm">{point}</span>
  </li>
));

BenefitPoint.displayName = 'BenefitPoint';

const BenefitCard = memo(({ benefit }: { benefit: BenefitsProps }) => {
  const { icon, title, description, points } = benefit;
  
  return (
    <Card
      className={cn(
        "benefit-card border border-border/40 dark:border-border/40 shadow-xl hover:shadow-2xl transition-all duration-500",
        "overflow-hidden group backdrop-blur-sm bg-background/80 dark:bg-background/80",
        "relative z-10"
      )}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br", 
        // gradient, 
        "opacity-40 dark:opacity-40 transition-opacity duration-300 group-hover:opacity-60"
      )}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <CardHeader className="pt-8 relative z-10">
        {/* <div className="icon-container size-16 flex justify-center items-center rounded-lg mb-6 transition-transform duration-300 group-hover:scale-110 bg-primary/10 text-primary relative overflow-hidden"> */}
          
        {/* </div> */}
        <CardTitle className="text-2xl font-bold tracking-tight flex gap-2"> 
          <div className=" mt-1">{icon}  </div>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10">
        <p className="text-muted-foreground">
          {description}
        </p>
        
        {points && (
          <ul className="space-y-3 pt-2">
            {points.map((point, idx) => (
              <BenefitPoint key={idx} point={point} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
});

BenefitCard.displayName = 'BenefitCard';

const BenefitStyles = memo(() => (
  <style jsx global>{`
    .benefit-card {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .benefit-card:nth-child(1) {
      transform: translateX(-30px);
    }
    
    .benefit-card:nth-child(3) {
      transform: translateX(30px);
    }
    
    .benefit-card.show {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
    
    .point-item {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
    
    .benefit-card.show .point-item {
      opacity: 1;
      transform: translateY(0);
    }
    
    .benefit-card.show .point-item:nth-child(1) {
      transition-delay: 0.1s;
    }
    
    .benefit-card.show .point-item:nth-child(2) {
      transition-delay: 0.2s;
    }
    
    .benefit-card.show .point-item:nth-child(3) {
      transition-delay: 0.3s;
    }
    
    .icon-container {
      position: relative;
      overflow: hidden;
    }
    
    .icon-container::before {
      content: '';
      position: absolute;
      top: -100%;
      left: -100%;
      width: 300%;
      height: 300%;
      background: conic-gradient(from 90deg, transparent, rgba(255,255,255,0.4), transparent);
      animation: shine 4s linear infinite;
    }
    
    @keyframes shine {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}</style>
));

BenefitStyles.displayName = 'BenefitStyles';

const BenefitsCTA = memo(() => (
  <div className=" relative overflow-hidden">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-xl blur-md animate-pulse"></div>
    <div className="relative bg-background/80 dark:bg-background/80 backdrop-blur-sm border border-white/20 dark:border-white/20 rounded-xl p-8 lg:p-12 shadow-xl z-10">
      <p className="text-center md:text-lg font-medium mb-8">
        Built by legal tech experts in collaboration with practicing
        attorneys, Law Copilot combines cutting-edge AI technology with deep
        legal industry expertise. Be among the first to revolutionize your
        legal practice.
      </p>

      <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
        <Button 
          size="lg" 
          className="w-full md:w-max font-medium px-8 rounded-full bg-foreground hover:bg-foreground/80 text-background relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">
            <Link href="/signup"> Schedule A Demo </Link>
          </span>
        </Button>
        <Button 
          size="lg" 
          className="w-full md:w-max rounded-full relative overflow-hidden group" 
          variant="outline"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">
            <Link href="/#faq"> Read FAQs </Link>
          </span>
        </Button>
      </div>
    </div>
  </div>
));

BenefitsCTA.displayName = 'BenefitsCTA';

const BackgroundElements = memo(() => (
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-small-white/5 dark:bg-grid-small-white/10"></div>
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

export const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll(".benefit-card");
      
      cards.forEach((card) => {
        observer.observe(card);
      });
      return () => {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      };
    }
    
    return undefined;
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <BackgroundElements />
      <BenefitStyles />

      <div className="container mx-auto p-4 relative z-10">
        <div className="grid lg:grid-cols-1 gap-10 lg:gap-16">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
              KEY ADVANTAGES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative">
              Why Choose Law Copilot?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience the competitive advantages that thousands of legal professionals are gaining with our AI-powered platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 w-full">
            {benefitList.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>

          <BenefitsCTA />
        </div>
      </div>
    </section>
  );
};