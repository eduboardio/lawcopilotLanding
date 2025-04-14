"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
          Join Our Team
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Law Copilot</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join us in revolutionizing the legal industry with cutting-edge AI technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card className="backdrop-blur-sm bg-background/80 border shadow-md">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Work on cutting-edge AI technology in the legal sector</li>
              <li>• Collaborate with experts in both legal and tech fields</li>
              <li>• Flexible remote-first work environment</li>
              <li>• Competitive compensation and benefits</li>
              <li>• Professional development opportunities</li>
              <li>• Make a real impact on the legal profession</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/80 border shadow-md">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground mb-4">
              At Law Copilot, we value innovation, collaboration, and impact. We believe in creating technology that makes a meaningful difference in how legal professionals work.
            </p>
            <p className="text-muted-foreground">
              We're a diverse team passionate about combining legal expertise with technological innovation. We foster an environment where everyone's voice is heard and valued.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
      
      <div className="grid gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">AI Research Engineer</h3>
                <p className="text-muted-foreground">Remote • Full-time</p>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Legal Content Specialist</h3>
                <p className="text-muted-foreground">Remote • Full-time</p>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-muted-foreground">Remote • Full-time</p>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Product Manager</h3>
                <p className="text-muted-foreground">Remote • Full-time</p>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-lg mb-6">Don't see the right role? We're always looking for talented individuals.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}