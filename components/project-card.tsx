"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { getAssetPath } from "@/lib/utils"
import type { Project, ProjectLink } from "@/lib/projects-data"
import Link from "next/link"

interface ProjectCardProps {
  project: Project
  size?: "large" | "small"
}

function getButtonVariant(linkType: ProjectLink['type']): "live" | "cached" | "github" | "figma" {
  switch (linkType) {
    case 'live':
      return 'live'
    case 'github':
    case 'cached':
      return 'github'
    case 'figma':
      return 'figma'
    default:
      return 'live'
  }
}

function getButtonLabel(link: ProjectLink): string {
  if (link.label) return link.label
  
  switch (link.type) {
    case 'live':
      return 'Live <~>'
    case 'github':
      return 'Github <~>'
    case 'cached':
      return 'Cached >'
    case 'figma':
      return 'Figma <~>'
    default:
      return 'View'
  }
}

export function ProjectCard({ project, size = "large" }: ProjectCardProps) {
  const isLarge = size === "large"

  // Функция для рендеринга кастомного контента
  const renderCustomContent = () => {
    if (project.customContentType === 'kotik-bot') {
      return (
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl">🐱</span>
          </div>
          <div className="text-white font-bold text-xl">BOT КОТИК</div>
          <div className="text-gray-400 text-sm">Discord server bot & more</div>
        </div>
      )
    }
    if (project.customContentType === 'portfolio') {
      return (
        <div className="text-center">
          <div className="text-white text-lg mb-2">Damir Portfolio</div>
          <div className="text-gray-400 text-sm">You're using it rn</div>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
      {/* Image or Custom Content */}
      {(project.image || project.customContentType) && (
        <div 
          className={`${isLarge ? 'h-48' : ''} ${project.backgroundColor ? '' : 'bg-gradient-to-br from-orange-500 to-red-600'} relative flex items-center justify-center`}
          style={project.backgroundColor ? { backgroundColor: project.backgroundColor } : undefined}
        >
          {project.image ? (
            <img
              src={getAssetPath(project.image)}
              alt={project.imageAlt || project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            renderCustomContent()
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-[#ffffff] font-semibold mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-[#abb2bf] mb-4">{project.description}</p>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {project.links.map((link, index) => (
              <EnhancedButton
                key={index}
                variant={getButtonVariant(link.type)}
                href={link.url}
                target="_blank"
                className="text-xs"
              >
                {getButtonLabel(link)}
              </EnhancedButton>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}


