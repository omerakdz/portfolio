import type { Metadata } from 'next'

import { ContactForm } from '@/components/contact/ContactForm'
import { DirectContact } from '@/components/contact/DirectContact'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageIntro } from '@/components/ui/PageIntro'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Een vraag, een idee of gewoon hallo zeggen? Stuur me een bericht.',
}

export default function ContactPage() {
  return (
    <main>
      <PageContainer>
        <PageIntro
          eyebrow="Contact"
          title={
            <>
              Zeg gerust <em className="text-signal">hallo.</em>
            </>
          }
        >
          <p>
            Heb je een vraag over iets wat ik gemaakt heb, wil je ideeën
            uitwisselen of gewoon kennismaken? Stuur me een bericht, ik hoor
            graag van je.
          </p>
        </PageIntro>

        <section
          aria-label="Contactformulier"
          className="grid md:grid-cols-12"
        >
          <div className="md:col-span-9 md:col-start-4">
            <ContactForm />
          </div>
        </section>

        <DirectContact />
      </PageContainer>
    </main>
  )
}
