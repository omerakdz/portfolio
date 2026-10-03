import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/lib/projects'

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="scroll-mt-20 py-12 md:py-16"
    >
      <SectionHeading
        id="selected-work-heading"
        number="01"
        label="Projecten"
        title="Een paar dingen die ik recent gemaakt heb."
      />

      <ol className="mt-12 border-t">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b">
            <Link
              href={`/projects#${project.slug}`}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-6 md:grid-cols-12 md:gap-x-6"
            >
              <span className="font-mono text-xs text-muted-foreground md:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-2xl transition-colors group-hover:text-signal md:col-span-5 md:text-3xl">
                {project.title}
              </span>
              <span className="font-mono text-xs text-muted-foreground md:order-last md:col-span-1 md:text-right">
                {project.year}
              </span>
              <span className="col-start-2 col-end-4 text-sm text-muted-foreground md:col-span-5 md:col-start-auto">
                {project.category}
                <span className="mx-2" aria-hidden="true">
                  —
                </span>
                {project.technologies.join(' · ')}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <Link
        href="/projects"
        className="group mt-8 inline-flex items-center gap-2 text-sm"
      >
        <span className="link-underline">Alle projecten</span>
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </section>
  )
}
