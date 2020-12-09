module.exports = {
  apps: [
    {
      name: "MOVIEDB_API",
      script: "src/infra/server.js",
      instances: 1,
      watch: false,
    },
  ],
};
