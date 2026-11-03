"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, CircleHelp, FileText, LoaderCircle, Minus, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AgentMark, StatusChip, type Tone } from "./primitives";

/*
 * The hero's matter card. It mirrors the app's run trail (one rail, one row per
 * step, the same step names and markers) and walks through the five moments of
 * a delegated job: the brief, a question, the work, the review and the sign-off.
 *
 * The card never changes size between stages. Every stage is rendered once,
 * invisibly, in the same grid cell as the visible one, so the cell is always as
 * tall as the tallest stage at the current width — whatever the viewport.
 */

type StepKey = "read" | "ask" | "law" | "precedent" | "draft" | "check";
type StepState = "plan" | "running" | "done";

type StepCopy = { plan: string; running: string; done: string; meta: string; took: string; startedAt: number };

const STEPS = new Map<StepKey, StepCopy>([
  [
    "read",
    {
      plan: "Read the case file",
      running: "Reading the case file",
      done: "Read the case file",
      meta: "Plaint, written statement and deposition of DW1",
      took: "38s",
      startedAt: 12,
    },
  ],
  [
    "ask",
    {
      plan: "Answer a question",
      running: "Waiting for your answer",
      done: "Answered · 1 question",
      meta: "Learnt of the earlier sale in cross-examination, Dec 2025",
      took: "",
      startedAt: 0,
    },
  ],
  [
    "law",
    {
      plan: "Search case law",
      running: "Searching case law",
      done: "Searched case law",
      meta: "Vidyabai v. Padmalatha, (2009) 2 SCC 409, and 5 more",
      took: "1m 12s",
      startedAt: 31,
    },
  ],
  [
    "precedent",
    {
      plan: "Load a drafting precedent",
      running: "Loading a drafting precedent",
      done: "Loaded a drafting precedent",
      meta: "From your knowledge base: I.A. for amendment of pleadings",
      took: "4s",
      startedAt: 2,
    },
  ],
  [
    "draft",
    {
      plan: "Prepare the draft",
      running: "Preparing the draft",
      done: "Prepared the draft",
      meta: "Petition and supporting affidavit, in court format",
      took: "2m 05s",
      startedAt: 41,
    },
  ],
  [
    "check",
    {
      plan: "Check the draft",
      running: "Checking the draft",
      done: "Checked the draft",
      meta: "Every authority cited, every date matched to the record",
      took: "21s",
      startedAt: 6,
    },
  ],
]);

type Stage = {
  label: string;
  chip: { tone: Tone; text: string };
  rows: [StepKey, StepState][];
  /** How long the walkthrough stays on this stage, in ms. */
  dwell: number;
};

const ALL_DONE: [StepKey, StepState][] = [
  ["read", "done"],
  ["ask", "done"],
  ["law", "done"],
  ["precedent", "done"],
  ["draft", "done"],
  ["check", "done"],
];

const STAGES: Stage[] = [
  {
    label: "Brief",
    chip: { tone: "neutral", text: "Assigned · just now" },
    rows: [
      ["read", "plan"],
      ["law", "plan"],
      ["precedent", "plan"],
      ["draft", "plan"],
      ["check", "plan"],
    ],
    dwell: 3200,
  },
  {
    label: "It asks",
    chip: { tone: "waiting", text: "Needs your answer" },
    rows: [["read", "done"]],
    dwell: 4600,
  },
  {
    label: "It works",
    chip: { tone: "running", text: "Working" },
    rows: [
      ["read", "done"],
      ["ask", "done"],
      ["law", "done"],
      ["precedent", "done"],
      ["draft", "running"],
      ["check", "plan"],
    ],
    dwell: 5200,
  },
  {
    label: "You review",
    chip: { tone: "waiting", text: "Ready for review" },
    rows: ALL_DONE,
    dwell: 4200,
  },
  {
    label: "You sign",
    chip: { tone: "done", text: "Signed off" },
    rows: ALL_DONE,
    dwell: 3600,
  },
];

const WORKING = 2;
const ANSWERS = [
  "During cross-examination, December 2025",
  "Before the written statement was filed",
  "Something else — I’ll explain",
];

function stageAt(index: number) {
  return STAGES.at(index) ?? STAGES[2];
}

