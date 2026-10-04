import { SectionHeading } from '@/components/ui/SectionHeading'

interface AboutSectionProps {
  id: string
  number: string
  label: string
  title: string
  children: React.ReactNode
}

export function AboutSection({
  id,
  number,
  label,
  title,
  children,
}: AboutSectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="grid scroll-mt-24 gap-10 py-12 md:grid-cols-12 md:py-16"
    >
      <div className="md:col-span-4">
        <SectionHeading
          id={headingId}
          number={number}
          label={label}
          title={title}
          className="md:sticky md:top-24"
        />
      </div>
      <div className="md:col-span-7 md:col-start-6 md:pt-16">{children}</div>
    </section>
  )
}
