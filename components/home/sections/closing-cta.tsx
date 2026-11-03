import Link from "next/link";
import { Container, SIGNUP_URL } from "./primitives";

export function ClosingCta() {
  return (
    <section id="start" className="w-full scroll-mt-20 border-b border-white/10 bg-neutral-900 py-20 text-neutral-50 md:py-28">
      <Container className="flex flex-col items-start gap-7">
        <h2 className="max-w-3xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
          Bring LawCopilot onto your next matter.
        </h2>
        <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">Start with one file. See what comes back.</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={SIGNUP_URL}
            className="inline-flex min-h-12 items-center rounded-xl bg-neutral-50 px-5 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Assign your first matter
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-xl border border-white/25 px-5 text-base font-medium text-neutral-50 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Talk to us
          </Link>
        </div>
        <div aria-hidden className="mt-6 h-px w-full bg-white/10" />
        <p className="text-[15px] leading-relaxed text-neutral-300">
          Need the work done end to end?{" "}
          <Link href="/contact" className="text-neutral-50 underline underline-offset-4 hover:text-neutral-200">
            Ask us about managed matters.
          </Link>
        </p>
      </Container>
    </section>
  );
}
