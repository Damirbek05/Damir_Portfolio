import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { getProjectsByCategory } from "@/lib/projects-data"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#282c33] text-[#abb2bf] font-mono">
      {/* Header */}
      <header className="border-b border-[#21252b] px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-4 h-4 border border-[#c778dd]"></div>
            <span className="text-[#ffffff] font-bold">Damir</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>home
            </Link>
            <Link href="/projects" className="text-[#ffffff] hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>works
            </Link>
            <Link href="/about-me" className="hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>about-me
            </Link>
            <Link href="/contacts" className="hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>contacts
            </Link>
          </div>
        </nav>
      </header>

      {/* Projects Header */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4">
            <span className="text-[#c778dd]">/</span>projects
          </h1>
          <p className="text-[#abb2bf] mb-16">List of my projects</p>

          {/* Complete Apps Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-8">
              <span className="text-[#c778dd]">#</span>complete-apps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getProjectsByCategory('complete-apps').map((project) => (
                <ProjectCard key={project.id} project={project} size="large" />
              ))}
            </div>
          </div>

          {/* Small Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">
              <span className="text-[#c778dd]">#</span>small-projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getProjectsByCategory('small-projects').map((project) => (
                <ProjectCard key={project.id} project={project} size="small" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21252b] px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-[#c778dd]"></div>
              <span className="text-[#ffffff] font-bold">Damir</span>
            </div>
            <span className="text-[#abb2bf]">ospanbekdamir1@gmail.com</span>
          </div>
          <div>
            <p className="text-[#abb2bf]">Frontend developer</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#ffffff] font-semibold">Media</span>
            <div className="flex gap-2">
              <Github className="w-5 h-5 text-[#abb2bf] hover:text-[#c778dd] cursor-pointer transition-colors" />
              <ExternalLink className="w-5 h-5 text-[#abb2bf] hover:text-[#c778dd] cursor-pointer transition-colors" />
              <ExternalLink className="w-5 h-5 text-[#abb2bf] hover:text-[#c778dd] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-[#21252b]">
          <p className="text-[#abb2bf] text-sm">© Copyright 2022. Made by Damir</p>
        </div>
      </footer>
    </div>
  )
}
