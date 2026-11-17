"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { BUSINESS } from "@/constants";
import { INK, MUTED, YELLOW } from "./primitives";

/*
 * The "Send us a message" form. The contract with /api/contact is unchanged:
 * the same fields, the CSRF token from /api/csrf and the honeypot. "I'm with"
 * and "Legal team size" fill the sheet's Organization Type and Legal Team Size
 * columns; the sheet has no topic column, so "I'd like" leads the message.
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

// What to tell someone when the server turns a field away.
const SERVER_FIELD_ERRORS = new Map<string, [FieldName, string]>([
  ["firstName", ["firstName", "Check your first name. Letters, spaces, dots, apostrophes and hyphens work."]],
  ["lastName", ["lastName", "Check your last name. Letters, spaces, dots, apostrophes and hyphens work."]],
  ["email", ["email", "Check your email address."]],
  ["companyName", ["companyName", "Check your firm or company name."]],
  ["jobTitle", ["jobTitle", "Check your role."]],
  ["message", ["message", "Check your message. It needs 10 to 5,000 characters."]],
]);

const ERROR_RED = "#a3261b";
const control = (invalid: boolean): CSSProperties => ({
  width: "100%",
  boxSizing: "border-box",
  minHeight: "40px",
  padding: "8px 12px",
  border: `1px solid ${invalid ? ERROR_RED : "rgba(15,14,12,0.28)"}`,
  borderRadius: "4px",
  background: "#ffffff",
  color: INK,
  font: "inherit",
  fontSize: "15px",
});
const labelStyle: CSSProperties = { fontSize: "14px", fontWeight: 500 };

function Optional() {
  return <span style={{ color: MUTED, fontWeight: 400 }}>· optional</span>;
}

function Field({ id, label, error, children, style }: { id: string; label: ReactNode; error?: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", minWidth: 0, ...style }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      {children}
      {error && (
        <span id={`${id}-error`} style={{ fontSize: "13px", lineHeight: 1.45, color: ERROR_RED }}>
          {error}
        </span>
      )}
    </div>
  );
}

function Select({ id, value, options, onChange }: { id: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div style={{ position: "relative" }}>
      <select id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)} style={{ ...control(false), padding: "8px 36px 8px 12px", appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "12px", top: "50%", marginTop: "-7px", pointerEvents: "none" }}>
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const thanksRef = useRef<HTMLParagraphElement>(null);

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
          message: formData.topic ? `Topic: ${formData.topic}\n\n${formData.message}` : formData.message,
          csrfToken,
        }),
      });
      const data = await response.json();
      const rejected: FormErrors = {};
      if (!response.ok && Array.isArray(data.fields)) {
        for (const field of data.fields) {
          const match = SERVER_FIELD_ERRORS.get(String(field));
          if (match) Object.assign(rejected, { [match[0]]: match[1] });
        }
      }
      const firstRejected = Object.keys(rejected)[0];
      if (firstRejected) {
        setErrors(rejected);
        setSubmitError("Some details need another look. They’re marked above.");
        formRef.current?.querySelector<HTMLElement>(`[name="${firstRejected}"]`)?.focus();
        return;
      }
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

  const has = (name: FieldName) => Object.prototype.hasOwnProperty.call(errors, name);
  const textInput = (name: FieldName, value: string, type: string, placeholder?: string, autoComplete?: string) => (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={handleChange}
      aria-invalid={has(name)}
      aria-describedby={has(name) ? `${name}-error` : undefined}
      style={control(has(name))}
    />
  );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="lc-form"
      style={{ position: "relative", width: "100%", maxWidth: "560px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 34px 60px -26px rgba(15,14,12,0.5), 0 0 0 1px rgba(15,14,12,0.08)", padding: "28px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px 16px", alignItems: "start", minWidth: 0 }}
    >
      <div style={{ gridColumn: "1 / -1" }}>
        <h2 className="serif" style={{ margin: "0 0 6px", fontSize: "26px", lineHeight: 1.1, letterSpacing: "-0.015em" }}>Send us a message</h2>
        <p style={{ margin: 0, fontSize: "13.5px", color: MUTED }}>All fields are required unless marked optional.</p>
      </div>

      {/* Honeypot: hidden from people, filled in by bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label htmlFor="honeypot">Leave this field empty</label>
        <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "14px 16px" }}>
        <Field id="firstName" label="First name" error={errors.firstName}>{textInput("firstName", formData.firstName, "text", undefined, "given-name")}</Field>
        <Field id="lastName" label="Last name" error={errors.lastName}>{textInput("lastName", formData.lastName, "text", undefined, "family-name")}</Field>
      </div>
      <Field id="email" label="Work email" error={errors.email}>{textInput("email", formData.email, "email", "name@firm.in", "email")}</Field>
      <Field id="companyName" label="Firm or company" error={errors.companyName}>{textInput("companyName", formData.companyName, "text", undefined, "organization")}</Field>
      <Field id="jobTitle" label="Role" error={errors.jobTitle}>{textInput("jobTitle", formData.jobTitle, "text", "Partner, General Counsel…", "organization-title")}</Field>
      <Field id="teamSize" label={<>Legal team size <Optional /></>}>
        <Select id="teamSize" value={formData.teamSize} options={TEAM_SIZES} onChange={setChoice("teamSize")} />
      </Field>
      <Field id="orgType" label={<>I’m with <Optional /></>}>
        <Select id="orgType" value={formData.orgType} options={ORG_TYPES} onChange={setChoice("orgType")} />
      </Field>
      <Field id="topic" label={<>I’d like <Optional /></>}>
        <Select id="topic" value={formData.topic} options={TOPICS} onChange={setChoice("topic")} />
      </Field>
      <Field id="message" label="What would you like to hand over?" error={errors.message} style={{ gridColumn: "1 / -1" }}>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="e.g. First drafts of replies to legal notices, and a list of dates for every new brief."
          value={formData.message}
          onChange={handleChange}
          aria-invalid={has("message")}
          aria-describedby={has("message") ? "message-error" : undefined}
          style={{ ...control(has("message")), padding: "9px 12px", lineHeight: 1.5, resize: "vertical" }}
        />
      </Field>

      <div className="lc-form" style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px 16px", alignItems: "center" }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ width: "100%", minHeight: "46px", border: "none", borderRadius: "4px", background: INK, color: "#fdfcf8", fontSize: "15.5px", fontWeight: 500, opacity: isSubmitting ? 0.7 : undefined, cursor: isSubmitting ? "progress" : undefined }}
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>
          {sentTo !== null && (
            <p ref={thanksRef} tabIndex={-1} role="status" style={{ margin: 0, padding: "14px 16px", borderRadius: "4px", background: YELLOW, fontSize: "14.5px", lineHeight: 1.5, outline: "none" }}>
              Thanks — your message is with us. We reply within 1–2 business days{sentTo ? ` at ${sentTo}` : ""}. If it’s urgent, call{" "}
              <a href={`tel:${BUSINESS.phoneTel}`} style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{BUSINESS.phone}</a>.
            </p>
          )}
          {submitError && (
            <p role="alert" style={{ margin: 0, fontSize: "14px", lineHeight: 1.5, color: ERROR_RED }}>
              {submitError} If it keeps happening, email <a href={`mailto:${BUSINESS.email}`} style={{ textDecoration: "underline" }}>{BUSINESS.email}</a>.
            </p>
          )}
          <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.5, color: MUTED }}>
            We use your details only to reply to you. See our{" "}
            <Link href="/privacy-policy" style={{ color: INK, borderBottom: `1px solid ${INK}` }}>Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </form>
  );
}
