import type { Project } from '@/lib/types'

// Voorbeeldprojecten: vervang titels, tekst, screenshots en URL's door je eigen werk.
export const projects: Project[] = [
  {
    slug: 'court-booking',
    title: '[PROJECTNAAM]',
    year: '2026',
    category: 'Persoonlijk',
    role: 'Ontwerp & ontwikkeling',
    summary:
      'Een reservatietool voor een lokale sportclub. Leden boeken een terrein in een paar klikken, en de club hoeft geen gedeelde spreadsheet meer bij te houden.',
    details: [
      'De club regelde reservaties via een spreadsheet en een groepschat, wat bijna elke week tot dubbele boekingen leidde. Ik ben begonnen met een gesprek met twee bestuursleden om te begrijpen hoe het boeken echt verliep.',
      'Het resultaat is een Next.js-app met Supabase als back-end, met row-level security zodat leden enkel hun eigen reservaties zien en aanpassen. Beheerders krijgen een eenvoudig overzicht om terreinen te blokkeren voor training of onderhoud.',
      '[VERVANG DOOR WAT JE GELEERD HEBT OF ANDERS ZOU DOEN]',
    ],
    image: '/images/projects/project-01.png',
    imageAlt: 'Screenshot van de reservatiekalender met beschikbare tijdsloten',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    liveUrl: '[PROJECT URL]',
    githubUrl: '[GITHUB URL]',
  },
  {
    slug: 'bakery-website',
    title: '[PROJECTNAAM]',
    year: '2025',
    category: 'Bijproject',
    role: 'Website',
    summary:
      'Een website voor een zelfstandige bakkerij. De eigenares past openingsuren en weekaanbiedingen zelf aan, zonder iemand te moeten bellen.',
    details: [
      'De belangrijkste vereiste was dat iemand die niet dagelijks met computers werkt de site makkelijk kan onderhouden. Ik hield de inhoud beperkt en schreef er een korte handleiding bij.',
      'Snelheid was ook belangrijk: de meeste bezoekers checken de openingsuren op hun gsm, vaak via mobiele data. Afbeeldingen zijn geoptimaliseerd en de pagina laadt snel, ook op een trage verbinding.',
    ],
    image: '/images/projects/project-02.png',
    imageAlt: 'Screenshot van de homepage van de bakkerij met een grote foto van vers brood',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: '[PROJECT URL]',
  },
  {
    slug: 'study-planner',
    title: '[PROJECTNAAM]',
    year: '2025',
    category: 'School',
    role: 'Schoolproject',
    summary:
      'Een studieplanner die taken en deadlines per vak groepeert. Gemaakt als schoolopdracht rond een C# ASP.NET API met een React front-end.',
    details: [
      'De opdracht draaide rond het ontwerpen van een nette REST API, dus het meeste werk ging naar de ASP.NET back-end: validatie, authenticatie en tests voor de belangrijkste endpoints.',
      'De front-end is bewust eenvoudig gehouden. Hij gebruikt de API en toont in één oogopslag wat er deze week af moet.',
    ],
    image: '/images/projects/project-03.png',
    imageAlt: 'Screenshot van de studieplanner in donkere modus met taken gegroepeerd per vak',
    technologies: ['C#', 'ASP.NET', 'React', 'SQL'],
    githubUrl: '[GITHUB URL]',
  },
]
