import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail } from 'lucide-react'
import Link from "next/link"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { LanguageDropdown } from "@/components/ui/language-dropdown"
import { SocialIcons } from "@/components/ui/social-icons"
import { DotPattern, GeometricShapes } from "@/components/ui/decorative-elements"
import { getAssetPath } from "@/lib/utils"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#282c33] text-[#abb2bf] font-mono relative">
      {/* Background decorative elements */}
      <DotPattern className="top-20 left-10 opacity-20" />
      <GeometricShapes className="top-40 right-20 opacity-30" />
      <DotPattern className="bottom-40 right-10 opacity-20" />

      {/* Header */}
      <header className="border-b border-[#21252b] px-6 py-4 relative z-10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-[#c778dd]"></div>
            <span className="text-[#ffffff] font-bold">Damir</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#home" className="text-[#ffffff] hover:text-[#c778dd] transition-colors relative">
              <span className="text-[#c778dd]">#</span>home
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#c778dd]"></div>
            </a>
            <Link href="/projects" className="hover:text-[#c778dd] transition-colors">
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

      {/* Hero Section */}
      <section id="home" className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold mb-8 text-balance">
              Damir is a <span className="text-[#c778dd]">frontend developer</span>
            </h1>
            <p className="text-[#abb2bf] mb-8 leading-relaxed">
              Turning ideas into interactive experiences — one component at a time.
            </p>
            <Button className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff] px-6 py-2">
              Contact me !!
            </Button>
          </div>
          <div className="relative">
            <img
              src={getAssetPath("/ava24.jpg")}
              alt="Developer illustration"
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute top-4 right-4 flex gap-1">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#c778dd] opacity-50"></div>
              ))}
            </div>
            <div className="absolute bottom-8 left-8 bg-[#282c33] border border-[#abb2bf] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-[#c778dd]"></div>
              <span className="text-sm">
                Currently working on <span className="text-[#ffffff]">Maxinum</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#abb2bf] p-8 relative">
            <div className="absolute -top-3 left-4 bg-[#282c33] px-2">
              <span className="text-2xl text-[#abb2bf]">"</span>
            </div>
            <p className="text-center text-lg mb-4">Frontend is not just about pixels — it’s about experience.</p>
            <div className="absolute -bottom-3 right-4 bg-[#282c33] px-2">
              <span className="text-2xl text-[#abb2bf]">"</span>
            </div>
            <div className="text-right">
              <span className="text-[#abb2bf]">- Damir Ospanbek</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="px-6 py-20 relative">
        <GeometricShapes className="top-10 left-20 opacity-20" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold">
              <span className="text-[#c778dd]">#</span>projects
            </h2>
            <Link href="/projects" className="text-[#abb2bf] hover:text-[#c778dd] transition-colors">
              View all ~~&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ChertNodes */}
            <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 relative">
                <img
                  src={getAssetPath("/chertnodes-project-interface-dark-theme.jpg")}
                  alt="ChertNodes project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">React.js</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">TypeScript</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">Tailwind CSS</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">ChertNodes</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Minecraft servers hosting</p>
                <div className="flex gap-2">
                  <EnhancedButton variant="live">Live &lt;~&gt;</EnhancedButton>
                  <EnhancedButton variant="cached">Cached &gt;</EnhancedButton>
                </div>
              </div>
            </Card>

            {/* ProtectX */}
            <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
              <div className="h-48 bg-[#1a1a1a] relative flex items-center justify-center">
                <img
                  src={getAssetPath("/protectx-security-app-interface-green-shield.jpg")}
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
                  <EnhancedButton variant="live">Live &lt;~&gt;</EnhancedButton>
                </div>
              </div>
            </Card>

            {/* Kahoot Answers Viewer */}
            <Card className="bg-[#21252b] border-[#abb2bf] overflow-hidden">
              <div className="h-48 bg-[#6441a5] relative flex items-center justify-center">
                <img
                  src={getAssetPath("/kahoot-answers-viewer-purple-interface.jpg")}
                  alt="Kahoot Answers Viewer project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">JavaScript</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">FastAPI</span>
                  <span className="text-xs px-2 py-1 border border-[#abb2bf] text-[#abb2bf]">MongoDB</span>
                </div>
                <h3 className="text-[#ffffff] font-semibold mb-2">Kahoot Answers Viewer</h3>
                <p className="text-sm text-[#abb2bf] mb-4">Get answers to your kahoot quiz</p>
                <div className="flex gap-2">
                  <EnhancedButton variant="live">Live &lt;~&gt;</EnhancedButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">
            <span className="text-[#c778dd]">#</span>skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 border border-[#abb2bf] px-3 py-2">Frontend</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">React.js TypeScript</div>
                <div className="text-[#abb2bf]">JavaScript (ES6+)</div>
                <div className="text-[#abb2bf]">Tailwind CSS</div>
              </div>
            </div>
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 border border-[#abb2bf] px-3 py-2">Backend</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">NestJs</div>
                <div className="text-[#abb2bf]">RESTful APIs</div>
                <div className="text-[#abb2bf]">Swagger UI</div>
              </div>
            </div>
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 border border-[#abb2bf] px-3 py-2">Databases</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">PostgreSQL MySQL</div>
                <div className="text-[#abb2bf]">MongoDB</div>
              </div>
            </div>
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 border border-[#abb2bf] px-3 py-2">Tools</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">Git VS Code</div>
                <div className="text-[#abb2bf]">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">
            <span className="text-[#c778dd]">#</span>about-me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#abb2bf] mb-6 leading-relaxed">Hello, I'm Damir!</p>
              <p className="text-[#abb2bf] mb-6 leading-relaxed">
                I'm a front-end developer passionate about creating modern, responsive, and user-friendly web
                applications. I enjoy turning ideas into clean and functional interfaces, focusing on usability,
                performance, and simplicity.
              </p>
              <p className="text-[#abb2bf] mb-6 leading-relaxed">
                I love working with React, TypeScript, and Tailwind CSS to bring projects to life. Constantly learning
                and exploring new tools, I aim to write scalable code and deliver smooth user experiences.
              </p>
              <p className="text-[#abb2bf] mb-8 leading-relaxed">
                For me, front-end development is not just about coding — it's about crafting digital products that
                people enjoy using.
              </p>
              <Button className="bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff] px-6 py-2">
                Read more -&gt;
              </Button>
            </div>
            <div className="relative">
              <div className="relative group">
                {/* Decorative border frame */}
                <div className="absolute -inset-4 border-2 border-[#c778dd] opacity-50"></div>
                <div className="absolute -inset-2 border border-[#abb2bf] opacity-30"></div>
                
                {/* Image container with gradient overlay */}
                <div className="relative overflow-hidden border-2 border-[#21252b]">
                  <img
                    src={getAssetPath("/blue-code.jpg")}
                    alt="Developer code workspace"
                    className="w-full max-w-md mx-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c778dd]/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#c778dd]"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#c778dd]"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#c778dd]"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#c778dd]"></div>

                {/* Dot pattern decoration */}
                <div className="absolute -top-6 -right-6 grid grid-cols-5 gap-1 opacity-40">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#c778dd]"></div>
                  ))}
                </div>
                <div className="absolute -bottom-6 -left-6 grid grid-cols-5 gap-1 opacity-40">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#c778dd]"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">
            <span className="text-[#c778dd]">#</span>contacts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#abb2bf] mb-8 leading-relaxed">
                I'm interested in freelance opportunities. However, if you have other request or question, don't
                hesitate to contact me
              </p>
            </div>
            <div>
              <div className="border border-[#abb2bf] p-6">
                <h3 className="text-[#ffffff] font-semibold mb-4">Message me here</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-[#abb2bf]">@domrix0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-[#abb2bf]">ospanbekdamir1@gmail.com</span>
                  </div>
                </div>
              </div>
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
            <SocialIcons />
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-[#21252b]">
          <p className="text-[#abb2bf] text-sm">© Copyright 2025. Made by Damir</p>
        </div>
      </footer>
    </div>
  )
}
