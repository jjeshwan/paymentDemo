# Automated Payment Process Tests

This repository contains automated test scripts to test the payment process on the Kevin demo page using Cypress automation framework.

## Prerequisites

- Node.js (>=12.0.0)
- npm (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/jjeshwan/paymentDemo.git
```

2. Navigate to the repository directory:
```bash
cd paymentDemo
```

3. Install the dependencies:
```bash
npm install cypress --save-dev
```

4. Running the Tests (3 different ways to run):
```bash
npx cypress open
```
```bash
npx cypress run
```
```bash
npx cypress run --config-file ./cypress.config.js
```

## Configuration
1. Configure the Cypress test settings and env variables in cypress.config.js
2. Create a new config file for eg cypress.prod.config.js for new env and variables if needed