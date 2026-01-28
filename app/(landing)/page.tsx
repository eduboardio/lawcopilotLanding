"use client";

import { lazy, Suspense, ComponentType } from "react";
import BlurFade from "@/components/ui/blur-fade";

interface SectionConfig {
  component: ComponentType;
  priority?: boolean;
}

const SectionPlaceholder = () => (
  <div className="w-full h-64 animate-pulse bg-background/50 rounded-lg"></div>
);

const Hero = lazy(() =>
  import("@/components/home/hero").then(module => ({ default: module.Hero }))
);

import Features from "@/components/home/features";

const Benefits = lazy(() =>
  import("@/components/home/benefits").then(module => ({ default: module.Benefits }))
);

const ComplianceBadges = lazy(() =>
  import("@/components/home/ComplianceBadges").then(module => ({ default: module.ComplianceBadges }))
);

const sections: SectionConfig[] = [
  { component: Hero, priority: true },
  { component: Features, priority: true },
  { component: ComplianceBadges },
  { component: Benefits },
];

export default function Home() {
  const BLUR_FADE_DELAY = 0.15;

  return (
    <div className="w-full overflow-hidden">
      {sections.map(({ component: Component, priority }, index) => (
        <div key={index}>
          <BlurFade
            delay={BLUR_FADE_DELAY * (index + 1)}
            inView
          >
            <div className="w-full">
              {priority ? (
                <Component />
              ) : (
                <Suspense fallback={<SectionPlaceholder />}>
                  <Component />
                </Suspense>
              )}
            </div>
          </BlurFade>
        </div>
      ))}
    </div>
  );
}