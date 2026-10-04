import Image from 'next/image'

import { cn } from '@/lib/utils'

interface ProjectImageProps {
  src: string
  alt: string
  priority?: boolean
  sizes: string
  className?: string
}

export function ProjectImage({
  src,
  alt,
  priority = false,
  sizes,
  className,
}: ProjectImageProps) {
  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden border bg-muted',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover/project:scale-[1.015] group-hover/project:-translate-y-1"
      />
    </div>
  )
}
