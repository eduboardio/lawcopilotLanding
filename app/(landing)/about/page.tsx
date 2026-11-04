import { ArrowUpRight, Linkedin } from "lucide-react";
import { ClosingCta } from "@/components/home/sections/closing-cta";
import { Container, Eyebrow, SectionHeader } from "@/components/home/sections/primitives";
import { BUSINESS } from "@/constants";

/*
 * About page: who builds LawCopilot, what they hold to, and who they are.
 * Kept short on purpose. Principles only restate what the product does and
 * what the site already claims elsewhere (FAQ, security section).
 */

const FACTS = [
  { term: "Company", detail: BUSINESS.legalName },
  { term: "Based in", detail: "Hyderabad, India" },
  { term: "Built for", detail: "Law firms and in-house legal teams" },
];

const PRINCIPLES = [
  {
    title: "Made for Indian legal work",
    detail:
      "Indian courts, procedure and documents — plaints, orders, paper books and cause lists — in English and major Indian languages.",
  },
  {
    title: "You make the calls",
    detail:
      "It asks when something is unclear, cites every statement to its source, and nothing leaves without your sign-off.",
  },
  {
    title: "Your files stay yours",
    detail:
      "Stored in India, never used to train AI models, and seen only by the people you share them with.",
  },
];

type TeamMember = {
  name: string;
  /** Shown beside the name when set, e.g. "Co-founder". */
  role?: string;
  linkedin: string;
};

const TEAM: TeamMember[] = [
  { name: "Manikanta Nath G P", linkedin: "https://www.linkedin.com/in/manikantanath/" },
  { name: "Chaitra Ravada", linkedin: "https://www.linkedin.com/in/chaitra-ravada-51733997/" },
  { name: "Kapil Trilok Chand", linkedin: "https://www.linkedin.com/in/kapil-trilok-chand-586872165/" },
  { name: "Bharath Budda", linkedin: "https://www.linkedin.com/in/bharath-budda-b02283137/" },
  { name: "Karthikeyan Polavarapu", linkedin: "https://www.linkedin.com/in/karthikeyan-polavarapu-75bb34337/" },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-background">
      <section className="relative w-full overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
        />
        <Container className="relative z-10 grid items-end gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16 lg:py-24">
          <div className="flex min-w-0 flex-col gap-5">
            <Eyebrow>About</Eyebrow>
            <h1 className="font-heading text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.015em] text-balance text-foreground sm:text-5xl lg:text-[3.5rem]">
              Legal AI that works like part of your team.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              LawCopilot reads the record, researches and drafts, then checks with you before anything leaves. We
              build it for legal teams across India.
            </p>
          </div>

          <dl className="min-w-0 divide-y divide-border rounded-2xl border border-border bg-card text-card-foreground">
            {FACTS.map(({ term, detail }) => (
              <div key={term} className="flex flex-col gap-0.5 px-5 py-3.5">
                <dt className="text-xs text-muted-foreground">{term}</dt>
                <dd className="text-[15px] text-foreground">{detail}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-0.5 px-5 py-3.5">
              <dt className="text-xs text-muted-foreground">Reach us</dt>
              <dd className="text-[15px]">
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {BUSINESS.email}
                </a>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="w-full border-b border-border py-20 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="What we hold to"
            title={<span id="principles-title">How we build it.</span>}
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {PRINCIPLES.map(({ title, detail }, index) => (
              <li key={title} className="flex flex-col gap-3 bg-card p-6 text-card-foreground sm:p-7">
                <span className="text-sm tabular-nums text-muted-foreground">0{index + 1}</span>
                <h3 className="font-heading text-xl font-semibold leading-snug text-foreground">{title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="team-title" className="w-full border-b border-border py-20 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Team"
            title={<span id="team-title">The people building it.</span>}
            lead="Legal and engineering experience in one team, based in Hyderabad."
          />
          <ul className="mt-10 max-w-3xl divide-y divide-border border-y border-border">
            {TEAM.map((member) => (
              <li key={member.linkedin}>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="group flex items-center justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="font-heading text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {member.name}
                    </span>
                    {member.role ? (
                      <span className="text-sm text-muted-foreground md:text-base">{member.role}</span>
                    ) : null}
                  </span>
                  <span
                    aria-hidden
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta />
    </div>
  );
}
