import { ArrowDown } from 'lucide-react'

import { ProfileImage } from '@/components/home/ProfileImage'
import { SocialLinks } from '@/components/home/SocialLinks'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid gap-12 pb-16 pt-12 md:grid-cols-12 md:gap-10 md:pb-24 md:pt-20"
    >
      <div className="flex flex-col md:col-span-7 md:pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {siteConfig.role}
          <span className="mx-2 text-signal" aria-hidden="true">
            ·
          </span>
          {siteConfig.location}
        </p>

        <h1
          id="hero-heading"
          className="mt-8 text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Hallo, ik ben student en ik maak graag{' '}
          <em className="text-signal">dingen die werken.</em>
        </h1>

        <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          Ik ben [JOUW NAAM] en ik studeer [OPLEIDING] aan [SCHOOL]. Op deze
          site stel ik mezelf voor en toon ik een paar projecten waar ik met
          React, Next.js en C# aan gewerkt heb.
        </p>

        <div className="mt-10">
          <SocialLinks />
        </div>

        <a
          href="#selected-work"
          className="group mt-16 hidden items-center gap-3 self-start font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:mt-auto md:inline-flex"
        >
          <ArrowDown
            className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
          Projecten
        </a>
      </div>

      <div className="md:col-span-5">
        <ProfileImage />
      </div>
    </section>
  )
}
