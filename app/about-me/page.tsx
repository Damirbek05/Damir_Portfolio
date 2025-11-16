import Link from "next/link"
import { LanguageDropdown } from "@/components/ui/language-dropdown"

export default function AboutMe() {
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
            <Link href="/projects" className="hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>works
            </Link>
            <Link href="/about-me" className="text-[#ffffff] hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>about-me
            </Link>
            <Link href="/contacts" className="hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>contacts
            </Link>
            <LanguageDropdown />
          </div>
        </nav>
      </header>

      {/* About Me Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-2xl font-semibold mb-4">
              <span className="text-[#c778dd]">/</span>about-me
            </h1>
            <p className="text-[#abb2bf]">Who am i?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            </div>
            <div className="relative group">
              {/* Main image container with multiple borders */}
              <div className="relative p-1 bg-gradient-to-br from-[#c778dd]/30 to-transparent rounded-lg">
                <div className="relative p-1 bg-[#282c33] rounded-lg">
                  <div className="relative p-1 bg-gradient-to-tl from-[#c778dd]/20 to-transparent rounded-lg">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src="/blue-code.jpg"
                        alt="Developer working"
                        className="w-full max-w-md mx-auto transform transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#282c33]/50 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accent - top left */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#c778dd]"></div>
              
              {/* Corner accent - bottom right */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#c778dd]"></div>

              {/* Decorative dots - top right */}
              <div className="absolute -top-4 -right-4 grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#c778dd] opacity-50"></div>
                ))}
              </div>

              {/* Decorative dots - bottom left */}
              <div className="absolute -bottom-4 -left-4 grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#c778dd] opacity-30"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">
            <span className="text-[#c778dd]">#</span>skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-0 border border-[#abb2bf] px-3 py-2">Frontend</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">React.js TypeScript</div>
                <div className="text-[#abb2bf]">JavaScript (ES6+)</div>
                <div className="text-[#abb2bf]">Tailwind CSS</div>
              </div>
            </div>

            <div>
              <h3 className="text-[#ffffff] font-semibold mb-0 border border-[#abb2bf] px-3 py-2">Backend</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">FastAPI</div>
                <div className="text-[#abb2bf]">RESTful APIs</div>
                <div className="text-[#abb2bf]">Swagger UI</div>
              </div>
            </div>

            <div>
              <h3 className="text-[#ffffff] font-semibold mb-0 border border-[#abb2bf] px-3 py-2">Databases</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">PostgreSQL MySQL</div>
                <div className="text-[#abb2bf]">MongoDB</div>
              </div>
            </div>

            <div>
              <h3 className="text-[#ffffff] font-semibold mb-0 border border-[#abb2bf] px-3 py-2">Tools</h3>
              <div className="border border-[#abb2bf] border-t-0 p-4 space-y-2">
                <div className="text-[#abb2bf]">Git VS Code</div>
                <div className="text-[#abb2bf]">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">
            <span className="text-[#c778dd]">#</span>my-fun-facts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="space-y-4">
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">I like winter more than summer</span>
              </div>
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">I like pizza and pasta</span>
              </div>
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">My favorite movie is The Green Mile</span>
              </div>
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">I don't have any siblings</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">I often bike with my friends</span>
              </div>
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">I was in Egypt, Poland and Turkey</span>
              </div>
              <div className="border border-[#abb2bf] px-4 py-2 inline-block">
                <span className="text-[#abb2bf]">I am still in school</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute right-8 top-1/2 grid grid-cols-3 gap-1 opacity-30">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-2 h-2 border border-[#c778dd]"></div>
            ))}
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
              <div className="w-5 h-5 text-[#abb2bf] hover:text-[#c778dd] cursor-pointer transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              {/* Replacing Discord icon with Telegram icon */}
              <div className="w-5 h-5 text-[#abb2bf] hover:text-[#c778dd] cursor-pointer transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
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
