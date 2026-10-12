import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";

When("I add {string} to the cart", (product) => {
  InventoryPage.addToCart(product);
});

When("I remove {string} from the cart page", (product) => {
  InventoryPage.openCart();
  CartPage.remove(product);
});

When("I sort products by {string}", (option) => {
  InventoryPage.sortBy(option);
});

Then("the cart badge should show {int}", (count) => {
  InventoryPage.elements.cartBadge().should("have.text", String(count));
});

Then("the cart should contain {string}", (product) => {
  InventoryPage.openCart();
  CartPage.elements.cartItems().should("have.length", 1).and("contain", product);
});

Then("the cart should be empty", () => {
  CartPage.elements.cartItems().should("not.exist");
  InventoryPage.elements.cartBadge().should("not.exist");
});

Then("the first product should be {string}", (product) => {
  InventoryPage.elements.itemNames().first().should("have.text", product);
});
