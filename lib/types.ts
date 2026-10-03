import type { ComponentType, SVGProps } from 'react'

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export type ProjectCategory =
  | 'Web'
  | 'Full stack'
  | 'Mobiel'
  | 'School'
  | 'Persoonlijk'
  | 'Bijproject'

export interface Project {
  slug: string
  title: string
  year: string
  category: ProjectCategory
  role: string
  summary: string
  details?: string[]
  image: string
  imageAlt: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface TechnologyGroup {
  category: string
  items: string[]
}

export interface WorkPrinciple {
  title: string
  description: string
}

export interface VolunteeringEntry {
  organization: string
  role: string
  period: string
  description: string
  activities: string[]
  url?: string
  image?: string
  imageAlt?: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>
