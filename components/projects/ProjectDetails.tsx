'use client'

import { Minus, Plus } from 'lucide-react'
import { useId, useState } from 'react'

import { cn } from '@/lib/utils'

interface ProjectDetailsProps {
  paragraphs: string[]
}

export function ProjectDetails({ paragraphs }: ProjectDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <div>
      <div
        id={contentId}
        inert={!isOpen}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-500 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pb-5 pt-1 leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        {isOpen ? (
          <Minus className="size-3.5" aria-hidden="true" />
        ) : (
          <Plus className="size-3.5" aria-hidden="true" />
        )}
        {isOpen ? 'Minder tonen' : 'Lees meer'}
      </button>
    </div>
  )
}
