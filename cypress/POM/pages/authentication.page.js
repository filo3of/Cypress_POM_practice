class Authentication {
  enter_NewEmail(email) {
    cy.get("#email_create")
      .should("be.visible")
      .type(email)
      .should("have.value", email);

    return this;
  }

  click_CreateAccount_button() {
    cy.get("#SubmitCreate").should("be.visible").click();

    cy.url().should(
      "eq",
      Cypress.config().baseUrl +
        "/index.php?controller=authentication&back=my-account#account-creation"
    );

    cy.get("h1").contains("Create an account").should("be.visible");

    return this;
  }

  enter_Email(email) {
    cy.get("#email")
      .should("be.visible")
      .type(email)
      .should("have.value", email);

    return this;
  }

  enter_Password(pass) {
    cy.get("#passwd")
      .should("be.visible")
      .type(pass)
      .should("have.value", pass);
    return this;
  }

  click_SignIn_button() {
    cy.get("#SubmitLogin").should("be.visible").click();

    cy.url().should(
      "eq",
      "http://automationpractice.com/index.php?controller=my-account"
    );

    return this;
  }
}

export default new Authentication();
