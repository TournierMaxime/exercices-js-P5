const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.2.195:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
