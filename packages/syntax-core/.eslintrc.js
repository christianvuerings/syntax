const path = require("path");

module.exports = {
  root: true,
  extends: ["@cambly/eslint-config-syntax"],
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      parserOptions: {
        project: [path.join(__dirname, "tsconfig.json")],
      },
    },
    {
      files: ["*.stories.{ts,tsx}"],
      rules: {
        "@next/next/no-img-element": "off",
      },
    },
  ],
};
