# Sauce Demo – Cypress + Cucumber (BDD) Test Automation

End-to-end test automation for the [Sauce Demo](https://www.saucedemo.com) e-commerce store, built with **Cypress**, **JavaScript** and **Cucumber (Gherkin)** using the **Page Object Model**.

## What's covered

| Feature  | Scenarios |
|----------|-----------|
| Login    | Valid login, locked-out user, invalid credentials, empty fields, logout |
| Cart     | Add one / multiple products, remove from cart, sort by price and name |
| Checkout | Full purchase flow, price total check, form validation (3 cases) |

**15 test cases** in total, tagged `@smoke` and `@regression` so you can run a quick sanity check or the full suite.

## Tech stack

- Cypress 16
- Cucumber via `@badeball/cypress-cucumber-preprocessor`
- esbuild bundler
- GitHub Actions (CI on every push)

## Project structure

```
cypress/
├── e2e/features/          # Gherkin scenarios (.feature)
├── fixtures/users.json    # Test data
└── support/
    ├── pages/             # Page Objects (locators + actions)
    ├── step_definitions/  # Glue code for each feature
    └── commands.js        # Custom commands (cached login with cy.session)
```

## Run it

```bash
npm install
npm run cy:open          # interactive runner
npm test                 # headless, all tests
npm run test:smoke       # @smoke only
npm run test:regression  # @regression only
```

After a headless run, an HTML report is generated at `reports/cucumber-report.html`.

## Design choices

- **Page Object Model**: locators live in one place, so a UI change means one edit.
- **Stable selectors**: `data-test` attributes first, CSS classes only as fallback.
- **`cy.session` login**: logs in once and reuses the session, which keeps the suite fast.
- **Scenario Outlines**: data-driven negative tests with no duplicated steps.
- **Retries in CI**: one retry in headless mode to absorb network flakiness.

---
Author: Mohamed Dokhana – QA Automation Engineer
