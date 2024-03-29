const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@images": "src/assets/images",
    "@components": "src/components",
    "@pages": "src/pages",
  })(config);

  return config;
};
