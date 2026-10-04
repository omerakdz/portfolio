import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import type { VolunteeringEntry } from '@/lib/types'

interface VolunteeringItemProps {
  entry: VolunteeringEntry
}

export function VolunteeringItem({ entry }: VolunteeringItemProps) {
  return (
    <article className="border-t pt-5">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-serif text-2xl">{entry.organization}</h3>
        <p className="font-mono text-xs text-muted-foreground">
          {entry.period}
        </p>
      </header>
      <p className="mt-1 text-sm text-muted-foreground">{entry.role}</p>

      {entry.image && (
        <figure className="relative mt-6 aspect-[3/2] overflow-hidden bg-muted">
          <Image
            src={entry.image}
            alt={entry.imageAlt ?? ''}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>
      )}

      <p className="mt-5 text-pretty leading-relaxed">{entry.description}</p>

      {entry.activities.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-muted-foreground marker:text-signal">
          {entry.activities.map((activity, index) => (
            <li key={`${activity}-${index}`}>{activity}</li>
          ))}
        </ul>
      )}

      {entry.url && (
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm"
        >
          <span className="link-underline">Bekijk organisatie</span>
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only">(opent in een nieuw tabblad)</span>
        </a>
      )}
    </article>
  )
}
