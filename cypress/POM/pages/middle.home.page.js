/// <reference types="cypress" />

class MiddleHomePage {
  click_On_Product(name) {
    cy.get(".product-name")
      .contains(name)
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("h1").contains(name).should("be.visible");

        cy.url().should(
          "eq",
          Cypress.config().baseUrl +
            "/index.php?id_product=2&controller=product"
        );
      });

    return this;
  }
}

export default new MiddleHomePage();
