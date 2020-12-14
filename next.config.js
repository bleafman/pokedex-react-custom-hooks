const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins([], nextConfig);
