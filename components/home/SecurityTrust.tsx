"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Server,
  FileCheck,
  Eye,
  AlertCircle
} from "lucide-react";

export const SecurityTrust = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background py-32 md:py-40">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl dark:text-white">
            Security and Compliance
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl dark:text-white/70">
            Enterprise-grade security infrastructure designed for the strict confidentiality requirements of legal practice.
          </p>
        </motion.div>

        {/* Main Grid - 2x2 Enterprise Style */}
        <div className="mb-20 grid gap-px bg-border md:grid-cols-2 dark:bg-white/10">
          {[
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "End-to-end encryption, SOC 2 compliant infrastructure, and regular third-party security audits ensure your data remains protected."
            },
            {
              icon: Lock,
              title: "Data Confidentiality",
              description: "Your client data and case information remain strictly confidential. We never use your data to train AI models or share with third parties."
            },
            {
              icon: Server,
              title: "Indian Data Residency",
              description: "All data processed and stored within Indian jurisdiction, ensuring compliance with local data protection regulations and legal standards."
            },
            {
              icon: FileCheck,
              title: "Access Controls",
              description: "Role-based permissions, audit logs, and multi-factor authentication provide granular control over who can access sensitive legal information."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-10 dark:bg-white/[0.03]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted dark:bg-white/10">
                  <Icon className="h-6 w-6 text-foreground dark:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="rounded-none border-y border-border bg-card/30 px-8 py-12 md:px-12 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <div className="inline-flex items-center gap-3 text-muted-foreground dark:text-white/60">
                <div className="h-px w-12 bg-border dark:bg-white/20"></div>
                <span className="text-xs font-medium uppercase tracking-wider">Compliance Standards</span>
                <div className="h-px w-12 bg-border dark:bg-white/20"></div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
                Law Copilot maintains compliance with Indian data protection frameworks, implements industry-standard security protocols, and adheres to professional responsibility guidelines established for legal technology platforms.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/70 dark:text-white/40">
                <span>Data Encryption</span>
                <span>•</span>
                <span>Secure Infrastructure</span>
                <span>•</span>
                <span>Regular Audits</span>
                <span>•</span>
                <span>Indian Residency</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card/50 p-10 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted dark:bg-white/10">
                <AlertCircle className="h-5 w-5 text-foreground dark:text-white" />
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground dark:text-white">
                  Professional Responsibility
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                  Law Copilot is designed to assist legal professionals with research, analysis, and drafting. It does not replace professional legal judgment or the requirement for human review. Users remain solely responsible for all legal work product, ethical compliance, and professional conduct. All AI-generated content must be verified against primary sources and applicable standards of practice.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-border pt-16 dark:border-white/10"
        >
          <div className="mb-10 text-center">
            <h3 className="mb-3 text-2xl font-semibold text-foreground dark:text-white">
              Enterprise Deployment
            </h3>
            <p className="text-sm text-muted-foreground dark:text-white/60">
              Additional capabilities available for law firms and corporate legal teams
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Audit Trails",
                description: "Comprehensive logging of all actions and access for compliance tracking"
              },
              {
                icon: Shield,
                title: "Team Management",
                description: "Role-based access controls and permissions for firm-wide deployment"
              },
              {
                icon: FileCheck,
                title: "Security Documentation",
                description: "Detailed security and compliance documentation available upon request"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted dark:bg-white/5">
                    <Icon className="h-6 w-6 text-foreground/70 dark:text-white/70" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground dark:text-white/60">
            Questions about security, compliance, or enterprise deployment?{" "}
            <a 
              href="/contact" 
              className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/60 dark:text-white dark:decoration-white/30 dark:hover:decoration-white/60"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};