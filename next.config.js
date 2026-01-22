/** @type {import('next').NextConfig} */
// const nextConfig = {

  module.exports = {
    reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org'
      },
      {
        hostname: 'assets.nflxext.com'
      }
    ],  
  },
}
// }('https://image.tmdb.org/t/p/original/'),
 
// module.exports = nextConfig