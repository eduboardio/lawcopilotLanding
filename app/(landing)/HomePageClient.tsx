"use client";

import { lazy, Suspense, ComponentType } from "react";
import { Hero } from "@/components/home/hero";
import { TrustBand } from "@/components/home/sections/trust-band";
import { WorkSection } from "@/components/home/sections/work";

interface SectionConfig {
  component: ComponentType;
  priority?: boolean;
}

const SectionPlaceholder = () => (
  <div className="w-full h-64 animate-pulse bg-background/50 rounded-lg"></div>
);

const StandingJobs = lazy(() =>
  import("@/components/home/sections/standing-jobs").then((m) => ({ default: m.StandingJobs }))
);
const InsideTheMatter = lazy(() =>
  import("@/components/home/sections/inside-the-matter").then((m) => ({ default: m.InsideTheMatter }))
);
const HowItWorks = lazy(() =>
  import("@/components/home/sections/how-it-works").then((m) => ({ default: m.HowItWorks }))
);
const FitsWorkflow = lazy(() =>
  import("@/components/home/sections/fits-workflow").then((m) => ({ default: m.FitsWorkflow }))
);
const Confidentiality = lazy(() =>
  import("@/components/home/sections/confidentiality").then((m) => ({ default: m.Confidentiality }))
);
const Faq = lazy(() => import("@/components/home/sections/faq").then((m) => ({ default: m.Faq })));
const ClosingCta = lazy(() =>
  import("@/components/home/sections/closing-cta").then((m) => ({ default: m.ClosingCta }))
);

// Hand over the file → where your files live → what comes back → how you stay in
// charge → what it does on its own → where it lives → the tools it fits →
// confidentiality in detail → questions → start.
const sections: SectionConfig[] = [
  { component: Hero, priority: true },
  { component: TrustBand, priority: true },
  { component: WorkSection, priority: true },
  { component: HowItWorks },
  { component: StandingJobs },
  { component: InsideTheMatter },
  { component: FitsWorkflow },
  { component: Confidentiality },
  { component: Faq },
  { component: ClosingCta },
];

export default function HomePageClient() {
  return (
    <div className="w-full overflow-hidden">
      {sections.map(({ component: Component, priority }, index) =>
        priority ? (
          <Component key={index} />
        ) : (
          <Suspense key={index} fallback={<SectionPlaceholder />}>
            <Component />
          </Suspense>
        )
      )}
    </div>
  );
}
