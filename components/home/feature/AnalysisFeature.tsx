"use client";

import { VideoFeature } from "./VideoFeature";
import { FileText } from "lucide-react";

const AnalysisArtifactPreview = () => (
  <div className="space-y-4 sm:space-y-5 md:space-y-6">
    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 md:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
        EXECUTIVE SUMMARY
      </h2>
      <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          This consolidated executive summary reviews the &quot;Corporate Services Agreement&quot; entered into between CSC Capital Markets (Ireland) Limited and Dunmore Securities No.1 Designated Activity Company. The agreement establishes the terms under which corporate administration services are to be provided to an Irish SPV.
        </p>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
        KEY FINDINGS WITH CITATIONS
      </h3>
      <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          The agreement provides comprehensive governance frameworks. 
          <span className="inline-flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 text-neutral-900 dark:text-neutral-100 text-[10px] sm:text-xs font-bold mx-1 cursor-pointer">
            1
          </span>
          The service provider is required to maintain statutory compliance and provide registered office services.
          <span className="inline-flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 text-neutral-900 dark:text-neutral-100 text-[10px] sm:text-xs font-bold mx-1 cursor-pointer">
            2
          </span>
        </p>
        
        <p>
          Critical liability provisions include gross negligence and wilful default carve-outs.
          <span className="inline-flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 text-neutral-900 dark:text-neutral-100 text-[10px] sm:text-xs font-bold mx-1 cursor-pointer">
            3
          </span>
          The liability cap is explicitly linked to indemnification provisions, protecting both parties from excessive exposure.
          <span className="inline-flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 text-neutral-900 dark:text-neutral-100 text-[10px] sm:text-xs font-bold mx-1 cursor-pointer">
            4
          </span>
        </p>

        <p>
          The agreement requires appointment of a replacement provider prior to termination,
          <span className="inline-flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 text-neutral-900 dark:text-neutral-100 text-[10px] sm:text-xs font-bold mx-1 cursor-pointer">
            5
          </span>
          ensuring continuity of corporate administration and preventing service gaps that could jeopardize the SPV&apos;s operational status.
        </p>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
        COMPARATIVE ANALYSIS
      </h3>
      <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          The following table presents the contract&apos;s structuring across the key analytic areas required for a consolidated comparison. Since the analysis concerns a single contract, the table benchmarks provisions against Irish market best practice and industry expectations for similar corporate services arrangements.
        </p>
        
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle px-4 sm:px-0">
            <table className="w-full border-collapse text-[10px] sm:text-xs">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="text-left p-2 sm:p-3 font-semibold text-neutral-900 dark:text-neutral-100">Aspect</th>
                  <th className="text-left p-2 sm:p-3 font-semibold text-neutral-900 dark:text-neutral-100">Agreement Terms</th>
                  <th className="text-left p-2 sm:p-3 font-semibold text-neutral-900 dark:text-neutral-100">Market Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                <tr>
                  <td className="p-2 sm:p-3 font-medium">Parties</td>
                  <td className="p-2 sm:p-3">Dunmore Securities No.1 DAC (SPV), CSC Capital Markets (Ireland) Limited (Provider)</td>
                  <td className="p-2 sm:p-3">SPV as company, specialist service provider</td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-medium">Scope of Services</td>
                  <td className="p-2 sm:p-3">Registered office, provision of officers, statutory compliance, administration</td>
                  <td className="p-2 sm:p-3">Comprehensive corporate administration including statutory compliance</td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-medium">Duration & Termination</td>
                  <td className="p-2 sm:p-3">Until terminated, 90-day notice by either party, replacement provider required</td>
                  <td className="p-2 sm:p-3">Flexible term, 90-day notice, cause-based termination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400" />
        INTERACTIVE CITATIONS
      </h3>
      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow-sm transition-all cursor-pointer">
            <span className="inline-flex items-center justify-center min-w-[20px] sm:min-w-[24px] h-5 sm:h-6 rounded bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[10px] sm:text-xs font-bold flex-shrink-0">{num}</span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-neutral-900 dark:text-neutral-100 mb-0.5 sm:mb-1">Section {num + 2}.{num} - {num === 1 ? "Services" : num === 2 ? "Registered Office" : num === 3 ? "Limitation of Liability" : num === 4 ? "Indemnification" : "Replacement Provider"}</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-[10px] sm:text-xs leading-relaxed">
                &quot;The Service Provider shall provide...&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
        RISK ASSESSMENT
      </h3>
      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
        <p className="mb-3 sm:mb-4">The agreement&apos;s primary risks and compliance issues are summarized below, with references to the relevant contract provisions.</p>
        
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-start gap-2 sm:gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Bankruptcy Remoteness:</span> Strong covenants support non-petition and limited recourse, substantially mitigating structural risk for SPV creditors and investors.
            </div>
          </div>
          
          <div className="flex items-start gap-2 sm:gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Contractual Continuity:</span> Obligation to appoint a replacement provider prior to termination effectively prevents administrative lapses.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 md:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
        RECOMMENDATIONS
      </h3>
      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Confirm Fee Letter Terms:</span> Ensure the Corporate Services Fee Letter is executed, up-to-date, and readily accessible for both parties.
          </div>
        </div>
        
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Review Data Protection Practices:</span> Regularly audit both company and provider activities for continued GDPR compliance.
          </div>
        </div>
        
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Monitor Replacement Provider Requirement:</span> In the event of intended termination, initiate succession planning promptly.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function AnalysisFeature() {
  const messages = [
    {
      role: "user" as const,
      content: "Perform a document analysis and provide me a contract executive summary with interactive citations",
      artifact: {
        type: "document" as const,
        title: "Executive Summary with Interactive Citations",
        preview: <AnalysisArtifactPreview />
      }
    },
    {
      role: "assistant" as const,
      content: "I've analyzed the Corporate Services Agreement and created a comprehensive executive summary with interactive citations. The analysis includes key findings referenced to specific contract sections, comparative benchmarking, risk assessment, and actionable recommendations. Click on any citation number to view the exact text from the document."
    }
  ];

  return (
    <VideoFeature
      badge="Intelligent Analysis"
      title="Smart Document Analysis with Interactive Citations"
      description="Upload any legal document for instant, comprehensive analysis. Extract key terms, identify risks, assess compliance, and get structured summaries with intelligent Q&A capabilities and clickable citations."
      messages={messages}
      reverse={true}
      skipThinking={true}
    />
  );
}