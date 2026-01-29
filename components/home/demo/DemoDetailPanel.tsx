"use client"
import { memo } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { BookOpen, X } from "lucide-react"

export const DemoDetailPanel = memo(() => (
  <div className="h-full flex flex-col bg-background">
    {/* Header */}
    <div className="h-12 sm:h-14 md:h-16 px-3 sm:px-4 md:px-5 lg:px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 min-w-0">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
          <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
        </div>
        <span className="text-xs sm:text-sm font-bold truncate">Court Copy</span>
      </div>
      <button className="p-1.5 sm:p-2 hover:bg-muted/70 rounded-lg transition-colors flex-shrink-0">
        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
      </button>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5 lg:p-6 space-y-4 sm:space-y-5 md:space-y-6">
      {/* Document Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-border/60 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-md"
      >
        <h3 className="text-xs sm:text-sm md:text-base font-bold mb-3 sm:mb-4 text-foreground leading-tight break-words">Mr. Manish Goel vs Mr. Raghav Goyal & Anr.</h3>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 text-xs sm:text-sm">
          <div>
            <span className="text-muted-foreground font-bold block mb-0.5 sm:mb-1">Court:</span>
            <p className="font-bold text-foreground leading-tight break-words">Delhi High Court</p>
          </div>
          <div>
            <span className="text-muted-foreground font-bold block mb-0.5 sm:mb-1">Date:</span>
            <p className="font-bold text-foreground leading-tight break-words">8 August, 2023</p>
          </div>
          <div>
            <span className="text-muted-foreground font-bold block mb-0.5 sm:mb-1">Case No:</span>
            <p className="font-bold text-foreground leading-tight break-words">CRP NO.456/2019</p>
          </div>
          <div>
            <span className="text-muted-foreground font-bold block mb-0.5 sm:mb-1">Judge:</span>
            <p className="font-bold text-foreground leading-tight break-words">Suraj Govindaraj</p>
          </div>
        </div>
      </motion.div>

      {/* Document Sections */}
      <div className="space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm">
        <DocumentSection
          title="Short Summary"
          delay={0.2}
          content="This case concerns a revision petition challenging the trial court's refusal to reject a plaint under Order VII Rule 11 of the CPC on the ground that partial rejection of a plaint is not permissible. The Delhi High Court reaffirmed that a plaint can only be rejected as a whole, not in part."
        />

        <DocumentSection
          title="Parties"
          delay={0.3}
          content={
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="font-bold text-foreground mb-0.5 sm:mb-1 leading-tight">Petitioner:</p>
                <p className="text-muted-foreground leading-relaxed break-words">Mr. Manish Goel (defendant in original suit)</p>
              </div>
              <div>
                <p className="font-bold text-foreground mb-0.5 sm:mb-1 leading-tight">Respondents:</p>
                <p className="text-muted-foreground leading-relaxed break-words">
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
            <div className="space-y-2 sm:space-y-3">
              <p className="text-muted-foreground leading-relaxed break-words">
                The Court held that a plaint can only be rejected as a whole under Order VII Rule 11 CPC, not in part.
                Following Supreme Court precedents:
              </p>
              <ul className="space-y-1.5 sm:space-y-2 ml-2 sm:ml-3">
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
                    className="flex items-start gap-2 sm:gap-2.5 md:gap-3 text-muted-foreground"
                  >
                    <span className="mt-1 sm:mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="leading-relaxed font-medium break-words flex-1 min-w-0">{point}</span>
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
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
              <p className="text-foreground/90 leading-relaxed font-bold break-words">
                The revision petition was dismissed. The impugned order of the trial court dated 4 August 2021 was
                upheld. No costs ordered.
              </p>
            </div>
          }
        />

        <DocumentSection
          title="Legal Precedents Cited"
          delay={0.6}
          content={
            <div className="space-y-2 sm:space-y-3">
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  "Saleem Bhai vs State of Maharashtra (2003) 1 SCC 557",
                  "Manchester Development Corporation vs Garmanson Ltd (1986) QB 1212",
                  "Sopan Sukhdeo Sable vs Assistant Charity Commissioner (2004) 3 SCC 137",
                ].map((precedent, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-start gap-2 sm:gap-2.5 md:gap-3 text-muted-foreground"
                  >
                    <span className="mt-1 sm:mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="leading-relaxed font-medium break-words flex-1 min-w-0">{precedent}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          }
        />

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <h4 className="font-bold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground leading-tight">
            <div className="w-1 sm:w-1.5 h-4 sm:h-5 bg-primary rounded-full flex-shrink-0" />
            <span className="break-words">Acts & Laws Involved</span>
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {["Code of Civil Procedure, 1908", "Order VII Rule 11", "Section 115"].map((act, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 bg-primary/10 text-primary rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold border border-primary/30 hover:bg-primary/20 transition-colors shadow-sm break-words"
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
      <h4 className="font-bold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground leading-tight">
        <div className="w-1 sm:w-1.5 h-4 sm:h-5 bg-primary rounded-full flex-shrink-0" />
        <span className="break-words">{title}</span>
      </h4>
      <div className="text-muted-foreground leading-relaxed sm:leading-relaxed pl-3 sm:pl-4">
        {typeof content === "string" ? <p className="font-medium break-words leading-relaxed">{content}</p> : content}
      </div>
    </motion.div>
  ),
)

DocumentSection.displayName = "DocumentSection"