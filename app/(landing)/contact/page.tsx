"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, Check, Clock, LoaderCircle, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container, Eyebrow } from "@/components/home/sections/primitives";
import { BUSINESS } from "@/constants";
import { cn } from "@/lib/utils";

/*
 * Contact page. The submission contract with /api/contact is unchanged: the
 * same fields, the CSRF token from /api/csrf and the honeypot. "I'm with" and
 * "Team size" now fill the sheet's Organization Type and Legal Team Size
 * columns, which the old form always sent as "not-provided".
 */

type FieldName = "firstName" | "lastName" | "email" | "companyName" | "jobTitle" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const ORG_TYPES = ["Law firm", "In-house legal team", "Independent advocate", "Other"];
const TOPICS = ["A walkthrough", "Pricing", "Support", "Something else"];
const TEAM_SIZES = ["Just me", "2–10", "11–50", "51+"];

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  jobTitle: "",
  orgType: "",
  topic: "",
  teamSize: "",
  message: "",
  honeypot: "",
};

const NEXT_STEPS = [
  { title: "Tell us about your team", detail: "Who you are and the work you’d like to hand over." },
  { title: "We reply within 1–2 business days", detail: "A person on our team reads every message." },
  { title: "See it on work like yours", detail: "If it’s a fit, we walk you through LawCopilot on a matter like yours." },
];

