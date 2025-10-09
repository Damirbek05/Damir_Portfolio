import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { LanguageDropdown } from "@/components/ui/language-dropdown"

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
            <LanguageDropdown />
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
              {/* ChertNodes */}
              <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 relative">
                  <img
                    src="/chertnodes-project-interface-dark-theme.jpg"
                    alt="ChertNodes project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">TypeScript</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Tailwind CSS</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">FastAPI</span>
                  </div>
                  <h3 className="text-[#ffffff] font-semibold mb-2">ChertNodes</h3>
                  <p className="text-sm text-[#abb2bf] mb-4">Minecraft servers hosting</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff]"
                    >
                      Live &lt;~&gt;
                    </Button>
                    <Button
                      size="sm"
                      className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                    >
                      Cached &gt;
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Kahoot Answers Viewer */}
              <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
                <div className="h-48 bg-[#6441a5] relative flex items-center justify-center">
                  <img
                    src="/kahoot-answers-viewer-purple-interface.jpg"
                    alt="Kahoot Answers Viewer project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">JavaScript (ES6+)</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">FastAPI</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">MongoDB</span>
                  </div>
                  <h3 className="text-[#ffffff] font-semibold mb-2">Kahoot Answers Viewer</h3>
                  <p className="text-sm text-[#abb2bf] mb-4">Get answers to your kahoot quiz</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff]"
                    >
                      Live &lt;~&gt;
                    </Button>
                  </div>
                </div>
              </Card>

              {/* ProtectX */}
              <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
                <div className="h-48 bg-[#1a1a1a] relative flex items-center justify-center">
                  <img
                    src="/protectx-security-app-interface-green-shield.jpg"
                    alt="ProtectX project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">FastAPI</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">PostgreSQL</span>
                  </div>
                  <h3 className="text-[#ffffff] font-semibold mb-2">ProtectX</h3>
                  <p className="text-sm text-[#abb2bf] mb-4">Discord anti-crash bot</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                    >
                      Cached &gt;
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Kotik Bot */}
              <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
                <div className="h-48 bg-[#2d3748] relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">🐱</span>
                    </div>
                    <div className="text-white font-bold text-xl">BOT КОТИК</div>
                    <div className="text-gray-400 text-sm">Discord server bot & more</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">JavaScript (ES6+)</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">FastAPI</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">MongoDB</span>
                  </div>
                  <h3 className="text-[#ffffff] font-semibold mb-2">Kotik Bot</h3>
                  <p className="text-sm text-[#abb2bf] mb-4">Multi-functional discord bot</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff]"
                    >
                      Live &lt;~&gt;
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Portfolio */}
              <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
                <div className="h-48 bg-[#1a1a1a] relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-lg mb-2">Damir Portfolio</div>
                    <div className="text-gray-400 text-sm">You're using it rn</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">TypeScript</span>
                    <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Tailwind CSS</span>
                  </div>
                  <h3 className="text-[#ffffff] font-semibold mb-2">Portfolio</h3>
                  <p className="text-sm text-[#abb2bf] mb-4">You're using it rn</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                    >
                      Github &lt;~&gt;
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Small Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">
              <span className="text-[#c778dd]">#</span>small-projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Bot boilerplate */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">JavaScript (ES6+)</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">TypeScript</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">Bot boilerplate</h3>
                <p className="text-sm text-[#abb2bf] mb-4">
                  Start creating scalable discord.js bot with TypeScript and JavaScript
                </p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                >
                  Github &lt;~&gt;
                </Button>
              </Card>

              {/* My blog */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Tailwind CSS</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">TypeScript</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">My blog</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Front-end of my future blog website written on</p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                >
                  Github &lt;~&gt;
                </Button>
              </Card>

              {/* Chess pro */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Figma</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">Chess pro</h3>
                <p className="text-sm text-[#abb2bf] mb-4">
                  Figma landing page about service for viewing chess tournaments
                </p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                >
                  Figma &lt;~&gt;
                </Button>
              </Card>

              {/* Crash protect website */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Figma</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">Crash protect website</h3>
                <p className="text-sm text-[#abb2bf] mb-4">
                  Figma template for website about anti-raid, anti-crash discord bot
                </p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                >
                  Figma &lt;~&gt;
                </Button>
              </Card>

              {/* CSS expirements */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Tailwind CSS</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">CSS expirements</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Collection of my different little projects</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff]"
                  >
                    Live &lt;~&gt;
                  </Button>
                </div>
              </Card>

              {/* Web Dev nvim config */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">VS Code</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Git</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">Web Dev config</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Config for VS Code perfect for web developer</p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                >
                  Github &lt;~&gt;
                </Button>
              </Card>

              {/* Ooku */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">FastAPI</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">PostgreSQL</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">Ooku</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Simple link shortener with auth</p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff]"
                >
                  Live &lt;~&gt;
                </Button>
              </Card>

              {/* School website */}
              <Card className="bg-[#21252b] border-[#abb2bf] p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Figma</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">School website</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Figma template website for my school</p>
                <Button
                  size="sm"
                  className="bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]"
                >
                  Figma &lt;~&gt;
                </Button>
              </Card>
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