function clock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const primaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-foreground bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** A button on the live layer; an identically sized, inert span on the sizing layers. */
function Action({
  ghost,
  className,
  onClick,
  children,
}: {
  ghost?: boolean;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (ghost) return <span className={className}>{children}</span>;
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

/**
 * Renders every stage in one grid cell: the hidden ones only reserve space, the
 * live one sits on top. `render(i, ghost)` draws stage `i`.
 */
function SameSize({
  active,
  className,
  layerClassName,
  render,
}: {
  active: number;
  className?: string;
  layerClassName?: string;
  render: (index: number, ghost: boolean) => ReactNode;
}) {
  return (
    <div className={cn("grid", className)}>
      {STAGES.map((stage, i) => (
        <div key={stage.label} aria-hidden className={cn("invisible col-start-1 row-start-1 min-w-0", layerClassName)}>
          {render(i, true)}
        </div>
      ))}
      <div className={cn("col-start-1 row-start-1 min-w-0", layerClassName)}>{render(active, false)}</div>
    </div>
  );
}

function Marker({ state }: { state: StepState }) {
  return (
    <span className="relative z-10 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-card ring-1 ring-border">
      {state === "done" ? (
        <Check aria-hidden strokeWidth={3} className="h-3 w-3 text-emerald-600 dark:text-emerald-500" />
      ) : state === "running" ? (
        <LoaderCircle aria-hidden className="h-3 w-3 animate-spin text-foreground motion-reduce:animate-none" />
      ) : (
        <Minus aria-hidden className="h-2.5 w-2.5 text-muted-foreground" />
      )}
    </span>
  );
}

function QuestionCard({
  ghost,
  answer,
  onAnswer,
  onConfirm,
}: {
  ghost: boolean;
  answer: number;
  onAnswer: (i: number) => void;
  onConfirm: () => void;
}) {
  return (
    <div className="mb-3 ml-[30px] overflow-hidden rounded-xl border border-border bg-background">
      <div className="space-y-2 px-4 py-3">
        <p className="flex items-center gap-2 text-[13px] font-medium">
          <CircleHelp aria-hidden className="h-4 w-4" />
          One question before drafting
        </p>
        <fieldset className="space-y-1">
          <legend className="mb-2 font-reading text-[15px] leading-snug text-foreground">
            When did the defendants first learn of the earlier sale?
          </legend>
          {ANSWERS.map((option, i) => {
            const selected = answer === i;
            return (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-ring",
                  selected ? "border-foreground text-foreground" : "border-border text-foreground/80 hover:bg-muted/60"
                )}
              >
                {ghost ? null : (
                  <input
                    type="radio"
                    name="hero-question"
                    className="sr-only"
                    checked={selected}
                    onChange={() => onAnswer(i)}
                  />
                )}
                <span
                  aria-hidden
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 rounded-full",
                    selected ? "border-4 border-foreground" : "border-[1.5px] border-muted-foreground/60"
                  )}
                />
                {option}
              </label>
            );
          })}
        </fieldset>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/70 bg-muted/40 py-2 pl-4 pr-2">
        <span className="text-xs text-muted-foreground">Enter to confirm · or reply in the chat</span>
        <Action ghost={ghost} onClick={onConfirm} className={primaryButton}>
          Confirm
        </Action>
      </div>
    </div>
  );
}

