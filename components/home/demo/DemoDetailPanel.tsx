"use client"
import { memo } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { BookOpen, Search } from "lucide-react"

export const DemoDetailPanel = memo(() => (
  <div className="h-full flex flex-col bg-background">
    {/* Header */}
    <div className="h-16 px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <BookOpen className="w-5 h-5 text-primary" />
        <span className="text-sm font-bold">Court Copy</span>
      </div>
      <button className="p-2 hover:bg-muted/70 rounded-lg transition-colors">
        <Search className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* Document Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border-2 border-border/60 rounded-lg p-6 shadow-md"
      >
        <h3 className="text-base font-bold mb-4 text-foreground">Mr. Manish Goel vs Mr. Raghav Goyal & Anr.</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground font-bold block mb-1">Court:</span>
            <p className="font-bold text-foreground">Delhi High Court</p>
          </div>
          <div>
            <span className="text-muted-foreground font-bold block mb-1">Date:</span>
            <p className="font-bold text-foreground">8 August, 2023</p>
          </div>
          <div>
            <span className="text-muted-foreground font-bold block mb-1">Case No:</span>
            <p className="font-bold text-foreground">CRP NO.456/2019</p>
          </div>
          <div>
            <span className="text-muted-foreground font-bold block mb-1">Judge:</span>
            <p className="font-bold text-foreground">Suraj Govindaraj</p>
          </div>
        </div>
      </motion.div>

      {/* Document Sections */}
      <div className="space-y-5 text-sm">
        <DocumentSection
          title="Short Summary"
          delay={0.2}
          content="This case concerns a revision petition challenging the trial court's refusal to reject a plaint under Order VII Rule 11 of the CPC on the ground that partial rejection of a plaint is not permissible. The Delhi High Court reaffirmed that a plaint can only be rejected as a whole, not in part."
        />

        <DocumentSection
          title="Parties"
          delay={0.3}
          content={
            <div className="space-y-3">
              <div>
                <p className="font-bold text-foreground mb-1">Petitioner:</p>
                <p className="text-muted-foreground leading-relaxed">Mr. Manish Goel (defendant in original suit)</p>
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">Respondents:</p>
                <p className="text-muted-foreground leading-relaxed">
                  Mr. Raghav Goyal & Anr. (plaintiffs in original suit)
                </p>
              </div>
            </div>
          }
        />

        <DocumentSection
          title="Key Findings"
          delay={0.4}
          content={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                The Court held that a plaint can only be rejected as a whole under Order VII Rule 11 CPC, not in part.
                Following Supreme Court precedents:
              </p>
              <ul className="space-y-2 ml-3">
                {[
                  "Compartmentalization or partial rejection of plaint is impermissible",
                  "If plaint discloses any cause of action, cannot be rejected at threshold",
                  "Court found no jurisdictional error in trial court's order",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          }
        />

        <DocumentSection
          title="Holding"
          delay={0.5}
          content={
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-2 border-green-500/50 rounded-lg p-5">
              <p className="text-foreground/90 leading-relaxed font-bold">
                The revision petition was dismissed. The impugned order of the trial court dated 4 August 2021 was
                upheld. No costs ordered.
              </p>
            </div>
          }
        />

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h4 className="font-bold text-sm mb-3 flex items-center gap-2 text-foreground">
            <div className="w-1.5 h-5 bg-primary rounded-full" />
            Acts & Laws Involved
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Code of Civil Procedure, 1908", "Order VII Rule 11", "Section 115"].map((act, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-xs font-bold border border-primary/50 hover:bg-primary/30 transition-colors"
              >
                {act}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
))

DemoDetailPanel.displayName = "DemoDetailPanel"

// Helper Component for Document Sections
const DocumentSection = memo(
  ({
    title,
    content,
    delay = 0,
  }: {
    title: string
    content: React.ReactNode | string
    delay?: number
  }) => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <h4 className="font-bold text-sm mb-3 flex items-center gap-2 text-foreground">
        <div className="w-1.5 h-5 bg-primary rounded-full" />
        {title}
      </h4>
      <div className="text-muted-foreground leading-relaxed">
        {typeof content === "string" ? <p className="font-medium">{content}</p> : content}
      </div>
    </motion.div>
  ),
)

DocumentSection.displayName = "DocumentSection"
