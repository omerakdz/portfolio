import { FileText } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/icons/brand-icons'
import type { NavItem, SocialLink } from '@/lib/types'

// Vervang elke [WAARDE TUSSEN HAKEN] door je eigen gegevens.
export const siteConfig = {
  name: '[JOUW NAAM]',
  initials: '[JN]',
  role: 'Student [OPLEIDING]',
  location: 'België',
  tagline: 'Student [OPLEIDING] in België. Ik leer bouwen door te bouwen.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '[E-MAIL]',
  profileImage: '/images/profile.png',
  profileImageAlt: 'Portret van [JOUW NAAM]',
  links: {
    cv: '[CV URL]',
    linkedin: '[LINKEDIN URL]',
    github: '[GITHUB URL]',
  },
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Over mij', href: '/about' },
  { label: 'Projecten', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'CV', href: siteConfig.links.cv, icon: FileText },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', href: siteConfig.links.github, icon: GithubIcon },
]
