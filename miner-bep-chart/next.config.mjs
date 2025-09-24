/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Nonaktifkan LightningCSS, supaya pakai PostCSS biasa
    optimizeCss: false,
  },
};

export default nextConfig;
