import LoginPage from "./pages/LoginPage";

// Logs in through the UI once and caches the session between scenarios
Cypress.Commands.add("loginAs", (type) => {
  cy.fixture("users").then((users) => {
    const { username, password } = users[type];
    cy.session([username], () => {
      LoginPage.visit();
      LoginPage.login(username, password);
      cy.url().should("include", "/inventory.html");
    });
  });
  cy.visit("/inventory.html", { failOnStatusCode: false });
});
