"use client"
import { memo } from "react"
import { motion } from "framer-motion"
import { BookOpen, Scale } from "lucide-react"

export const DemoCitedActsPanel = memo(() => (
  <div className="h-full flex flex-col bg-background">
    {/* Header */}
    <div className="h-16 px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <Scale className="w-5 h-5 text-primary" />
        <span className="text-sm font-bold">Cited Acts</span>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h3 className="text-base font-bold mb-2">Acts & Statutes Referenced</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Mr. Manish Goel vs Mr. Raghav Goyal & Anr. on 8 August, 2023 - Cited Acts
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
            delay: 0.3,
          },
          {
            title: "Order VII Rule 11",
            details: "Rejection of Plaint for Non-Disclosure of Cause of Action",
            delay: 0.4,
          },
          {
            title: "Section 115 CPC",
            details: "Revision of Judgments, etc. by High Court or District Court",
            delay: 0.5,
          },
        ].map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: act.delay }}
            className="border border-border/60 bg-card p-5 space-y-2 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-sm mb-1">{act.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{act.details}</p>
              </div>
            </div>
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
            "Amended by The Code Of Civil Procedure (Amendment) Act, 2002 (Act 22 of 2002) on 1 January 2002",
          ].map((amendment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-start gap-3 text-foreground/90 font-medium"
            >
              <span className="mt-1.5 w-2 h-2 bg-primary shrink-0" />
              <span className="leading-relaxed text-xs">{amendment}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
))

DemoCitedActsPanel.displayName = "DemoCitedActsPanel"
