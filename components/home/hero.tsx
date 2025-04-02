"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroVideoDialog from "../ui/hero-video-dialog";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center bg-[#DFE5F2] dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto w-full">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-12 md:pt-24">
          <div className="text-center space-y-8 mb-5">
            <div className="mx-auto max-w-screen-lg text-center text-3xl md:text-4xl lg:text-6xl font-bold">
              <h1 className="tracking-normal leading-normal text-black dark:text-white">
                AI-Powered
                <span className="block sm:inline text-primary underline px-2">
                  Legal
                </span>
                Excellence at Your Fingertips
              </h1>
            </div>

            <p className="max-w-screen-lg mx-auto lg:text-lg font-medium text-muted-foreground dark:text-gray-300">
              Law Copilot is an AI-powered web app designed to streamline your
              legal work, providing powerful tools for risk analysis, document
              drafting, legal research, and translation.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 relative">
              <Image
                src={`/arrow-1.svg`}
                alt="arrow"
                width={100}
                height={100}
                className="hidden lg:inline-block absolute -bottom-4 left-36 rotate-12 dark:invert"
              />
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                <Link href={`/signup`} className="flex">
                  Get Started Now
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-6">
            <HeroVideoDialog
              className="dark:hidden block border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/watch?v=fJ2AII__o10"
              thumbnailSrc="/images/placeholder.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/watch?v=fJ2AII__o10"
              thumbnailSrc="/images/placeholder.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};