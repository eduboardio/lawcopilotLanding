"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, ArrowRight, Bot, Code, MapPin, Lock, ChevronDown, Shield, } from "lucide-react";
import Link from "next/link";

type BentoItemSize = 'sm' | 'md' | 'lg';
type BentoItemType = 'benefit' | 'stat' | 'quote' | 'cta';

interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor: string;
  darkAccentColor: string;
  lightGradient: string;
  darkGradient: string;
  lightIconBg: string;
  darkIconBg: string;
  iconColor: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  points?: string[];
  type?: "benefit" | "stat" | "quote" | "cta";
  value?: string;
  href?: string;
}

const BentoItem = ({
  title,
  description,
  icon,
  accentColor,
  darkAccentColor,
  lightGradient,
  darkGradient,
  lightIconBg,
  darkIconBg,
  iconColor,
  className,
  size = "md",
  points,
  type = "benefit",
  value,
  href
}: BentoItemProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(accentColor);
  console.log(darkAccentColor);

  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:shadow-xl h-full",
        isDarkMode ? "border-white/10 hover:border-white/20 bg-background/30" : "border-border/40 hover:border-border/60 bg-background/80",
        {
          "col-span-1": size === "sm",
          "col-span-2": size === "md",
          "col-span-3": size === "lg",
        },
        className
      )}
    >
      {/* Gradient background that changes based on dark/light mode - Matching Features component */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isDarkMode
            ? "opacity-[0.35] group-hover:opacity-[0.45]"
            : "opacity-[0.15] group-hover:opacity-[0.25]",
          `bg-gradient-to-br ${isDarkMode ? darkGradient : lightGradient}`
        )}
      />

      {/* Content based on type with improved spacing */}
      <div className="relative z-10 flex h-full flex-col">
        {type === "benefit" && (
          <>
            {icon && (
              <div className={cn(
                "mb-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm",
                isDarkMode ? darkIconBg : lightIconBg
              )}>
                <span className={iconColor}>{icon}</span>
              </div>
            )}
            <h3 className={cn(
              "text-lg font-semibold mb-3 tracking-tight",
              isDarkMode ? "text-white" : "text-foreground"
            )}>
              {title}
            </h3>
            <p className={cn(
              "text-xs sm:text-sm mb-4 leading-relaxed",
              isDarkMode ? "text-white/85" : "text-muted-foreground"
            )}>
              {description}
            </p>
            {points && (
              <ul className="space-y-2 pt-1 mt-auto">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle className={cn(
                      "h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5",
                      isDarkMode ? "text-white/90" : iconColor
                    )} />
                    <span className={isDarkMode ? "text-white/90" : ""}>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {type === "stat" && (
          <>
            <div className="flex-1 flex flex-col items-start justify-center">
              {icon && (
                <div className={cn(
                  "p-2 rounded-xl mb-3 shadow-sm",
                  isDarkMode ? darkIconBg : lightIconBg,
                  iconColor
                )}>
                  {icon}
                </div>
              )}
              <p className={cn(
                "text-3xl font-bold tracking-tight mb-2",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                {value}
              </p>
              <h3 className={cn(
                "text-sm font-medium mb-1",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                {title}
              </h3>
              <p className={cn(
                "text-xs",
                isDarkMode ? "text-white/80" : "text-muted-foreground"
              )}>
                {description}
              </p>
            </div>
          </>
        )}

        {type === "quote" && (
          <>
            <div className={cn(
              "text-4xl font-serif mb-2",
              isDarkMode ? "text-white/40" : iconColor + "/20"
            )}>
              &quot;
            </div>
            <p className={cn(
              "text-sm italic mb-4 leading-relaxed",
              isDarkMode ? "text-white/90" : "text-foreground"
            )}>
              {description}
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-medium shadow-sm",
                isDarkMode ? darkIconBg : lightIconBg,
                iconColor
              )}>
                {value?.charAt(0)}
              </div>
              <div>
                <p className={cn(
                  "text-xs font-medium",
                  isDarkMode ? "text-white" : "text-foreground"
                )}>
                  {title}
                </p>
                <p className={cn(
                  "text-xs",
                  isDarkMode ? "text-white/80" : "text-muted-foreground"
                )}>
                  {value}
                </p>
              </div>
            </div>
          </>
        )}

        {type === "cta" && (
          <>
            <div className="flex-1">
              <h3 className={cn(
                "text-lg font-semibold mb-3 tracking-tight",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                {title}
              </h3>
              <p className={cn(
                "text-xs sm:text-sm mb-4 leading-relaxed",
                isDarkMode ? "text-white/85" : "text-muted-foreground"
              )}>
                {description}
              </p>
            </div>
            {href && (
              <Link
                href={href}
                className={cn(
                  "mt-auto inline-flex items-center text-xs sm:text-sm font-medium transition-colors",
                  isDarkMode ? "text-white hover:text-white/90" : iconColor + " hover:" + iconColor + "/80"
                )}
              >
                Learn more
                <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

interface SummaryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  className?: string;
  ctaText?: string;
  ctaHref?: string;
}

const SummaryCard = ({
  title,
  description,
  icon,
  accentColor,
  className,
  ctaText,
  ctaHref
}: SummaryCardProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn(
      "group relative rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/70",
      "bg-gradient-to-br from-background to-background/95",
      className
    )}>
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]",
          `bg-gradient-to-br ${accentColor}`
        )}
      />

      {/* Content container */}
      <div className="p-6 md:p-8 relative z-10 h-full flex flex-col items-center text-center">
        <div className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full mb-4",
          `bg-primary/10 text-primary`
        )}>
          {icon}
        </div>

        <h3 className={cn(
          "text-2xl font-bold tracking-tight mb-3",
          isDarkMode ? "text-white" : "text-foreground"
        )}>
          {title}
        </h3>

        <p className={cn(
          "text-muted-foreground max-w-2xl mb-6",
          isDarkMode ? "text-white/85" : ""
        )}>
          {description}
        </p>

        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className={cn(
              "inline-flex items-center justify-center px-6 py-3 font-medium rounded-full transition-all duration-300",
              isDarkMode
                ? "bg-white text-background hover:bg-white/90"
                : "bg-primary text-white hover:bg-primary/90"
            )}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export function Benefits() {
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Initial benefits to show with enhanced styling matching Features component
  const initialBenefits = [
    // First row - large item
    {
      icon: <MapPin size={24} />,
      title: "Built for Indian Legal Professionals",
      description: "AI solutions designed specifically for India's unique legal landscape and requirements.",
      points: [
        "Contextual analysis for Indian law",
        "Support for multiple regional languages",
        "Custom-built for Indian legal practice"
      ],
      accentColor: "from-blue-500 to-indigo-700", // Brightened
      darkAccentColor: "from-blue-300 to-indigo-500",
      lightGradient: "from-blue-400 to-indigo-700", // Brightened
      darkGradient: "from-blue-400 to-indigo-600",
      lightIconBg: "bg-blue-100/80", // Lighter to make icon stand out
      darkIconBg: "bg-blue-800/60",
      iconColor: "text-blue-600 dark:text-blue-200",
      size: "lg",
      type: "benefit",
      href: "/indian-legal",
      gridPos: "col-span-full lg:col-span-6"
    },

    // Second row - medium items
    {
      icon: <Code size={20} />,
      title: "Proprietary Algorithm",
      description: "Built on a custom-trained model, fine-tuned for Indian legal data.",
      points: [
        "Optimized for contract and litigation documents",
        "Designed by lawyers and engineers",
        "Continuously improving with feedback"
      ],
      accentColor: "from-amber-500 to-red-600", // Brightened
      darkAccentColor: "from-amber-300 to-red-500",
      lightGradient: "from-amber-400 to-red-500", // Brightened
      darkGradient: "from-amber-400 to-red-500",
      lightIconBg: "bg-amber-100/80", // Lighter
      darkIconBg: "bg-amber-800/60",
      iconColor: "text-amber-600 dark:text-amber-200",
      size: "md",
      type: "benefit",
      href: "/technology",
      gridPos: "col-span-full sm:col-span-1 lg:col-span-3"
    },
    {
      icon: <MapPin size={20} />,
      title: "Jurisdictional Awareness",
      description: "AI that understands legal variations across Indian states and forums.",
      points: [
        "Contextual reasoning by forum",
        "Tailored language for courts and tribunals",
        "Cross-jurisdictional citation intelligence"
      ],
      accentColor: "from-blue-500 to-cyan-700", // Brightened
      darkAccentColor: "from-blue-300 to-cyan-500",
      lightGradient: "from-blue-400 to-cyan-500", // Brightened
      darkGradient: "from-blue-400 to-cyan-500",
      lightIconBg: "bg-blue-100/80", // Lighter
      darkIconBg: "bg-blue-800/60",
      iconColor: "text-blue-600 dark:text-blue-200",
      size: "md",
      type: "benefit",
      href: "/jurisdictions",
      gridPos: "col-span-full sm:col-span-1 lg:col-span-3"
    }
  ];

  const extraBenefits = [
    // Additional benefits shown in "View All"
    {
      icon: <Lock size={20} />,
      title: "Reliable, Safe Results",
      description: "No hallucinations. Just dependable, legally-grounded answers.",
      points: [
        "Fact-checked responses",
        "Built-in citation engine",
        "Transparent model outputs"
      ],
      accentColor: "from-purple-500 to-violet-700", // Brightened
      darkAccentColor: "from-purple-300 to-violet-500",
      lightGradient: "from-purple-400 to-violet-500", // Brightened
      darkGradient: "from-purple-400 to-violet-500",
      lightIconBg: "bg-purple-100/80", // Lighter
      darkIconBg: "bg-purple-800/60",
      iconColor: "text-purple-600 dark:text-purple-200",
      size: "md",
      type: "benefit",
      href: "/reliability",
      gridPos: "col-span-full sm:col-span-1 lg:col-span-6"
    },
    {
      icon: <Shield size={20} />,
      title: "Enhanced Security",
      description: "Bank-level encryption and privacy controls for sensitive legal documents.",
      points: [
        "Data stored in Indian servers",
        "SOC 2 compliant infrastructure",
        "Regular security audits"
      ],
      accentColor: "from-red-500 to-orange-600", // Brightened
      darkAccentColor: "from-red-300 to-orange-500",
      lightGradient: "from-red-400 to-orange-500", // Brightened
      darkGradient: "from-red-400 to-orange-500",
      lightIconBg: "bg-red-100/80", // Lighter
      darkIconBg: "bg-red-800/60",
      iconColor: "text-red-600 dark:text-red-200",
      size: "md",
      type: "benefit",
      href: "/security",
      gridPos: "col-span-full sm:col-span-1 lg:col-span-6"
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Centered section header with improved spacing */}
        <div className="mb-12 md:mb-16 text-center mx-auto max-w-3xl">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight mb-4",
            isDarkMode ? "text-white" : ""
          )}>
            Why Choose Law Copilot
          </h2>
          <p className={cn(
            "text-base md:text-lg",
            isDarkMode ? "text-white/85" : "text-muted-foreground"
          )}>
            Discover how our platform transforms legal practice with AI technology designed specifically for Indian legal professionals.
          </p>
        </div>

        {/* Asymmetric bento grid layout with better spacing and organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-fr">
          {/* Initial benefits */}
          {initialBenefits.map((benefit, index) => (
            <div key={`initial-${index}`} className={benefit.gridPos}>
              <BentoItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                points={benefit.points}
                accentColor={benefit.accentColor}
                darkAccentColor={benefit.darkAccentColor}
                lightGradient={benefit.lightGradient}
                darkGradient={benefit.darkGradient}
                lightIconBg={benefit.lightIconBg}
                darkIconBg={benefit.darkIconBg}
                iconColor={benefit.iconColor}
                size={benefit.size as BentoItemSize}
                type={benefit.type as BentoItemType}
                // value={benefit.value}
                href={benefit.href}
              />
            </div>
          ))}

          {/* View All Benefits button */}
          {!showAllBenefits && (
            <div className="col-span-full mt-8 mb-4 text-center">
              <button
                onClick={() => setShowAllBenefits(true)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200",
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/15 text-white"
                    : "bg-primary/10 hover:bg-primary/20 text-primary"
                )}
              >
                View All Benefits <ChevronDown size={18} />
              </button>
            </div>
          )}

          {/* Extra benefits shown when "View All" is clicked */}
          {showAllBenefits && extraBenefits.map((benefit, index) => (
            <div key={`extra-${index}`} className={benefit.gridPos}>
              <BentoItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                points={benefit.points}
                accentColor={benefit.accentColor}
                darkAccentColor={benefit.darkAccentColor}
                lightGradient={benefit.lightGradient}
                darkGradient={benefit.darkGradient}
                lightIconBg={benefit.lightIconBg}
                darkIconBg={benefit.darkIconBg}
                iconColor={benefit.iconColor}
                size={benefit.size as BentoItemSize}
                type={benefit.type as BentoItemType}
                // value={benefit.value}
                href={benefit.href}
              />
            </div>
          ))}
        </div>

        {/* Reduced gap between grid and summary card when extra benefits are shown */}
        <div className={cn(
          // "mt-8",
          showAllBenefits ? "mt-0" : "mt-0"
        )}>
          <SummaryCard
            title="One AI Engine. Every Legal Use Case."
            description="Whether you're drafting contracts, seeking legal clarity, or analyzing complex documents, Law Copilot delivers intelligent, tailored solutions for all your legal needs."
            icon={<Bot size={32} />}
            accentColor="from-primary to-primary/70"
            className="md:col-span-12 mt-10"
            ctaText="Coming Soon"
            ctaHref="/signup"
          />
        </div>
      </div>
    </section>
  );
}