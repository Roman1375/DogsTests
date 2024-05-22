const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5htvd2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
