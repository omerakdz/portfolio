import { cn } from '@/lib/utils'

interface FormFieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  className?: string
  children: (describedBy: string | undefined) => React.ReactNode
}

export const fieldInputClass =
  'block w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-destructive'

export function FormField({
  id,
  label,
  error,
  hint,
  className,
  children,
}: FormFieldProps) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy =
    [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('flex flex-col', className)}>
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {children(describedBy)}
      {hint && !error && (
        <p id={hintId} className="mt-2 text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
