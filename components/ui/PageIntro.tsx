interface PageIntroProps {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
}

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="grid gap-6 pb-16 pt-14 md:grid-cols-12 md:pb-24 md:pt-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-3 md:pt-4">
        {eyebrow}
      </p>
      <div className="md:col-span-9">
        <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          {title}
        </h1>
        {children && (
          <div className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        )}
      </div>
    </header>
  )
}
