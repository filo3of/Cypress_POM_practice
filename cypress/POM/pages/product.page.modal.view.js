/// <reference types="cypress" />

class ProductPageModalView {
  select_size(size) {
    cy.frameLoaded(".fancybox-iframe");

    cy.iframe(".fancybox-iframe")
      .find("#group_1")
      .select(size)
      .then(() => {
        cy.frameLoaded(".fancybox-iframe");

        cy.iframe(".fancybox-iframe")
          .find("#uniform-group_1")
          .children("span")
          .should("have.text", size);
      });

    return this;
  }

  click_On_PlusOne_quantity(steps) {
    for (let n = 1; n < steps; n++) {
      cy.frameLoaded(".fancybox-iframe");

      cy.iframe(".fancybox-iframe")
        .find("span")
        .children(".icon-plus")
        .should("be.visible")
        .click();
    }

    cy.frameLoaded(".fancybox-iframe");

    cy.iframe(".fancybox-iframe")
      .find("#quantity_wanted")
      .should("have.value", steps);

    return this;
  }
}

export default new ProductPageModalView();
