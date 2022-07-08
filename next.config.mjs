/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  experimental: {
    // esmExternals: true,
    runtime: "experimental-edge",
    // topLevelAwait: true,
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      // outputModule: true,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
