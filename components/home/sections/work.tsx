import type { ReactNode } from "react";
import { Container, Label, SectionHeader, StatusChip, Tick } from "./primitives";

function WorkCard({
  title,
  chip,
  brief,
  foot,
  children,
}: {
  title: string;
  chip: ReactNode;
  brief: string;
  foot: string;
  children: ReactNode;
}) {
  return (
    <article className="flex min-w-0 flex-col gap-5 rounded-2xl border border-border bg-card p-6 text-card-foreground sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[15px] font-bold">{title}</h3>
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

const JOBS: { group: string; items: string[] }[] = [
  {
    group: "Litigation",
    items: ["Grounds of appeal", "Written submissions", "Cross-examination", "Limitation check", "Hearing prep", "Order sheet digest", "Reply / counter"],
  },
  {
    group: "Transactional",
    items: ["Review a contract", "Due diligence table", "Title / EC review", "Mark up their draft", "Term sheet → agreement", "Compliance checklist"],
  },
  {
    group: "Notices & correspondence",
    items: ["Legal notice", "Reply to a notice", "Email from inbox", "Client update", "Translate"],
  },
  {
    group: "Research",
    items: ["Case law research", "Find the provision", "Is it still good law?", "Compare court views", "Research memo"],
  },
];

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
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h3 className="font-heading text-xl font-medium">And the rest of the job</h3>
          <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {JOBS.map(({ group, items }) => (
              <div key={group} className="min-w-0">
                <Label className="mb-2.5">{group}</Label>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <li key={item} className="rounded-lg border border-border px-2.5 py-1 text-[13px] text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
