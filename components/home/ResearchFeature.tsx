"use client";

import { VideoFeature } from "./VideoFeature";

export function ResearchFeature() {
  const messages = [
    {
      role: "user" as const,
      content: "Research case law on whether a plaint disclosing any cause of action can be rejected under Order VII Rule 11(a) CPC at the inception of the suit.",
      artifact: {
        type: "research" as const,
        title: "Legal Research",
        preview: (
          <div className="space-y-6">
            {/* Key Legal Principle */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    Key Legal Principle
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    A plaint disclosing <strong className="text-blue-700 dark:text-blue-300">any cause of action</strong> cannot be rejected under Order VII Rule 11(a) CPC at the inception of the suit. The threshold for rejection is strict: only if <strong className="text-blue-700 dark:text-blue-300">no cause of action</strong> is disclosed at all can the plaint be rejected.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Relevant Cases</div>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">High Courts</div>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2021-2023</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Recent</div>
              </div>
            </div>

            {/* Research Results Header */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Research Results
                </h4>
                <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-full font-medium">
                  5 Cases Found
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Found relevant judgments from Delhi High Court, Karnataka High Court, and Gujarat High Court addressing Order VII Rule 11(a) CPC
              </p>
            </div>

            {/* Key Principles */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-5">
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Established Legal Principles
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    A plaint can be rejected only if it does not disclose <strong>any</strong> cause of action whatsoever
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    If any cause of action is disclosed, even if weak, the plaint cannot be rejected at threshold
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    The plaint must be read as a whole; partial rejection is not permissible
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Court cannot consider defence or external evidence at this stage
                  </p>
                </div>
              </div>
            </div>

            {/* Instruction to expand cases */}
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 text-center">
                📋 <strong>Click on any case below</strong> to view detailed holdings, facts, and significance
              </p>
            </div>
          </div>
        ),
        cases: [
          {
            title: "Mr. Manish Goel vs Mr. Raghav Goyal & Anr. (2023)",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Court</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Delhi High Court</div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Date</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">8 August 2023</div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 rounded-r">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">KEY HOLDING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Reaffirmed that a plaint can only be rejected as a whole, not in part. If the plaint discloses any cause of action, rejection under Order VII Rule 11(a) is not permissible.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">PRECEDENTS CITED</div>
                  <div className="space-y-1.5">
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Popat and Kotecha Property v. SBI Staff Assn.</span>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Roop Lal Sathi v. Nachhattar Singh Gill</span>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Sejal Glass Ltd. v. Navilan Merchants (P) Ltd.</span>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Madhav Prasad Aggarwal v. Axis Bank Ltd.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2">SIGNIFICANCE</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    The judgment reaffirms the settled legal principle that a plaint can only be rejected as a whole under Order VII Rule 11 CPC, not in part, following Supreme Court precedents.
                  </p>
                </div>
              </div>
            )
          },
          {
            title: "Sri K P Ashokumar vs M/S Shiksha Associates (2021)",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Court</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Karnataka High Court</div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Date</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">7 October 2021</div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 rounded-r">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">KEY HOLDING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Clarified that rejection under Order VII Rule 11(a) is warranted only if the plaint discloses no cause of action. If the contract does not permit the suit, and no cause of action arises, rejection is justified.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">FACTS</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Lease deed for fixed term of 10 years. Lessee attempted to terminate without contractual authority and sued for refund of security deposit. Court held the lease could not be terminated without express provision in the contract.
                  </p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2">SIGNIFICANCE</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Establishes that in context of fixed-term contracts, parties are strictly bound by contractual terms, and statutory provisions do not override explicit contractual stipulations.
                  </p>
                </div>
              </div>
            )
          },
          {
            title: "Karan Pal Singh vs Arc Arora Projects Pvt Ltd (2023)",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Court</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Delhi High Court</div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Date</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">18 April 2023</div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 rounded-r">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">KEY HOLDING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Held that if the plaint discloses a cause of action, it cannot be rejected under Order VII Rule 11(a) CPC. Limitation and other mixed questions of law and fact cannot be decided at the threshold.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">FACTS</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                    Suit for recovery of Rs. 7.48 crores. Defendant sought rejection on grounds of limitation. Plaintiff claimed defendant acknowledged liability in balance sheets, giving rise to fresh period of limitation under Section 18 of Limitation Act.
                  </p>
                  
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">PRECEDENTS APPLIED</div>
                  <div className="space-y-1.5">
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Asset Reconstruction Co. (India) Ltd. v. Bishal Jaiswal (2021) 6 SCC 366</span>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Shakti Bhog Food Industries Ltd. v. Central Bank of India (2020) 17 SCC 260</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2">SIGNIFICANCE</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Reinforces principle that limitation is a mixed question of law and fact, not to be decided at threshold unless apparent from plaint itself. Affirms that balance sheet entries can amount to acknowledgment of debt under Section 18 of Limitation Act.
                  </p>
                </div>
              </div>
            )
          },
          {
            title: "F Hoffmann-La Roche Ltd & Others vs Drugs Controller General (2023)",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Court</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Delhi High Court</div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Date</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">11 September 2023</div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 rounded-r">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">KEY HOLDING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Reiterated that the sufficiency of a cause of action must be determined solely from the plaint. Civil court jurisdiction is not ousted unless expressly barred by statute.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">FACTS</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                    Suits against DCGI and manufacturers of biosimilar drugs alleging improper regulatory approval and misrepresentation. Defendants sought rejection arguing existence of alternative remedy under Rule 122DC of Drugs Rules.
                  </p>
                  
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">COURT&apos;S REASONING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Rule 122DC does not provide adequate remedy for third parties. Civil court jurisdiction is not ousted unless there is express or clearly implied statutory bar. Drugs Act, Drugs Rules, and Biosimilar Guidelines do not oust civil court jurisdiction.
                  </p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2">SIGNIFICANCE</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Clarifies that civil court jurisdiction is not ousted in cases involving regulatory approvals unless expressly barred. Existence of alternative remedy does not preclude civil suits by third parties alleging misrepresentation or procedural violations.
                  </p>
                </div>
              </div>
            )
          },
          {
            title: "Maheboob Rasulbhai Ghanchi vs Jagdishkumar Gaurishankar Joshi (2023)",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Court</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Gujarat High Court</div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Date</div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">2 March 2023</div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 rounded-r">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">KEY HOLDING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Emphasized that only the plaint and documents relied upon are relevant at this stage; factual disputes require trial. If the plaint discloses a cause of action, rejection is not warranted.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">FACTS</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                    Suit based on unregistered MOU for sale of land. Defendants denied execution of MOU and sought rejection arguing suit barred by Section 34 of Specific Relief Act and Section 49 of Registration Act.
                  </p>
                  
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">COURT&apos;S REASONING</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                    Plaint disclosed cause of action. Bar under Section 34 of Specific Relief Act did not apply as plaintiffs reserved right to seek further relief under Order II Rule 2 CPC. Contentions regarding unregistered MOU and consideration were factual disputes requiring trial.
                  </p>
                  
                  <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">PRECEDENTS APPLIED</div>
                  <div className="space-y-1.5">
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>T. Arivandandam v. T.V. Satyapal</span>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Dahiben v. Arvindbhai Kalyanji Bhanusali (2020) 7 SCC 366</span>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Madanuri Sri Rama Chandra Murthy v. Syed Jalal</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2">SIGNIFICANCE</div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Reinforces principle that at stage of Order VII Rule 11 CPC, only plaint and documents relied upon are to be considered, not defence or disputed facts. Factual disputes and ambiguities require full trial and cannot be resolved at threshold.
                  </p>
                </div>
              </div>
            )
          }
        ]
      }
    },
    {
      role: "assistant" as const,
      content: "I've found 5 relevant cases addressing whether a plaint disclosing any cause of action can be rejected under Order VII Rule 11(a) CPC. The consistent legal position is clear: if any cause of action is disclosed, the plaint cannot be rejected at the threshold. Click on each case to explore the detailed holdings and significance."
    }
  ];

  return (
    <VideoFeature
      badge="AI-Powered Research"
      title="Comprehensive Legal Research"
      description="Natural language search across Indian case law, statutes, and regulations. Get precise answers with proper citations, analyze precedents, and understand legal principles in seconds."
      messages={messages}
      reverse={false}
    />
  );
}