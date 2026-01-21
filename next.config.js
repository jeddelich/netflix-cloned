/** @type {import('next').NextConfig} */
// const nextConfig = {

  module.exports = {
    reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
      },
    ],  
  },
}
// }('https://image.tmdb.org/t/p/original/'),
 
// module.exports = nextConfig