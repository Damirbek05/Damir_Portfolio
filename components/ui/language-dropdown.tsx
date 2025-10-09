"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("EN")

  const languages = [
    { code: "EN", name: "English" },
    { code: "RU", name: "Russian" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[#abb2bf] hover:text-[#c778dd] transition-colors"
      >
        {selected}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#282c33] border border-[#abb2bf] min-w-[80px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang.code)
                setIsOpen(false)
              }}
              className="block w-full px-3 py-2 text-left text-[#abb2bf] hover:bg-[#21252b] hover:text-[#c778dd] transition-colors"
            >
              {lang.code}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
