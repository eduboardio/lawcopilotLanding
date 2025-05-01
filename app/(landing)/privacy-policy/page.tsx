"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <section className="container px-4 py-8 md:py-16 lg:py-24">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Privacy Policy</h1>
        <div className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2 space-y-3">
          <p>
            Law Co-Pilot LLP (&quot;Law Co-Pilot&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your right to privacy, and we are committed to securing and protecting any information we collect from you.
          </p>
          <p>
            This Privacy Policy describes the ways we collect, use, and share information relating to an identifiable individual (&quot;Personal Data&quot;), and outlines how you can exercise your rights under applicable privacy and data protection laws.
          </p>
          <p>
            Law Co-Pilot provides a secure AI-powered platform available as a software-as-a-service (&quot;SaaS&quot;) offering that assists with legal analysis, research, documentation and automation for professionals in the legal industry. We are headquartered and operate our data centers exclusively in India, ensuring your data remains stored locally.
          </p>
          <p>
            This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of our Law-Copilot Products.
          </p>
        </div>
      </div>
      
      <Card className="mx-auto max-w-4xl">
        <CardContent className="pt-4 md:pt-6">
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm md:text-base">
            {/* Table of Contents */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Table of Contents</h2>
              <ol className="pl-5 space-y-1">
                <li><a href="#applicability" className="text-primary hover:underline">Applicability of this Privacy Policy</a></li>
                <li><a href="#personal-data" className="text-primary hover:underline">Personal Data We Collect and Process</a></li>
                <li><a href="#how-we-use" className="text-primary hover:underline">How We Use Personal Data</a></li>
                <li><a href="#who-we-share" className="text-primary hover:underline">Who We Share Your Personal Data With</a></li>
                <li><a href="#security" className="text-primary hover:underline">How We Keep Your Personal Data Secure</a></li>
                <li><a href="#transfers" className="text-primary hover:underline">International Data Transfers</a></li>
                <li><a href="#retention" className="text-primary hover:underline">Data Retention</a></li>
                <li><a href="#rights" className="text-primary hover:underline">Your Data Protection Rights</a></li>
                <li><a href="#children" className="text-primary hover:underline">Children's Privacy</a></li>
                <li><a href="#updates" className="text-primary hover:underline">Updates to this Privacy Policy</a></li>
                <li><a href="#contact" className="text-primary hover:underline">Contact Information</a></li>
              </ol>
            </div>
            
            <div id="applicability" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">1. Applicability of this Privacy Policy</h2>
            <p>
              This Privacy Policy outlines how Law Co-Pilot LLP ("Law Co-Pilot", "we", "us", "our") collects, processes, and manages Personal Data obtained from or about you through our website (lawcopilot.in), our AI-powered software-as-a-service ("SaaS") platform, associated applications, and all related services ("Services"), and through any other interactions you may have with us, such as customer support communications or marketing interactions.
            </p>
            <p>
              Our Services are designed primarily for use by businesses, law firms, legal professionals, and other corporate entities (collectively, "Customers") for professional purposes. We enter into specific contractual agreements with our Customers, such as our standard terms of service, customer agreements, data processing agreements, or other applicable contracts ("Customer Agreements"). These Customer Agreements govern the use of our platform, applications, and Services provided to our Customers.
            </p>
            <p>
              This Privacy Policy does not apply to data or content ("Customer Data" or "Content") uploaded by Customers or generated through their use of our platform and applications. Such Customer Data and Content are processed strictly on behalf of our Customers, and our role with respect to such processing is solely that of a Data Processor under applicable data protection laws. The processing and protection of Customer Data and Content are governed exclusively by the relevant Customer Agreements, and any inquiries or concerns regarding such data must be directed to the respective Customers acting as the Data Controllers.
            </p>
            <p>
              Law Co-Pilot acts as the Data Controller solely with respect to Personal Data collected directly by us or indirectly via your interactions with our website, platform, marketing activities, social media presence, and other communications not governed by separate Customer Agreements. This Privacy Policy governs our responsibilities and practices related to Personal Data only in these scenarios.
            </p>
            <p>
              We recommend reviewing this Privacy Policy thoroughly to ensure a complete understanding of how Law Co-Pilot handles your Personal Data.
            </p>
          </div>
                   
          {/* Section 2: Personal Data */}
          <div id="personal-data" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">2. Personal Data We Collect and Process</h2>
            <p>
              In the course of operating our business, providing our Services, and through interactions with our website or platform, Law Co-Pilot LLP collects and receives Personal Data through various means and from multiple sources. This section outlines the categories of Personal Data we collect:
            </p>
            <h3 className="text-lg md:text-xl font-medium mt-4 mb-2">Information Provided Directly by You</h3>
            <p>
              We collect Personal Data directly from you when you create an account, use our Services, or interact with us:
            </p>
            <p className="font-medium">a) Account Information:</p>
            <p>
              When you or your organization registers an account with us, we collect information necessary for account creation and management. This may include your full name, email address, professional qualifications, occupation, preferred language, secure login credentials (such as usernames and encrypted passwords), billing and payment information, and transaction or usage history (collectively, "Account Information").
            </p>
            <p className="font-medium">b) Communication Information:</p>
            <p>
              When you interact with us—such as submitting queries to customer support, providing feedback, responding to surveys, or using our help center—we collect your name, contact information, occupation, survey responses, engagement patterns, and the content of your messages ("Communication Information").
            </p>
            <p className="font-medium">c) Social Media Information:</p>
            <p>
              If you engage with our official company pages on platforms like LinkedIn, X (formerly Twitter), YouTube, etc., we may collect any Personal Data you choose to share, including contact details, comments, or direct messages. We also receive aggregated analytics and engagement metrics from these platforms ("Social Media Information").
            </p>
            <p className="font-medium">d) Content You Upload or Process through the Interface:</p>
            <p>
              When you upload documents or interact with the platform (e.g., via our AI chat interface), we may collect the data contained within those documents. This may include names, addresses, legal clauses, or other identifying information. These documents are processed via third-party APIs such as Google OCR, Google Gemini, or OpenAI API for translation, summarization, and legal drafting functionalities. You are responsible for ensuring that any data shared through the platform complies with applicable data protection laws and does not contain sensitive or illegal content without appropriate legal basis.
            </p>
            <h3 className="text-lg md:text-xl font-medium mt-4 mb-2">Information Collected Automatically</h3>
            <p>
              We also collect certain information through automated technical means from your browser or device when you interact with our website or Services:
            </p>
            <p className="font-medium">a) Log Data:</p>
            <p>
              This includes your IP address, browser type, access time and duration, referral URLs, and details on how you interact with specific features of the site or Services ("Log Data").
            </p>
            <p className="font-medium">b) Usage Data:</p>
            <p>
              We collect metadata related to your interaction with the Services, including frequency and length of sessions, features accessed, types of queries submitted, and other behavioral analytics ("Usage Data").
            </p>
            <p className="font-medium">c) Cookies and Similar Technologies:</p>
            <p>
              We use cookies, scripts, tags, and tracking pixels to manage user sessions, customize your experience, enhance site navigation, conduct analytics, and offer relevant advertisements. You can review our [Cookie Policy] for more information about the types of cookies we use and your opt-out choices.
            </p>
            <p className="font-medium">d) Device Information:</p>
            <p>
              We collect device-specific information to optimize the performance and security of our Services. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device name and type (mobile, desktop, tablet, etc.)</li>
              <li>Operating system and version</li>
              <li>Browser type and version</li>
              <li>Device identifiers (e.g., IP address, IMEI number, UUID, session tokens)</li>
              <li>Connection data (e.g., ISP, network type, language settings)</li>
              <li>Locale and time zone settings</li>
              <li>Screen resolution and configuration data</li>
            </ul>
            <p>
              This information helps us detect anomalies, diagnose issues, and deliver location-specific features or compliance requirements. The exact data collected may vary based on your device settings, browser configuration, and platform features used.
            </p>
            <p className="font-medium">e) Geo-Location Data:</p>
            <p>
              If you enable location services on your device or browser, we may collect and process geo-location data using services such as IP-based location or GPS data. This helps tailor platform functionality (e.g., jurisdiction-specific content, language, compliance protocols). By using our Services and enabling such features, you consent to this data collection.
            </p>
            <p>
              You may withdraw consent to location-based services through your device or browser settings at any time.
            </p>
            <h3 className="text-lg md:text-xl font-medium mt-4 mb-2">Information We Collect from Third Parties</h3>
            <p>
              We may receive additional Personal Data from trusted external partners, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Security Providers: for fraud prevention and abuse detection.</li>
              <li>Marketing Partners: who assist us in identifying and targeting potential customers.</li>
              <li>Analytics Vendors: providing usage metrics and behavioral segmentation.</li>
              <li>Event Organizers: who share attendee details from legal conferences, webinars, or professional seminars.</li>
            </ul>
            <p>(Collectively, "Third-Party Information").</p>
            <h3 className="text-lg md:text-xl font-medium mt-4 mb-2">Publicly Available Information</h3>
            <p>
              We may collect data from publicly available sources, such as judgments, statutes, government databases, legal digests, or professional registries. This may be used to improve our Services, conduct AI model training, or support legal research functionalities. You can contact us at privacy@lawcopilot.in for further details about how such data is used and protected.
            </p>
          </div>
            
