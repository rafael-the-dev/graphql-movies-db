module.exports = {
  webpack: (config) => {
    config.node = {
      global: true,
      __filename: true,
      __dirname: true,
    }
    return config;
  }
};
