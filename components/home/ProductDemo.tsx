"use client"
import { memo, useEffect, useState, useRef } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, Scale } from "lucide-react"
import { DemoChatPanel } from "./demo/DemoChatPanel"
import { DemoArtifactPanel } from "./demo/DemoArtifactPanel"
import { DemoDetailPanel } from "./demo/DemoDetailPanel"
import { DemoCitedActsPanel } from "./demo/DemoCitedActsPanel"
import { AnimatedCursor } from "./demo/AnimatedCursor"

type AnimationPhase =
  | "initial"
  | "input-ready"
  | "sending"
  | "processing"
  | "response-shown"
  | "artifact-opening"
  | "artifact-open"
  | "scroll-artifact"
  | "case-selecting"
  | "case-expanded"
  | "court-copy-opening"
  | "court-copy-open"
  | "scroll-court-copy"
  | "close-court-copy"
  | "cited-acts-opening"
  | "cited-acts-open"
  | "scroll-cited-acts"
  | "closing"
  | "complete"

export const ProductDemo = memo(() => {
  const [phase, setPhase] = useState<AnimationPhase>("initial")
  const [cursorState, setCursorState] = useState({
    visible: false,
    position: { x: 50, y: 50 },
    clicking: false,
  })
  const [chatState, setChatState] = useState({
    queryText: "",
    showResponse: false,
    showProcessing: false,
    showArtifactCard: false,
  })
  const [panelState, setPanelState] = useState({
    showArtifact: false,
    showDetail: false,
    showCitedActs: false,
    selectedCase: false,
  })

const chatScrollRef = useRef<HTMLDivElement>(null!)
const artifactScrollRef = useRef<HTMLDivElement>(null!)
const detailScrollRef = useRef<HTMLDivElement>(null!)
const citedActsScrollRef = useRef<HTMLDivElement>(null!)

  const QUERY = "Find case laws on Order VII Rule 11(a) CPC"

  useEffect(() => {
    runAnimation()
  }, [])

  const runAnimation = async () => {
    resetStates()
    await wait(1000)

    // Phase 1: Show input state
    setPhase("input-ready")
    await wait(800)

    // Phase 2: Show query text
    setChatState((prev) => ({ ...prev, queryText: QUERY }))
    await wait(600)

    // Phase 3: Click send button
    setCursorState({ visible: true, position: { x: 52, y: 88 }, clicking: false })
    await wait(400)
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(150)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(100)

    // Phase 4: Hide cursor and process
    setCursorState((prev) => ({ ...prev, visible: false }))
    setPhase("sending")
    await wait(400)

    setPhase("processing")
    setChatState((prev) => ({ ...prev, showProcessing: true }))
    await wait(2200)

    // Phase 5: Show response
    setPhase("response-shown")
    setChatState((prev) => ({
      ...prev,
      showProcessing: false,
      showResponse: true,
    }))
    await wait(1000)

    // Phase 6: Show artifact card
    setChatState((prev) => ({ ...prev, showArtifactCard: true }))
    await wait(1200)

    // Phase 7: Click artifact card to open research panel
    setCursorState({ visible: true, position: { x: 50, y: 72 }, clicking: false })
    await wait(500)
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(150)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(100)

    // Phase 8: Open artifact panel
    setCursorState((prev) => ({ ...prev, visible: false }))
    setPhase("artifact-opening")
    await wait(300)
    setPanelState((prev) => ({ ...prev, showArtifact: true }))
    setPhase("artifact-open")
    await wait(800)

    // Phase 9: Auto-scroll artifact panel to show cases
    setPhase("scroll-artifact")
    if (artifactScrollRef.current) {
      artifactScrollRef.current.scrollTo({ top: 600, behavior: "smooth" })
    }
    await wait(1500)

    // Phase 10: Click first case to expand
    setCursorState({ visible: true, position: { x: 64, y: 48 }, clicking: false })
    await wait(600)
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(150)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    setPanelState((prev) => ({ ...prev, selectedCase: true }))
    setPhase("case-expanded")
    await wait(600)

    // Phase 11: Move cursor to "Get Court Copy"
    setCursorState((prev) => ({ ...prev, position: { x: 64, y: 60 } }))
    await wait(500)
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(150)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(100)

    // Phase 12: Open court copy panel
    setCursorState((prev) => ({ ...prev, visible: false }))
    setPhase("court-copy-opening")
    await wait(300)
    setPanelState((prev) => ({ ...prev, showDetail: true }))
    setPhase("court-copy-open")
    await wait(700)

    // Phase 13: Auto-scroll court copy
    setPhase("scroll-court-copy")
    if (detailScrollRef.current) {
      detailScrollRef.current.scrollTo({ top: 800, behavior: "smooth" })
    }
    await wait(2000)

    // Phase 14: Close court copy and open cited acts
    setPhase("close-court-copy")
    setCursorState({ visible: true, position: { x: 64, y: 52 }, clicking: false })
    await wait(600)
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(150)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(100)
    setCursorState((prev) => ({ ...prev, visible: false }))

    // Replace detail panel with cited acts
    await wait(200)
    setPanelState((prev) => ({ ...prev, showDetail: false, showCitedActs: true }))
    setPhase("cited-acts-opening")
    await wait(400)
    setPhase("cited-acts-open")
    await wait(700)

    // Phase 15: Auto-scroll cited acts
    setPhase("scroll-cited-acts")
    if (citedActsScrollRef.current) {
      citedActsScrollRef.current.scrollTo({ top: 600, behavior: "smooth" })
    }
    await wait(2000)

    // Phase 16: Transition to restart
    setPhase("closing")
    await wait(1500)
    setPhase("complete")
    await wait(800)
    runAnimation()
  }

  const resetStates = () => {
    setPhase("initial")
    setCursorState({ visible: false, position: { x: 50, y: 50 }, clicking: false })
    setChatState({
      queryText: "",
      showResponse: false,
      showProcessing: false,
      showArtifactCard: false,
    })
    setPanelState({
      showArtifact: false,
      showDetail: false,
      showCitedActs: false,
      selectedCase: false,
    })
  }

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const getChatWidth = () => {
    const openPanels = [true, panelState.showArtifact, panelState.showDetail || panelState.showCitedActs].filter(
      Boolean,
    ).length
    if (openPanels === 1) return "100%"
    if (openPanels === 2) return "50%"
    return "33.33%"
  }

  return (
    <div className="relative w-full aspect-[16/9] bg-background overflow-hidden border border-border/80 shadow-2xl">
      <AnimatePresence>
        {cursorState.visible && <AnimatedCursor position={cursorState.position} clicking={cursorState.clicking} />}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {phase === "initial" && (
            <motion.div
              key="initial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            />
          )}

          {(phase === "input-ready" || phase === "sending") && (
            <InitialInputState key="input" queryText={chatState.queryText} />
          )}

          {phase === "processing" && <ProcessingState key="processing" />}

          {(phase === "response-shown" || phase.startsWith("artifact-opening")) && !panelState.showArtifact && (
            <ResponseState
              key="response"
              queryText={chatState.queryText}
              showArtifactCard={chatState.showArtifactCard}
            />
          )}

          {(panelState.showArtifact || panelState.showDetail || panelState.showCitedActs) && (
            <MultiPanelState
              key="multi-panel"
              queryText={chatState.queryText}
              showArtifact={panelState.showArtifact}
              showDetail={panelState.showDetail}
              showCitedActs={panelState.showCitedActs}
              selectedCase={panelState.selectedCase}
              chatWidth={getChatWidth()}
              showArtifactCard={chatState.showArtifactCard}
              chatScrollRef={chatScrollRef}
              artifactScrollRef={artifactScrollRef}
              detailScrollRef={detailScrollRef}
              citedActsScrollRef={citedActsScrollRef}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
})

ProductDemo.displayName = "ProductDemo"

// ============================================================================
// STATE COMPONENTS
// ============================================================================

const InitialInputState = memo(({ queryText }: { queryText: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96, y: -20 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0 flex items-center justify-center p-12 bg-background"
  >
    <div className="w-full max-w-3xl space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/20 flex items-center justify-center border border-primary/40">
            <Scale className="w-7 h-7 text-primary" />
          </div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight">Legal Research Assistant</h2>
        <p className="text-lg text-muted-foreground">AI-powered research for Indian law</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative"
      >
        <div className="flex items-center gap-4 bg-card border border-border/80 hover:border-primary/40 px-6 py-5 shadow-xl transition-all duration-300">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base font-semibold"
            >
              {queryText || <span className="text-muted-foreground">Ask a legal question...</span>}
            </motion.p>
          </div>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="p-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg font-semibold"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {["Property Disputes", "Contract Law", "Criminal Defense"].map((topic, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.05 }}
            className="px-4 py-2 bg-muted/70 hover:bg-muted border border-border/40 hover:border-primary/30 text-sm font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer"
          >
            {topic}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </motion.div>
))

InitialInputState.displayName = "InitialInputState"

const ProcessingState = memo(() => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 flex items-center justify-center bg-background"
  >
    <div className="text-center space-y-8">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="flex justify-center"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/40">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      <div className="space-y-3">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold">
          Analyzing legal databases
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground max-w-md mx-auto"
        >
          Searching through case law, statutes, and legal precedents
        </motion.p>
      </div>

      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
            className="w-3 h-3 bg-primary"
          />
        ))}
      </div>
    </div>
  </motion.div>
))

ProcessingState.displayName = "ProcessingState"

const ResponseState = memo(
  ({
    queryText,
    showArtifactCard,
  }: {
    queryText: string
    showArtifactCard: boolean
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex items-center justify-center p-8 bg-background"
    >
      <div className="w-full max-w-4xl h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center space-y-6 overflow-y-auto py-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-end"
          >
            <div className="bg-primary text-primary-foreground px-6 py-3.5 max-w-[85%] shadow-lg font-semibold">
              <p className="text-sm leading-relaxed">{queryText}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="w-11 h-11 bg-primary/20 flex items-center justify-center shrink-0 border border-primary/40">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border/60 p-6 shadow-md"
              >
                <p className="text-sm leading-relaxed text-foreground/90">
                  I&apos;ll research case law on whether a plaint that discloses any cause of action can be rejected under{" "}
                  <strong className="font-bold text-foreground">Order VII Rule 11(a) CPC</strong>.
                </p>
              </motion.div>

              <AnimatePresence>{showArtifactCard && <ArtifactCard />}</AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  ),
)

ResponseState.displayName = "ResponseState"

const ArtifactCard = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    }}
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/40 p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-start gap-4 mb-5">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0 shadow-md border border-primary/50">
        <Scale className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <h4 className="font-bold text-foreground text-base">Legal Research Created</h4>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center border border-green-600">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>
        </div>
        <p className="text-sm text-primary/90 font-semibold">Order VII Rule 11(a) CPC Analysis</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-3 mb-5">
      {[
        { number: "5", label: "Cases Found", delay: 0.1 },
        { number: "3", label: "Acts Cited", delay: 0.2 },
        { number: "2", label: "Articles", delay: 0.3 },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stat.delay }}
          className="bg-card/70 backdrop-blur-sm p-4 text-center border border-border/60"
        >
          <p className="text-2xl font-bold text-primary mb-1">{stat.number}</p>
          <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>

    <div className="flex items-center justify-between pt-2">
      <span className="text-sm font-bold text-primary">Click to view full research →</span>
      <span className="text-xs font-bold text-primary bg-primary/20 px-3 py-1.5 border border-primary/40">Ready</span>
    </div>
  </motion.div>
))

