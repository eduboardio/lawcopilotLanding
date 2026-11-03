import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeader, SIGNUP_URL, StatusChip } from "./primitives";

function Panel({ title, count, children }: { title: string; count?: number; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-card p-4">
      <p className="text-[13px] font-medium text-foreground">
        {title}
        {count !== undefined ? <span className="font-normal text-muted-foreground"> · {count}</span> : null}
      </p>
      {children}
    </div>
  );
}

function Initials({ children, className }: { children: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "-ml-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-card text-[10px] font-medium first:ml-0",
        className
      )}
    >
      {children}
    </span>
  );
}

export function InsideTheMatter() {
  return (
    <section id="matter" className="w-full scroll-mt-20 border-b border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Inside the matter"
          title="It works inside the case, alongside your team."
          lead="Each case holds its documents, the work done on it, its standing tasks and its dates. Share it with your firm and everyone works from the same file."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-[0_24px_48px_-28px_rgba(0,0,0,0.2)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-5 sm:px-6">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Case</p>
              <p className="mt-1 font-heading text-xl font-medium">Arjun Reddy v. Kavitha Rao</p>
              <p className="mt-0.5 text-[13px] text-muted-foreground">
                O.S. No. 214 of 2024 · III Additional Senior Civil Judge
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="flex items-center gap-2.5 text-[13px] text-foreground/80">
                <span className="flex">
                  <Initials className="bg-muted text-muted-foreground">You</Initials>
                  <Initials className="bg-foreground/15 text-foreground">SA</Initials>
                  <Initials className="bg-foreground/5 text-foreground/80">JR</Initials>
                </span>
                Shared with your firm
              </p>
              <Link
                href={SIGNUP_URL}
                className="inline-flex min-h-11 items-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start work
              </Link>
            </div>
          </div>

          <div className="grid gap-4 bg-muted/40 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
            <Panel title="Upcoming">
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <StatusChip tone="attention" className="px-2 text-[11px]">Hearing</StatusChip>
                  <span className="text-xs font-medium text-red-700 dark:text-red-400">14 Nov</span>
                </div>
                <p className="text-[13px]">Arguments on the amendment petition</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <StatusChip tone="attention" className="px-2 text-[11px]">Deadline</StatusChip>
                  <span className="text-xs text-muted-foreground">18 Nov</span>
                </div>
                <p className="text-[13px]">File the rejoinder</p>
              </div>
            </Panel>

            <Panel title="Work" count={3}>
              <div className="flex items-center justify-between gap-2 text-[13px]">
                <span>Document brief</span>
                <StatusChip tone="done" className="px-2 text-[11px]">Full brief</StatusChip>
              </div>
              <div className="flex items-center justify-between gap-2 text-[13px]">
                <span>Tabular review · exhibits</span>
                <StatusChip tone="running" className="px-2 text-[11px]">Running</StatusChip>
              </div>
              <div className="flex items-center justify-between gap-2 text-[13px]">
                <span>Amendment petition</span>
                <StatusChip tone="waiting" className="px-2 text-[11px]">To review</StatusChip>
              </div>
            </Panel>

            <Panel title="Tasks" count={1}>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2 text-[13px]">
                  <span>Check the cause list</span>
                  <StatusChip tone="done" className="px-2 text-[11px]">Active</StatusChip>
                </div>
                <p className="text-xs text-muted-foreground">Daily, 8:00 · reports to this case</p>
              </div>
            </Panel>

            <Panel title="Documents" count={12}>
              <ul className="space-y-1.5 text-[13px]">
                <li>Plaint.pdf</li>
                <li>Written statement.pdf</li>
                <li>Deposition of DW1.pdf</li>
                <li className="text-xs text-muted-foreground">and 9 more</li>
              </ul>
            </Panel>
          </div>
        </div>
      </Container>
    </section>
  );
}
