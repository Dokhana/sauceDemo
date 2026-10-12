class CheckoutPage {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    error: () => cy.get('[data-test="error"]'),
    itemPrices: () => cy.get(".inventory_item_price"),
    subtotal: () => cy.get(".summary_subtotal_label"),
    completeHeader: () => cy.get(".complete-header"),
  };

  fillDetails(first, last, zip) {
    if (first) this.elements.firstName().type(first);
    if (last) this.elements.lastName().type(last);
    if (zip) this.elements.postalCode().type(zip);
    this.elements.continueButton().click();
  }

  finish() {
    this.elements.finishButton().click();
  }
}

export default new CheckoutPage();
