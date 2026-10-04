import type { Metadata } from 'next'

import { PageContainer } from '@/components/layout/PageContainer'
import { ProjectList } from '@/components/projects/ProjectList'
import { PageIntro } from '@/components/ui/PageIntro'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projecten',
  description:
    'Een selectie van websites en applicaties die ik als student gemaakt heb.',
}

export default function ProjectsPage() {
  return (
    <main>
      <PageContainer>
        <PageIntro
          eyebrow="Projecten"
          title={
            <>
              Wat ik gemaakt heb, <em className="text-signal">en waarom.</em>
            </>
          }
        >
          <p>
            Een mix van school-, bij- en persoonlijke projecten. Elk project
            begon met een concreet probleem, dus dat probeer ik ook uit te
            leggen.
          </p>
        </PageIntro>

        <ProjectList projects={projects} />
      </PageContainer>
    </main>
  )
}
