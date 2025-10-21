import type { NextConfig } from 'next'

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repoBase,
  assetPrefix: repoBase.endsWith('/') ? repoBase : `${repoBase}/`,
  images: { unoptimized: true },
}

export default nextConfig
