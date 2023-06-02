const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "helsin828",
        mongodb_password: "Helsin828",
        mongodb_clustername: "testdb",
        mongodb_databasekey: "my-site-dev",
      },
    };
  }

  return {
    env: {
        mongodb_username: "helsin828",
        mongodb_password: "Helsin828",
        mongodb_clustername: "testdb",
        mongodb_databasekey: "my-site",
      },
  };
};
