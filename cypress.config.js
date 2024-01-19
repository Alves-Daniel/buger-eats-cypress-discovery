const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "oexhmt",

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
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://buger-eats-qa.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

