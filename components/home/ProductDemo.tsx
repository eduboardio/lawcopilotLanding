"use client"
import { memo, useEffect, useState, useRef } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Send, Scale } from "lucide-react"
import { DemoChatPanel } from "./demo/DemoChatPanel"
import { DemoArtifactPanel } from "./demo/DemoArtifactPanel"
import { DemoDetailPanel } from "./demo/DemoDetailPanel"
import { DemoCitedActsPanel } from "./demo/DemoCitedActsPanel"
import { AnimatedCursor } from "./demo/AnimatedCursor"

type AnimationPhase =
  | "initial"
  | "fade-in"
  | "input-ready"
  | "typing"
  | "move-to-send"
  | "click-send"
  | "processing"
  | "response-shown"
  | "artifact-appear"
  | "move-to-artifact"
  | "click-artifact"
  | "artifact-opening"
  | "artifact-open"
  | "artifact-scrolling"
  | "move-to-case"
  | "click-case"
  | "case-expanded"
  | "move-to-court"
  | "click-court"
  | "court-opening"
  | "court-open"
  | "court-scrolling"
  | "move-to-acts"
  | "click-acts"
  | "acts-opening"
  | "acts-open"
  | "acts-scrolling"
  | "complete-pause"
  | "fade-to-black"
  | "reset"

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
    artifactScroll: 0,
    detailScroll: 0,
    actsScroll: 0,
  })

  const chatScrollRef = useRef<HTMLDivElement>(null!)
  const artifactScrollRef = useRef<HTMLDivElement>(null!)
  const detailScrollRef = useRef<HTMLDivElement>(null!)
  const citedActsScrollRef = useRef<HTMLDivElement>(null!)

  const QUERY = "Find case laws on Order VII Rule 11(a) CPC"
  const RESPONSE = "I'll research case law on whether a plaint that discloses any cause of action can be rejected under Order VII Rule 11(a) CPC."

  useEffect(() => {
    runAnimation()
  }, [])

  const typeText = async (text: string, onUpdate: (partial: string) => void, speed = 25) => {
    for (let i = 0; i <= text.length; i++) {
      onUpdate(text.substring(0, i))
      await wait(speed)
    }
  }

  const runAnimation = async () => {
    resetStates()
    
    // Smooth fade in
    setPhase("fade-in")
    await wait(500)

    // Show input
    setPhase("input-ready")
    await wait(700)

    // Type query
    setPhase("typing")
    setCursorState({ visible: true, position: { x: 20, y: 92 }, clicking: false })
    await typeText(QUERY, (partial) => {
      setChatState((prev) => ({ ...prev, queryText: partial }))
    }, 22)
    await wait(350)

    // Move to send button
    setPhase("move-to-send")
    setCursorState((prev) => ({ ...prev, position: { x: 88, y: 92 } }))
    await wait(450)
    
    // Click send
    setPhase("click-send")
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(120)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(80)

    // Hide cursor and show processing
    setCursorState((prev) => ({ ...prev, visible: false }))
    setPhase("processing")
    setChatState((prev) => ({ ...prev, showProcessing: true }))
    await wait(1800)

    // Show response instantly (no typing for AI)
    setPhase("response-shown")
    setChatState((prev) => ({
      ...prev,
      showProcessing: false,
      showResponse: true,
    }))
    await wait(700)

    // Show artifact card
    setPhase("artifact-appear")
    setChatState((prev) => ({ ...prev, showArtifactCard: true }))
    await wait(900)

    // Move cursor to artifact card
    setPhase("move-to-artifact")
    setCursorState({ visible: true, position: { x: 25, y: 72 }, clicking: false })
    await wait(550)
    
    // Click artifact
    setPhase("click-artifact")
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(120)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(80)

    // Open artifact panel
    setCursorState((prev) => ({ ...prev, visible: false }))
    setPhase("artifact-opening")
    await wait(250)
    setPanelState((prev) => ({ ...prev, showArtifact: true }))
    setPhase("artifact-open")
    await wait(600)

    // AUTO-SCROLL artifact panel
    setPhase("artifact-scrolling")
    setPanelState((prev) => ({ ...prev, artifactScroll: 600 }))
    await wait(1600)

    // Move to first case
    setPhase("move-to-case")
    setCursorState({ visible: true, position: { x: 58, y: 56 }, clicking: false })
    await wait(550)
    
    // Click case
    setPhase("click-case")
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(120)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    setPanelState((prev) => ({ ...prev, selectedCase: true }))
    setPhase("case-expanded")
    await wait(600)

    // Move to "Get Court Copy" button
    setPhase("move-to-court")
    setCursorState((prev) => ({ ...prev, position: { x: 58, y: 66 } }))
    await wait(450)
    
    // Click court copy
    setPhase("click-court")
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(120)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(80)

    // Open court copy panel
    setCursorState((prev) => ({ ...prev, visible: false }))
    setPhase("court-opening")
    await wait(250)
    setPanelState((prev) => ({ ...prev, showDetail: true }))
    setPhase("court-open")
    await wait(600)

    // AUTO-SCROLL court copy
    setPhase("court-scrolling")
    setPanelState((prev) => ({ ...prev, detailScroll: 800 }))
    await wait(1800)

    // Scroll back up for cited acts button
    setPanelState((prev) => ({ ...prev, detailScroll: 0 }))
    await wait(1000)

    // Move to "Get Cited Acts" button
    setPhase("move-to-acts")
    setCursorState({ visible: true, position: { x: 58, y: 68 }, clicking: false })
    await wait(550)
    
    // Click cited acts
    setPhase("click-acts")
    setCursorState((prev) => ({ ...prev, clicking: true }))
    await wait(120)
    setCursorState((prev) => ({ ...prev, clicking: false }))
    await wait(80)
    
    setCursorState((prev) => ({ ...prev, visible: false }))
    await wait(180)

    // Replace detail with cited acts
    setPhase("acts-opening")
    setPanelState((prev) => ({ ...prev, showDetail: false, showCitedActs: true, actsScroll: 0 }))
    await wait(250)
    setPhase("acts-open")
    await wait(600)

    // AUTO-SCROLL cited acts
    setPhase("acts-scrolling")
    setPanelState((prev) => ({ ...prev, actsScroll: 600 }))
    await wait(1800)

    // Pause to let user see final state
    setPhase("complete-pause")
    await wait(1200)

    // Smooth fade to black
    setPhase("fade-to-black")
    await wait(800)

    // Reset everything while still black
    setPhase("reset")
    resetStates()
    await wait(250)
    
    // Restart fresh
    runAnimation()
  }

  const resetStates = () => {
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
      artifactScroll: 0,
      detailScroll: 0,
      actsScroll: 0,
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

  // Sync scroll positions with refs
  useEffect(() => {
    if (artifactScrollRef.current && panelState.artifactScroll > 0) {
      artifactScrollRef.current.scrollTo({ top: panelState.artifactScroll, behavior: "smooth" })
    }
  }, [panelState.artifactScroll])

  useEffect(() => {
    if (detailScrollRef.current) {
      detailScrollRef.current.scrollTo({ top: panelState.detailScroll, behavior: "smooth" })
    }
  }, [panelState.detailScroll])

  useEffect(() => {
    if (citedActsScrollRef.current && panelState.actsScroll > 0) {
      citedActsScrollRef.current.scrollTo({ top: panelState.actsScroll, behavior: "smooth" })
    }
  }, [panelState.actsScroll])

  return (
    <div className="relative w-full aspect-[16/9] bg-background overflow-hidden rounded-xl border border-border/80 shadow-2xl">
      <AnimatePresence>
        {cursorState.visible && <AnimatedCursor position={cursorState.position} clicking={cursorState.clicking} />}
      </AnimatePresence>

      {/* Black fade overlay for smooth transitions */}
      <AnimatePresence>
        {(phase === "fade-to-black" || phase === "reset") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-black z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {(phase === "initial" || phase === "fade-in" || phase === "input-ready" || phase === "typing" || phase === "move-to-send" || phase === "click-send") && (
            <InitialInputState 
              key="input" 
              queryText={chatState.queryText}
              isTyping={phase === "typing"}
            />
          )}

          {phase === "processing" && <ProcessingState key="processing" />}

          {(phase === "response-shown" || phase === "artifact-appear" || phase === "move-to-artifact" || phase === "click-artifact") && !panelState.showArtifact && (
            <ResponseState
              key="response"
              queryText={QUERY}
              showArtifactCard={chatState.showArtifactCard}
            />
          )}

          {(panelState.showArtifact || panelState.showDetail || panelState.showCitedActs) && (
            <MultiPanelState
              key="multi-panel"
              queryText={QUERY}
              responseText={RESPONSE}
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

const InitialInputState = memo(({ queryText, isTyping }: { queryText: string; isTyping: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 flex items-center justify-center p-12 bg-gradient-to-b from-background to-background/95"
  >
    <div className="w-full max-w-3xl space-y-7">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.4 }}
        className="text-center space-y-3"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
            <Scale className="w-5 h-5 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Legal Research Assistant</h2>
        <p className="text-base text-muted-foreground">AI-powered research for Indian law</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative"
      >
        <div className="flex items-center gap-3 bg-card border-2 border-border/60 rounded-xl px-5 py-4 shadow-lg">
          <div className="flex-1">
            <p className="text-sm font-medium">
              {queryText || <span className="text-muted-foreground">Ask a legal question...</span>}
              {isTyping && queryText && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                />
              )}
            </p>
          </div>
          <button className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all shadow-md">
            <Send className="w-4 h-4" />
          </button>
        </div>
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
    transition={{ duration: 0.3 }}
    className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background to-background/95"
  >
    <div className="text-center space-y-5">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 2.2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="flex justify-center"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/30">
          <Scale className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      <div className="space-y-2.5">
        <p className="text-lg font-bold">Analyzing legal databases</p>
        <p className="text-sm text-muted-foreground">Searching case law and statutes</p>
      </div>

      <div className="flex justify-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -13, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay: i * 0.11,
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        ))}
      </div>
    </div>
  </motion.div>
))

