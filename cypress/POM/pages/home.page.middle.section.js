/// <reference types="cypress" />
///<reference types="cypress-iframe" />

class HomePageMiddleSection {
  click_On_Product(name) {
    cy.get(".product-name")
      .contains(name)
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("h1").contains(name).should("be.visible");

        // We need to use "contain" for the url verification because different products have different part of the url,
        // but the main section of the product url is unique and enough for the verification

        cy.url().should(
          "contain",
          Cypress.config().baseUrl + "/index.php?id_product="
        );
      });

    return this;
  }

  hover_and_click_on_Product(name) {
    cy.get(".product-name")
      .contains(name)
      .should("be.visible")
      .realHover()
      .then(() => {
        cy.xpath(
          "(//img[@title='" +
            name +
            "'])[1]//parent::a//following-sibling::a//span[contains(text(),'Quick view')]"
        )
          .should("be.visible")
          .click();
      });

    return this;
  }

  verify_modalView(name) {
    cy.frameLoaded(".fancybox-iframe");

    cy.iframe(".fancybox-iframe")
      .find("h1")
      .contains(name)
      .should("be.visible");

    // In case we have a problem with the iframe check the solution below:

    // cy.enter("iframe[name='fancybox-frame1663786936330']").then((getBody) => {
    //   getBody().find("#product").should("be.visible");
    // });

    return this;
  }
}

export default new HomePageMiddleSection();
