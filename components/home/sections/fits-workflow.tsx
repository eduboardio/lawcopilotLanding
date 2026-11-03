import { FileText, FolderOpen, Mail, Monitor } from "lucide-react";
import { Container } from "./primitives";

// Written as jobs ("give it X, get Y") rather than a list of integrations.
const TOOLS = [
  { icon: FileText, name: "Word", job: "Send a .docx, get it back with tracked changes." },
  { icon: Mail, name: "Gmail", job: "Point it at a thread, get a reply to approve." },
  { icon: FolderOpen, name: "Google Drive", job: "Pick files from Drive, get a brief back." },
  { icon: Monitor, name: "Desktop app", job: "Close the window, get a ping when it’s done." },
];

export function FitsWorkflow() {
  return (
    <section id="fits" className="w-full scroll-mt-20 border-b border-border bg-background py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] lg:gap-14">
        <h2 className="font-heading text-[2rem] font-semibold leading-tight tracking-[-0.01em] text-balance">
          Works where you already work.
        </h2>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map(({ icon: Icon, name, job }) => (
            <li key={name} className="flex min-w-0 flex-col gap-2.5">
              <p className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground">
                <Icon aria-hidden className="h-4 w-4" />
                {name}
              </p>
              <p className="font-reading text-lg leading-snug text-foreground">{job}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
