import Data from "../../support/data";

class HomePage {
  open_HomePage() {
    cy.viewport(Data.device);

    cy.visit("/index.php");

    cy.url().should("eq", Cypress.config().baseUrl + "/index.php");

    cy.get("[title='My Store']", { timeout: 20000 }).should("be.visible");

    return this;
  }
}

export default new HomePage();
