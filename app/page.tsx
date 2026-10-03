import { ContactPrompt } from '@/components/home/ContactPrompt'
import { Hero } from '@/components/home/Hero'
import { SelectedWork } from '@/components/home/SelectedWork'
import { PageContainer } from '@/components/layout/PageContainer'

export default function HomePage() {
  return (
    <main>
      <PageContainer>
        <Hero />
        <SelectedWork />
        <ContactPrompt />
      </PageContainer>
    </main>
  )
}
