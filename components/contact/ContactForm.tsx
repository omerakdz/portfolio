'use client'

import { ArrowRight, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'

import { fieldInputClass, FormField } from '@/components/contact/FormField'
import { FormStatus } from '@/components/contact/FormStatus'
import { isEmailJsConfigured, sendContactEmail } from '@/lib/emailjs'
import type { ContactFormData, ContactFormErrors } from '@/lib/types'
import { contactLimits, validateContactForm } from '@/lib/validate-contact'

export type FormState = 'idle' | 'submitting' | 'success' | 'error'

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [formState, setFormState] = useState<FormState>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const isConfigured = isEmailJsConfigured()
  const isSubmitting = formState === 'submitting'

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as keyof ContactFormData
    setValues((current) => ({ ...current, [field]: event.target.value }))

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
    if (formState === 'success' || formState === 'error') {
      setFormState('idle')
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)

    const firstInvalidField = Object.keys(validationErrors)[0]
    if (firstInvalidField) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
        ?.focus()
      return
    }

    setFormState('submitting')

    try {
      await sendContactEmail({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      })
      setValues(emptyForm)
      setFormState('success')
    } catch (error) {
      console.error('Contact form failed to send:', error)
      setFormState('error')
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-x-8 gap-y-10 sm:grid-cols-2"
    >
      <FormField id="name" label="Naam" error={errors.name}>
        {(describedBy) => (
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={contactLimits.name}
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy}
            className={fieldInputClass}
          />
        )}
      </FormField>

      <FormField id="email" label="E-mail" error={errors.email}>
        {(describedBy) => (
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy}
            className={fieldInputClass}
          />
        )}
      </FormField>

      <FormField
        id="subject"
        label="Onderwerp"
        error={errors.subject}
        className="sm:col-span-2"
      >
        {(describedBy) => (
          <input
            id="subject"
            name="subject"
            type="text"
            required
            maxLength={contactLimits.subject}
            value={values.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={describedBy}
            className={fieldInputClass}
          />
        )}
      </FormField>

      <FormField
        id="message"
        label="Bericht"
        error={errors.message}
        hint={`${values.message.length} / ${contactLimits.message}`}
        className="sm:col-span-2"
      >
        {(describedBy) => (
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={contactLimits.message}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy}
            className={`${fieldInputClass} resize-y leading-relaxed`}
          />
        )}
      </FormField>

      <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-start sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting || !isConfigured}
          className="group inline-flex w-full items-center justify-center gap-3 bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-foreground sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Versturen…
            </>
          ) : (
            <>
              Verstuur bericht
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        <FormStatus state={formState} isConfigured={isConfigured} />
      </div>
    </form>
  )
}
