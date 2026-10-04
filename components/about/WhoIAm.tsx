import { AboutSection } from '@/components/about/AboutSection'

export function WhoIAm() {
  return (
    <AboutSection
      id="who-i-am"
      number="01"
      label="Wie ik ben"
      title="Een student die graag dingen bouwt die werken."
    >
      <div className="space-y-6 text-pretty text-lg leading-relaxed">
        <p className="font-serif text-2xl leading-snug">
          Ik ben [JOUW NAAM], student [OPLEIDING] aan [SCHOOL] in België. [JOUW
          BIO]
        </p>
        <p>
          Het meeste wat ik maak is voor het web. Front-ends bouw ik met React
          en Next.js, en als een project een echte back-end nodig heeft, werk ik
          met C# en ASP.NET. Ik vind vooral het punt boeiend waar die twee
          samenkomen: een API ontwerpen die prettig is om mee te werken, en daar
          een interface op bouwen die vanzelf spreekt.
        </p>
        <p className="text-muted-foreground">
          Wat me het meest interesseert, is software die een specifieke groep
          mensen helpt om iets met minder moeite te doen. Reservatietools,
          dashboards, kleine websites voor lokale zaken. Niets spectaculairs,
          maar wel het soort dingen dat je mist als het er niet is.
        </p>
        <p className="text-muted-foreground">
          Ik leer het best door te doen. Als ik iets nieuws oppik, lees ik de
          documentatie, maak ik er een klein project mee, breek ik het, en lees
          ik de documentatie opnieuw. Onderweg hou ik notities bij, vooral zodat
          ik later niet twee keer hetzelfde probleem moet oplossen.
        </p>
      </div>

      <aside
        aria-labelledby="currently-heading"
        className="mt-12 border-l-2 border-signal pl-5"
      >
        <h3
          id="currently-heading"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          Momenteel
        </h3>
        <p className="mt-3 leading-relaxed">
          [WAAR JE NU MEE BEZIG BENT, BIJVOORBEELD: beter worden in het testen
          van ASP.NET API&apos;s en meer leren over webbeveiliging.]
        </p>
      </aside>
    </AboutSection>
  )
}
