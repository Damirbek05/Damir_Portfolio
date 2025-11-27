/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
  : process.env.NODE_ENV === 'production' ? '/Damir_Portfolio' : ''

const nextConfig = {
  output: 'export',
  basePath: basePath,
  // assetPrefix должен быть с слэшем в конце для правильных путей
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
