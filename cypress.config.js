const { defineConfig } = require("cypress");

module.exports = defineConfig({
  waitForAnimations: true,
  video: false,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: "http://automationpractice.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
