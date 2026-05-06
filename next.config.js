const path = require('path')

module.exports = {
  transpilePackages: ['framer-motion'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/css')],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '**' },
      { protocol: 'https', hostname: 'media.dev.to', pathname: '**' },
      { protocol: 'https', hostname: 'media2.dev.to', pathname: '**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '**' },
    ],
  },
}
