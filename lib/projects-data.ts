export type ProjectCategory = 'complete-apps' | 'small-projects'

export type ProjectLinkType = 'live' | 'github' | 'cached' | 'figma'

export interface ProjectLink {
  type: ProjectLinkType
  url: string
  label?: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  image?: string
  imageAlt?: string
  links: ProjectLink[]
  // Для проектов без изображения - можно использовать цвет фона
  backgroundColor?: string
  // Тип кастомного контента - используйте 'kotik-bot' или 'portfolio' для предустановленных вариантов
  customContentType?: 'kotik-bot' | 'portfolio'
}

// Реальные проекты
export const projects: Project[] = [
  // ========== COMPLETE APPS ==========
  {
    id: 'arqa-analytics',
    title: 'ARQA Analytics',
    description: 'A professional business analytics application with interactive metrics, order management, and customer analytics',
    category: 'complete-apps',
    technologies: ['JavaScript', 'React', 'Next.js'],
    image: '/arqa.jpg',
    imageAlt: 'ARQA Analytics dashboard',
    links: [
      {
        type: 'live',
        url: 'https://damirbek05.github.io/arqa-analytics-canvas-main/',
        label: 'Live'
      }
    ]
  },
  {
    id: 'acme-shopify',
    title: 'ACME Shopify',
    description: 'A clean and modern ecommerce storefront template built with Shopify\'s frontend stack',
    category: 'complete-apps',
    technologies: ['JavaScript', 'React', 'Next.js'],
    image: '/shopify.jpg',
    imageAlt: 'ACME Shopify storefront',
    links: [
      {
        type: 'live',
        url: 'https://damirbek05.github.io/shopify/',
        label: 'Live'
      }
    ]
  },
  {
    id: 'pointer-ai',
    title: 'PointerAI — Modern AI',
    description: 'PointerAI is a modern and stylish landing page designed to showcase an AI product',
    category: 'complete-apps',
    technologies: ['JavaScript', 'React', 'Next.js'],
    image: '/pointerAi.jpg',
    imageAlt: 'PointerAI landing page',
    links: [
      {
        type: 'live',
        url: 'https://damirbek05.github.io/pointerAi/',
        label: 'Live'
      }
    ]
  },
  {
    id: 'burger-landing',
    title: 'Burger Landing',
    description: 'A clean and engaging landing page designed for a fast-food or burger restaurant. Features modern layout, responsive design, and visually appealing UI',
    category: 'complete-apps',
    technologies: ['JavaScript', 'React', 'Next.js'],
    image: '/burger.jpg',
    imageAlt: 'Burger Landing page',
    links: [
      {
        type: 'live',
        url: 'https://damirbek05.github.io/Burger-Landing/',
        label: 'Live'
      }
    ]
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Timer App',
    description: 'A simple and intuitive Pomodoro Timer app designed to boost productivity. Offers customizable work/break intervals, clean UI, and responsive layout',
    category: 'complete-apps',
    technologies: ['JavaScript', 'React', 'Next.js'],
    image: '/pomodoro.jpg',
    imageAlt: 'Pomodoro Timer application',
    links: [
      {
        type: 'live',
        url: 'https://damirbek05.github.io/pomodoro/',
        label: 'Live'
      }
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'You\'re using it rn',
    category: 'complete-apps',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    backgroundColor: '#1a1a1a',
    customContentType: 'portfolio',
    links: [
      {
        type: 'github',
        url: 'https://github.com/Damirbek05/portfolio',
        label: 'Github'
      }
    ]
  },

  // ========== SMALL PROJECTS ==========
  // Добавьте сюда небольшие проекты, если они есть
]

// Функция для получения проектов по категории
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter(project => project.category === category)
}

// Функция для получения проекта по ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

