"use client";

import { VideoFeature } from "./VideoFeature";
import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Scale, Gavel } from "lucide-react";

const ResearchArtifactPreview = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {/* Key Legal Principle */}
      <div className="bg-white dark:bg-neutral-950 border-l-4 border-neutral-900 dark:border-neutral-100 rounded-r-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 mt-1">
            <Scale className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3">
              Key Legal Principle
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              A plaint disclosing <strong className="text-neutral-900 dark:text-neutral-100">any cause of action</strong> cannot be rejected under Order VII Rule 11(a) CPC at the inception of the suit. The threshold for rejection is strict: only if <strong className="text-neutral-900 dark:text-neutral-100">no cause of action</strong> is disclosed at all can the plaint be rejected.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 text-center">
          <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">5</div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Relevant Cases</div>
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 text-center">
          <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">3</div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">High Courts</div>
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 text-center">
          <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">2021-2023</div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Recent</div>
        </div>
      </div>

      {/* Research Results */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
            Research Results
          </h4>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-3 py-1.5 rounded-full font-medium border border-neutral-200 dark:border-neutral-700">
            5 Cases Found
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Found relevant judgments from Delhi High Court, Karnataka High Court, and Gujarat High Court addressing Order VII Rule 11(a) CPC
        </p>
      </div>

      {/* Detailed Cases - Expandable Accordions */}
      <div className="space-y-3">
        {[
          {
            title: "Mr. Manish Goel vs Mr. Raghav Goyal & Anr. (2023)",
            court: "Delhi High Court",
            date: "8 August 2023",
            citation: "2023 DLT 456",
            issues: [
              "Whether a plaint can be rejected in part under Order VII Rule 11 CPC?",
              "What is the scope and application of Order VII Rule 11(a) regarding disclosure of cause of action?",
              "Can mixed questions of law and fact be decided at the stage of rejection of plaint?"
            ],
            summary: "The Delhi High Court reaffirmed the established legal principle that a plaint can only be rejected as a whole under Order VII Rule 11 CPC, not in part. The Court held that if the plaint discloses any cause of action whatsoever, rejection under Order VII Rule 11(a) is not permissible. The judgment emphasized that the Court must read the plaint as a whole and cannot pick and choose portions to reject while accepting others.",
            holdings: [
              "A plaint must be read as a whole and cannot be rejected in part",
              "If any cause of action is disclosed, rejection under Order VII Rule 11(a) is not warranted",
              "Mixed questions of law and fact cannot be decided at the threshold stage",
              "The court cannot go beyond the plaint and examine external evidence at this stage"
            ],
            precedents: [
              "Popat and Kotecha Property v. SBI Staff Assn.",
              "Roop Lal Sathi v. Nachhattar Singh Gill",
              "Sejal Glass Ltd. v. Navilan Merchants (P) Ltd."
            ]
          },
          {
            title: "Karan Pal Singh vs Arc Arora Projects Pvt Ltd (2023)",
            court: "Delhi High Court", 
            date: "18 April 2023",
            citation: "2023 DLT 234",
            issues: [
              "Whether a suit is barred by limitation when the plaint alleges acknowledgment of debt?",
              "Can limitation be decided at the stage of Order VII Rule 11 CPC?",
              "What constitutes a valid acknowledgment under Section 18 of the Limitation Act?"
            ],
            summary: "The Court held that if the plaint discloses a cause of action, it cannot be rejected under Order VII Rule 11(a) CPC. The judgment clarified that limitation is a mixed question of law and fact, which cannot be decided at the threshold unless it is apparent from the face of the plaint itself. The plaintiff's claim of acknowledgment of debt through balance sheet entries was held to be a factual matter requiring trial.",
            holdings: [
              "Limitation is generally a mixed question of law and fact",
              "Limitation can only be decided at threshold if apparent from plaint itself",
              "Balance sheet entries can constitute acknowledgment of debt under Section 18",
              "If plaint discloses cause of action, rejection is not warranted"
            ],
            precedents: [
              "Asset Reconstruction Co. (India) Ltd. v. Bishal Jaiswal (2021) 6 SCC 366",
              "Shakti Bhog Food Industries Ltd. v. Central Bank of India (2020) 17 SCC 260"
            ]
          }
        ].map((caseItem, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <button
              onClick={() => setExpandedCase(expandedCase === index ? null : index)}
              className="w-full p-4 flex items-start justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <div className="flex-1">
                <h5 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {caseItem.title}
                </h5>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Gavel className="w-3 h-3" />
                    {caseItem.court}
                  </span>
                  <span>•</span>
                  <span>{caseItem.date}</span>
                  <span>•</span>
                  <span className="font-mono">{caseItem.citation}</span>
                </div>
              </div>
              <div className="flex-shrink-0 ml-3">
                {expandedCase === index ? (
                  <ChevronDown className="w-5 h-5 text-neutral-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-neutral-500" />
                )}
              </div>
            </button>

            {expandedCase === index && (
              <div className="px-4 pb-4 space-y-4 border-t border-neutral-200 dark:border-neutral-800">
                {/* Issues */}
                <div className="pt-4">
                  <h6 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    ISSUES BEFORE THE COURT
                  </h6>
                  <ul className="space-y-2">
                    {caseItem.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="text-neutral-900 dark:text-neutral-100 font-bold mt-0.5">{i + 1}.</span>
                        <span className="flex-1">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                  <h6 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    JUDGMENT SUMMARY
                  </h6>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {caseItem.summary}
                  </p>
                </div>

                {/* Holdings */}
                <div>
                  <h6 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    KEY HOLDINGS
                  </h6>
                  <ul className="space-y-2">
                    {caseItem.holdings.map((holding, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 mt-2 flex-shrink-0" />
                        <span className="flex-1">{holding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Precedents */}
                <div>
                  <h6 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    PRECEDENTS CITED
                  </h6>
                  <ul className="space-y-2">
                    {caseItem.precedents.map((precedent, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 mt-2 flex-shrink-0" />
                        <span className="flex-1 font-mono text-xs">{precedent}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="px-3 py-1.5 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-xs rounded-lg transition-colors">
                    Get Court Copy
                  </button>
                  <button className="px-3 py-1.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs rounded-lg transition-colors border border-neutral-300 dark:border-neutral-700">
                    Add to Chat
                  </button>
                  <button className="px-3 py-1.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs rounded-lg transition-colors border border-neutral-300 dark:border-neutral-700">
                    Get Cited Acts
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export function ResearchFeature() {
  const messages = [
    {
      role: "user" as const,
      content: "Research case law on whether a plaint disclosing any cause of action can be rejected under Order VII Rule 11(a) CPC at the inception of the suit.",
      artifact: {
        type: "research" as const,
        title: "Legal Research Results",
        preview: <ResearchArtifactPreview />
      }
    },
    {
      role: "assistant" as const,
      content: "I've found 5 relevant cases addressing whether a plaint disclosing any cause of action can be rejected under Order VII Rule 11(a) CPC. The consistent legal position is clear: if any cause of action is disclosed, the plaint cannot be rejected at the threshold. Click on each case to explore the detailed issues, judgment summary, key holdings, and cited precedents."
    }
  ];

  return (
    <VideoFeature
      badge="AI-Powered Research"
      title="Comprehensive Legal Research"
      description="Natural language search across Indian case law, statutes, and regulations. Get precise answers with proper citations, analyze precedents with detailed case breakdowns including issues, holdings, and judgment summaries—all in seconds."
      messages={messages}
      reverse={false}
      skipThinking={true}
    />
  );
}