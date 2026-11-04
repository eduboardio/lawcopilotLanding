import { createTransport, type Transporter } from 'nodemailer';
import { BUSINESS } from '@/constants';
import { logger } from './logger';

/**
 * Emails each contact-form enquiry to the team.
 *
 * lawcopilot.io mail is hosted on Zoho (India), so by default this signs in to
 * Zoho's SMTP server as a lawcopilot.io mailbox and sends from that address.
 *
 *   SMTP_USER         mailbox to send from, e.g. admin@lawcopilot.io (required)
 *   SMTP_PASS         its Zoho app-specific password (required)
 *   SMTP_HOST         default smtppro.zoho.in (paid Zoho plans; free plans use smtp.zoho.in)
 *   SMTP_PORT         default 465 (TLS from the start); 587 upgrades with STARTTLS
 *   SMTP_SECURE       "true"/"false" to override TLS-from-the-start (default: port is 465)
 *   CONTACT_EMAIL_TO  where enquiries go, default admin@lawcopilot.io
 */

export interface Enquiry {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  orgType: string;
  teamSize?: string;
  country: string;
  hearAbout?: string;
  message: string;
}

let transporter: Transporter | null = null;

function settings() {
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;
  return {
    host: process.env.SMTP_HOST || 'smtppro.zoho.in',
    port,
    secure,
    user: process.env.SMTP_USER ?? '',
    pass: process.env.SMTP_PASS ?? '',
    to: process.env.CONTACT_EMAIL_TO || BUSINESS.email,
  };
}

export function isMailConfigured(): boolean {
  const { user, pass } = settings();
  return Boolean(user && pass);
}

function getTransporter(): Transporter {
  if (!transporter) {
    const { host, port, secure, user, pass } = settings();
    transporter = createTransport({
      host,
      port,
      secure,
      // Never send the password over an unencrypted connection.
      requireTLS: true,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
  }
  return transporter;
}

function formatEnquiry(enquiry: Enquiry, receivedAt: Date): string {
  const received = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(receivedAt);

  const details: [string, string | undefined][] = [
    ['Name', `${enquiry.firstName} ${enquiry.lastName}`],
    ['Email', enquiry.email],
    ['Organisation', enquiry.companyName],
    ['Job title', enquiry.jobTitle],
    ['Organisation type', enquiry.orgType],
    ['Legal team size', enquiry.teamSize],
    ['Country', enquiry.country],
    ['Heard about us', enquiry.hearAbout],
  ];

  return [
    'New enquiry from the contact form on lawcopilot.io.',
    '',
    ...details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    enquiry.message,
    '',
    '—',
    `Received ${received} IST. Reply to this email to write back to ${enquiry.firstName} directly.`,
  ].join('\n');
}

/** Sends the enquiry to CONTACT_EMAIL_TO. Returns false if it could not be sent. */
export async function sendEnquiryEmail(enquiry: Enquiry, receivedAt = new Date()): Promise<boolean> {
  if (!isMailConfigured()) {
    logger.warn('Contact email not configured (SMTP_USER / SMTP_PASS missing), skipping');
    return false;
  }

  const { user, to } = settings();
  const name = `${enquiry.firstName} ${enquiry.lastName}`;

  try {
    await getTransporter().sendMail({
      from: { name: 'LawCopilot website', address: user },
      to,
      replyTo: { name, address: enquiry.email },
      subject: `Website enquiry: ${name}, ${enquiry.companyName}`,
      text: formatEnquiry(enquiry, receivedAt),
    });
    logger.info('Contact enquiry emailed', { to });
    return true;
  } catch (error) {
    logger.error('Failed to email contact enquiry', error as Error, { to });
    return false;
  }
}
