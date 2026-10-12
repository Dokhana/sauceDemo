class InventoryPage {
  elements = {
    title: () => cy.get(".title"),
    items: () => cy.get(".inventory_item"),
    itemNames: () => cy.get(".inventory_item_name"),
    sortDropdown: () => cy.get(".product_sort_container"),
    cartBadge: () => cy.get(".shopping_cart_badge"),
    cartLink: () => cy.get(".shopping_cart_link"),
    menuButton: () => cy.get("#react-burger-menu-btn"),
    logoutLink: () => cy.get("#logout_sidebar_link"),
  };

  addToCart(productName) {
    cy.contains(".inventory_item", productName).find("button").contains("Add to cart").click();
  }

  sortBy(option) {
    this.elements.sortDropdown().select(option);
  }

  openCart() {
    this.elements.cartLink().click();
  }

  logout() {
    this.elements.menuButton().click();
    this.elements.logoutLink().should("be.visible").click();
  }
}

export default new InventoryPage();
