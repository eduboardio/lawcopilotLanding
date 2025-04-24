"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="container px-4 sm:px-6 py-12 md:py-20 lg:py-24">
      <div className="text-center mb-8 md:mb-12">
        <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-3 md:mb-4">
          Join Our Team
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Careers at Law Copilot</h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Join us in revolutionizing the legal industry with cutting-edge AI technology.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
        <Card className="backdrop-blur-sm bg-background/80 border shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Why Work With Us</h2>
            <ul className="space-y-3 text-muted-foreground list-none pl-0">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Work on cutting-edge AI technology in the legal sector</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Collaborate with experts in both legal and tech fields</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Flexible remote-first work environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Competitive compensation and benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Professional development opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Make a real impact on the legal profession</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/80 border shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Our Culture</h2>
            <p className="text-muted-foreground mb-4">
              At Law Copilot, we value innovation, collaboration, and impact. We believe in creating technology that makes a meaningful difference in how legal professionals work.
            </p>
            <p className="text-muted-foreground">
              We&apos;re a diverse team passionate about combining legal expertise with technological innovation. We foster an environment where everyone&apos;s voice is heard and valued.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8">Open Positions</h2>
      
      <div className="grid gap-4 sm:gap-6 mb-8 md:mb-12">
        <Card className="border shadow-md">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">AI Research Engineer</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Remote • Full-time</p>
              </div>
              <Button variant="outline" className="sm:flex-shrink-0">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border shadow-md">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">Legal Content Specialist</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Remote • Full-time</p>
              </div>
              <Button variant="outline" className="sm:flex-shrink-0">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border shadow-md">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">Frontend Developer</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Remote • Full-time</p>
              </div>
              <Button variant="outline" className="sm:flex-shrink-0">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border shadow-md">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">Product Manager</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Remote • Full-time</p>
              </div>
              <Button variant="outline" className="sm:flex-shrink-0">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-base sm:text-lg mb-4 sm:mb-6">Don&apos;t see the right role? We&apos;re always looking for talented individuals.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Link href="/contact" className="flex w-full h-full items-center justify-center">
            Contact Us
          </Link>
        </Button>
      </div>
    </section>
  );
}