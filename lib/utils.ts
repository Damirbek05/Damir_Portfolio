import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct path for static assets (images, etc.) with basePath support
 * This is needed for GitHub Pages deployment where basePath is required
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Get basePath from environment or use empty string
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Return path with basePath prefix
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
