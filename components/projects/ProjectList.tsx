'use client'

import { useState } from 'react'

import {
  ProjectItem,
  type ProjectLayout,
} from '@/components/projects/ProjectItem'
import type { Project, ProjectCategory } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ProjectListProps {
  projects: Project[]
}

type CategoryFilter = ProjectCategory | 'Alle'

function getLayout(index: number): ProjectLayout {
  if (index === 0) return 'feature'
  return index % 2 === 1 ? 'image-right' : 'image-left'
}

export function ProjectList({ projects }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const categories: CategoryFilter[] = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ]

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {categories.length > 2 && (
        <nav aria-label="Filter projects by category" className="mb-14">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {categories.map((category) => {
              const isActive = category === activeCategory

              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={cn(
                      'border-b pb-0.5 transition-colors',
                      isActive
                        ? 'border-signal text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {category}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      )}

      <p className="sr-only" aria-live="polite">
        {`Showing ${visibleProjects.length} ${visibleProjects.length === 1 ? 'project' : 'projects'}`}
      </p>

      <div className="flex flex-col gap-24 md:gap-32">
        {visibleProjects.map((project, index) => (
          <ProjectItem
            key={project.slug}
            project={project}
            number={projects.indexOf(project) + 1}
            layout={getLayout(index)}
          />
        ))}
      </div>
    </>
  )
}
