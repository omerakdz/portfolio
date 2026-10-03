import { ArrowUpRight } from 'lucide-react'

import { socialLinks } from '@/lib/site-config'

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Profielen en cv">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm transition-colors hover:border-signal"
          >
            <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
            <span>{label}</span>
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opent in een nieuw tabblad)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
