"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Welcome to Law Copilot. By accessing our platform, you agree to these Terms and Conditions.
        </p>
      </div>

      <Card className="mx-auto max-w-4xl">
        <CardContent className="pt-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>By accessing Law Copilot, you agree to these Terms and Conditions. If you disagree with any part of the terms, please do not use our Platform.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any changes through the Platform or via email. Continued use after such changes constitutes acceptance of the new terms.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">User Accounts</h2>
            <ul>
              <li>Users must be at least 18 years old to create an account.</li>
              <li>Users are responsible for maintaining the confidentiality of their account.</li>
              <li>Users agree to immediately notify Law Copilot of any unauthorized use of their account.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Intellectual Property Rights</h2>
            <p>All content on Law Copilot, including text, graphics, logos, and software, is the property of Law Copilot or its licensors and is protected by intellectual property laws.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">User Conduct</h2>
            <ul>
              <li>Users agree not to use the Platform for any unlawful purpose.</li>
              <li>Users consent to the transmission of personal identification information to AI models as part of the platform&apos;s functionality.</li>
              <li>Users acknowledge that their interactions with Law Copilot may be stored and analyzed for improving service quality and user experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Termination</h2>
            <p>We may terminate or suspend access to our Platform immediately, without prior notice or liability, for any breach of these Terms.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Cancellation and Refund Policy</h2>
            <p>You may cancel your subscription to Law Copilot services within 14 days of initiating a service contract for a full refund. If you choose to cancel after this period, please note that we do not provide pro-rata refunds for unused portions of your subscription.</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Refunds</h3>
            <p>If you cancel your subscription within the specified trial period, your payment will be refunded to your original method of payment within 30 days. For cancellations after the trial period, no refunds will be issued.</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Process for Cancellation</h3>
            <p>To initiate a cancellation, please contact our customer support team at <a href="mailto:support@lawcopilot.com" className="text-primary hover:underline">support@lawcopilot.com</a>. We will guide you through the steps required to process your cancellation.</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Changes to Subscription</h3>
            <p>If you wish to change your subscription level, please contact us at <a href="mailto:info@lawcopilot.com" className="text-primary hover:underline">info@lawcopilot.com</a>, and we will assist you in adjusting your plan.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}