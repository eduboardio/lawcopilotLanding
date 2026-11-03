import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeader, Tick } from "./primitives";

function Pillar({
  n,
  title,
  body,
  highlight = false,
  children,
}: {
  n: string;
  title: string;
  body: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <li
      className={cn(
        "flex min-w-0 flex-col gap-2.5 rounded-2xl border p-6",
        highlight ? "border-emerald-500/30 bg-emerald-500/[0.06]" : "border-border bg-card"
      )}
    >
      <span
        className={cn(
          "text-[13px] font-medium",
          highlight ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground"
        )}
      >
        {n}
      </span>
      <h3 className="font-heading text-[1.35rem] font-medium leading-tight text-balance">{title}</h3>
      <p className="text-[15px] leading-relaxed text-foreground/80">{body}</p>
      <div className="mt-auto pt-3">{children}</div>
    </li>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="w-full scroll-mt-20 border-b border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeader
          layout="stack"
          eyebrow="How it works with you"
          title="You stay the advocate on record."
          lead="LawCopilot does the groundwork the way a careful junior would. The judgment calls, and the signature, stay with you."
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Pillar
            n="01"
            title="Asks before it guesses"
            body="When the brief leaves a gap, it stops and asks — one question, answered in a click."
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[13px]">
              <Tick />
              Answered · 1 question
            </span>
          </Pillar>

          <Pillar
            n="02"
            title="Shows every step"
            body="Every file it read, search it ran and source it used, in order, with how long each took."
          >
            <div className="space-y-1.5 text-[13px]">
              <p className="flex justify-between gap-2">
                <span className="inline-flex items-center gap-2">
                  <Tick />
                  Searched case law
                </span>
                <span className="tabular-nums text-muted-foreground">1m 12s</span>
              </p>
              <p className="flex justify-between gap-2">
                <span className="inline-flex items-center gap-2">
                  <Tick />
                  Retrieved statutory provisions
                </span>
                <span className="tabular-nums text-muted-foreground">9s</span>
              </p>
            </div>
          </Pillar>

          <Pillar
            n="03"
            title="Checks its own work"
            body="Every statement is traced back to its page in the record, and every date is checked against it."
          >
            <span className="inline-flex items-center gap-2 text-[13px]">
              <Tick />
              Checked the draft
            </span>
          </Pillar>

          <Pillar
            n="04"
            title="Waits for your sign‑off"
            body="It returns the work for your approval. Edits arrive as tracked changes; nothing is sent without you."
            highlight
          >
            <span className="inline-flex min-h-9 items-center rounded-lg bg-foreground px-3.5 text-[13px] font-medium text-background">
              Approve and continue
            </span>
            <p className="mt-1.5 text-xs text-foreground/70">Can’t be undone · Enter to approve</p>
          </Pillar>
        </ol>
      </Container>
    </section>
  );
}
