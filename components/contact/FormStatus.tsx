import type { FormState } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

interface FormStatusProps {
  state: FormState
  isConfigured: boolean
}

function getStatus(state: FormState, isConfigured: boolean) {
  if (!isConfigured) {
    return {
      tone: 'muted',
      message: `Het formulier is nog niet gekoppeld. Mail me intussen gerust rechtstreeks op ${siteConfig.email}.`,
    }
  }
  if (state === 'success') {
    return {
      tone: 'success',
      message: 'Bedankt, je bericht is verstuurd. Ik antwoord zo snel mogelijk.',
    }
  }
  if (state === 'error') {
    return {
      tone: 'error',
      message: `Er ging iets mis bij het versturen. Probeer het opnieuw, of mail me op ${siteConfig.email}.`,
    }
  }
  return null
}

export function FormStatus({ state, isConfigured }: FormStatusProps) {
  const status = getStatus(state, isConfigured)

  return (
    <p
      id="form-status"
      role="status"
      aria-live="polite"
      className={cn(
        'max-w-sm text-sm leading-relaxed',
        status?.tone === 'success' && 'text-foreground',
        status?.tone === 'error' && 'text-destructive',
        status?.tone === 'muted' && 'text-muted-foreground',
      )}
    >
      {status && (
        <>
          {status.tone === 'success' && (
            <span
              className="mr-2 inline-block size-2 rounded-full bg-signal align-middle"
              aria-hidden="true"
            />
          )}
          {status.message}
        </>
      )}
    </p>
  )
}
