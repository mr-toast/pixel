/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr')

const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', 'placeimg.com', 'fakeimg.pl', 'images.prismic.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },

  svgrOptions: {
    icon: true,
    removeViewbox: false,
    svgProps: {
      height: 'auto',
    },
  },
}

module.exports = withSvgr(nextConfig)
