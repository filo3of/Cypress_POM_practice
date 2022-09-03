class Registration {
  select_gender(gender) {
    cy.get("#id_gender" + gender + "")
      .parent("span")
      .should("be.visible")
      .click()
      .should("have.class", "checked");

    return this;
  }

  enter_FirstName(firstName) {
    cy.get("#customer_firstname")
      .should("be.visible")
      .type(firstName)
      .should("have.value", firstName);

    return this;
  }

  enter_LastName(lastName) {
    cy.get("#customer_lastname")
      .should("be.visible")
      .type(lastName)
      .should("have.value", lastName);

    return this;
  }

  verify_EnteredEmailAddress(email) {
    cy.get("#email").should("be.visible").and("have.value", email);

    return this;
  }

  enter_Password(password) {
    cy.get("#passwd")
      .should("be.visible")
      .type(password)
      .should("have.value", password);

    return this;
  }

  enter_Address_FirstName(newFirstName) {
    cy.get("#firstname")
      .should("be.visible")
      .clear()
      .type(newFirstName)
      .should("have.value", newFirstName);

    return this;
  }

  verify_Address_FirstName(newFirstName) {
    cy.get("#firstname").should("be.visible").and("have.value", newFirstName);

    return this;
  }

  verify_Address_LastName(lastName) {
    cy.get("#lastname").should("be.visible").and("have.value", lastName);

    return this;
  }

  enter_Address(address) {
    cy.get("#address1")
      .should("be.visible")
      .type(address)
      .should("have.value", address);
    return this;
  }

  enter_City(city) {
    cy.get("#city").should("be.visible").type(city).should("have.value", city);
    return this;
  }

  selectState(state) {
    cy.get("#id_state")
      .select(state)
      .then(() => {
        cy.get("#uniform-id_state").find("span").should("have.text", state);
      });
    return this;
  }

  enter_Postcode(postcode) {
    cy.get("#postcode")
      .should("be.visible")
      .type(postcode)
      .should("have.value", postcode);
    return this;
  }

  select_Country(country) {
    cy.get("#id_country").select(country).should("have.value", "21");
    return this;
  }

  enter_MobilePhone(phoneNumber) {
    cy.get("#phone_mobile")
      .should("be.visible")
      .type(phoneNumber)
      .should("have.value", phoneNumber);

    return this;
  }

  entre_NewAddress(newAddress) {
    cy.get("#alias")
      .should("be.visible")
      .clear()
      .type(newAddress)
      .should("have.value", newAddress);

    return this;
  }

  click_OnSubmit_Button() {
    cy.get("#submitAccount").should("be.visible").click();

    return this;
  }

  verify_user_is_registered() {
    cy.get("h1", { timeout: 20000 })
      .contains("My account")
      .should("be.visible");

    cy.url().should(
      "eq",
      Cypress.config().baseUrl + "/index.php?controller=my-account"
    );

    return this;
  }

  verify_Error(error) {
    cy.get("ol")
      .find("li")
      .should("be.visible")
      .then(() => {
        cy.get("li").contains(error);
      });

    return this;
  }
}

export default new Registration();
