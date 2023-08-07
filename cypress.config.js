const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    kevin_demo_url: "https://demo.kevin.eu/",
    swedbank_url: "https://login.swedbank.lt/",
    payment_amount: "0.01",
    email_address: "youremail@example.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
