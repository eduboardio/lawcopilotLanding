"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MatterCard } from "./sections/matter-card";
import { Container, SIGNUP_URL } from "./sections/primitives";

const JOBS = [
  { label: "Document briefs", href: "/#work" },
  { label: "Paper books", href: "/#work" },
  { label: "Tabular reviews", href: "/#work" },
  { label: "Drafting", href: "/#work" },
  { label: "Cause lists", href: "/#watch" },
];

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  // `initial` must be identical on the server and the client, or hydration keeps the
  // server's hidden style. Reduced motion only changes the transition, to instant.
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.5, delay },
  });

  return (
    <section id="hero" className="relative w-full overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
      />

      <Container className="relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:pb-14 lg:pt-10">
        <div className="flex min-w-0 flex-col items-start gap-7">
          <motion.h1
            {...rise(0.08)}
            className="font-heading text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.015em] text-foreground sm:text-6xl lg:text-[3.5rem] xl:text-[3.75rem]"
          >
            <span className="block">Hand over the file.</span>
            <span className="block text-muted-foreground">Get back the work.</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="max-w-lg text-lg leading-relaxed text-foreground/80 md:text-xl">
            Legal AI that reads the record, researches and drafts — then checks with you before anything leaves.
          </motion.p>

          <motion.div {...rise(0.24)} className="flex flex-wrap gap-3">
            <Link
              href={SIGNUP_URL}
              className="inline-flex min-h-12 items-center rounded-xl bg-foreground px-5 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Assign your first matter
            </Link>
            <Link
              href="/#work"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-border bg-card px-5 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See the work it does
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* The range of work at a glance, each a way into the page. */}
          <motion.div {...rise(0.32)} className="flex flex-col items-start gap-2.5">
            <span className="text-[13px] text-muted-foreground">It takes on</span>
            <ul className="flex flex-wrap gap-1.5">
              {JOBS.map((job) => (
                <li key={job.label}>
                  <Link
                    href={job.href}
                    className="inline-flex min-h-8 items-center rounded-full border border-border bg-background/60 px-2.5 text-[13px] text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {job.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          className="min-w-0"
        >
          <MatterCard />
        </motion.div>
      </Container>
    </section>
  );
};
