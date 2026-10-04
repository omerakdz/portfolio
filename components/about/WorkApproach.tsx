import { AboutSection } from '@/components/about/AboutSection'
import { workPrinciples } from '@/lib/about'

export function WorkApproach() {
  return (
    <AboutSection
      id="how-i-work"
      number="03"
      label="Hoe ik werk"
      title="Een paar gewoontes waar ik me aan probeer te houden."
    >
      <ol className="border-b">
        {workPrinciples.map((principle, index) => (
          <li
            key={principle.title}
            className="grid gap-2 border-t py-6 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-mono text-xs text-muted-foreground sm:pt-1.5">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-serif text-xl">{principle.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </AboutSection>
  )
}
