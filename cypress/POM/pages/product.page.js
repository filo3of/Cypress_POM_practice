/// <reference types="cypress" />

class ProductPage {
  select_size(size) {
    cy.get("#group_1")
      .select(size)
      .then(() => {
        cy.get("#uniform-group_1").find("span").should("have.text", size);
      });

    return this;
  }

  click_On_PlusOne_quantity() {
    cy.get("span").find(".icon-plus").should("be.visible").click();

    cy.get("#quantity_wanted").should("have.value", 2);

    return this;
  }
}

export default new ProductPage();
