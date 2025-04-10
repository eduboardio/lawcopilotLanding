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

const Banner = lazy(() => 
  import("@/components/home/banner").then(module => ({ default: module.Banner }))
);

const Features = lazy(() => 
  import("@/components/home/features").then(module => ({ default: module.Features }))
);

const Benefits = lazy(() => 
  import("@/components/home/benefits").then(module => ({ default: module.Benefits }))
);

const FAQ = lazy(() => 
  import("@/components/home/faq").then(module => ({ default: module.FAQ }))
);

const Contact = lazy(() => 
  import("@/components/home/contact").then(module => ({ default: module.Contact }))
);

const CTA = lazy(() => 
  import("@/components/home/cta").then(module => ({ default: module.CTA }))
);

const sections: SectionConfig[] = [
  { component: Hero, priority: true },
  { component: Banner },
  { component: Features },
  { component: Benefits },
  { component: FAQ },
  { component: Contact },
  { component: Banner },
  { component: CTA },
];

export default function Home() {
  const BLUR_FADE_DELAY = 0.15;

  return (
    <>
      {sections.map(({ component: Component }, index) => (
        <BlurFade 
          key={index} 
          delay={BLUR_FADE_DELAY * (index + 1)} 
          inView
        >
          <Suspense fallback={<SectionPlaceholder />}>
            <Component />
          </Suspense>
        </BlurFade>
      ))}
    </>
  );
}