import { PageContainer } from '@/components/layout/PageContainer'
import { siteConfig } from '@/lib/site-config'

const footerLinks = [
  { label: 'LinkedIn', href: siteConfig.links.linkedin, external: true },
  { label: 'GitHub', href: siteConfig.links.github, external: true },
  { label: 'E-mail', href: `mailto:${siteConfig.email}`, external: false },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t md:mt-32">
      <PageContainer className="grid gap-8 py-10 text-sm md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <p className="font-serif text-xl">{siteConfig.name}</p>
          <p className="mt-1 text-muted-foreground">{siteConfig.tagline}</p>
        </div>

        <ul className="flex gap-6 md:col-span-4">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="link-underline"
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted-foreground md:col-span-2 md:text-right">
          © {year}
        </p>
      </PageContainer>
    </footer>
  )
}
