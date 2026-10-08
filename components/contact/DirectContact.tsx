import { ArrowUpRight } from 'lucide-react'

import { siteConfig } from '@/lib/site-config'

const otherChannels = [
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'GitHub', href: siteConfig.links.github },
]

export function DirectContact() {
  return (
    <aside
      aria-labelledby="direct-contact-heading"
      className="mt-20 grid gap-8 border-t pt-6 md:grid-cols-12"
    >
      <h2
        id="direct-contact-heading"
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-3"
      >
Liever mailen?
      </h2>

      <div className="md:col-span-9">
        <a
          href={`mailto:${siteConfig.email}`}
          className="break-all font-serif text-3xl transition-colors hover:text-signal md:text-5xl"
        >
          <span className="link-underline">{siteConfig.email}</span>
        </a>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {otherChannels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <span className="link-underline">{channel.label}</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">(opent in een nieuw tabblad)</span>
              </a>
            </li>
          ))}
          <li>Woont in {siteConfig.location}</li>
        </ul>
      </div>
    </aside>
  )
}
