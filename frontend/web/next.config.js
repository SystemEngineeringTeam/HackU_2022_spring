/** @type {import('next').NextConfig} */

const rewrites = process.env.NODE_ENV === 'development' ? [
  {
    source: '/api/:path*',
    destination: 'http://localhost:8080/api/:path*',
  },
] : [];

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewrites;
  },
  async headers() {
    return [
      {
        "source": "/(.*)",
        "headers": [
          { "key": "Access-Control-Allow-Credentials", "value": "true" },
          { "key": "Access-Control-Allow-Origin", "value": "*" },
          { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
        ]
      }
    ]
  },
};
