import type { ReactNode } from "react";
import { FileText } from "lucide-react";
import { AgentMark, Container, Label, SectionHeader, StatusChip, Tick } from "./primitives";

function WorkCard({
  title,
  chip,
  brief,
  foot,
  children,
}: {
  title: string;
  chip: ReactNode;
  brief: ReactNode;
  foot: string;
  children: ReactNode;
}) {
  return (
    <article className="flex min-w-0 flex-col gap-5 rounded-2xl border border-border bg-card p-6 text-card-foreground sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[15px] font-semibold">{title}</h3>
        {chip}
      </div>
      <p className="font-reading text-xl leading-snug text-foreground sm:text-[1.3rem]">
        <span className="sr-only">Your brief: </span>“{brief}”
      </p>
      <div className="mt-auto min-w-0 rounded-xl border border-border bg-muted/40 p-4 sm:p-5">{children}</div>
      <p className="flex items-start gap-2 text-[13px] leading-snug text-foreground/80">
        <Tick className="mt-0.5" />
        {foot}
      </p>
    </article>
  );
}

function PageRef({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-background px-1.5 py-px text-[11px] tabular-nums text-foreground/80">
      {children}
    </span>
  );
}

const DATES = [
  { date: "18.06.2023", event: "Agreement of sale executed", page: "p. 4" },
  { date: "12.03.2024", event: "Suit for specific performance filed", page: "p. 1" },
  { date: "Dec 2025", event: "Earlier sale disclosed in cross-examination", page: "p. 37" },
];

const LEASES = [
  { doc: "Unit 4A", rent: ["₹2,40,000/mo", "p.3"], lockIn: ["36 months", "p.5"], exit: ["3 months’ notice", "p.11"] },
  { doc: "Unit 7", rent: ["₹1,85,000/mo", "p.2"], lockIn: ["24 months", "p.4"], exit: ["Breach only", "p.9"] },
  { doc: "Warehouse", rent: ["₹3,10,000/mo", "p.3"], lockIn: null, exit: null },
];

const PAGE_PLAN = [
  ["Index", "1"],
  ["Synopsis and list of dates", "2–8"],
  ["Impugned judgment", "9–40"],
  ["Special leave petition", "41–62"],
  ["Annexures P-1 to P-6", "63–118"],
];

// The rest of the team on the case, as they would appear in the product's case sharing.
const PEOPLE = [
  { initials: "MI", name: "Meera Iyer", note: "You", role: "Owner" },
  { initials: "KS", name: "Karthik Subramanian", note: null, role: "Member" },
  { initials: "RK", name: "Ramesh K.", note: "Clerk", role: "Viewer" },
];

/** How a WhatsApp mention reads in the brief. */
function Mention({ children }: { children: ReactNode }) {
  return <span className="text-emerald-700 dark:text-emerald-400">{children}</span>;
}

