"use client";

import { motion } from "framer-motion";
import { FoundersSection } from "@/components/home/FoundersSection";

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background - subtle and minimal */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.03] to-transparent dark:from-white/[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Empowering Legal Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We&apos;re building AI tools that work like your smartest legal teammate—speeding up research, 
            simplifying drafting, spotting risks, and unlocking insights.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                At Law Copilot, we&apos;re on a mission to make legal intelligence effortless and accessible—for everyone.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                We&apos;re building AI tools that work like your smartest legal teammate—speeding up research, simplifying drafting, 
                spotting risks, and unlocking insights—so legal professionals can focus on strategy and impact, not paperwork.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Whether you&apos;re a solo lawyer, a fast-growing startup, or an individual with a legal question, 
                Law Copilot helps you work smarter, not harder. We&apos;re here to level the legal playing field with tech 
                that&apos;s powerful, intuitive, and human-centered.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                This is the future of law—AI-powered, people-first, and built for everyone.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                At Law Copilot, we believe that the future of legal work isn&apos;t coming. It&apos;s already here. 
                AI is reshaping how people understand, access, and practice law—and we&apos;re at the forefront of that transformation.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our vision is bold but simple: legal expertise, powered by AI, made available to all. 
                We&apos;re creating a future where AI makes legal help faster, fairer, and always within reach. 
                This is how the law will work tomorrow. And with Law Copilot, it starts today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Sets Us Apart</h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">Legal Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built by legal professionals who understand the unique challenges of legal practice. 
                We don&apos;t just build technology—we build it around the way lawyers think, work, and win.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">User-Centric Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designed with extensive input from attorneys, paralegals, and legal researchers. 
                Every feature is crafted to solve real-world challenges faced by legal professionals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">Precision & Accuracy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced AI models trained specifically on legal language and concepts, 
                ensuring accuracy and reliability in every analysis and recommendation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">Continuous Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to continuous improvement through user feedback and technological advancement. 
                We&apos;re always evolving to meet the changing needs of the legal profession.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Founders Section Component */}
      <FoundersSection />

      {/* Team Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Team</h2>
          
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Law Copilot was founded on a simple belief: Legal professionals deserve technology that 
              truly simplifies their world.
            </p>
            
            <p>
              Our team brings together a lawyer with firsthand experience facing real-world legal challenges, 
              and three engineers with deep expertise in advanced software architecture, data science, 
              artificial intelligence, and scalable system design—focused on building solutions that legal 
              professionals can rely on.
            </p>
            
            <p>
              With firsthand experience in litigation, deep expertise in AI, and a commitment to ethical practice, 
              we&apos;ve created solutions that are:
            </p>
            
            <ul className="space-y-3 pl-6">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                Designed for real legal challenges — not tech fantasies
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                Built for scale — from solo advocates to large firms
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                Rooted in trust — with confidentiality, compliance, and professionalism at our core
              </li>
            </ul>
            
            <p className="text-lg md:text-xl font-medium text-foreground pt-4">
              At Law Copilot, we&apos;re not here to replace the lawyer. We&apos;re here to supercharge their potential.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}