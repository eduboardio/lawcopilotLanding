"use client"
import { memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, FileText, BookOpen, ChevronDown } from "lucide-react"

interface DemoArtifactPanelProps {
  selectedCase: boolean
}

export const DemoArtifactPanel = memo(({ selectedCase }: DemoArtifactPanelProps) => (
  <div className="h-full flex flex-col bg-background">
    {/* Header */}
    <div className="h-16 px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
          <Scale className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-bold">Legal Research</span>
      </div>
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xs px-3 py-1.5 rounded-lg bg-green-500/20 text-green-600 dark:text-green-400 flex items-center gap-1.5 font-bold border border-green-500/40"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        Completed
      </motion.span>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* Title Section */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h3 className="text-lg font-bold mb-2">Order VII Rule 11(a) CPC Analysis</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Research on rejection of plaint for non-disclosure of cause of action
        </p>
      </motion.div>

      {/* Key Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-border/60 rounded-xl p-5 space-y-4 shadow-md"
      >
        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Key Details</h4>
        <ul className="space-y-3 text-sm">
          {[
            "Plaint can only be rejected as a whole, not in part",
            "If any cause of action disclosed, rejection not permissible",
            "Court cannot consider defense at this stage",
          ].map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-foreground/90 font-medium"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="leading-relaxed">{detail}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-3 gap-3"
      >
        {[
          { label: "5 Cases", icon: FileText, delay: 0.5 },
          { label: "3 Acts", icon: BookOpen, delay: 0.55 },
          { label: "2 Articles", icon: FileText, delay: 0.6 },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: stat.delay }}
            className="bg-card border-2 border-border/60 rounded-xl p-4 text-center hover:border-primary/40 transition-all shadow-md"
          >
            <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
            <div className="text-sm font-bold text-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cases Section */}
      <div className="space-y-4">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
        >
          Relevant Cases (5)
        </motion.h4>

        {/* First Case - Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            backgroundColor: selectedCase ? "hsl(var(--primary) / 0.08)" : "hsl(var(--card))",
            borderColor: selectedCase ? "hsl(var(--primary) / 0.4)" : "hsl(var(--border) / 0.6)",
          }}
          transition={{
            opacity: { delay: 0.7 },
            y: { delay: 0.7 },
            backgroundColor: { duration: 0.3 },
            borderColor: { duration: 0.3 },
          }}
          className="border-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="p-5 cursor-pointer">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground mb-2">Mr. Manish Goel vs Mr. Raghav Goyal & Anr.</p>
                <p className="text-xs text-muted-foreground font-medium">Delhi High Court • 8 August, 2023</p>
              </div>
              <motion.div
                animate={{
                  rotate: selectedCase ? 180 : 0,
                  color: selectedCase ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {selectedCase && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-border/60 overflow-hidden"
              >
                <div className="p-5 space-y-4 bg-muted/20">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-foreground">Summary</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Reaffirmed that a plaint can only be rejected as a whole, not in part. If the plaint discloses any
                      cause of action, rejection under Order VII Rule 11(a) is not permissible.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    <button className="text-xs px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                      Get Court Copy
                    </button>
                    <button className="text-xs px-4 py-2.5 bg-card border-2 border-border/60 rounded-lg font-bold hover:bg-muted/50 transition-all shadow-sm">
                      Add to Chat
                    </button>
                    <button className="text-xs px-4 py-2.5 bg-card border-2 border-border/60 rounded-lg font-bold hover:bg-muted/50 transition-all shadow-sm">
                      Get Cited Acts
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Other Cases */}
        {[
          {
            name: "Sri K P Ashokumar vs M/S Shiksha Associates",
            court: "Karnataka High Court • 7 Oct 2021",
            delay: 0.75,
          },
          { name: "Karan Pal Singh vs Arc Arora Projects", court: "Delhi High Court • 18 Apr 2023", delay: 0.8 },
        ].map((caseItem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: caseItem.delay }}
            className="border-2 border-border/40 rounded-xl p-5 opacity-70 hover:opacity-100 hover:border-border/60 transition-all cursor-pointer bg-card/50 hover:bg-card shadow-sm hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 mt-0.5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground mb-2">{caseItem.name}</p>
                <p className="text-xs text-muted-foreground font-medium">{caseItem.court}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
))

DemoArtifactPanel.displayName = "DemoArtifactPanel"