function Cell({ value }: { value: string[] | null }) {
  if (!value) return <span className="text-muted-foreground">Reading…</span>;
  return (
    <>
      {value[0]} <span className="text-[10px] text-muted-foreground">{value[1]}</span>
    </>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="w-full scroll-mt-20 border-b border-border bg-background py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="The work"
          title="Brief it like you’d brief a junior."
          lead="It comes back the way good work does: cited to the page, in your format, and waiting for your review."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <WorkCard
            title="Document brief"
            chip={<StatusChip tone="done">Ready</StatusChip>}
            brief="Brief me on this record before Thursday’s hearing."
            foot="Every statement has its page, every date is in its sentence."
          >
            <Label className="mb-3">List of dates</Label>
            <div className="grid grid-cols-[5.25rem_minmax(0,1fr)_auto] items-baseline gap-x-3 gap-y-2 text-[13px]">
              {DATES.map((row) => (
                <div key={row.date} className="contents">
                  <span className="tabular-nums text-muted-foreground">{row.date}</span>
                  <span className="text-foreground">{row.event}</span>
                  <PageRef>{row.page}</PageRef>
                </div>
              ))}
            </div>
          </WorkCard>

          <WorkCard
            title="Tabular review"
            chip={<StatusChip tone="running">Running</StatusChip>}
            brief="Go through these leases. Rent, lock-in and termination for each."
            foot="One row per document, one column per question, every cell cited."
          >
            <div className="-m-4 overflow-x-auto sm:-m-5">
              <table className="w-full min-w-[460px] border-collapse whitespace-nowrap text-left text-[13px]">
                <thead>
                  <tr className="border-b border-border">
                    {["Lease", "Rent", "Lock-in", "Termination"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LEASES.map((row) => (
                    <tr key={row.doc} className="border-b border-border/60 last:border-0">
                      <th scope="row" className="px-3 py-2.5 font-medium text-foreground">
                        {row.doc}
                      </th>
                      <td className="px-3 py-2.5 text-foreground/80">
                        <Cell value={row.rent} />
                      </td>
                      <td className="px-3 py-2.5 text-foreground/80">
                        <Cell value={row.lockIn} />
                      </td>
                      <td className="px-3 py-2.5 text-foreground/80">
                        <Cell value={row.exit} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </WorkCard>

          <WorkCard
            title="Paper book"
            chip={<StatusChip tone="plan">Plan to approve</StatusChip>}
            brief="Put together the paper book for the SLP."
            foot="Numbered, indexed and bookmarked. You approve the plan before it’s built."
          >
            <Label className="mb-2">Page plan</Label>
            <ol className="divide-y divide-border/70 text-[13px]">
              {PAGE_PLAN.map(([part, pages]) => (
                <li key={part} className="flex justify-between gap-3 py-1.5">
                  <span>{part}</span>
                  <span className="tabular-nums text-muted-foreground">{pages}</span>
                </li>
              ))}
            </ol>
          </WorkCard>

          <WorkCard
            title="Drafting"
            chip={<StatusChip tone="waiting">Ready for your review</StatusChip>}
            brief="Draft the Order 6 Rule 17 petition for O.S. No. 214 of 2024."
            foot="Follows your templates. Its edits arrive as tracked changes, in Word too."
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Label>Affidavit · para 3</Label>
              <span className="text-[11px] text-muted-foreground">1 tracked change</span>
            </div>
            <p className="rounded-md border border-border bg-background px-4 py-3.5 font-reading text-[15px] leading-relaxed text-foreground">
              3. The Defendants submit that the facts regarding{" "}
              <del className="text-red-700 dark:text-red-400">the property</del>{" "}
              <ins className="bg-emerald-500/10 text-emerald-700 underline decoration-emerald-600/50 underline-offset-2 dark:text-emerald-400">
                the prior alienation of the suit schedule property
              </ins>{" "}
              came to their knowledge only during the cross-examination in December 2025.
            </p>
          </WorkCard>

          <WorkCard
            title="Joins the case"
            chip={<StatusChip tone="done">Up to speed</StatusChip>}
            brief="Join O.S. 214 with Karthik and me. Get up to speed."
            foot="It reads everything in the case, and whatever is added later. Anyone on the case can hand it work."
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Label>People on this case</Label>
              <span className="text-[11px] tabular-nums text-muted-foreground">O.S. No. 214 of 2024</span>
            </div>
            <ul className="flex flex-col gap-1 text-[13px]">
              {PEOPLE.map((person) => (
                <li key={person.name} className="flex items-center gap-3 py-1.5">
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[11px] font-medium text-foreground/80"
                  >
                    {person.initials}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-foreground">
                    {person.name}
                    {person.note ? <span className="text-muted-foreground"> · {person.note}</span> : null}
                  </span>
                  <span className="text-muted-foreground">{person.role}</span>
                </li>
              ))}
              <li className="-mx-2 mt-1 flex items-center gap-3 rounded-lg border border-border bg-background px-2 py-2">
                <AgentMark size={28} />
                <span className="min-w-0 flex-1">
                  <span className="block text-foreground">LawCopilot</span>
                  <span className="block text-[11px] leading-snug text-muted-foreground">
                    Added just now · read 14 documents, 312 pages
                  </span>
                </span>
                <span className="text-muted-foreground">Member</span>
              </li>
            </ul>
          </WorkCard>

          <WorkCard
            title="On WhatsApp"
            chip={<StatusChip tone="done">Replied</StatusChip>}
            brief={
              <>
                <Mention>@LawCopilot</Mention> add this to O.S. 214. Next date?
              </>
            }
            foot="Tag it in your team’s group or message it directly. What you send it goes into the case."
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Label>Litigation team</Label>
              <span className="text-[11px] text-muted-foreground">WhatsApp group</span>
            </div>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <div className="ml-auto flex max-w-[85%] items-center gap-3 rounded-xl rounded-tr-sm border border-emerald-600/20 bg-emerald-500/10 px-3 py-2.5">
                <FileText aria-hidden className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0">
                  <span className="block truncate text-foreground">Order dated 03.11.2026.pdf</span>
                  <span className="block text-[11px] text-muted-foreground">2 pages · PDF</span>
                </span>
              </div>
              <div className="mr-auto max-w-[94%] rounded-xl rounded-tl-sm border border-border bg-background px-3.5 py-3">
                <p className="mb-1.5 flex items-center gap-1.5 text-[12px] font-medium text-foreground">
                  <AgentMark size={16} />
                  LawCopilot
                </p>
                <p className="leading-relaxed text-foreground">
                  Added to O.S. No. 214 of 2024. The amendment is allowed. Next date{" "}
                  <span className="tabular-nums">18.11.2026</span>, for evidence of DW2, and the amended
                  written statement is due before then. <PageRef>p. 2</PageRef>
                </p>
              </div>
            </div>
          </WorkCard>
        </div>
      </Container>
    </section>
  );
}
