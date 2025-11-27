"use client"

import { useEffect } from 'react'

export function Favicon() {
  useEffect(() => {
    // Wait for hydration to complete
    if (typeof window === 'undefined' || !document.head) return
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      try {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
        const faviconPath = `${basePath}/icons8-фиолетовое-сердце-48.png`
        
        // Удаляем старые favicon с проверкой на существование
        const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
        existingLinks.forEach(link => {
          try {
            // Проверяем, что элемент все еще в DOM перед удалением
            if (link && link.parentNode) {
              link.parentNode.removeChild(link)
            }
          } catch (e) {
            // Игнорируем ошибки при удалении
          }
        })
        
        // Проверяем, что head существует
        if (!document.head) return
        
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
      } catch (e) {
        // Игнорируем ошибки
      }
    })
  }, [])

  return null
}


