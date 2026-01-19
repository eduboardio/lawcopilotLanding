"use client"
import { memo } from "react"
import { motion } from "framer-motion"
import { BookOpen, Scale, X } from "lucide-react"

export const DemoCitedActsPanel = memo(() => (
  <div className="h-full flex flex-col bg-background">
    {/* Header */}
    <div className="h-12 sm:h-14 md:h-16 px-3 sm:px-4 md:px-5 lg:px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 min-w-0">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
          <Scale className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
        </div>
        <span className="text-xs sm:text-sm font-bold truncate">Cited Acts</span>
      </div>
      <button className="p-1.5 sm:p-2 hover:bg-muted/70 rounded-lg transition-colors flex-shrink-0">
        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
      </button>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5 lg:p-6 space-y-4 sm:space-y-5 md:space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2">Acts & Statutes Referenced</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Legal acts and statutes cited in Mr. Manish Goel vs Mr. Raghav Goyal & Anr.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3 sm:space-y-4"
      >
        {[
          {
            title: "The Code of Civil Procedure, 1908",
            details: "Act 5 of 1908 • Published on 21 March 1908 • Commenced on 21 March 1908",
            sections: ["Order VII Rule 11 - Rejection of Plaint", "Section 115 - Revision"],
            delay: 0.3,
          },
          {
            title: "Order VII Rule 11",
            details: "Rejection of Plaint for Non-Disclosure of Cause of Action",
            sections: [
              "Clause (a) - Non-disclosure of cause of action",
              "Clause (d) - Suit appears to be barred by law",
            ],
            delay: 0.4,
          },
          {
            title: "Section 115 CPC",
            details: "Revision of Judgments, etc. by High Court or District Court",
            sections: [
              "Subsection (1) - Power of revision",
              "Subsection (2) - Grounds for revision",
            ],
            delay: 0.5,
          },
        ].map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: act.delay }}
            className="border-2 border-border/60 bg-gradient-to-br from-card to-muted/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-2.5 md:space-y-3 hover:border-primary/30 transition-all shadow-md hover:shadow-lg"
          >
            <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <BookOpen className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2">{act.title}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{act.details}</p>
              </div>
            </div>

            {act.sections && (
              <div className="pl-10 sm:pl-11 md:pl-13 space-y-1.5 sm:space-y-2">
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Sections Invoked</p>
                <ul className="space-y-1 sm:space-y-1.5">
                  {act.sections.map((section, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: act.delay + 0.1 + idx * 0.05 }}
                      className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground"
                    >
                      <span className="mt-1 sm:mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed font-medium">{section}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="pt-3 sm:pt-4 space-y-3 sm:space-y-4"
      >
        <h4 className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest">Key Amendments</h4>
        <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm">
          {[
            "Amended by The Code Of Civil Procedure (Amendment) Act, 1956 (Act 66 of 1956) on 1 January 1956",
            "Amended by The Code Of Civil Procedure (Amendment) Act, 1999 (Act 46 of 1999) on 1 July 2002",
            "Amended by The Code Of Civil Procedure (Amendment) Act, 2002 (Act 22 of 2002) on 1 January 2003",
          ].map((amendment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-start gap-2 sm:gap-2.5 md:gap-3 p-2 sm:p-2.5 md:p-3 bg-muted/30 rounded-md sm:rounded-lg border border-border/40"
            >
              <span className="mt-0.5 sm:mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full shrink-0" />
              <span className="leading-relaxed text-[10px] sm:text-xs font-medium text-foreground/90">{amendment}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
))

DemoCitedActsPanel.displayName = "DemoCitedActsPanel"