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

const Features = lazy(() => 
  import("@/components/home/features").then(module => ({ default: module.Features }))
);

const Benefits = lazy(() => 
  import("@/components/home/benefits").then(module => ({ default: module.Benefits }))
);

const Explainer = lazy(() => 
  import("@/components/home/ExplainerProcess").then(module => ({ default: module.ExplainerProcess }))
);

const CTA = lazy(() => 
  import("@/components/home/cta").then(module => ({ default: module.CTA }))
);

const sections: SectionConfig[] = [
  { component: Hero, priority: true },
  { component: Features },
  { component: Benefits },
  { component: Explainer },
  { component: CTA },
];

export default function Home() {
  const BLUR_FADE_DELAY = 0.15;
  
  return (
    <div className="w-full overflow-hidden">
      {sections.map(({ component: Component }, index) => (
        <BlurFade
          key={index}
          delay={BLUR_FADE_DELAY * (index + 1)}
          inView
        >
          <div className="w-full px-4 sm:px-0">
            <Suspense fallback={<SectionPlaceholder />}>
              <Component />
            </Suspense>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}