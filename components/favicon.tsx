"use client"

import { useEffect } from 'react'

export function Favicon() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
    const faviconPath = `${basePath}/icons8-фиолетовое-сердце-48.png`
    
    // Удаляем старые favicon
    const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
    existingLinks.forEach(link => link.remove())
    
    // Создаем новый favicon
    const link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    link.href = faviconPath
    document.head.appendChild(link)
    
    // Добавляем shortcut icon
    const shortcutLink = document.createElement('link')
    shortcutLink.rel = 'shortcut icon'
    shortcutLink.type = 'image/png'
    shortcutLink.href = faviconPath
    document.head.appendChild(shortcutLink)
  }, [])

  return null
}

