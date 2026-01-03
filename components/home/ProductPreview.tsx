"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Sparkles, 
  Send,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Download,
  Share2,
  Copy,
  MoreHorizontal,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ANIMATION_STAGES = {
  IDLE: 0,
  TYPING: 1,
  PROCESSING: 2,
  RESPONSE: 3,
  DOCUMENT_OPEN: 4,
};

export const ProductPreview = () => {
  const [stage, setStage] = useState(ANIMATION_STAGES.IDLE);
  const [typedText, setTypedText] = useState("");
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  const userPrompt = "Draft a lease rental agreement for a residential property in Delhi for 11 months with clauses for maintenance, security deposit, and early termination.";

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStage(ANIMATION_STAGES.TYPING);
      for (let i = 0; i <= userPrompt.length; i++) {
        setTypedText(userPrompt.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStage(ANIMATION_STAGES.PROCESSING);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStage(ANIMATION_STAGES.RESPONSE);
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      setStage(ANIMATION_STAGES.DOCUMENT_OPEN);
      setIsDocumentOpen(true);
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      setIsDocumentOpen(false);
      await new Promise(resolve => setTimeout(resolve, 600));
      setStage(ANIMATION_STAGES.IDLE);
      setTypedText("");
      await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const loop = () => {
      sequence().then(loop);
    };

    loop();
  }, []);

  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      {/* Background elements */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-neutral-200/40 to-transparent dark:from-neutral-800/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-neutral-200/30 to-transparent dark:from-neutral-800/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 dark:from-white dark:via-white dark:to-white/70 bg-clip-text text-transparent">
              See Law Copilot in Action
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light">
              From conversation to complete legal documents in seconds. Watch how AI transforms your legal workflow.
            </p>
          </motion.div>
        </div>

        {/* Product preview - FIXED HEIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 via-neutral-300/50 to-neutral-200/50 dark:from-neutral-800/50 dark:via-neutral-700/50 dark:to-neutral-800/50 rounded-3xl blur-3xl opacity-50"></div>
            
            {/* Main container - FIXED HEIGHT */}
            <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-2xl h-[700px]">
              <div className="flex h-full">
                {/* Chat panel - ChatGPT/Claude style */}
                <div className="flex-1 flex flex-col bg-white dark:bg-neutral-950">
                  {/* Messages container */}
                  <div className="flex-1 overflow-y-auto px-6 py-8">
                    <div className="max-w-3xl mx-auto space-y-8">
                      {/* Welcome message */}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            Hello! I&apos;m Law Copilot, your AI legal assistant. I can help you draft contracts, research case law, and answer legal questions specific to Indian jurisdiction.
                          </div>
                        </div>
                      </div>

                      {/* User message */}
                      <AnimatePresence>
                        {stage >= ANIMATION_STAGES.TYPING && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-xs">
                              U
                            </div>
                            <div className="flex-1 pt-1">
                              <div className="text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed">
                                {typedText}
                                {stage === ANIMATION_STAGES.TYPING && (
                                  <span className="inline-block w-0.5 h-4 bg-neutral-900 dark:bg-neutral-100 ml-0.5 animate-pulse"></span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* AI processing */}
                      <AnimatePresence>
                        {stage === ANIMATION_STAGES.PROCESSING && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                            </div>
                            <div className="flex-1 pt-1">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                  {[0, 1, 2].map((i) => (
                                    <motion.div
                                      key={i}
                                      className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
                                      animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5],
                                      }}
                                      transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                        ease: "easeInOut"
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* AI response with artifact */}
                      <AnimatePresence>
                        {stage >= ANIMATION_STAGES.RESPONSE && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                            </div>
                            <div className="flex-1 pt-1 space-y-4">
                              <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                I&apos;ve drafted a comprehensive 11-month residential lease agreement for Delhi with all the clauses you requested. The document includes maintenance responsibilities, security deposit terms, and early termination provisions compliant with Indian rental laws.
                              </div>
                              
                              {/* Document artifact card */}
                              <motion.button
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                onClick={() => setIsDocumentOpen(true)}
                                className="w-full text-left group"
                              >
                                <div className="relative">
                                  <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-200">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">
                                          Residential Lease Agreement – Delhi
                                        </h4>
                                        <p className="text-xs text-neutral-600 dark:text-neutral-500">
                                          11-month term • 5 sections • Compliant with Indian Contract Act
                                        </p>
                                      </div>
                                      <div className="text-xs text-neutral-500 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Click to open →
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Chat input */}
                  <div className="border-t border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
                    <div className="max-w-3xl mx-auto">
                      <div className="flex items-end gap-3">
                        <div className="flex-1 min-h-[44px] max-h-[200px] bg-neutral-100 dark:bg-neutral-900 rounded-2xl px-4 py-3 border border-neutral-200 dark:border-neutral-800 flex items-center">
                          <input
                            type="text"
                            placeholder="Message Law Copilot..."
                            className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 outline-none"
                            disabled
                          />
                        </div>
                        <Button 
                          size="icon"
                          className="h-11 w-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 flex-shrink-0"
                          disabled
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-600 text-center mt-2">
                        Law Copilot can make mistakes. Verify important information.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document panel - Google Docs/Word style */}
                <AnimatePresence>
                  {isDocumentOpen && (
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="w-full lg:w-[55%] border-l border-neutral-200 dark:border-neutral-800 flex flex-col bg-neutral-50 dark:bg-neutral-900"
                    >
                      {/* Document header */}
                      <div className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                            <div>
                              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Residential Lease Agreement</div>
                              <div className="text-xs text-neutral-500 dark:text-neutral-500">Draft • Saved 2 seconds ago</div>
                            </div>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                            onClick={() => setIsDocumentOpen(false)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Toolbar - Google Docs style */}
                        <div className="flex items-center gap-1 overflow-x-auto">
                          <div className="flex items-center gap-0.5 px-1 border-r border-neutral-200 dark:border-neutral-700">
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <Bold className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <Italic className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <Underline className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-0.5 px-1 border-r border-neutral-200 dark:border-neutral-700">
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <AlignLeft className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <AlignCenter className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <AlignRight className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-0.5 px-1">
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <Download className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <Share2 className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <Copy className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-600 dark:text-neutral-400" disabled>
                              <MoreHorizontal className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Document content - Word/Docs style */}
                      <div className="flex-1 overflow-y-auto p-8 bg-neutral-50 dark:bg-neutral-900">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="max-w-[700px] mx-auto bg-white dark:bg-neutral-950 shadow-lg rounded-lg border border-neutral-200 dark:border-neutral-800 p-12 min-h-[800px]"
                        >
                          <div className="space-y-6 text-neutral-900 dark:text-neutral-100 font-serif">
                            <div className="text-center space-y-3 pb-6 border-b-2 border-neutral-900 dark:border-neutral-100">
                              <h1 className="text-2xl font-bold uppercase tracking-wide">
                                Residential Lease Agreement
                              </h1>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Under the Indian Contract Act, 1872
                              </p>
                            </div>

                            <div className="space-y-4 text-sm leading-relaxed">
                              <p>
                                This Lease Agreement (&quot;<strong>Agreement</strong>&quot;) is entered into on this ____ day of __________, 20___ at New Delhi.
                              </p>

                              <div className="space-y-2">
                                <p className="font-semibold">BETWEEN:</p>
                                <p className="pl-4">
                                  <strong>LESSOR</strong> (Landlord): _____________________, residing at _____________________, New Delhi, hereinafter referred to as the &quot;Lessor&quot; (which expression shall, unless repugnant to the context, include their heirs, successors, and assigns) of the ONE PART;
                                </p>
                                <p className="text-center font-semibold py-2">AND</p>
                                <p className="pl-4">
                                  <strong>LESSEE</strong> (Tenant): _____________________, residing at _____________________, hereinafter referred to as the &quot;Lessee&quot; (which expression shall, unless repugnant to the context, include their heirs, successors, and assigns) of the OTHER PART.
                                </p>
                              </div>

                              <div className="space-y-3 pt-4">
                                <h3 className="font-bold text-base">1. PROPERTY DETAILS</h3>
                                <p className="pl-4">
                                  The Lessor hereby agrees to lease the residential property bearing address: _____________________, New Delhi - ______ (hereinafter referred to as the &quot;<strong>Premises</strong>&quot;) to the Lessee for residential purposes only.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="font-bold text-base">2. TERM OF LEASE</h3>
                                <p className="pl-4">
                                  2.1 The lease shall commence on __/__/____ and shall continue for a period of <strong>eleven (11) months</strong>, ending on __/__/____.
                                </p>
                                <p className="pl-4">
                                  2.2 This Agreement is for a period of less than twelve months and is therefore exempt from registration under Section 17 of the Registration Act, 1908.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="font-bold text-base">3. RENT AND SECURITY DEPOSIT</h3>
                                <p className="pl-4">
                                  3.1 <strong>Monthly Rent:</strong> The Lessee agrees to pay a monthly rent of ₹__________ (Rupees __________________ only) to the Lessor on or before the ___ day of each calendar month.
                                </p>
                                <p className="pl-4">
                                  3.2 <strong>Security Deposit:</strong> The Lessee shall pay a refundable security deposit of ₹__________ (Rupees __________________ only) at the time of signing this Agreement. This deposit shall be refunded within 30 days of vacating the Premises, subject to deductions for any damages or outstanding dues.
                                </p>
                                <p className="pl-4">
                                  3.3 Late payment of rent beyond 7 days shall attract a penalty of ₹__________ per day.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="font-bold text-base">4. MAINTENANCE AND REPAIRS</h3>
                                <p className="pl-4">
                                  4.1 The Lessee shall be responsible for routine maintenance including minor repairs, replacement of fittings, painting, and daily upkeep of the Premises.
                                </p>
                                <p className="pl-4">
                                  4.2 Major structural repairs, including foundation, roof, and external walls, shall be the responsibility of the Lessor.
                                </p>
                                <p className="pl-4">
                                  4.3 The Lessee shall maintain the Premises in good condition and shall not make any structural alterations without prior written consent of the Lessor.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="font-bold text-base">5. EARLY TERMINATION</h3>
                                <p className="pl-4">
                                  5.1 Either party may terminate this Agreement by providing <strong>two (2) months</strong> prior written notice to the other party.
                                </p>
                                <p className="pl-4">
                                  5.2 In case of early termination by the Lessee without proper notice, an amount equivalent to two months rent shall be forfeited from the security deposit.
                                </p>
                                <p className="pl-4">
                                  5.3 The Lessor may terminate this Agreement immediately if the Lessee violates any terms of this Agreement or uses the Premises for illegal purposes.
                                </p>
                              </div>

                              <div className="pt-6 border-t border-neutral-300 dark:border-neutral-700 space-y-4">
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
                                  This document has been drafted in accordance with the Indian Contract Act, 1872, and the Transfer of Property Act, 1882. It is advised that both parties seek independent legal counsel before signing.
                                </p>
                                
                                <div className="flex justify-between pt-8">
                                  <div className="space-y-1">
                                    <div className="border-t border-neutral-900 dark:border-neutral-100 w-48 pt-1">
                                      <p className="text-xs font-semibold">LESSOR&apos;S SIGNATURE</p>
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="border-t border-neutral-900 dark:border-neutral-100 w-48 pt-1">
                                      <p className="text-xs font-semibold">LESSEE&apos;S SIGNATURE</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};