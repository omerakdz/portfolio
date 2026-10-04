import type { Metadata } from 'next'

import { TechStack } from '@/components/about/TechStack'
import { Volunteering } from '@/components/about/Volunteering'
import { WhoIAm } from '@/components/about/WhoIAm'
import { WorkApproach } from '@/components/about/WorkApproach'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageIntro } from '@/components/ui/PageIntro'

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Wie ik ben, waar ik mee werk en hoe ik te werk ga als ik iets bouw.',
}

export default function AboutPage() {
  return (
    <main>
      <PageContainer>
        <PageIntro
          eyebrow="Over mij"
          title={
            <>
              Nieuwsgierig van aard, <em className="text-signal">zorgvuldig</em>{' '}
              uit gewoonte.
            </>
          }
        >
          <p>
            Wat meer over mij: hoe ik hier terechtkwam, waar ik mee werk en wat
            ik belangrijk vind als ik iets bouw.
          </p>
        </PageIntro>

        <WhoIAm />
        <TechStack />
        <WorkApproach />
        <Volunteering />
      </PageContainer>
    </main>
  )
}
