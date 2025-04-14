"use client";

import { Mail, Phone, Building2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="container py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -top-16 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-32 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Our Team</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about Law Copilot? Our experts are ready to assist you on your journey to AI-powered legal excellence.
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-background/80 to-background border-0 shadow-xl backdrop-blur-sm overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <CardHeader>
            <h2 className="text-2xl font-bold text-primary">How to Reach Us</h2>
          </CardHeader>
          
          <CardContent className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                  <p className="text-muted-foreground">123 Main Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">info@lawcopilot.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday<br />9AM - 5PM EST</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                size="lg"
              >
                <Link href="mailto:info@lawcopilot.com">Send Us an Email</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}