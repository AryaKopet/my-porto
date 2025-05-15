// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  className: 'dark',
  experimental: {
    // Disable the dev overlay button (circle "N" at bottom-left)
    serverActions: false, // optional if not used
    appDir: true,
    overlay: false
  }
}

module.exports = nextConfig
