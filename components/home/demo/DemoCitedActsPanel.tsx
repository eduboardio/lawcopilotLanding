"use client"
import { memo } from "react"
import { motion } from "framer-motion"
import { BookOpen, Scale, X } from "lucide-react"

export const DemoCitedActsPanel = memo(() => (
  <div className="h-full flex flex-col bg-background">
    {/* Header */}
    <div className="h-16 px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
          <Scale className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-bold">Cited Acts</span>
      </div>
      <button className="p-2 hover:bg-muted/70 rounded-lg transition-colors">
        <X className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h3 className="text-lg font-bold mb-2">Acts & Statutes Referenced</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Legal acts and statutes cited in Mr. Manish Goel vs Mr. Raghav Goyal & Anr.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
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
            className="border-2 border-border/60 bg-gradient-to-br from-card to-muted/10 rounded-xl p-5 space-y-3 hover:border-primary/30 transition-all shadow-md hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-base mb-2">{act.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{act.details}</p>
              </div>
            </div>

            {act.sections && (
              <div className="pl-13 space-y-2">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Sections Invoked</p>
                <ul className="space-y-1.5">
                  {act.sections.map((section, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: act.delay + 0.1 + idx * 0.05 }}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
        className="pt-4 space-y-4"
      >
        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Key Amendments</h4>
        <div className="space-y-3 text-sm">
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
              className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/40"
            >
              <span className="mt-1 w-2 h-2 bg-primary rounded-full shrink-0" />
              <span className="leading-relaxed text-xs font-medium text-foreground/90">{amendment}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
))

DemoCitedActsPanel.displayName = "DemoCitedActsPanel"