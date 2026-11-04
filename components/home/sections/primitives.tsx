import type { ReactNode } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const SIGNUP_URL = "https://app.lawcopilot.io/signup";

/**
 * Status tones, matched to the app: green for done, yellow for anything
 * waiting on the advocate, blue for a plan to approve, red for dates that
 * need attention, and a plain spinner while work is running.
 */
export type Tone = "neutral" | "running" | "waiting" | "done" | "plan" | "attention";

const TONES = new Map<Tone, string>([
  ["neutral", "border-border bg-muted text-muted-foreground"],
  ["running", "border-border bg-background text-foreground"],
  ["waiting", "border-yellow-500/30 bg-yellow-500/10 text-yellow-800 dark:text-yellow-300"],
  ["done", "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"],
  ["plan", "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300"],
  ["attention", "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400"],
]);

export function StatusChip({
  tone,
  children,
  className,
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium",
        TONES.get(tone),
        className
      )}
    >
      {tone === "running" ? (
        <LoaderCircle aria-hidden className="h-3 w-3 animate-spin motion-reduce:animate-none" />
      ) : null}
      {children}
    </span>
  );
}

export function Tick({ className }: { className?: string }) {
  return (
    <Check
      aria-hidden
      strokeWidth={2.75}
      className={cn("h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-500", className)}
    />
  );
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-heading text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.015em] text-balance text-foreground sm:text-5xl lg:text-[3.5rem]",
        className
      )}
    >
      {children}
    </h2>
  );
}

/** Eyebrow, title and an optional lead, stacked and left-aligned so the lead reads as part of the title. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle>{title}</SectionTitle>
      {lead ? <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p> : null}
    </div>
  );
}

/** Small uppercase label used inside cards and previews. */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

/** The LawCopilot mark in a small round frame, used wherever the agent is named as an assignee. */
export function AgentMark({ size = 20 }: { size?: number }) {
  const inner = Math.round(size * 0.6);
  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-background"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" width={inner} height={inner} className="dark:invert" />
    </span>
  );
}