export function MatterCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();

  const [stage, setStage] = useState(WORKING);
  const [autoplay, setAutoplay] = useState(true);
  const [answer, setAnswer] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const current = stageAt(stage);

  // Respect reduced motion: hold on the working view unless the visitor presses play.
  useEffect(() => {
    if (reduceMotion) setAutoplay(false);
  }, [reduceMotion]);

  // Walk through the stages while the card is on screen.
  useEffect(() => {
    if (!autoplay || !inView) return;
    const timer = setTimeout(() => setStage((s) => (s + 1) % STAGES.length), current.dwell);
    return () => clearTimeout(timer);
  }, [stage, autoplay, inView, current.dwell]);

  // The running step's clock, like the app's live trail.
  useEffect(() => {
    setElapsed(0);
    if (stage !== WORKING || reduceMotion) return;
    const tick = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(tick);
  }, [stage, reduceMotion]);

  const goTo = (next: number) => {
    setAutoplay(false);
    setStage(next);
  };

  const renderTrail = (index: number, ghost: boolean) => {
    const { rows } = stageAt(index);
    return (
      <>
        <ol aria-label={ghost ? undefined : "Steps"} className="flex flex-col">
          {rows.map(([key, state], i) => {
            const step = STEPS.get(key);
            if (!step) return null;
            const took =
              state === "done" ? step.took : state === "running" ? clock(step.startedAt + (ghost ? 0 : elapsed)) : "";
            return (
              <motion.li
                key={key}
                initial={ghost ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.25, delay: i * 0.04 }}
                className="flex gap-3"
              >
                <span className="flex w-[18px] shrink-0 flex-col items-center">
                  <Marker state={state} />
                  {i < rows.length - 1 ? <span className="mt-0.5 w-px flex-1 bg-border" /> : null}
                </span>
                <div className="flex min-w-0 flex-1 justify-between gap-3 pb-3">
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-sm font-medium leading-[18px]",
                        state === "plan" ? "text-muted-foreground" : "text-foreground"
                      )}
                    >
                      {state === "done" ? step.done : state === "running" ? step.running : step.plan}
                    </p>
                    <p className="mt-0.5 hidden text-[13px] leading-snug text-muted-foreground sm:block">{step.meta}</p>
                  </div>
                  <span className="shrink-0 text-xs leading-[18px] tabular-nums text-muted-foreground">{took}</span>
                </div>
              </motion.li>
            );
          })}
        </ol>
        {index === 1 ? (
          <motion.div
            initial={ghost ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
          >
            <QuestionCard
              ghost={ghost}
              answer={answer}
              onAnswer={(i) => {
                setAutoplay(false);
                setAnswer(i);
              }}
              onConfirm={() => goTo(WORKING)}
            />
          </motion.div>
        ) : null}
      </>
    );
  };

  const renderFooter = (index: number, ghost: boolean) => {
    if (index === 0) {
      return (
        <p className="text-sm leading-relaxed text-foreground/80">
          It has the file and a plan. Each step shows here.
        </p>
      );
    }
    if (index === 1) {
      return <p className="text-sm leading-relaxed text-foreground/80">Paused for your answer. It asks rather than guesses.</p>;
    }
    if (index === WORKING) {
      return (
        <p className="text-sm leading-relaxed text-foreground/80">
          Close the window — the desktop app pings you when it’s done.
        </p>
      );
    }
    if (index === 3) {
      return (
        <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
              <FileText aria-hidden className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Amendment petition</p>
              <p className="truncate text-xs text-muted-foreground">Petition and affidavit · changes tracked</p>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <Action ghost={ghost} onClick={() => setAutoplay(false)} className={secondaryButton}>
              Open draft
            </Action>
            <Action ghost={ghost} onClick={() => goTo(4)} className={primaryButton}>
              Sign off
            </Action>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
        <p className="flex items-center gap-2.5 text-sm">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600">
            <Check aria-hidden strokeWidth={3} className="h-3 w-3 text-white" />
          </span>
          <span>
            <span className="font-medium">Signed off by you.</span> Ready to file.
          </span>
        </p>
        <Action ghost={ghost} onClick={() => goTo(0)} className={secondaryButton}>
          Next task
        </Action>
      </div>
    );
  };

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <article
        aria-label="A matter LawCopilot is working on"
        className="overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]"
      >
        <div className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="min-w-0 sm:flex-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Case · O.S. No. 214 of 2024
            </p>
            <p className="mt-1 font-heading text-lg font-medium">Arjun Reddy v. Kavitha Rao</p>
            <p className="mt-0.5 text-[13px] text-muted-foreground">
              III Addl. Senior Civil Judge, L.B. Nagar
            </p>
          </div>
          <SameSize
            active={stage}
            className="shrink-0 justify-items-start sm:justify-items-end"
            render={(i) => (
              <StatusChip tone={stageAt(i).chip.tone} className="text-[13px]">
                {stageAt(i).chip.text}
              </StatusChip>
            )}
          />
        </div>

        <div className="space-y-3 border-b border-border/70 px-5 py-4 sm:px-6">
          <div className="flex gap-3">
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-medium text-muted-foreground"
            >
              You
            </span>
            <p className="font-reading text-[15px] leading-relaxed text-foreground sm:text-base">
              <span className="sr-only">Your brief: </span>
              Draft a petition to amend our written statement under Order 6 Rule 17 CPC. New facts on ownership came
              out in cross-examination.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pl-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border py-0.5 pl-0.5 pr-2.5 text-xs font-medium">
              <AgentMark size={20} />
              Assigned to LawCopilot
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
              <FileText aria-hidden className="h-3 w-3" />
              Following your templates
            </span>
          </div>
        </div>

        <SameSize active={stage} className="px-5 pt-4 sm:px-6" render={renderTrail} />

        <SameSize
          active={stage}
          className="border-t border-border/70 bg-muted/40 px-5 py-3 sm:px-6"
          layerClassName="flex flex-col justify-center"
          render={renderFooter}
        />
      </article>

      <div className="flex items-stretch gap-1.5">
        <div role="group" aria-label="Walk through the matter" className="grid flex-1 grid-cols-5 gap-1.5">
          {STAGES.map((s, i) => {
            const on = i === stage;
            return (
              <button
                key={s.label}
                type="button"
                aria-pressed={on}
                onClick={() => goTo(i)}
                className={cn(
                  "flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl border px-1 py-1.5 text-xs font-medium leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  on
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-foreground hover:bg-muted"
                )}
              >
                <span className={cn("text-[11px]", on ? "text-background/70" : "text-muted-foreground")}>{i + 1}</span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setAutoplay((on) => !on)}
          aria-label={autoplay ? "Pause the walkthrough" : "Play the walkthrough"}
          className="flex w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {autoplay ? <Pause aria-hidden className="h-4 w-4" /> : <Play aria-hidden className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
