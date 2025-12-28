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

const ProductPreview = lazy(() =>
  import("@/components/home/ProductPreview").then(module => ({ default: module.ProductPreview }))
);

const Features = lazy(() =>
  import("@/components/home/features").then(module => ({ default: module.Features }))
);

const Benefits = lazy(() =>
  import("@/components/home/benefits").then(module => ({ default: module.Benefits }))
);

const UseCases = lazy(() =>
  import("@/components/home/useCases").then(module => ({ default: module.UseCases }))
);

const SecurityTrust = lazy(() =>
  import("@/components/home/SecurityTrust").then(module => ({ default: module.SecurityTrust }))
);

const FoundersSection = lazy(() =>
  import("@/components/home/FoundersSection").then(module => ({ default: module.FoundersSection }))
);

const SocialProof = lazy(() =>
  import("@/components/home/SocialProof").then(module => ({ default: module.SocialProof }))
);

const ConversionCTA = lazy(() =>
  import("@/components/home/ConversionCTA").then(module => ({ default: module.ConversionCTA }))
);

const sections: SectionConfig[] = [
  { component: Hero, priority: true },
  { component: ProductPreview },
  { component: Features },
  { component: Benefits },
  { component: UseCases },
  { component: SecurityTrust },
  { component: FoundersSection },
  { component: SocialProof },
  { component: ConversionCTA },
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