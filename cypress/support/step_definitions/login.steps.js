import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

Given("I am on the login page", () => {
  LoginPage.visit();
});

Given("I am logged in as a {string} user", (type) => {
  cy.loginAs(type);
});

When("I log in as a {string} user", (type) => {
  cy.fixture("users").then((users) => {
    LoginPage.login(users[type].username, users[type].password);
  });
});

When("I click the login button without entering credentials", () => {
  LoginPage.submitEmpty();
});

When("I log out", () => {
  InventoryPage.logout();
});

Then("I should see the products page", () => {
  cy.url().should("include", "/inventory.html");
  InventoryPage.elements.title().should("have.text", "Products");
});

Then("I should see the login error {string}", (message) => {
  LoginPage.elements.error().should("be.visible").and("have.text", message);
});

Then("I should be on the login page", () => {
  cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  LoginPage.elements.loginButton().should("be.visible");
});
