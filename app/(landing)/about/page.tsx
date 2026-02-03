"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Sparkles,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Award
} from "lucide-react";

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Legal Expertise First",
    description:
      "Built by legal professionals who understand the unique challenges of legal practice. We don't just build technology—we build it around the way lawyers think, work, and win."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User-Centric Design",
    description:
      "Every feature is crafted to solve real-world challenges faced by legal professionals. Designed with extensive input from attorneys, paralegals, and legal researchers."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Precision & Accuracy",
    description:
      "Advanced AI models trained specifically on legal language and concepts, ensuring accuracy and reliability in every analysis and recommendation."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Continuous Innovation",
    description:
      "Dedicated to continuous improvement through user feedback and technological advancement. We're always evolving to meet the changing needs of the legal profession."
  }
];

const principles = [
  {
    number: "01",
    title: "Better, Together",
    description:
      "We believe the best ideas come from collective thinking. Collaboration isn't a process—it's our foundation. We build, test, and learn together."
  },
  {
    number: "02",
    title: "Curiosity & Clarity",
    description:
      "We approach every problem with curiosity and rigour. Whether it's a complex legal challenge or a small product detail, we look for smarter, simpler ways forward."
  },
  {
    number: "03",
    title: "Shared Success",
    description:
      "We grow by helping each other grow. Your success is our success, and we're committed to building tools that truly make a difference."
  }
];

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
              Our Story
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">
              Empowering Legal
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              Excellence
            </span>
          </h1>

          <p className="mx-auto text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            We&apos;re building AI tools that work like your smartest legal teammate—speeding up
            research, simplifying drafting, spotting risks, and unlocking insights.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 container mx-auto px-6 py-8 md:py-12">
        <div className="grid gap-16 md:gap-20 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
              <Target className="h-7 w-7 text-foreground dark:text-white" />
            </div>

            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Our Mission
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              <p>
                At Law Copilot, we&apos;re on a mission to make legal intelligence effortless and
                accessible—for everyone.
              </p>

              <p>
                We&apos;re building AI tools that work like your smartest legal teammate speeding up
                research, simplifying drafting, spotting risks, and unlocking insights, so legal
                professionals can focus on strategy and impact, not paperwork.
              </p>

              <p>
                Whether you&apos;re a solo lawyer, a fast-growing startup, or an individual with a legal
                question, Law Copilot helps you work smarter, not harder. We&apos;re here to level the
                legal playing field with tech that&apos;s powerful, intuitive, and human-centered.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
              <Eye className="h-7 w-7 text-foreground dark:text-white" />
            </div>

            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Our Vision
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              <p>
                This is the future of law—AI-powered, people-first, and built for everyone.
              </p>

              <p>
                At Law Copilot, we believe that the future of legal work isn&apos;t coming. It&apos;s already
                here. AI is reshaping how people understand, access, and practice law—and we&apos;re at
                the forefront of that transformation.
              </p>

              <p>
                Our vision is bold but simple: legal expertise, powered by AI, made available to
                all. We&apos;re creating a future where AI makes legal help faster, fairer, and always
                within reach. This is how the law will work tomorrow. And with Law Copilot, it
                starts today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
            What Sets Us Apart
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
            The principles that guide everything we build
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/[0.05]" />

              <div className="relative rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all dark:border-white/10 dark:bg-white/[0.02]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                  <div className="text-foreground dark:text-white">{value.icon}</div>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl dark:text-white">
                  {value.title}
                </h3>

                <p className="leading-relaxed text-muted-foreground dark:text-white/70">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <Lightbulb className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
              Our Philosophy
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
            How We Work
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
            The principles that shape our culture and our product
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div className="mb-4 inline-block rounded-lg bg-foreground/10 px-4 py-2 text-2xl font-bold text-foreground dark:bg-white/10 dark:text-white">
                {principle.number}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground dark:text-white">
                {principle.title}
              </h3>

              <p className="leading-relaxed text-muted-foreground dark:text-white/70">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
              <Users className="h-7 w-7 text-foreground dark:text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Our Team
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
            <p>
              Law Copilot was founded on a simple belief: Legal professionals deserve technology
              that truly simplifies their world.
            </p>

            <p>
              Our team brings together a lawyer with firsthand experience facing real-world legal
              challenges, and three engineers with deep expertise in advanced software architecture,
              data science, artificial intelligence, and scalable system design—focused on building
              solutions that legal professionals can rely on.
            </p>

            <p>
              With firsthand experience in litigation, deep expertise in AI, and a commitment to
              ethical practice, we&apos;ve created solutions that are:
            </p>

            <ul className="space-y-3 pl-6">
              {[
                "Designed for real legal challenges — not tech fantasies",
                "Built for scale — from solo advocates to large firms",
                "Rooted in trust — with confidentiality, compliance, and professionalism at our core"
              ].map((item, idx) => (
                <li key={idx} className="relative flex items-start gap-3 pl-6">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-foreground/40 dark:bg-white/40"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-foreground/[0.03] to-transparent p-8 backdrop-blur-sm dark:border-white/10 dark:from-white/[0.05]">
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10 dark:bg-white/10">
                  <Award className="h-6 w-6 text-foreground dark:text-white" />
                </div>
                <p className="text-lg font-semibold text-foreground md:text-xl dark:text-white">
                  At Law Copilot, we&apos;re not here to replace the lawyer. We&apos;re here to supercharge
                  their potential.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}