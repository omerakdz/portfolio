import { ProjectDetails } from '@/components/projects/ProjectDetails'
import { ProjectImage } from '@/components/projects/ProjectImage'
import { ProjectLinks } from '@/components/projects/ProjectLinks'
import type { Project } from '@/lib/types'
import { cn } from '@/lib/utils'

export type ProjectLayout = 'feature' | 'image-left' | 'image-right'

interface ProjectItemProps {
  project: Project
  number: number
  layout: ProjectLayout
}

const layoutClasses: Record<
  ProjectLayout,
  { image: string; content: string }
> = {
  feature: {
    image: 'md:col-span-12',
    content: 'md:col-span-12 md:grid md:grid-cols-12 md:gap-10',
  },
  'image-left': {
    image: 'md:col-span-7',
    content: 'md:col-span-4 md:col-start-9',
  },
  'image-right': {
    image: 'md:order-last md:col-span-7 md:col-start-6',
    content: 'md:col-span-4',
  },
}

export function ProjectItem({ project, number, layout }: ProjectItemProps) {
  const headingId = `${project.slug}-heading`
  const classes = layoutClasses[layout]
  const isFeature = layout === 'feature'

  return (
    <article
      id={project.slug}
      aria-labelledby={headingId}
      className="group/project scroll-mt-24 border-t pt-5"
    >
      <p className="flex justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>
          <span className="text-signal">Project</span>{' '}
          {String(number).padStart(2, '0')}
        </span>
        <span>
          {project.category} · {project.year}
        </span>
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-10">
        <ProjectImage
          src={project.image}
          alt={project.imageAlt}
          priority={number === 1}
          sizes={
            isFeature
              ? '(min-width: 1152px) 1072px, 100vw'
              : '(min-width: 768px) 58vw, 100vw'
          }
          className={classes.image}
        />

        <div className={cn('flex flex-col', classes.content)}>
          <header className={cn(isFeature && 'md:col-span-5')}>
            <h2
              id={headingId}
              className="text-balance font-serif text-3xl leading-tight md:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{project.role}</p>
          </header>

          <div
            className={cn(
              'mt-5 flex flex-col gap-6',
              isFeature && 'md:col-span-6 md:col-start-7 md:mt-0',
            )}
          >
            <p className="text-pretty leading-relaxed">{project.summary}</p>

            {project.details && project.details.length > 0 && (
              <ProjectDetails paragraphs={project.details} />
            )}

            <dl className="border-t pt-4 text-sm">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Gemaakt met
              </dt>
              <dd className="mt-2">{project.technologies.join(' · ')}</dd>
            </dl>

            <ProjectLinks
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
