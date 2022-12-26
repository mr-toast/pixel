/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', 'placeimg.com', 'fakeimg.pl', 'images.prismic.io'],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
  },

  svgrOptions: {
    icon: true,
    removeViewbox: false,
    svgProps: {
      height: '100%',
      width: '100%',
    },
  },
}

module.exports = withSvgr(nextConfig)
