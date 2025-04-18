"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Shield, Wallet, Zap, CheckCircle, ArrowRight, BarChart3, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type React from "react"
import { memo } from "react"

type IconElement = React.ReactNode

interface BenefitsProps {
  icon: IconElement
  title: string
  description: string
  points?: string[]
}

const benefitList: BenefitsProps[] = [
  {
    icon: <Zap size={24} />,
    title: "Faster Case Research",
    description:
      "Our users report cutting research time from days to hours, handling more cases with greater confidence.",
    points: [
      "70% average time savings on research tasks",
      "Instant access to relevant precedents",
      "Smart keyword and context recognition",
    ],
  },
  {
    icon: <Wallet size={24} />,
    title: "Cost Reduction",
    description: "Reduce operational costs through automation of routine legal tasks and improved resource allocation.",
    points: [
      "30% average reduction in operational costs",
      "Minimize billable hours spent on research",
      "Optimize paralegal and associate time",
    ],
  },
  {
    icon: <Shield size={24} />,
    title: "Accelerate Legal Research",
    description:
      "Uncover critical insights and connections in legal data with Law Copilot's AI-enhanced research tools, simplifying complex tasks.",
    points: [
      "Identify overlooked legal precedents",
      "Generate comprehensive case summaries",
      "Detect jurisdiction-specific nuances",
    ],
  },
]

const BenefitPoint = memo(({ point }: { point: string }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" />
    <span className="text-sm">{point}</span>
  </li>
))

BenefitPoint.displayName = "BenefitPoint"

const BenefitCard = memo(({ benefit, className }: { benefit: BenefitsProps; className?: string }) => {
  const { icon, title, description, points } = benefit

  return (
    <Card
      className={cn(
        "border border-border/40 dark:border-border/40 shadow-md hover:shadow-xl transition-all duration-300",
        "overflow-hidden group backdrop-blur-sm bg-background/80 dark:bg-background/80",
        "relative h-full",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-40 dark:opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <CardHeader className="pt-6 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md bg-primary/10 text-primary">{icon}</div>
          <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10">
        <p className="text-muted-foreground">{description}</p>

        {points && (
          <ul className="space-y-2 pt-2">
            {points.map((point, idx) => (
              <BenefitPoint key={idx} point={point} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
})

BenefitCard.displayName = "BenefitCard"

const StatCard = memo(
  ({ title, value, icon, className }: { title: string; value: string; icon: React.ReactNode; className?: string }) => (
    <Card className={cn("h-full group hover:shadow-xl transition-all duration-300", className)}>
      <CardContent className="p-6 flex flex-col justify-center h-full">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md bg-primary/10 text-primary">{icon}</div>
        </div>
        <p className="text-3xl font-bold text-primary mt-2 group-hover:scale-105 transition-transform duration-300">
          {value}
        </p>
        <p className="text-sm text-muted-foreground mt-1">{title}</p>
      </CardContent>
    </Card>
  ),
)

StatCard.displayName = "StatCard"

const QuoteCard = memo(() => (
  <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-40 dark:opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
    <CardContent className="p-6 flex flex-col justify-center h-full relative z-10">
      <div className="text-4xl text-primary/20 font-serif">"</div>
      <blockquote className="text-lg mt-2">
        Law Copilot has transformed our practice, cutting research time by 70% and improving our case outcomes
        significantly.
      </blockquote>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">SJ</div>
        <div>
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-sm text-muted-foreground">Partner at Johnson & Associates</p>
        </div>
      </div>
    </CardContent>
  </Card>
))

QuoteCard.displayName = "QuoteCard"

const CtaCard = memo(() => (
  <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-40 dark:opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
    <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full relative z-10">
      <h3 className="text-xl font-bold mb-4">Ready to transform your legal practice?</h3>
      <Button className="rounded-full group-hover:scale-105 transition-transform duration-300">
        <Link href="/signup" className="flex items-center">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>
))

CtaCard.displayName = "CtaCard"

const BenefitsCTA = memo(() => (
  <Card className="relative overflow-hidden col-span-full border-none shadow-xl">
    {/* <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-xl blur-md"></div> */}
    <CardContent className="relative bg-background/80 dark:bg-background/80 backdrop-blur-sm border border-white/20 dark:border-white/20 rounded-xl p-4 lg:p-6 z-10">
      <p className="text-center md:text-lg font-medium mb-8">
        Built by legal tech experts in collaboration with practicing attorneys, Law Copilot combines cutting-edge AI
        technology with deep legal industry expertise. Be among the first to revolutionize your legal practice.
      </p>

      <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
        <Button
          size="lg"
          className="w-full md:w-max font-medium px-8 rounded-full bg-foreground hover:bg-foreground/80 text-background relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">
            <Link href="/signup"> Schedule A Demo </Link>
          </span>
        </Button>
        <Button size="lg" className="w-full md:w-max rounded-full relative overflow-hidden group" variant="outline">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">
            <Link href="/#faq"> Read FAQs </Link>
          </span>
        </Button>
      </div>
    </CardContent>
  </Card>
))

BenefitsCTA.displayName = "BenefitsCTA"

const BackgroundElements = memo(() => (
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-small-white/5 dark:bg-grid-small-white/10"></div>
  </div>
))

BackgroundElements.displayName = "BackgroundElements"

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="w-full bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden py-16 md:py-24"
    >
      <BackgroundElements />

      <div className="container mx-auto p-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">KEY ADVANTAGES</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative">
            Why Choose Law Copilot?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the competitive advantages that thousands of legal professionals are gaining with our AI-powered
            platform.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
          {/* Main benefit card - spans 8 columns on large screens */}
          <div className="md:col-span-6 lg:col-span-8">
            <BenefitCard benefit={benefitList[0]} />
          </div>

          {/* Stats - each spans 2 columns on large screens */}
          <div className="md:col-span-3 lg:col-span-2">
            <StatCard title="Client Satisfaction" value="98%" icon={<Users size={20} />} />
          </div>
          <div className="md:col-span-3 lg:col-span-2">
            <StatCard title="Time Saved" value="70%" icon={<BarChart3 size={20} />} />
          </div>

          {/* Quote card - spans 4 columns on large screens */}
          <div className="md:col-span-3 lg:col-span-4">
            <QuoteCard />
          </div>

          {/* Second benefit card - spans 4 columns on large screens */}
          <div className="md:col-span-3 lg:col-span-4">
            <BenefitCard benefit={benefitList[1]} />
          </div>

          {/* CTA card - spans 4 columns on large screens */}
          <div className="md:col-span-6 lg:col-span-4">
            <CtaCard />
          </div>

          {/* Third benefit card - spans 6 columns on large screens */}
          <div className="md:col-span-3 lg:col-span-6">
            <BenefitCard benefit={benefitList[2]} />
          </div>

          {/* Stats - each spans 3 columns on large screens */}
          <div className="md:col-span-3 lg:col-span-3">
            <StatCard title="Users" value="10k+" icon={<Users size={20} />} />
          </div>
          <div className="md:col-span-3 lg:col-span-3">
            <StatCard title="Documents Processed" value="50M+" icon={<Globe size={20} />} />
          </div>

          {/* CTA Section - spans full width */}
          <div className="md:col-span-6 lg:col-span-12">
            <BenefitsCTA />
          </div>
        </div>
      </div>
    </section>
  )
}
