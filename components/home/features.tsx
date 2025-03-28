import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileSearch,
  FileText,
  Globe,
  ShieldAlert,
  Antenna,
  User,
  SearchCheck,
  Flame,
  File,
} from "lucide-react";
import { Button, ButtonProps } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FeaturesProps {
  icon?: JSX.Element;
  title: string;
  description: string;
  cta?: ButtonProps;
  image?: string;
  video?: string;
  badgeText?: string;
  placeHolderImage?: {
    icon: JSX.Element;
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
    <section id="features" className="w-full flex justify-center items-center">
      <div className="container py-24 sm:py-32 w-full">
        <div className="flex flex-col justify-center items-center gap-24 w-full mx-auto max-w-6xl">
          {featureList.map(
            (
              { title, description, badgeText, cta, placeHolderImage },
              index
            ) => (
              <div
                key={title}
                className={cn(
                  "w-full flex flex-col lg:flex-row justify-start items-start gap-8",
                  {
                    "lg:flex-row-reverse": index % 2 !== 0,
                  }
                )}
              >
                {/* Image */}
                <div className="relative w-full lg:max-w-md">
                  <Badge className="absolute -top-4 -right-4 rotate-12 bg-white text-black border-2 border-black text-xs font-semibold px-2 py-1 rounded-none hover:bg-white">
                    {badgeText}
                  </Badge>
                  {/* <Image
                  src={"/images/placeholder.png"}
                  alt={title}
                  width={750}
                  height={750}
                  className="border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-l-2xl aspect-square object-cover"
                /> */}

                  <div
                    className={cn(
                      "border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-l-2xl aspect-square object-cover flex justify-center items-center",
                      placeHolderImage?.bgColor,
                      placeHolderImage?.iconColor
                    )}
                  >
                    {placeHolderImage?.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-start items-start gap-4 lg:pt-12">
                  <h5 className="text-2xl lg:text-4xl font-extrabold">
                    {" "}
                    {title}
                  </h5>
                  <p className="font-medium lg:text-lg text-muted-foreground">
                    {description}
                  </p>
                  <Button {...cta}>
                    {" "}
                    <Link href="/signup">{cta?.value}</Link>{" "}
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
