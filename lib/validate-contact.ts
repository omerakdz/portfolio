import type { ContactFormData, ContactFormErrors } from '@/lib/types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const contactLimits = {
  name: 100,
  subject: 150,
  message: 5000,
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const name = data.name.trim()
  const email = data.email.trim()
  const subject = data.subject.trim()
  const message = data.message.trim()

  if (!name) {
    errors.name = 'Vul je naam in.'
  } else if (name.length > contactLimits.name) {
    errors.name = `Je naam mag maximaal ${contactLimits.name} tekens lang zijn.`
  }

  if (!email) {
    errors.email = 'Vul je e-mailadres in.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Dit e-mailadres lijkt niet helemaal te kloppen.'
  }

  if (!subject) {
    errors.subject = 'Geef een kort onderwerp op.'
  } else if (subject.length > contactLimits.subject) {
    errors.subject = `Het onderwerp mag maximaal ${contactLimits.subject} tekens lang zijn.`
  }

  if (!message) {
    errors.message = 'Schrijf een bericht.'
  } else if (message.length < 10) {
    errors.message = 'Je bericht is wat kort. Kun je iets meer vertellen?'
  } else if (message.length > contactLimits.message) {
    errors.message = `Je bericht mag maximaal ${contactLimits.message} tekens lang zijn.`
  }

  return errors
}
