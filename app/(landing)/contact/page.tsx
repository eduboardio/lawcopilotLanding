"use client";

import { Mail, Phone, Building2, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import { ChangeEvent, FormEvent } from 'react';

// Define form validation types
type FormErrors = {
  [key: string]: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    jobTitle: "",
    orgType: "",
    teamSize: "",
    hearAbout: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Dropdown validation
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.orgType) newErrors.orgType = "Please select an organization type";
    if (!formData.teamSize) newErrors.teamSize = "Please select team size";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user selects
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        country: "",
        jobTitle: "",
        orgType: "",
        teamSize: "",
        hearAbout: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements - adjusted positions for better visual balance */}
      <div className="absolute -top-20 -right-40 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-70 hidden sm:block"></div>
      <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-70 hidden sm:block"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/15 text-primary inline-block mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Our Team</h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about Law Copilot? Our experts are ready to assist you on your journey to AI-powered legal excellence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Contact Information Column */}
          <div className="lg:col-span-1">
            <Card className="h-full bg-gradient-to-br from-background/80 to-background border shadow-md backdrop-blur-sm overflow-hidden">
              <CardHeader className="px-5 pt-6 pb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">Contact Information</h2>
              </CardHeader>
              <CardContent className="px-5 py-4">
                <div className="space-y-5">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:support@lawcopilot.com" className="text-muted-foreground hover:text-primary transition-colors">
                        support@lawcopilot.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:+18001234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (800) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Headquarters</p>
                      <address className="not-italic text-muted-foreground">
                        123 Legal Avenue<br />
                        San Francisco, CA 94105<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM PST
                      </p>
                    </div>
                  </div>

                  <div className="pt-3">
                    <h3 className="font-medium mb-3">Connect With Us</h3>
                    <div className="flex space-x-3">
                      {/* Social media icons with improved accessibility */}
                      <a 
                        href="#" 
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a 
                        href="#" 
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a 
                        href="#" 
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="Twitter/X"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <Card className="bg-gradient-to-br from-background/80 to-background border shadow-md backdrop-blur-sm overflow-hidden relative h-full flex flex-col justify-center items-center p-8 text-center">
                <CheckCircle className="h-14 w-14 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-muted-foreground mb-6">Your message has been received. We&apos;ll get back to you shortly.</p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card className="bg-gradient-to-br from-background/80 to-background border shadow-md backdrop-blur-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <CardHeader className="px-5 pt-6 pb-2 relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-primary">Send Us a Message</h2>
                </CardHeader>
                
                <CardContent className="relative z-10 px-5 py-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name*
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className={`border-muted-foreground/20 ${errors.firstName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={errors.firstName ? "true" : "false"}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name*
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                          className={`border-muted-foreground/20 ${errors.lastName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={errors.lastName ? "true" : "false"}
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@example.com"
                          required
                          className={`border-muted-foreground/20 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="companyName" className="text-sm font-medium">
                          Company Name*
                        </label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Legal Solutions Inc."
                          required
                          className={`border-muted-foreground/20 ${errors.companyName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={errors.companyName ? "true" : "false"}
                          aria-describedby={errors.companyName ? "companyName-error" : undefined}
                        />
                        {errors.companyName && (
                          <p id="companyName-error" className="text-sm text-red-500 mt-1">{errors.companyName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="country" className="text-sm font-medium">
                          Country*
                        </label>
                        <Select 
                          name="country" 
                          onValueChange={(value) => handleSelectChange("country", value)}
                          value={formData.country}
                        >
                          <SelectTrigger 
                            className={`border-muted-foreground/20 ${errors.country ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                            aria-invalid={errors.country ? "true" : "false"}
                            aria-describedby={errors.country ? "country-error" : undefined}
                          >
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="france">France</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p id="country-error" className="text-sm text-red-500 mt-1">{errors.country}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="jobTitle" className="text-sm font-medium">
                          Job Title*
                        </label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          placeholder="Legal Counsel"
                          required
                          className={`border-muted-foreground/20 ${errors.jobTitle ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          aria-invalid={errors.jobTitle ? "true" : "false"}
                          aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
                        />
                        {errors.jobTitle && (
                          <p id="jobTitle-error" className="text-sm text-red-500 mt-1">{errors.jobTitle}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="orgType" className="text-sm font-medium">
                          Organization Type*
                        </label>
                        <Select 
                          name="orgType" 
                          onValueChange={(value) => handleSelectChange("orgType", value)}
                          value={formData.orgType}
                        >
                          <SelectTrigger 
                            className={`border-muted-foreground/20 ${errors.orgType ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                            aria-invalid={errors.orgType ? "true" : "false"}
                            aria-describedby={errors.orgType ? "orgType-error" : undefined}
                          >
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullService">Full Service Law Firm</SelectItem>
                            <SelectItem value="transactional">Transactional Law Firm</SelectItem>
                            <SelectItem value="litigation">Litigation Law Firm</SelectItem>
                            <SelectItem value="financial">Financial Services Firm</SelectItem>
                            <SelectItem value="inHouse">In-House Legal Team</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.orgType && (
                          <p id="orgType-error" className="text-sm text-red-500 mt-1">{errors.orgType}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="teamSize" className="text-sm font-medium">
                          Legal Team Size*
                        </label>
                        <Select 
                          name="teamSize" 
                          onValueChange={(value) => handleSelectChange("teamSize", value)}
                          value={formData.teamSize}
                        >
                          <SelectTrigger 
                            className={`border-muted-foreground/20 ${errors.teamSize ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                            aria-invalid={errors.teamSize ? "true" : "false"}
                            aria-describedby={errors.teamSize ? "teamSize-error" : undefined}
                          >
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10</SelectItem>
                            <SelectItem value="11-50">11-50</SelectItem>
                            <SelectItem value="51-100">51-100</SelectItem>
                            <SelectItem value="101-500">101-500</SelectItem>
                            <SelectItem value="500+">500+</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.teamSize && (
                          <p id="teamSize-error" className="text-sm text-red-500 mt-1">{errors.teamSize}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="hearAbout" className="text-sm font-medium">
                        How did you hear about us?
                      </label>
                      <Textarea
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        placeholder="Let us know how you discovered Law Copilot"
                        className="min-h-24 border-muted-foreground/20"
                      />
                    </div>

                    <div className="pt-2 sm:pt-3">
                      <p className="text-xs text-muted-foreground mb-4">
                        For details about how we collect, use, and protect your information, please see our{" "}
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>.
                      </p>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Form"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}