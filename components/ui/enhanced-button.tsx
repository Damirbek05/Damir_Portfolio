"use client"

import type React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps {
  variant?: "live" | "demo" | "cached" | "github" | "figma"
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
}

export function EnhancedButton({ variant = "live", children, className, onClick, href, target = "_blank" }: EnhancedButtonProps) {
  const variants = {
    live: "bg-transparent border border-[#c778dd] text-[#c778dd] hover:bg-[#c778dd] hover:text-[#ffffff]",
    demo: "bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]",
    cached: "bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]",
    github: "bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]",
    figma: "bg-transparent border border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:text-[#282c33]",
  }

  if (href) {
    return (
      <Button
        className={cn("px-4 py-2 text-sm font-mono transition-all duration-200", variants[variant], className)}
        asChild
      >
        <Link href={href} target={target} rel="noopener noreferrer">
          {children}
        </Link>
      </Button>
    )
  }

  return (
    <Button
      className={cn("px-4 py-2 text-sm font-mono transition-all duration-200", variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
