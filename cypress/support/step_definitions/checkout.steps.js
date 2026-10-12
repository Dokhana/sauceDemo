import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

Given("I go to checkout", () => {
  InventoryPage.openCart();
  CartPage.checkout();
});

When("I enter my details {string} {string} {string}", (first, last, zip) => {
  CheckoutPage.fillDetails(first, last, zip);
});

When("I finish the order", () => {
  CheckoutPage.finish();
});

Then("the item total should be the sum of the product prices", () => {
  CheckoutPage.elements.itemPrices().then(($prices) => {
    const sum = [...$prices].reduce((total, el) => total + parseFloat(el.innerText.replace("$", "")), 0);
    CheckoutPage.elements.subtotal().should("contain", `$${sum.toFixed(2)}`);
  });
});

Then("I should see the order confirmation", () => {
  cy.url().should("include", "/checkout-complete.html");
  CheckoutPage.elements.completeHeader().should("have.text", "Thank you for your order!");
});

Then("I should see the checkout error {string}", (message) => {
  CheckoutPage.elements.error().should("be.visible").and("have.text", message);
});