ArtifactCard.displayName = "ArtifactCard"

const MultiPanelState = memo(
  ({
    queryText,
    showArtifact,
    showDetail,
    showCitedActs,
    selectedCase,
    chatWidth,
    showArtifactCard,
    chatScrollRef,
    artifactScrollRef,
    detailScrollRef,
    citedActsScrollRef,
  }: {
    queryText: string
    showArtifact: boolean
    showDetail: boolean
    showCitedActs: boolean
    selectedCase: boolean
    chatWidth: string
    showArtifactCard: boolean
    chatScrollRef: React.RefObject<HTMLDivElement>
    artifactScrollRef: React.RefObject<HTMLDivElement>
    detailScrollRef: React.RefObject<HTMLDivElement>
    citedActsScrollRef: React.RefObject<HTMLDivElement>
  }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex">
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: chatWidth }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="border-r border-border/60 bg-background overflow-hidden"
        ref={chatScrollRef}
      >
        <DemoChatPanel
          typedText={queryText}
          showResponse={true}
          showProcessing={false}
          showArtifactCard={showArtifactCard && !showArtifact}
        />
      </motion.div>

      <AnimatePresence>
        {showArtifact && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: 20 }}
            animate={{
              width: showDetail || showCitedActs ? "33.33%" : "50%",
              opacity: 1,
              x: 0,
            }}
            exit={{ width: 0, opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-r border-border/60 bg-background overflow-hidden"
            ref={artifactScrollRef}
          >
            <DemoArtifactPanel selectedCase={selectedCase} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: 20 }}
            animate={{ width: "33.33%", opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background overflow-hidden"
            ref={detailScrollRef}
          >
            <DemoDetailPanel />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCitedActs && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: 20 }}
            animate={{ width: "33.33%", opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background overflow-hidden"
            ref={citedActsScrollRef}
          >
            <DemoCitedActsPanel />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ),
)

MultiPanelState.displayName = "MultiPanelState"
