import { FileCheck, Lock, MapPin, ShieldCheck } from "lucide-react";
import { Container, SectionHeader } from "./primitives";

// Claims mirror the wording already used on the site (ComplianceBadges, Benefits).
const ITEMS = [
  { icon: MapPin, title: "Data stays in India", body: "Your files are stored and processed with Indian data residency." },
  { icon: ShieldCheck, title: "SOC 2", body: "We meet SOC 2 requirements for secure handling of data across our systems." },
  { icon: Lock, title: "ISO 27001", body: "Certified to the international standard for information security management." },
  { icon: FileCheck, title: "DPDP Act, 2023", body: "Compliant with India’s Digital Personal Data Protection Act." },
];

export function Confidentiality() {
  return (
    <section id="security" className="w-full scroll-mt-20 border-b border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeader layout="stack" eyebrow="Confidentiality" title="As confidential as your own chambers." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-6">
              <Icon aria-hidden className="h-6 w-6 text-foreground" />
              <h3 className="text-base font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">{body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-foreground/80">
          Need a conversation kept off the record? Private chats are deleted after 7 days without activity.
        </p>
      </Container>
    </section>
  );
}
