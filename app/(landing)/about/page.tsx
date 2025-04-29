"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="container px-4 sm:px-6 py-12 md:py-20 lg:py-24">
      <div className="text-center mb-8 md:mb-12">
        <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-3 md:mb-4">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Our Story</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Law Copilot was founded by legal and AI experts to transform how legal professionals work in the digital age.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
        <Card className="backdrop-blur-sm bg-background/80 border shadow-md h-full">
          <CardContent className="p-6 h-full flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              At Law Copilot, we&apos;re on a mission to make legal intelligence effortless and accessible—for everyone.
              We&apos;re building AI tools that work like your smartest legal teammate—speeding up research, simplifying drafting, spotting risks, and unlocking insights—so legal professionals can focus on strategy and impact, not paperwork. Whether you&apos;re a solo lawyer, a fast-growing startup, or an individual with a legal question, Law Copilot helps you work smarter, not harder.
              We&apos;re here to level the legal playing field with tech that&apos;s powerful, intuitive, and human-centered.

            </p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/80 border shadow-md h-full">
          <CardContent className="p-6 h-full flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              This is the future of law—AI-powered, people-first, and built for everyone.
              At Law Copilot, we believe that the future of legal work isn&apos;t coming. It&apos;s already here. AI is reshaping how people understand, access, and practice law—and we&apos;re at the forefront of that transformation.
              Our vision is bold but simple: legal expertise, powered by AI, made available to all. Lawyers, businesses, and everyday people deserve tools that help them navigate complexity with confidence. We&apos;re creating a future where AI makes legal help faster, fairer, and always within reach.
              This is how the law will work tomorrow. And with Law Copilot, it starts today.

            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12">What Sets Us Apart</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
        <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow h-full">
          <div className="bg-primary/10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Legal Expertise</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Built by legal professionals who understand the unique challenges of legal practice</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow h-full">
          <div className="bg-primary/10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">User-Centric</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Designed with extensive input from attorneys, paralegals, and legal researchers</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow h-full">
          <div className="bg-primary/10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Precision</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Advanced AI models trained specifically on legal language and concepts</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow h-full">
          <div className="bg-primary/10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Commitment</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Dedicated to continuous improvement through user feedback and technological advancement</p>
        </div>
      </div>

      <Card className="mx-auto max-w-4xl">
        <CardContent className="p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-4">
            Law Copilot was founded on a simple belief:
            Legal professionals deserve technology that truly simplifies their world.
          </p>
          <p className="text-muted-foreground mb-4">
            Our team brings together a lawyer with firsthand experience facing real-world legal challenges, and three engineers with deep expertise in advanced software architecture, data science, artificial intelligence, and scalable system design—focused on building solutions that legal professionals can rely on.
          </p>
          <p className="text-muted-foreground mb-4">
            We don&apos;t just build technology—we build it around the way lawyers think, work, and win.
          </p>
          <p className="text-muted-foreground">
            With firsthand experience in litigation, deep expertise in AI, and a commitment to ethical practice, we&apos;ve created solutions that are:
            Designed for real legal challenges — not tech fantasies
            Built for scale — from solo advocates to large firms
            Rooted in trust — with confidentiality, compliance, and professionalism at our core
            At Law Copilot, we&apos;re not here to replace the lawyer. We&apos;re here to supercharge their potential.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}