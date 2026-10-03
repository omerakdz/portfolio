import Image from 'next/image'

import { siteConfig } from '@/lib/site-config'

export function ProfileImage() {
  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.profileImageAlt}
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale-[35%]"
        />
      </div>
      <figcaption className="mt-3 flex justify-between font-mono text-xs text-muted-foreground">
        <span>{siteConfig.name}</span>
        <span>{siteConfig.location}</span>
      </figcaption>
    </figure>
  )
}
