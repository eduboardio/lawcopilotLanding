"use client";

import { lazy, Suspense, ComponentType } from "react";
import BlurFade from "@/components/ui/blur-fade";
// import { GrainyTexture } from "@/components/home/GrainyTexture";

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

// Features is now imported directly (not lazy) since it contains the main product showcase
import Features from "@/components/home/features";

const Benefits = lazy(() =>
  import("@/components/home/benefits").then(module => ({ default: module.Benefits }))
);

const UseCases = lazy(() =>
  import("@/components/home/useCases").then(module => ({ default: module.UseCases }))
);

const FoundersSection = lazy(() =>
  import("@/components/home/FoundersSection").then(module => ({ default: module.FoundersSection }))
);

const SocialProof = lazy(() =>
  import("@/components/home/SocialProof").then(module => ({ default: module.SocialProof }))
);

const ComplianceBadges = lazy(() =>
  import("@/components/home/ComplianceBadges").then(module => ({ default: module.ComplianceBadges }))
);

const ConversionCTA = lazy(() =>
  import("@/components/home/ConversionCTA").then(module => ({ default: module.ConversionCTA }))
);

const sections: SectionConfig[] = [
  { component: Hero, priority: true },
  { component: Features, priority: true },
  { component: Benefits },
  { component: UseCases },
  { component: FoundersSection },
  { component: SocialProof },
  { component: ComplianceBadges },
  { component: ConversionCTA },
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
            <div className="w-full px-4 sm:px-0">
              {priority ? (
                <Component />
              ) : (
                <Suspense fallback={<SectionPlaceholder />}>
                  <Component />
                </Suspense>
              )}
            </div>
          </BlurFade>
          
          {/* Add GrainyTexture divider */}
          {/* {index === 1 && <GrainyTexture />} */}
          {/* {index === 4 && <GrainyTexture />} */}
        </div>
      ))}
    </div>
  );
}