const fieldClass =
  "h-11 rounded-lg border-border bg-background px-3.5 text-[15px] shadow-none focus-visible:ring-2 focus-visible:ring-ring";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {optional ? <span className="font-normal text-muted-foreground"> · optional</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-[13px] text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Choice({
  name,
  legend,
  options,
  value,
  onChange,
}: {
  name: string;
  legend: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="text-sm font-medium text-foreground">
        {legend} <span className="font-normal text-muted-foreground">· optional</span>
      </legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <label
              key={option}
              className={cn(
                "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-card",
                selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-muted"
              )}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
                onClick={() => {
                  // Clicking the selected pill again clears it, since these are optional.
                  if (selected) onChange("");
                }}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const thanksRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const loadCsrfToken = async () => {
    try {
      const res = await fetch("/api/csrf");
      if (!res.ok) throw new Error("Failed to fetch CSRF token");
      const data = await res.json();
      if (!data.csrfToken) throw new Error("No CSRF token in response");
      setCsrfToken(data.csrfToken);
    } catch (err) {
      console.error("Failed to fetch CSRF token:", err);
      // Lets the form render; submitting asks the visitor to refresh.
      setCsrfToken("pending");
    }
  };

  useEffect(() => {
    loadCsrfToken();
  }, []);

  useEffect(() => {
    if (sentTo !== null) thanksRef.current?.focus();
  }, [sentTo]);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.firstName.trim()) next.firstName = "Enter your first name.";
    if (!formData.lastName.trim()) next.lastName = "Enter your last name.";
    if (!formData.email.trim()) next.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = "Enter an email address like name@firm.in.";
    if (!formData.companyName.trim()) next.companyName = "Enter your firm or company.";
    if (!formData.jobTitle.trim()) next.jobTitle = "Enter your role.";
    if (formData.message.trim().length < 10) next.message = "Tell us a little more — at least 10 characters.";
    return next;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as FieldName];
        return next;
      });
    }
  };

  const setChoice = (name: "orgType" | "topic" | "teamSize") => (value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmitError("");

    if (formData.honeypot) {
      setSubmitError("Invalid form submission");
      return;
    }
    if (!csrfToken || csrfToken === "pending") {
      setSubmitError("Security token not loaded. Please refresh the page and try again.");
      return;
    }

    const found = validate();
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          companyName: formData.companyName,
          country: "not-provided",
          jobTitle: formData.jobTitle,
          orgType: formData.orgType || "not-provided",
          teamSize: formData.teamSize || "not-provided",
          hearAbout: "",
          // The sheet has no topic column, so the topic leads the message.
          message: formData.topic ? `Topic: ${formData.topic}\n\n${formData.message}` : formData.message,
          csrfToken,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.details?.join(", ") || "Failed to submit form");
      }
      setSentTo(formData.email.trim());
      setFormData(EMPTY_FORM);
      loadCsrfToken();
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitError(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasError = (name: FieldName) => Object.prototype.hasOwnProperty.call(errors, name);
  const describedBy = (name: FieldName) => (hasError(name) ? `${name}-error` : undefined);
  const invalidRing = (name: FieldName) => (hasError(name) ? "border-red-600 dark:border-red-400" : "");

  return (
    <div className="w-full bg-background">
      <section className="relative w-full overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
        />

        <Container className="relative z-10 grid gap-y-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:py-24">
          {/* On phones the order is intro, form, details; on desktop the form sits on the right. */}
          <div className="flex min-w-0 flex-col gap-4 lg:col-start-1 lg:row-start-1">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="font-heading text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.015em] text-balance text-foreground sm:text-5xl lg:text-[3.5rem]">
                Tell us what you’d hand over.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-foreground/80">
                Whether you run chambers, a firm or an in-house legal team, we’ll show you LawCopilot on work like
                yours.
              </p>
          </div>

          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-[0_24px_48px_-28px_rgba(0,0,0,0.2)] sm:p-8 lg:sticky lg:top-24">
              {sentTo !== null ? (
                <div className="flex flex-col items-start gap-4 py-4" role="status">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600">
                    <Check aria-hidden strokeWidth={3} className="h-5 w-5 text-white" />
                  </span>
                  <h2 ref={thanksRef} tabIndex={-1} className="font-heading text-3xl font-semibold tracking-[-0.01em] outline-none">
                    Thanks — your message is with us.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-foreground/80">
                    We reply within 1–2 business days{sentTo ? ` at ${sentTo}` : ""}. If it’s urgent, call{" "}
                    <a href={`tel:${BUSINESS.phoneTel}`} className="font-medium text-foreground underline underline-offset-4">
                      {BUSINESS.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSentTo(null)}
                    className="mt-2 inline-flex min-h-11 items-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-heading text-2xl font-semibold tracking-[-0.01em]">Send us a message</h2>
                    <p className="text-sm text-muted-foreground">All fields are required unless marked optional.</p>
                  </div>

                  {/* Honeypot (hidden from people, caught by bots) */}
                  <div
                    style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
                    aria-hidden="true"
                  >
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

                  <Choice name="orgType" legend="I’m with" options={ORG_TYPES} value={formData.orgType} onChange={setChoice("orgType")} />
                  <Choice name="topic" legend="I’d like" options={TOPICS} value={formData.topic} onChange={setChoice("topic")} />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="firstName" label="First name" error={errors.firstName}>
                      <Input
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={describedBy("firstName")}
                        className={cn(fieldClass, invalidRing("firstName"))}
                      />
                    </Field>
                    <Field id="lastName" label="Last name" error={errors.lastName}>
                      <Input
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={describedBy("lastName")}
                        className={cn(fieldClass, invalidRing("lastName"))}
                      />
                    </Field>
                  </div>

                  <Field id="email" label="Work email" error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@firm.in"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={describedBy("email")}
                      className={cn(fieldClass, invalidRing("email"))}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="companyName" label="Firm or company" error={errors.companyName}>
                      <Input
                        id="companyName"
                        name="companyName"
                        autoComplete="organization"
                        value={formData.companyName}
                        onChange={handleChange}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={describedBy("companyName")}
                        className={cn(fieldClass, invalidRing("companyName"))}
                      />
                    </Field>
                    <Field id="jobTitle" label="Role" error={errors.jobTitle}>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        autoComplete="organization-title"
                        placeholder="Partner, General Counsel…"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        aria-invalid={!!errors.jobTitle}
                        aria-describedby={describedBy("jobTitle")}
                        className={cn(fieldClass, invalidRing("jobTitle"))}
                      />
                    </Field>
                  </div>

                  <Choice name="teamSize" legend="Legal team size" options={TEAM_SIZES} value={formData.teamSize} onChange={setChoice("teamSize")} />

                  <Field id="message" label="What would you like to hand over?" error={errors.message}>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="e.g. First drafts of replies to legal notices, and a list of dates for every new brief."
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={describedBy("message")}
                      className={cn(
                        "min-h-32 resize-y rounded-lg border-border bg-background px-3.5 py-3 text-[15px] shadow-none focus-visible:ring-2 focus-visible:ring-ring",
                        invalidRing("message")
                      )}
                    />
                  </Field>

                  {submitError ? (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
                    >
                      {submitError}
                    </p>
                  ) : null}

                  <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-xs">
                      We use your details only to reply. See our{" "}
                      <Link href="/privacy-policy" className="text-foreground underline underline-offset-4">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle aria-hidden className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowRight aria-hidden className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-8 lg:col-start-1 lg:row-start-2">
            <ol className="flex flex-col gap-4">
              {NEXT_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3.5">
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-medium"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-foreground">{step.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-4 px-5 py-4">
                <Mail aria-hidden className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Email</dt>
                  <dd>
                    <a href={`mailto:${BUSINESS.email}`} className="text-[15px] font-medium text-foreground underline-offset-4 hover:underline">
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4 px-5 py-4">
                <Phone aria-hidden className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Phone</dt>
                  <dd>
                    <a href={`tel:${BUSINESS.phoneTel}`} className="text-[15px] font-medium text-foreground underline-offset-4 hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4 px-5 py-4">
                <MapPin aria-hidden className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Office</dt>
                  <dd className="text-[15px] text-foreground">{BUSINESS.address}</dd>
                </div>
              </div>
              <div className="flex items-center gap-4 px-5 py-4">
                <Clock aria-hidden className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Hours</dt>
                  <dd className="text-[15px] text-foreground">{BUSINESS.hours}</dd>
                </div>
              </div>
            </dl>

            <p className="text-sm text-muted-foreground">
              Already using LawCopilot?{" "}
              <Link
                href="https://app.lawcopilot.io/signin"
                className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
              >
                Sign in <ArrowRight aria-hidden className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>

        </Container>
      </section>
    </div>
  );
}
