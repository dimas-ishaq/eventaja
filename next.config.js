/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['daisyui.com', 'res.cloudinary.com'],
  },
  env: {
    AUTH_SECRET: '180923gig8123t1gy3g18263g1g2312g38',
    NEXTAUTH_SECRET: 'asdasdasdasd28hsdf983fbskjdfbsjdfb'
  }
};

module.exports = nextConfig;