{/* Section 3: How We Use */}
<div id="how-we-use" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">3. How We Use Personal Data</h2>
            <p>
              Law Co-Pilot LLP uses the Personal Data described in this Privacy Policy exclusively for legitimate business purposes, to enhance your experience with our Services, ensure efficient operations, and meet legal obligations. Specifically, we process your Personal Data for the following purposes:
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Provide and Maintain Our Services:</h3>
            <p>
              We use your Personal Data, including Account Information and Communication Information, to deliver and maintain our Services, authenticate your access, manage your accounts, and provide personalized support.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Develop, Improve, and Update Our Services:</h3>
            <p>
              Your Usage Data, Log Data, and Device Information help us analyze how you interact with our platform, enabling us to enhance existing features, identify areas of improvement, and develop new functionalities.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Conduct Research:</h3>
            <p>
              We aggregate and analyze Personal Data and Publicly Available Information to conduct research aimed at improving the accuracy, efficiency, and reliability of our AI-powered solutions and Services.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Personalize Your Experience:</h3>
            <p>
              Using Cookies, Usage Data, and Account Information, we personalize content and recommendations within our platform to better align with your professional needs, preferences, and interaction patterns.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Provide Customer Support:</h3>
            <p>
              Communication Information and Account Information help us efficiently respond to your inquiries, address technical issues, troubleshoot problems, and deliver high-quality customer service.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Communicate with You:</h3>
            <p>
              We use your contact details, with your consent when required by law, to send you essential notifications, updates, newsletters, promotional messages, and information regarding our Services, events, or webinars that may interest you.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Evaluate and Promote Our Services:</h3>
            <p>
              With appropriate consent (as required by law), we assess your eligibility and interest to provide targeted offers and promotional materials about our Services, leveraging Personal Data in cooperation with marketing and advertising partners.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Protect Our Services and Users:</h3>
            <p>
              We utilize your Personal Data to detect, prevent, and address fraud, unauthorized access, security incidents, illegal activities, and other misuses of our platform, thereby safeguarding the integrity of our systems and the security of our user community.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">To Comply with Legal Obligations:</h3>
            <p>
              We process your Personal Data to comply with applicable laws, regulations, court orders, legal processes, and other enforceable requests from competent authorities, as well as to protect the rights, privacy, property, and safety of our users, employees, affiliates, and third parties.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Use of Aggregated or De-identified Data:</h3>
            <p>
              We may aggregate or anonymize your Personal Data in such a way that you can no longer be individually identified. We use this aggregated or anonymized data for various analytical and developmental purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li className="mb-1">Evaluating and enhancing the effectiveness and quality of our Services.</li>
              <li className="mb-1">Conducting market research, analytics, and performance benchmarking.</li>
              <li className="mb-1">Developing insights and strategic plans for our business.</li>
              <li className="mb-1">Publishing general statistics about platform usage, user trends, and other relevant information on our blog, website, or social media channels (e.g., LinkedIn).</li>
            </ul>
            <p>
              Please note that we adhere strictly to our commitment not to re-identify anonymized data unless required explicitly by applicable laws or regulations.
            </p>
          </div>
          
          {/* Section 4: Who We Share */}
          <div id="who-we-share" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">4. Who We Share Your Personal Data With</h2>
            <p>
              Law Co-Pilot LLP prioritizes the confidentiality and protection of your Personal Data. We do not sell or rent your Personal Data to third parties. However, for the effective provision of our Services and for legitimate business purposes, we may share your Personal Data with certain trusted entities under specific circumstances, as outlined below:
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">a) Affiliates and Group Companies:</h3>
            <p>
              We may share your Personal Data, such as Account Information and Communication Information, with our corporate affiliates and subsidiaries within the Law Co-Pilot group of companies. This sharing is strictly limited to purposes described within this Privacy Policy, including internal administration, payment processing, customer support, fraud prevention, IT support, operational enhancements, technical assistance, and business development activities.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">b) Trusted Service Providers:</h3>
            <p>
              We engage third-party vendors and service providers to help us operate, maintain, and enhance our Services. These third parties have restricted access to your Personal Data solely to perform tasks on our behalf and are bound by strict confidentiality agreements prohibiting them from disclosing or using your Personal Data for unauthorized purposes. Categories of such providers include:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li className="mb-1"><strong>Hosting Providers:</strong> Entities that securely host our website, platform, and related data on servers located exclusively within India.</li>
              <li className="mb-1"><strong>Email and Communication Providers:</strong> Vendors assisting with email communication services and customer relationship management platforms.</li>
              <li className="mb-1"><strong>Payment Processing Providers:</strong> Trusted partners that securely process payments and handle billing transactions.</li>
              <li className="mb-1"><strong>Customer Support Providers:</strong> Partners who provide customer support services, such as helpdesk management and issue resolution.</li>
              <li className="mb-1"><strong>Marketing and Analytics Providers:</strong> Service providers who assist with targeted marketing campaigns, market research, performance analytics, and promotional activities.</li>
              <li className="mb-1"><strong>Authentication and Security Providers:</strong> Third-party companies offering cybersecurity, identity verification, authentication, and fraud detection services.</li>
            </ul>
            <h3 className="text-lg font-medium mt-4 mb-2">c) Integration with Third-Party Applications and Platforms:</h3>
            <p>
              If you choose to integrate your Law Copilot account with external third-party applications (for example, Microsoft Office, Google Workspace, or similar platforms), certain Account Information and Usage Data may be shared with the providers of these third-party services. We advise you to carefully review the privacy policies and terms of service of any third-party applications or platforms before enabling such integrations, as their own privacy practices will govern how they manage your data.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">d) Business Reorganization or Corporate Transactions:</h3>
            <p>
              In the event of a business reorganization, merger, acquisition, sale, consolidation, liquidation, or transfer of all or a significant portion of Law Co-Pilot LLP's assets, we may share or transfer your Personal Data as part of the due diligence or transaction process. Should this occur, we will notify you directly and take all reasonable measures to ensure the continued protection and confidentiality of your Personal Data in accordance with this Privacy Policy.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">e) Professional Advisors and Regulatory Authorities:</h3>
            <p>
              We may share your Personal Data with our professional advisors, including legal counsel, auditors, accountants, consultants, and tax advisors, as necessary for legitimate business and compliance purposes. Additionally, we may disclose your Personal Data to law enforcement agencies, governmental or regulatory authorities, judicial bodies, civil litigants, or other relevant entities when we reasonably believe such disclosure is necessary to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li className="mb-1">Comply with applicable laws, regulations, legal obligations, court orders, or enforceable governmental requests.</li>
              <li className="mb-1">Investigate, prevent, or address fraud, security incidents, violations of our terms of service, illegal activities, or potential threats.</li>
              <li className="mb-1">Protect the rights, property, privacy, safety, and well-being of Law Co-Pilot LLP, our users, affiliates, employees, or the public.</li>
            </ul>
          </div>
            
