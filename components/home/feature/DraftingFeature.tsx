"use client";

import { VideoFeature } from "./VideoFeature";

const PetitionArtifactPreview = () => {
  return (
    <div className="relative">
      {/* Pure white petition document */}
      <div className="bg-white shadow-lg rounded-lg border border-neutral-300 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <div className="space-y-4 sm:space-y-6 text-neutral-900 font-serif text-xs sm:text-sm leading-relaxed">
          <div className="text-center space-y-1 sm:space-y-2 pb-3 sm:pb-4 border-b-2 border-neutral-900">
            <h1 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
              In The Court Of The III Additional Senior Civil Judge
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg font-bold">
              Ranga Reddy District At L.B. Nagar
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-semibold pt-2">O.S. No. 214 of 2024</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div>
              <p className="font-semibold">Between</p>
              <p className="pl-3 sm:pl-4 pt-1">Mr. Arjun Reddy,</p>
              <p className="pl-3 sm:pl-4">S/o Late Mahesh Reddy,</p>
              <p className="pl-3 sm:pl-4 italic">... Plaintiff</p>
            </div>

            <p className="text-center font-bold py-2">AND</p>

            <div>
              <p className="pl-3 sm:pl-4">1. Mrs. Kavitha Rao,</p>
              <p className="pl-6 sm:pl-8">W/o Suresh Rao,</p>
              <p className="pl-3 sm:pl-4">2. Mr. Suresh Rao,</p>
              <p className="pl-6 sm:pl-8">S/o Narasimha Rao,</p>
              <p className="pl-3 sm:pl-4 italic">... Defendants</p>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
            <h3 className="font-bold text-center text-sm sm:text-base uppercase">
              Affidavit Of Defendant No.1 In Support Of I.A. For Amendment Of Written Statement Affidavit Under Order 6 Rule 17 CPC
            </h3>

            <p className="leading-relaxed">
              I, Mrs. Kavitha Rao, W/o Suresh Rao, aged about 53 years, residing at Pristine estates, Defendant No.1 in the above suit, do hereby solemnly affirm and state as follows:
            </p>

            <div className="space-y-2 sm:space-y-3">
              <p>
                <span className="font-semibold">1.</span> It is submitted that the present suit, O.S. No. 214 of 2024, has been filed by the plaintiff Mr. Arjun Reddy against the Defendants for specific performance on the basis of an Agreement of Sale dated 18.06.2023 in respect of certain immovable property, alleging full readiness and willingness on his part and seeking a decree for execution of sale deed over the entire schedule property.
              </p>

              <p>
                <span className="font-semibold">2.</span> It is submitted that the defendants herein filed their original Written Statement on 20.06.2024, wherein the signatures on the suit agreement were admitted but it was specifically pleaded that the alleged agreement was only executed as security for a loan transaction and not intended as a contract for sale.
              </p>

              <p>
                <span className="font-semibold">3.</span> It is submitted that subsequent to the filing of the Written Statement, during the course of proceedings and particularly during the cross-examination of the plaintiff and perusal of record, certified copies of the relevant title and revenue documents were obtained in December 2025.
              </p>
            </div>

            <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3 border-t border-neutral-400">
              <h4 className="font-bold text-center">PRAYER</h4>
              <p>It is therefore most respectfully prayed that this Hon&apos;ble Court may be pleased to:</p>
              <p className="pl-4 sm:pl-6">a) Permit the defendants to amend their Written Statement as stated in the interests of justice;</p>
              <p className="pl-4 sm:pl-6">b) Grant such other and further reliefs as this Hon&apos;ble Court deems fit and proper in the interests of equity and justice.</p>
            </div>

            <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <h4 className="font-bold">VERIFICATION</h4>
              <p>I, Mrs. Kavitha Rao, Defendant No.1 above named, do hereby declare that the above statements are true and correct to the best of my knowledge, belief and information.</p>
              
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 pt-4 sm:pt-6">
                <div>
                  <p>Place: L.B. Nagar</p>
                  <p>Date: 01-01-2026</p>
                </div>
                <div className="sm:text-right">
                  <div className="pt-6 sm:pt-8 border-b border-neutral-500 w-32 sm:w-40"></div>
                  <p className="pt-1">(Sd/-) Mrs. Kavitha Rao</p>
                  <p className="text-xs text-neutral-600 pt-1">Advocate for Defendants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function DraftingFeature() {
  const messages = [
    {
      role: "user" as const,
      content: "Draft me a petition for an amendment to a written statement affidavit as per order 6 rule 17 of CPC. The case is O.S. No. 214 of 2024, plaintiff is Mr. Arjun Reddy seeking specific performance. Defendants discovered new facts about property ownership during cross-examination in December 2025.",
      artifact: {
        type: "document" as const,
        title: "Petition for Amendment - Order 6 Rule 17 CPC",
        preview: <PetitionArtifactPreview />
      }
    },
    {
      role: "assistant" as const,
      content: "I've drafted a comprehensive petition for amendment of written statement affidavit under Order 6 Rule 17 CPC for O.S. No. 214 of 2024. The document includes the affidavit with all necessary details about the newly discovered facts regarding property ownership, prior alienation, and the proposed amendments. The petition is structured to meet standard legal requirements and addresses the timing, due diligence, and necessity for amendment as required by law."
    }
  ];

  return (
    <VideoFeature
      badge="Automated Drafting"
      title="Generate Legal Documents in Seconds"
      description="From contracts to notices, create compliant legal documents tailored to Indian jurisdiction. Our AI understands the nuances of Indian law and drafts documents ready for review."
      messages={messages}
      reverse={false}
      skipThinking={true}
    />
  );
}