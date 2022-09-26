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
}

export default new ProductDetails();
