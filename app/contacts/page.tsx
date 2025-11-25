import Link from "next/link"
import { SocialIcons } from "@/components/ui/social-icons"
import { DotPattern } from "@/components/ui/decorative-elements"

export default function Contacts() {
  return (
    <div className="min-h-screen bg-[#282c33] text-[#abb2bf] font-mono relative">
      {/* Background decorative elements */}
      <DotPattern className="top-32 left-10 opacity-20" />
      <DotPattern className="bottom-20 right-20 opacity-20" />

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
            <Link href="/about-me" className="hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>about-me
            </Link>
            <Link href="/contacts" className="text-[#ffffff] hover:text-[#c778dd] transition-colors">
              <span className="text-[#c778dd]">#</span>contacts
            </Link>
          </div>
        </nav>
      </header>

      {/* Contacts Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-2xl font-semibold mb-4">
              <span className="text-[#c778dd]">/</span>contacts
            </h1>
            <p className="text-[#abb2bf]">Who am i?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#abb2bf] leading-relaxed">
                I'm interested in freelance opportunities. However, if you have other request or question, don't
                hesitate to contact me
              </p>
            </div>
            <div className="space-y-6">
              <div className="border border-[#abb2bf] p-6">
                <h3 className="text-[#ffffff] font-semibold mb-4">Message me here</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 text-[#abb2bf]">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </div>
                    <span className="text-[#abb2bf]">@domrix0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 text-[#abb2bf]">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z" />
                      </svg>
                    </div>
                    <span className="text-[#abb2bf]">ospanbekdamir1@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Media Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">
            <span className="text-[#c778dd]">#</span>all-media
          </h2>

          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 text-[#abb2bf] hover:text-[#1da1f2] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <span className="text-[#abb2bf]">@damir</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 text-[#abb2bf] hover:text-[#1da1f2] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <span className="text-[#abb2bf]">@damir</span>
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
            <SocialIcons variant="contact" />
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-[#21252b]">
          <p className="text-[#abb2bf] text-sm">© Copyright 2022. Made by Damir</p>
        </div>
      </footer>
    </div>
  )
}
