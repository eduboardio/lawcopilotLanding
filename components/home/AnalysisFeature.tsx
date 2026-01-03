"use client";

import { VideoFeature } from "./VideoFeature";

const AnalysisArtifactPreview = () => (
  <div className="space-y-6 max-w-4xl">
    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
      <h2 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
        EXECUTIVE SUMMARY
      </h2>
      <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          This consolidated executive summary reviews the &quot;Corporate Services Agreement&quot; entered into between CSC Capital Markets (Ireland) Limited and Dunmore Securities No.1 Designated Activity Company. The agreement establishes the terms under which corporate administration services are to be provided to an Irish SPV. The scope, risk allocations, compliance mechanisms, and structural safeguards conform closely to Irish market norms for orphan SPV structures. No other documents were analyzed for comparison; this is a deep-dive into the available agreement and its provisions.
        </p>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
      <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        COMPARATIVE ANALYSIS
      </h3>
      <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          The following table presents the contract&apos;s structuring across the key analytic areas required for a consolidated comparison. Since the analysis concerns a single contract, the table benchmarks provisions against Irish market best practice and industry expectations for similar corporate services arrangements.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left p-3 font-semibold text-neutral-900 dark:text-neutral-100">Aspect</th>
                <th className="text-left p-3 font-semibold text-neutral-900 dark:text-neutral-100">Agreement Terms</th>
                <th className="text-left p-3 font-semibold text-neutral-900 dark:text-neutral-100">Market Standard</th>
                <th className="text-left p-3 font-semibold text-neutral-900 dark:text-neutral-100">Notable Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <tr>
                <td className="p-3 font-medium">Parties</td>
                <td className="p-3">Dunmore Securities No.1 DAC (SPV), CSC Capital Markets (Ireland) Limited (Provider), CSC Share Trustee Services (Ireland) Limited (Share Trustee)</td>
                <td className="p-3">SPV as company, specialist service provider, often orphaned via charitable share trust</td>
                <td className="p-3">Follows orphan SPV standard, with charitable trust holding shares</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Scope of Services</td>
                <td className="p-3">Registered office, provision of officers, statutory compliance, administration, board meetings, Irish tax residency management</td>
                <td className="p-3">Comprehensive corporate administration including statutory compliance and governance support</td>
                <td className="p-3">Explicit board composition and tax residency safeguarding</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Duration & Termination</td>
                <td className="p-3">Until terminated, 90-day notice by either party, immediate for unremedied breach, appointment of replacement provider required prior to effective termination</td>
                <td className="p-3">Flexible term, 90-day notice, cause-based immediate termination</td>
                <td className="p-3">Obligatory replacement provider as continuity safeguard</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Payment Terms</td>
                <td className="p-3">Fees per separate Fee Letter; reimbursement for justified expenses and legal fees; extra remuneration for exceptional services</td>
                <td className="p-3">Fee letter, cost recovery, variable fees for out-of-scope work</td>
                <td className="p-3">No payment terms in main agreement; reliance on external Fee Letter</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Liability & Indemnity</td>
                <td className="p-3">Gross negligence, fraud and wilful default carve outs; liability cap linked to indemnification provisions</td>
                <td className="p-3">Gross negligence/wilful default as standard triggers for liability/indemnity</td>
                <td className="p-3">Explicit survival of indemnities post-resignation; strong bankruptcy remoteness language</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Confidentiality</td>
                <td className="p-3">Strict obligations, with standard exceptions for law/professional advice; survives termination</td>
                <td className="p-3">Expected; usually indefinite for sensitive/confidential information</td>
                <td className="p-3">Broad scope and clear exceptions</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Assignment</td>
                <td className="p-3">Assignment only by mutual written consent</td>
                <td className="p-3">Written consent required; sometimes limited right for intragroup transfer</td>
                <td className="p-3">Strict; no carve-outs for group companies</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Non-Petition / Limited Recourse</td>
                <td className="p-3">No right to petition for winding-up except as permitted; limited recourse to SPV assets only</td>
                <td className="p-3">Market norm for bankruptcy remoteness</td>
                <td className="p-3">Strengthens bankruptcy remoteness protection</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Data Protection</td>
                <td className="p-3">Granular GDPR provisions, including roles, audit rights, notification, subprocessor controls</td>
                <td className="p-3">Post-2018 agreements generally reflect enhanced data security; audit rights less common</td>
                <td className="p-3">Stronger than older agreements; explicit subprocessor controls and audit</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Regulatory & Tax Compliance</td>
                <td className="p-3">Covers FATCA, CRS, EMIR, Irish tax residency, compliance filings</td>
                <td className="p-3">Coverage of tax law, reporting obligations, and regulatory compliance is routine</td>
                <td className="p-3">Detailed procedural compliance clauses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
      <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        RISK ASSESSMENT
      </h3>
      <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
        <p className="mb-4">The agreement&apos;s primary risks and compliance issues are summarized below, with references to the relevant contract provisions.</p>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Bankruptcy Remoteness:</span> Strong covenants support non-petition and limited recourse, substantially mitigating structural risk for SPV creditors and investors.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Contractual Continuity:</span> Obligation to appoint a replacement provider prior to termination effectively prevents administrative lapses; risk of forced business interruption is minimized.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Liability/Indemnity Exposure:</span> Corporate services provider&apos;s liability is capped except for gross negligence, fraud or wilful default, consistent with market risk allocation norms.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Data Protection/Privacy:</span> The contract&apos;s GDPR-compliant framework is highly detailed, imposing significant compliance burdens (e.g. audit rights, subprocessor vetting), but also providing robust risk controls.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Tax/Regulatory Status:</span> Extensive obligations around tax residency management and regulatory compliance (FATCA, CRS, etc.) serve to protect the company against inadvertent breaches.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Payment Term Transparency:</span> Reliance on an external Fee Letter for commercial terms means all parties must ensure consistency and linkage; absence of the Fee Letter would represent a residual risk.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Assignment Restrictions:</span> Lack of group company assignment carve-out may impede operational flexibility for the provider.
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="font-semibold mt-0.5">•</span>
            <div>
              <span className="font-semibold">Document Reference Gaps:</span> The agreement refers to a Corporate Services Fee Letter, but the actual letter was not appended or reviewed; all commercial assessments depend on its existence and terms.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
      <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        RECOMMENDATIONS
      </h3>
      <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
        <div className="flex items-start gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Confirm Fee Letter Terms:</span> Ensure the Corporate Services Fee Letter is executed, up-to-date, and readily accessible for both parties, as all payment provisions are contingent upon it.
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Review Data Protection Practices:</span> Regularly audit both company and provider activities for continued GDPR compliance, given the depth of the data protection undertakings (e.g., audits, sub-processor vetting, breach handling).
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div><span className="font-semibold">Monitor Replacement Provider Requirement:</span> In the event of intended termination, initiate succession planning for a replacement provider promptly to avoid service gaps.
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Assess Assignment Provisions:</span> Consider amending the assignment clause to allow group company or affiliate assignments, if future flexibility is needed.
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="font-semibold mt-0.5">•</span>
          <div>
            <span className="font-semibold">Verify Compliance Updates:</span> Given evolving FATCA, CRS, and other regulatory regimes, perform regular legal reviews to ensure compliance obligations remain adequately addressed.
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Overall, the contract provides a strong governance, compliance, and risk mitigation framework for Irish SPV administration. Appropriate attention should be given to living documents referenced externally, and future operational flexibility in assignment and provider succession.
        </p>
      </div>
    </div>
  </div>
);

export function AnalysisFeature() {
  const messages = [
    {
      role: "user" as const,
      content: "Perform a document analysis and provide me a contract executive summary",
      artifact: {
        type: "document" as const,
        title: "Executive Summary of Corporate Services Agreement",
        preview: <AnalysisArtifactPreview />
      }
    },
    {
      role: "assistant" as const,
      content: "I've analyzed the Corporate Services Agreement and created a comprehensive executive summary. The analysis covers parties involved, core services, risk assessment, compliance requirements, and actionable recommendations for both parties."
    }
  ];

  return (
    <VideoFeature
      badge="Intelligent Analysis"
      title="Deep Document Understanding"
      description="Upload any legal document for instant, comprehensive analysis. Extract key terms, identify risks, assess compliance, and get structured summaries with intelligent Q&A capabilities."
      messages={messages}
      reverse={true}
    />
  );
}