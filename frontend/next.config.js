/** @type {import('next').NextConfig} */

const rewrites = process.env.NODE_ENV === 'development' ? [
  {
    source: '/api/:path*',
    destination: 'http://localhost:8080/api/:path*',
  },
] : [
  {
    source: '/api/:path*',
    destination: 'https://ninzu.sysken.net/api/:path*',
  }
];

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewrites;
  },
};
