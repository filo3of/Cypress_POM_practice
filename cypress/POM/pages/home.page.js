class HomePage {
  open_HomePage(device) {
    cy.viewport(device);
    cy.visit("/index.php");

    cy.url().should("eq", Cypress.config().baseUrl + "/index.php");

    cy.get("[title='My Store']").should("be.visible");

    return this;
  }
}

export default new HomePage();
