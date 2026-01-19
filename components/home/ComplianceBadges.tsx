"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";

const certifications = [
    {
        icon: Shield,
        title: "SOC 2",
        description: "We meet SOC 2 requirements to ensure secure and compliant management of data across all our systems.",
        badge: "SOC 2"
    },
    {
        icon: Lock,
        title: "ISO 27001",
        description: "Fully certified with ISO 27001, the internationally recognized standard for information security management.",
        badge: "ISO 27001"
    },
    {
        icon: FileCheck,
        title: "DPDP Act 2023",
        description: "Compliant with India's Digital Personal Data Protection Act, 2023 for robust data privacy standards.",
        badge: "DPDP"
    }
];

export function ComplianceBadges() {
    return (
        <section className="relative w-full overflow-hidden bg-background py-12 sm:py-16 md:py-20">
            {/* Background styling */}
            <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
                <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
                <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-8 sm:mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-2 sm:mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
                        <Shield className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-foreground dark:text-white/80">
                            Certified & Compliant
                        </span>
                    </div>

                    <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white px-4">
                        Committed to the Highest Security Standards
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-white/70 px-4">
                        Law Copilot maintains compliance with the most rigorous international safety and security standards.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative h-full rounded-lg sm:rounded-xl border border-border bg-card/80 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/80 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20">
                                    {/* Icon */}
                                    <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-muted dark:bg-white/10">
                                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground dark:text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-bold text-foreground dark:text-white">
                                        {cert.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                                        {cert.description}
                                    </p>

                                    {/* Badge */}
                                    <div className="mt-3 sm:mt-4 inline-flex items-center justify-center rounded-full border border-border bg-muted/50 px-2.5 sm:px-3 py-1 dark:border-white/10 dark:bg-white/5">
                                        <span className="text-[10px] sm:text-xs font-medium text-foreground dark:text-white/70">
                                            {cert.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 -z-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:from-white/[0.03]"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Audit notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6 sm:mt-8 flex justify-center sm:justify-end px-4"
                >
                    <p className="text-[10px] sm:text-xs text-muted-foreground dark:text-white/40">
                        (Under audit for rating)
                    </p>
                </motion.div>
            </div>
        </section>
    );
}