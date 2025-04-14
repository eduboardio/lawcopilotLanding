"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Law Copilot was founded by legal and AI experts to transform how legal professionals work in the digital age.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card className="backdrop-blur-sm bg-background/80 border shadow-md">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              At Law Copilot, we&apos;re on a mission to democratize access to advanced legal technology. We believe that AI-powered tools should enhance legal professionals capabilities, allowing them to focus on what truly matters: applying their expertise to help clients navigate complex legal challenges.
            </p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/80 border shadow-md">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a future where legal professionals of all backgrounds and practice areas can harness the power of AI to deliver better outcomes for their clients. Law Copilot aims to be the leading platform that bridges the gap between legal expertise and cutting-edge technology.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Legal Expertise</h3>
          <p className="text-muted-foreground">Built by legal professionals who understand the unique challenges of legal practice</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
          <p className="text-muted-foreground">Designed with extensive input from attorneys, paralegals, and legal researchers</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Precision</h3>
          <p className="text-muted-foreground">Advanced AI models trained specifically on legal language and concepts</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 border hover:shadow-md transition-shadow">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Commitment</h3>
          <p className="text-muted-foreground">Dedicated to continuous improvement through user feedback and technological advancement</p>
        </div>
      </div>

      <Card className="mx-auto max-w-4xl">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-4">
            Law Copilot brings together experts from both the legal and technology sectors. Our leadership team includes former practicing attorneys, legal technologists, and AI researchers who share a passion for transforming legal practice.
          </p>
          <p className="text-muted-foreground mb-4">
            With decades of combined experience in both legal practice and cutting-edge AI development, our team understands the unique challenges faced by legal professionals in today&apos;s fast-paced environment.
          </p>
          <p className="text-muted-foreground">
            We&apos;re committed to building tools that not only harness the power of AI but do so in ways that respect legal traditions, professional ethics, and client confidentiality.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}