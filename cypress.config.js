const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2en: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://buger-eats-qa.vercel.app",
    projectId: "oexhmt",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
