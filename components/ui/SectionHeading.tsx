import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  id: string
  number: string
  label: string
  title: string
  className?: string
}

export function SectionHeading({
  id,
  number,
  label,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('border-t pt-5', className)}>
      <p className="flex gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="text-signal">{number}</span>
        <span>{label}</span>
      </p>
      <h2
        id={id}
        className="mt-6 max-w-xl text-balance font-serif text-3xl leading-tight md:text-4xl"
      >
        {title}
      </h2>
    </header>
  )
}
