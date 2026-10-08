import emailjs from '@emailjs/browser'

import type { ContactFormData } from '@/lib/types'

// EmailJS is designed to run in the browser, so these values are public by design.
// Your EmailJS private key must never be added here.
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  recipientEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
}

export function isEmailJsConfigured(): boolean {
  return Boolean(
    emailJsConfig.serviceId &&
      emailJsConfig.templateId &&
      emailJsConfig.publicKey,
  )
}

// Template variables available in your EmailJS template:
// {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { serviceId, templateId, publicKey, recipientEmail } = emailJsConfig

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured.')
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      subject: data.subject,
      message: data.message,
      to_email: recipientEmail ?? '',
    },
    { publicKey },
  )
}
