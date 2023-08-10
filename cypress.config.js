const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      baseURL:"https://naveenautomationlabs.com/opencart/"
    },
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/reports",
      experimentalStudio: true
    }
  },
});

