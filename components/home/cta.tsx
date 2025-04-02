import React from "react";
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

export const CTA = () => {
  return (
    <div className="py-20 md:py-32 w-full bg-[#9362FF] dark:bg-[#000000] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center gap-10 transition-colors duration-300">
      <Badge className="py-2 px-4 border border-black dark:border-white bg-[#E3FFF3] dark:bg-[#2D4842] hover:bg-[#E3FFF3] dark:hover:bg-[#2D4842] font-bold text-black dark:text-white">
        {" "}
        <Scale size={25} className="mr-2" /> The Future of Legal Practice is
        here{" "}
      </Badge>

      <Card className="w-[90%] md:w-[70%] lg:container border-2 border-border !dark:border-darkBorder !shadow-light rounded-none lg:py-12 relative">
        <CardHeader className="flex flex-col justify-center items-center text-center gap-4">
          {" "}
          <span className="italic text-destructive/90 text-sm font-medium">
            LAUNCH{" "}
          </span>
          <CardTitle className="font-extrabold uppercase sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl">
            {" "}
            Experience the Future of Legal Work Today
          </CardTitle>
          <CardDescription className="max-w-lg text-center md:text-lg">
            {" "}
            Cut research time by 70%, automate document drafting, and enhance
            your legal analysis with AI-powered insights. No credit card
            required
          </CardDescription>
          <CardContent>
            <Button className="bg-[#DCFE70] hover:bg-[#D1FF40] text-black font-semibold">
              {" "}
              <Link href={`/signup`}> START YOUR FREE 14-DAY TRIAL </Link>
            </Button>
          </CardContent>
        </CardHeader>
        <div className="absolute -bottom-20 -right-20 hidden lg:flex">
          <div className="relative">
            <Image
              src={`/star-1.svg`}
              alt="star-1 shape"
              width={150}
              height={150}
              className="size-52"
            />
            <div className="absolute flex flex-col justify-center items-center gap-1 inset-0 -rotate-45">
              <span className="text-xs font-bold dark:text-background"> RECOMMENDED </span>
              <span className="text-xs font-medium dark:text-background"> BY EXPERTS </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
