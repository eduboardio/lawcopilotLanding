import Link from "next/link";
import { ArrowRight, BadgeCheck, FileCheck, Lock, MapPin } from "lucide-react";
import { Container } from "./primitives";

/*
 * Sits where other legal AI sites put a logo strip. Until there are customer
 * logos to show, the strongest early proof for Indian advocates is where their
 * files live and who can use them. Claims match the site's FAQ and compliance copy.
 */
const ITEMS = [
  { icon: MapPin, text: "Data stays in India" },
  { icon: FileCheck, text: "DPDP Act, 2023" },
  { icon: BadgeCheck, text: "SOC 2 · ISO 27001" },
  { icon: Lock, text: "Never used to train AI models" },
];

export function TrustBand() {
  return (
    <section aria-label="How your files are protected" className="w-full border-b border-border bg-muted/30">
      <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-7 gap-y-2.5">
          {ITEMS.map(({ icon: Icon, text }) => (
            <li key={text} className="inline-flex items-center gap-2 text-sm text-foreground/85">
              <Icon aria-hidden className="h-4 w-4 text-muted-foreground" />
              {text}
            </li>
          ))}
        </ul>
        <Link
          href="/#security"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          How we protect your files
          <ArrowRight aria-hidden className="h-3.5 w-3.5" />
        </Link>
      </Container>
    </section>
  );
}
