import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Shield, Wallet, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";

type IconElement = React.ReactNode;

interface BenefitsProps {
  badge: {
    icon: IconElement;
    bgColor: string;
  };
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    badge: {
      icon: <Zap color="white" />,
      bgColor: "bg-[#FFD278]",
    },
    title: "Faster Case Research",
    description:
      "Our users report cutting research time from days to hours, handling more cases with greater confidence.",
  },
  {
    badge: {
      icon: <Wallet color="white" />,
      bgColor: "bg-[#A5FB7D]",
    },
    title: "Cost Reduction",
    description:
      "Reduce operational costs through automation of routine legal tasks and improved resource allocation.",
  },
  {
    badge: {
      icon: <Shield color="white" />,
      bgColor: "bg-[#82BBFE]",
    },
    title: "Accelerate Legal Research",
    description:
      "Uncover critical insights and connections in legal data with Law Copilot's AI-enhanced research tools, simplifying complex research tasks.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 mx-auto p-4">
      <div className="grid lg:grid-cols-1 gap-10 lg:gap-16">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
          Why Should I use Law Copilot?
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 w-full">
          {benefitList.map(({ badge, title, description }) => (
            <Card
              key={title}
              className="border-2 border-border !dark:border-darkBorder !shadow-light lg:aspect-square"
            >
              <CardHeader>
                <div
                  className={cn(
                    "aspect-video size-14 flex justify-center items-center border rounded-sm mb-6",
                    badge.bgColor
                  )}
                >
                  {badge.icon}
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center md:text-lg font-medium text-muted-foreground">
          Built by legal tech experts in collaboration with practicing
          attorneys, Law Copilot combines cutting-edge AI technology with deep
          legal industry expertise. Be among the first to revolutionize your
          legal practice
        </p>
        
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
          <Button className="w-full md:w-max">
            <Link href="/signup"> Schedule A Demo </Link>
          </Button>
          <Button className="w-full md:w-max" variant={"secondary"}>
            <Link href="/#faq"> Read FAQs </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};