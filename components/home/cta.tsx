"use client";

import React, { memo } from "react";
import { Badge } from "../ui/badge";
import { Scale } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const DecorativeStar = memo(() => (
  <div className="absolute -bottom-20 -right-20 hidden lg:flex">
    <div className="relative animate-pulse" style={{ animationDuration: "3s" }}>
      <Image
        src={`/star-1.svg`}
        alt="star-1 shape"
        width={150}
        height={150}
        className="size-52"
        priority={false} 
      />
      <div className="absolute flex flex-col justify-center items-center gap-1 inset-0 -rotate-45">
        <span className="text-xs font-bold text-black dark:text-white transition-colors duration-300">
          RECOMMENDED
        </span>
        <span className="text-xs font-medium text-black dark:text-white transition-colors duration-300">
          BY EXPERTS
        </span>
      </div>
    </div>
  </div>
));

DecorativeStar.displayName = 'DecorativeStar';

const BackgroundElements = memo(() => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

export const CTA = () => {
  return (
    <div className="py-20 md:py-32 w-full bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center gap-10 transition-colors duration-300">
      <BackgroundElements />      
      <Badge className="py-2 px-4 border border-black dark:border-white bg-[#E3FFF3] dark:bg-[#2D4842] hover:bg-[#E3FFF3] dark:hover:bg-[#2D4842] font-bold text-black dark:text-white z-10 transition-colors duration-300">
        <Scale size={25} className="mr-2" /> The Future of Legal Practice is here
      </Badge>
      
      <Card className="w-[90%] md:w-[70%] lg:container border-2 border-border dark:border-border shadow-xl dark:shadow-2xl rounded-none lg:py-12 relative z-10 bg-background/95 dark:bg-background/95 backdrop-blur-sm transition-all duration-300">
        <CardHeader className="flex flex-col justify-center items-center text-center gap-4">
          <span className="italic text-destructive/90 text-sm font-medium">
            LAUNCH
          </span>
          <CardTitle className="font-extrabold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl relative">
            Experience the Future of Legal Work Today
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
          </CardTitle>
          <CardDescription className="max-w-lg text-center md:text-lg mt-4">
            Cut research time by 70%, automate document drafting, and enhance
            your legal analysis with AI-powered insights. No credit card
            required
          </CardDescription>
          <CardContent className="pt-6">
            <Button 
              size="lg"
              className="bg-[#DCFE70] hover:bg-[#D1FF40] text-black font-semibold px-8 py-6 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">
                <Link href="https://app.lawcopilot.io/signup" className="flex items-center">
                  START YOUR FREE 14-DAY TRIAL
                </Link>
              </span>
            </Button>
          </CardContent>
        </CardHeader>
        <DecorativeStar />
        
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden lg:block"></div>
        <div className="absolute -bottom-4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl hidden lg:block"></div>
      </Card>
    </div>
  );
};