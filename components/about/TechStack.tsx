import { AboutSection } from '@/components/about/AboutSection'
import { technologyGroups } from '@/lib/about'

export function TechStack() {
  return (
    <AboutSection
      id="what-i-work-with"
      number="02"
      label="Waar ik mee werk"
      title="De tools die ik het vaakst gebruik."
    >
      <dl className="grid gap-x-10 sm:grid-cols-2">
        {technologyGroups.map((group) => (
          <div key={group.category} className="border-t py-5">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {group.category}
            </dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 text-lg">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </AboutSection>
  )
}
