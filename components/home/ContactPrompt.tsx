import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactPrompt() {
  return (
    <section
      aria-labelledby="contact-prompt-heading"
      className="grid gap-10 py-12 md:grid-cols-12 md:py-16"
    >
      <div className="md:col-span-7">
        <SectionHeading
          id="contact-prompt-heading"
          number="02"
          label="Contact"
          title="Een vraag, een idee of gewoon benieuwd?"
        />
      </div>

      <div className="flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9">
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Ik praat graag over code, projecten of mijn opleiding. Stuur me gerust
          een bericht.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 self-start bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-signal"
        >
          Stuur een bericht
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  )
}
