import type {
  TechnologyGroup,
  VolunteeringEntry,
  WorkPrinciple,
} from '@/lib/types'

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['C#', 'ASP.NET', 'API-ontwikkeling'],
  },
  {
    category: 'Databanken',
    items: ['SQL', 'Supabase', 'MongoDB'],
  },
  {
    category: 'Andere',
    items: ['Git & GitHub', 'Testen', 'Security', 'REST API’s'],
  },
]

export const workPrinciples: WorkPrinciple[] = [
  {
    title: 'Eerst het probleem begrijpen',
    description:
      'Voor ik begin te coderen, wil ik weten wie iets gaat gebruiken en waar die persoon vandaag tegenaan loopt. Een kort gesprek bespaart vaak veel werk aan de verkeerde functie.',
  },
  {
    title: 'Bouwen wat echt nuttig is',
    description:
      'Ik maak liever een kleine tool die mensen elke dag gebruiken dan een indrukwekkende die ze één keer openen. Praktisch gaat voor slim.',
  },
  {
    title: 'Aandacht voor gebruiksgemak',
    description:
      'Duidelijke labels, logische standaardwaarden, toetsenbordondersteuning, leesbare tekst. Zulke details vallen zelden op als ze goed zijn, en altijd als ze fout zijn.',
  },
  {
    title: 'Testen wat ertoe doet',
    description:
      'Ik schrijf tests voor de logica die pijn doet als ze breekt, en ik klik zelf door de app voor ik iets af noem.',
  },
  {
    title: 'Leren wanneer het project erom vraagt',
    description:
      'Ik jaag niet elk nieuw framework na. Als een project iets vraagt wat ik nog niet ken, neem ik de tijd om het goed te leren.',
  },
  {
    title: 'Blijven verbeteren',
    description:
      'Iets opleveren is een begin. Ik herbekijk graag oude projecten, ruim code op die ik ontgroeid ben en maak het elke keer een beetje beter.',
  },
]

// Voeg hier items toe zodra je vrijwilligerswerk doet. Laat de lijst leeg om de melding "binnenkort meer" te tonen.
export const volunteeringEntries: VolunteeringEntry[] = [
  {
    organization: '[ORGANISATIE]',
    role: '[ROL]',
    period: '[START] – heden',
    description:
      '[KORTE UITLEG OVER DE ORGANISATIE EN WAAROM JE ER VRIJWILLIGER BENT]',
    activities: ['[WAT JE DOET]', '[WAT JE DOET]'],
    url: '[URL ORGANISATIE]',
  },
]
