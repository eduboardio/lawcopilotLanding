"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          This Privacy Policy governs how Law Copilot collects, uses, maintains, and discloses information collected from users.
        </p>
      </div>

      <Card className="mx-auto max-w-4xl">
        <CardContent className="pt-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Personal Identification Information</h2>
            <ul>
              <li>We collect personal information such as name, email address, and legal document details. Users give consent to send some of this information to AI models for processing by using our platform.</li>
              <li>Information sent to AI models is used to enhance user experience and provide personalized services. Users consent to this data processing as part of utilizing the platform's features.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Non-personal Identification Information</h2>
            <p>We may collect non-personal information about Users whenever they interact with our Platform, including browser type, device information, and technical usage data.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Web Browser Cookies</h2>
            <p>Our Platform may use cookies to enhance the User experience. Users can choose to set their web browser to refuse cookies or alert when cookies are being sent.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Use and Sharing of Information</h2>
            <ul>
              <li>Law Copilot uses collected information to improve customer service, personalize user experience, and improve our Platform.</li>
              <li>We do not sell, trade, or rent Users's personal identification information to others.</li>
              <li>Information processed by AI models is used in accordance with this policy to provide platform functionalities.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Security</h2>
            <p>We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Privacy Policy</h2>
            <p>Law Copilot has the discretion to update this policy at any time. Users are encouraged to frequently check this page for any changes.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Acceptance of These Terms</h2>
            <p>By using Law Copilot, you signify your acceptance of this policy and terms of service. If you do not agree, please do not use our Platform.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Contacting Us</h2>
            <p>If you have questions about this Privacy Policy or your dealings with Law Copilot, please contact us at <a href="mailto:info@lawcopilot.com" className="text-primary hover:underline">info@lawcopilot.com</a>.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}