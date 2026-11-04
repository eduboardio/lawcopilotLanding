import type { ComponentType, ReactNode, SVGProps } from "react";
import { CalendarClock, FolderOpen, Inbox } from "lucide-react";
import { Container, Eyebrow, SectionTitle, StatusChip } from "./primitives";

const HOW = [
  { title: "You say what to do", detail: "What to watch or check, and how often." },
  { title: "It runs on its own", detail: "On that schedule, without you opening the app." },
  { title: "It reports back", detail: "Anything it would send waits for your approval." },
];

function TaskRow({
  icon: Icon,
  kind,
  status,
  title,
  schedule,
  children,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  kind: string;
  status: ReactNode;
  title: string;
  schedule: string;
  children?: ReactNode;
}) {
  return (
    <li className="flex flex-col gap-2 border-b border-border/70 px-5 py-4 last:border-0">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Icon aria-hidden className="h-3.5 w-3.5" />
          {kind}
        </span>
        {status}
      </div>
      <p className="text-[15px] font-medium leading-snug text-foreground">{title}</p>
      <p className="text-[13px] text-muted-foreground">{schedule}</p>
      {children ? <div className="mt-1">{children}</div> : null}
    </li>
  );
}

export function StandingJobs() {
  return (
    <section id="watch" className="w-full scroll-mt-20 border-b border-border bg-background py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-4">
          <Eyebrow>Standing jobs</Eyebrow>
          <SectionTitle>It keeps watch while you’re in court.</SectionTitle>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Some work isn’t one job — it’s every morning. Tell LawCopilot what to watch and how often, in your own
            words.
          </p>
          <ol className="mt-3 flex flex-col gap-4">
            {HOW.map((step, i) => (
              <li key={step.title} className="flex gap-3.5">
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-medium"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-medium text-foreground">{step.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-[0_24px_48px_-28px_rgba(0,0,0,0.2)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-3.5">
            <p className="text-[15px] font-medium">Tasks</p>
            <p className="text-[13px] text-muted-foreground">3 running on a schedule</p>
          </div>
          <ul>
            <TaskRow
              icon={CalendarClock}
              kind="Cause list"
              status={<StatusChip tone="done">Active</StatusChip>}
              title="Check the Telangana High Court cause list for WA/1026/2026"
              schedule="Every morning at 8:00 · Next run tomorrow, 8:00"
            >
              <p className="rounded-lg border border-border/70 bg-muted/40 px-3 py-2.5 text-[13px] leading-relaxed text-foreground/80">
                <span className="font-medium text-foreground">Today, 8:02</span> — Listed as item 14 before Court 3.
                Reported to the chat.
              </p>
            </TaskRow>

            <TaskRow
              icon={Inbox}
              kind="Inbox triage"
              status={<StatusChip tone="waiting">Waiting for approval</StatusChip>}
              title="Watch the client’s email on the Neem acquisition and draft replies"
              schedule="Every hour · Gmail"
            >
              <div className="overflow-hidden rounded-lg border border-border">
                <div className="px-3 py-2.5">
                  <p className="text-xs text-muted-foreground">Draft reply · Re: Revised disclosure schedule</p>
                  <p className="mt-1 font-reading text-sm leading-relaxed text-foreground">
                    Thank you for the revised schedule. We have gone through items 4 and 7 and have two points before
                    we can sign off…
                  </p>
                </div>
                <div className="flex justify-end gap-2 border-t border-border/70 bg-muted/40 p-2">
                  <span className="inline-flex min-h-9 items-center rounded-lg border border-border bg-card px-3.5 text-[13px] font-medium">
                    Discard
                  </span>
                  <span className="inline-flex min-h-9 items-center rounded-lg bg-foreground px-3.5 text-[13px] font-medium text-background">
                    Send
                  </span>
                </div>
              </div>
            </TaskRow>

            <TaskRow
              icon={FolderOpen}
              kind="Document collection"
              status={<StatusChip tone="done">Active</StatusChip>}
              title="Ask the client for the title documents still pending"
              schedule="Every Monday at 10:00 · Next run Monday, 10:00"
            />
          </ul>
        </div>
      </Container>
    </section>
  );
}
