/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const { paraglide } = require('@inlang/paraglide-next/plugin');
const removeImports = require('next-remove-imports')();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
};

module.exports = withPlugins(
  [
    removeImports({}),
    paraglide({
      paraglide: {
        project: './project.inlang',
        outdir: './src/paraglide',
      },
    }),
  ],
  nextConfig
);
