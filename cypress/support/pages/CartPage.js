class CartPage {
  elements = {
    cartItems: () => cy.get(".cart_item"),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
  };

  remove(productName) {
    cy.contains(".cart_item", productName).find("button").contains("Remove").click();
  }

  checkout() {
    this.elements.checkoutButton().click();
  }
}

export default new CartPage();
