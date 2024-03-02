// next.config.js
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
  },
  // Additional configurations can be added here
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