ProcessingState.displayName = "ProcessingState"

const ResponseState = memo(({ queryText, showArtifactCard }: { queryText: string; showArtifactCard: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-b from-background to-background/95"
  >
    <div className="w-full max-w-4xl h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center space-y-5 overflow-y-auto py-8">
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08 }}
          className="flex justify-end"
        >
          <div className="bg-primary text-primary-foreground rounded-2xl px-5 py-3.5 max-w-[85%] shadow-md">
            <p className="text-sm leading-relaxed font-medium">{queryText}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3.5"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
            <Scale className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 space-y-4">
            <div className="bg-card border-2 border-border/60 rounded-xl p-5 shadow-md">
              <p className="text-sm leading-relaxed text-foreground font-serif">
                I&apos;ll research case law on whether a plaint that discloses any cause of action can be rejected under{" "}
                <strong>Order VII Rule 11(a) CPC</strong>.
              </p>
            </div>

            <AnimatePresence>{showArtifactCard && <ArtifactCard />}</AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
))

ResponseState.displayName = "ResponseState"

const ArtifactCard = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-xl p-5 cursor-pointer shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-start gap-3.5 mb-4">
      <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center shadow-md border border-primary/50">
        <Scale className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <h4 className="font-bold text-foreground text-sm">Legal Research Created</h4>
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-green-600">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <p className="text-xs text-muted-foreground font-medium">Found 5 cases, 3 acts, and 2 articles</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2.5 mb-4">
      {[
        { number: "5", label: "Cases" },
        { number: "3", label: "Acts" },
        { number: "2", label: "Articles" },
      ].map((stat, i) => (
        <div key={i} className="bg-card/70 rounded-lg p-3 text-center border border-border/60">
          <p className="text-xl font-bold text-primary mb-0.5">{stat.number}</p>
          <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between pt-2.5 border-t border-border/40">
      <span className="text-xs font-bold text-primary">Click to view research →</span>
      <span className="text-xs font-bold text-primary bg-primary/20 px-2.5 py-1 rounded-md border border-primary/40">Ready</span>
    </div>
  </motion.div>
))

ArtifactCard.displayName = "ArtifactCard"

const MultiPanelState = memo(
  ({
    queryText,
    responseText,
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
    responseText: string
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
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="border-r border-border/60 bg-background overflow-hidden"
        ref={chatScrollRef}
      >
        <DemoChatPanel
          typedText={queryText}
          responseText={responseText}
          showResponse={true}
          showProcessing={false}
          showArtifactCard={showArtifactCard && !showArtifact}
        />
      </motion.div>

      <AnimatePresence>
        {showArtifact && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: showDetail || showCitedActs ? "33.33%" : "50%",
              opacity: 1,
            }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "33.33%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "33.33%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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