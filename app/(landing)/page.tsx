import { Banner } from "@/components/home/banner";
import { Benefits } from "@/components/home/benefits";
import { CTA } from "@/components/home/cta";
import { FAQ } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import BlurFade from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.25;

const sections = [
  { component: <Hero /> },
  { component: <Banner /> },
  { component: <Features /> },
  { component: <Benefits /> },
  { component: <FAQ /> },
  { component: <Banner /> },
  { component: <CTA /> },
];

export default function Home() {
  return (
    <>
      {sections.map((section, index) => (
        <BlurFade key={index} delay={BLUR_FADE_DELAY} inView>
          {section.component}
        </BlurFade>
      ))}
    </>
  );
}
