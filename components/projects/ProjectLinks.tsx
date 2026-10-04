import { ArrowUpRight } from 'lucide-react'

import { GithubIcon } from '@/components/icons/brand-icons'

interface ProjectLinksProps {
  liveUrl?: string
  githubUrl?: string
}

export function ProjectLinks({ liveUrl, githubUrl }: ProjectLinksProps) {
  if (!liveUrl && !githubUrl) return null

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
      {liveUrl && (
        <li>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 border-b border-foreground pb-0.5 transition-colors hover:border-signal hover:text-signal"
          >
            Bekijk website
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opent in een nieuw tabblad)</span>
          </a>
        </li>
      )}
      {githubUrl && (
        <li>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pb-0.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-3.5" aria-hidden="true" />
            <span className="link-underline">Bekijk code</span>
            <span className="sr-only">(opent in een nieuw tabblad)</span>
          </a>
        </li>
      )}
    </ul>
  )
}