{/* Section 5: Security */}
<div id="security" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">5. How We Keep Your Personal Data Secure</h2>
            <p>
              Law Co-Pilot LLP takes the security and confidentiality of your Personal Data very seriously. We have implemented robust technical, administrative, and organizational security measures designed to protect your Personal Data against unauthorized access, alteration, disclosure, loss, misuse, or destruction. These measures are regularly reviewed and updated to ensure they remain effective and appropriate to the evolving nature of the threats and risks involved.
            </p>
            <p>
              Specifically, our security measures include, but are not limited to:
            </p>
            <p className="font-medium">Data Encryption:</p>
            <p>
              All Personal Data is encrypted both in transit and at rest using industry-standard encryption protocols (e.g., TLS/SSL for data transmission and AES-256 encryption for stored data).
            </p>
            <p className="font-medium">Secure Data Hosting:</p>
            <p>
              We host all Personal Data exclusively within secure, state-of-the-art data centers located in India, complying fully with local data residency and protection regulations.
            </p>
            <p className="font-medium">Access Control and Authentication:</p>
            <p>
              Strict access controls are implemented to ensure that only authorized personnel, bound by confidentiality agreements and trained in data protection practices, can access Personal Data. Access is granted on a role-based, least-privilege basis, and is regularly reviewed.
            </p>
            <p className="font-medium">Continuous Monitoring and Auditing:</p>
            <p>
              We employ advanced monitoring systems, intrusion detection systems (IDS), and regular security audits to promptly detect, investigate, and respond to any potential security incidents or vulnerabilities.
            </p>
            <p className="font-medium">Incident Response and Management:</p>
            <p>
              Our incident response protocols are designed to promptly identify, contain, mitigate, and remediate security incidents. We also have established procedures for timely notification to affected users and regulatory authorities, as mandated by applicable laws.
            </p>
            <p className="font-medium">Security Awareness and Training:</p>
            <p>
              All employees and contractors handling Personal Data receive regular data protection training to maintain awareness of privacy and security obligations and best practices.
            </p>
            <p className="font-medium">Regular Risk Assessments:</p>
            <p>
              We conduct regular risk assessments, vulnerability scans, and penetration tests to proactively identify and mitigate security risks or vulnerabilities that could potentially compromise your Personal Data.
            </p>
            <p>
              While we continuously strive to protect your Personal Data with comprehensive security measures, it is important to acknowledge that no security mechanism or transmission method is 100% foolproof. If you have any reason to believe that your interactions with us are no longer secure, please immediately notify us at privacy@lawcopilot.in.
            </p>
          </div>
          
          {/* Section 6: Transfers */}
          <div id="transfers" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">6. International Data Transfers</h2>
            <p>
              Law Co-Pilot LLP is committed to maintaining a robust framework for the protection, processing, and storage of Personal Data in compliance with the Digital Personal Data Protection Act, 2023 and other applicable Indian laws. To ensure strict adherence to data sovereignty principles, we have adopted the following international data transfer policy:
            </p>
            <p className="font-medium">6.1 Data Residency and Localization</p>
            <p>
              All Personal Data collected from users located in India is stored, processed, and managed exclusively within Indian territory. Our servers, cloud infrastructure, and data hosting environments are located in data centers within India, ensuring compliance with Indian data residency laws.
            </p>
            <p className="font-medium">6.2 No International Transfers for Indian Users</p>
            <p>
              For users accessing our website or using our Services from within India, no Personal Data is transferred, mirrored, backed up, or stored outside the geographical boundaries of India under ordinary circumstances. Your data stays within India unless explicitly required under law.
            </p>
            <p className="font-medium">6.3 Use of Third-party Providers</p>
            <p>
              Where we engage third-party service providers for specific features or operations—such as payment gateways, customer support tools, analytics platforms, or cloud infrastructure providers—we take the following precautions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>We contractually bind such third parties to store and process data within India wherever technically feasible.</li>
              <li>Where data must be processed outside India (e.g., global email or cloud service providers), such processing is limited to non-Personal Data or conducted under strict contractual obligations, including the use of Data Processing Agreements (DPAs), standard contractual clauses, and robust technical and organizational security measures.</li>
            </ul>
            <p>
              Examples of such providers include Razorpay (for payments), Azure India (for cloud hosting), and SendGrid or similar email providers (for transactional notifications).
            </p>
            <p className="font-medium">6.4 Use of AI APIs and Data Protection</p>
            <p>
              OpenAI API: While we use third-party APIs such as OpenAI for natural language generation and document summarization, we do not transmit or share Personal Data to OpenAI's servers. All interactions are proxied through internal gateways that scrub or anonymize any sensitive or identifiable information prior to API calls.
            </p>
            <p>
              Azure Cognitive Services / OCR APIs: Where document processing involves extraction using OCR (Optical Character Recognition), we use APIs offered by providers with Indian data centers (e.g., Microsoft Azure India) and ensure encryption and non-retention of input/output data.
            </p>
            <p>
              All AI-related integrations are architected with data minimization, data segregation, and non-persistencesafeguards to prevent any unauthorized data export or profiling.
            </p>
            <p className="font-medium">6.5 Exceptional Scenarios</p>
            <p>
              In rare and narrowly defined cases, international transfers of Personal Data may be necessitated:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To comply with binding orders of Indian courts, tribunals, or law enforcement agencies;</li>
              <li>For legal defense in cross-border regulatory or judicial proceedings;</li>
              <li>Where explicitly permitted under applicable Indian data protection laws.</li>
            </ul>
            <p>
              In such instances, we will ensure:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your Personal Data is transferred only with appropriate legal basis and safeguards (e.g., encryption, purpose limitation);</li>
              <li>You are notified, wherever feasible and legally permitted, about the nature and purpose of the transfer.</li>
            </ul>
            <p className="font-medium">6.6 No Sale or Commercial Disclosure of Data</p>
            <p>
              Law Co-Pilot LLP does not sell, rent, or commercially transfer your Personal Data to any foreign entity or third party in exchange for monetary or non-monetary consideration.
            </p>
            <p className="font-medium">6.7 Questions and Transparency</p>
            <p>
              We believe in transparency and accountability. If you have any questions or concerns regarding international data transfers, third-party services, or our data localization policies, please contact:
            </p>
            <p>
              Email: privacy@lawcopilot.in
            </p>
          </div>
            
            {/* Section 7: Retention */}
          <div id="retention" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">7. Data Retention</h2>
            <p>
              Law Co-Pilot LLP retains your Personal Data only for as long as necessary to fulfill the specific purposes for which we collected the data, as described in this Privacy Policy, and in compliance with applicable laws and regulations.
            </p>
            <p>Our data retention practices take into account several factors, including:</p>
            <h3 className="text-lg font-medium mt-4 mb-2">Terms of Customer Agreements:</h3>
            <p>
              If your use of our Services is governed by a specific Customer Agreement, we retain your Personal Data strictly in accordance with the terms stipulated therein. Upon termination or expiry of such agreements, your Personal Data will be deleted or anonymized as per the agreed-upon timelines.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Compliance with Legal and Regulatory Obligations:</h3>
            <p>
              We retain certain categories of Personal Data (e.g., transaction history, account information) for legally mandated periods required by Indian tax, accounting, auditing standards, regulatory obligations, or other compliance requirements.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Dispute Resolution and Enforcement:</h3>
            <p>
              In cases involving disputes, potential legal claims, or violations of our terms or policies, we may retain relevant Personal Data as long as necessary to resolve such matters or to protect our legal rights.
            </p>
            <p>
              When Law Co-Pilot LLP no longer has any ongoing legitimate business purpose or legal justification to process your Personal Data, we will either securely delete your data or anonymize it in such a manner that it can no longer be used to identify you individually.
            </p>
            <p>
              In circumstances where immediate deletion is not feasible (such as when data is stored within secure backup archives), we will isolate your Personal Data securely, ensuring it remains protected from further processing or unauthorized access until deletion or anonymization becomes technically possible.
            </p>
            <p>
              If you have specific questions regarding our data retention practices or wish to request deletion or correction of your Personal Data, please contact us at privacy@lawcopilot.in.
            </p>
          </div>

          {/* Section 8: Rights */}
          <div id="rights" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">8. Your Data Protection Rights</h2>
            <p>
              Individuals across jurisdictions—including the European Union, United Kingdom, United States, and India—have certain statutory rights regarding their Personal Data. Subject to applicable data protection laws and certain legal exceptions, you may exercise the following rights:
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Right to Access, Rectify, or Delete:</h3>
            <p>
              You have the right to request access to your Personal Data, request correction of inaccurate or incomplete data, or request deletion of data where it is no longer necessary for the purposes for which it was collected.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Right to Object or Restrict Processing:</h3>
            <p>
              You may object to the processing of your Personal Data under certain conditions or request that we restrict the processing of your data where legally permissible.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Right to Data Portability:</h3>
            <p>
              You can request a copy of your Personal Data in a structured, commonly used, and machine-readable format, and you may request that this data be transmitted to another data controller.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Right to Opt-Out of Marketing Communications:</h3>
            <p>
              You may opt-out of receiving marketing communications at any time by clicking the "unsubscribe" or "opt-out" link in our marketing emails. To opt out of other forms of marketing (e.g., postal or phone), please contact us using the details under Section 12. Note: even if you opt out of marketing, you will continue to receive service-related communications.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Right to Withdraw Consent:</h3>
            <p>
              Where processing is based on your consent, you may withdraw that consent at any time. This withdrawal does not affect the lawfulness of prior processing nor processing carried out on other lawful bases.
            </p>
            <h3 className="text-lg font-medium mt-4 mb-2">Right to Complain to a Supervisory Authority:</h3>
            <p>
              If you believe we have infringed your privacy rights, you may have the right to lodge a complaint with your local data protection authority. Contact details for EU data protection authorities are available here, and for the UK Information Commissioner's Office here.
            </p>
            <p>
              To exercise any of these rights, please contact us using the details provided under Section 12 – How to Contact Us. We respond to all such requests in accordance with applicable data protection laws and within any statutory timeframes.
            </p>
          </div>

          {/* Section 9: Children */}
          <div id="children" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">9. Children's Privacy</h2>
            <p>
              Our website and Services are not intended for use by individuals under the age of 18. Law Co-Pilot LLP does not knowingly collect, solicit, or process Personal Data from individuals under the age of 18. If you are a parent or legal guardian and believe that a minor under the age of 18 has provided us with Personal Data through our Services, please contact us at privacy@lawcopilot.in. Upon verification, we will take appropriate steps to delete such information from our records in accordance with applicable data protection laws.
            </p>
          </div>

          {/* Section 10: Updates */}
          <div id="updates" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">10. Updates to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in legal, regulatory, technical, or business developments. When we make material updates to this Privacy Policy, we will take appropriate measures to notify you in a manner that is consistent with the significance of the changes and as required by applicable data protection laws.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your Personal Data.
            </p>
            <p>
              You can determine when this Privacy Policy was last updated by referring to the "Last Updated" date at the top of this document.
            </p>
          </div>

          {/* Section 11: Contact */}
          <div id="contact" className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">11. Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your Personal Data, please feel free to contact our Data Protection Officer at:
            </p>
            <p>
              📧 Email: privacy@lawcopilot.in
            </p>
            <p>
              📬 Postal Address:<br />
              Law Co-Pilot LLP<br />
              3-104/43, Chavi, Manikonda, Hyderabad, 500089<br />
              India
            </p>
            <p>
              If you are located in the European Economic Area (EEA) or the United Kingdom and would like to contact our representative for data protection matters under the GDPR or UK GDPR, please write to us at the above email address and we will facilitate contact with our designated representative.
            </p>
            <p>
              We are committed to addressing your concerns in a timely and effective manner in accordance with applicable privacy and data protection laws.
            </p>
          </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}