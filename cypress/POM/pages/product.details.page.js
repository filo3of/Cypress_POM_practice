class ProductDetails {
  check_price(userName) {
    cy.get("#our_price_display")
      .invoke("text")
      .then((price) => {
        const price1 = price.trim().split("$");
        const price2 = price1[1];
        const finalPrice = price2;

        cy.readFile("cypress/fixtures/automation_users.json").then(
          (records) => {
            const originalPrice = records[userName].productPrice;

            expect(finalPrice).to.equal(originalPrice);
          }
        );
      });
    return this;
  }

  check_Fixed_price(productName) {
    cy.get("#our_price_display")
      .invoke("text")
      .then((price) => {
        const price1 = price.trim().split("$");
        const price2 = price1[1];
        const finalPrice = price2;

        cy.readFile("cypress/fixtures/products.json").then((records) => {
          // In order to read a product name from our JSON file we need to add some additional steps:

          const productName_1 = productName.replace(/ /g, "_");

          const productName_2 = productName_1.replace(/-/g, "_");

          const originalPrice = records[productName_2].price;

          expect(finalPrice).to.equal(originalPrice);
        });
      });
    return this;
  }

  click_Add_To_Cart_button() {
    cy.get("#add_to_cart")
      .find("span")
      .contains("Add to cart")
      .should("be.visible")
      .click();

    return this;
  }
}

export default new ProductDetails();
