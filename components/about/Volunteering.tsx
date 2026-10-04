import { AboutSection } from '@/components/about/AboutSection'
import { VolunteeringItem } from '@/components/about/VolunteeringItem'
import { volunteeringEntries } from '@/lib/about'

export function Volunteering() {
  return (
    <AboutSection
      id="community"
      number="04"
      label="Naast het programmeren"
      title="Vrijwilligerswerk."
    >
      <p className="text-pretty text-lg leading-relaxed">
        Naast mijn studie begin ik met vrijwilligerswerk. Ik deel hier meer
        zodra het vorm krijgt.
      </p>

      {volunteeringEntries.length > 0 ? (
        <ul className="mt-10 space-y-10">
          {volunteeringEntries.map((entry) => (
            <li key={`${entry.organization}-${entry.period}`}>
              <VolunteeringItem entry={entry} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-muted-foreground">
          Binnenkort meer.
        </p>
      )}
    </AboutSection>
  )
}
