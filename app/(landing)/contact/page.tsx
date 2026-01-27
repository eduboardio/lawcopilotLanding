"use client";

import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

type FormErrors = {
  [key: string]: string;
};

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "hello@lawcopilot.io",
    href: "mailto:hello@lawcopilot.io"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 9603354488",
    href: "tel:+919603354488"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Business Hours",
    value: "Mon-Fri, 9:00 AM - 5:00 PM IST",
    href: null
  }
];

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
    hearAbout: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  // Fetch CSRF token on mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const res = await fetch('/api/csrf');
        if (!res.ok) {
          throw new Error('Failed to fetch CSRF token');
        }
        const data = await res.json();
        if (data.csrfToken) {
          setCsrfToken(data.csrfToken);
        } else {
          throw new Error('No CSRF token in response');
        }
      } catch (err) {
        console.error('Failed to fetch CSRF token:', err);
        // Set a placeholder token so form can still be submitted
        // Backend will handle CSRF validation
        setCsrfToken('pending');
      }
    };

    fetchCsrfToken();
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    // Country and orgType validation removed as fields are commented out
    // if (!formData.country) newErrors.country = "Please select a country";
    // if (!formData.orgType) newErrors.orgType = "Please select an organization type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Form submitted'); // Debug log
    
    setSubmitError("");
  
    // Check honeypot
    if (formData.honeypot) {
      setSubmitError("Invalid form submission");
      return;
    }
  
    // Check if CSRF token is loaded
    if (!csrfToken || csrfToken === 'pending') {
      setSubmitError("Security token not loaded. Please refresh the page and try again.");
      return;
    }
  
    if (!validateForm()) {
      console.log('Validation failed', errors); // Debug log
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      console.log('Sending request...'); // Debug log
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          companyName: formData.companyName,
          country: "not-provided", // Default value since field removed
          jobTitle: formData.jobTitle,
          orgType: "not-provided", // Default value since field removed
          teamSize: "not-provided", // Default value since field removed
          hearAbout: formData.hearAbout,
          message: formData.message,
          csrfToken: csrfToken,
        })
      });
  
      console.log('Response received:', response.status); // Debug log
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || data.details?.join(', ') || "Failed to submit form");
      }
  
      console.log('Success!'); // Debug log
      
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        country: "",
        jobTitle: "",
        orgType: "",
        teamSize: "",
        hearAbout: "",
        message: "",
        honeypot: "",
      });
      
      // Fetch new CSRF token for next submission
      fetch('/api/csrf')
        .then(res => res.json())
        .then(data => setCsrfToken(data.csrfToken))
        .catch(err => console.error('Failed to fetch CSRF token:', err));
        
    } catch (error) {
      console.error('Submit error:', error); // Debug log
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-md px-6 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 dark:bg-emerald-400/10">
            <CheckCircle className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground dark:text-white">
            Thank You for Reaching Out
          </h2>

          <p className="mb-8 text-lg text-muted-foreground dark:text-white/70">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>

          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <Send className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
              We&apos;re Here to Help
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">Get in Touch</span>
          </h1>

          <p className="text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            Have questions about Law Copilot? Our team is here to help you discover how AI can
            transform your legal practice.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="relative z-10 container mx-auto px-6 pb-24 md:pb-32">
        <div className="mx-auto">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl dark:text-white">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                          <div className="text-foreground dark:text-white">{info.icon}</div>
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-foreground dark:text-white">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:text-white/70 dark:hover:text-white"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground dark:text-white/70">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <h3 className="mb-3 font-semibold text-foreground dark:text-white">
                    Prefer Email?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground dark:text-white/70">
                    For general inquiries or quick questions, reach us directly at{" "}
                    <a
                      href="mailto:hello@lawcopilot.io"
                      className="font-medium text-foreground hover:underline dark:text-white"
                    >
                      hello@lawcopilot.io
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm md:p-10 dark:border-white/10 dark:bg-white/[0.02]">
                <h2 className="mb-6 text-2xl font-bold text-foreground dark:text-white">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot field (hidden from users) */}
                  <div style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                  }} aria-hidden="true">
                    <label htmlFor="honeypot">Leave this field empty</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground dark:text-white">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground dark:text-white">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground dark:text-white">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-sm font-medium text-foreground dark:text-white">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="ABC Law Firm"
                        required
                        className={errors.companyName ? "border-red-500" : ""}
                      />
                      {errors.companyName && (
                        <p className="text-sm text-red-500">{errors.companyName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="jobTitle" className="text-sm font-medium text-foreground dark:text-white">
                        Job Title <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Senior Associate"
                        required
                        className={errors.jobTitle ? "border-red-500" : ""}
                      />
                      {errors.jobTitle && <p className="text-sm text-red-500">{errors.jobTitle}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground dark:text-white">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your legal needs or how we can help..."
                      className={`min-h-32 resize-none ${errors.message ? "border-red-500" : ""}`}
                      required
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  {submitError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/20">
                      {submitError}
                    </div>
                  )}

                  <div className="pt-2">
                    <p className="mb-6 text-xs text-muted-foreground dark:text-white/60">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-foreground hover:underline dark:text-white">
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full rounded-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}