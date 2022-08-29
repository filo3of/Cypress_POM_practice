class Header {
  click_SignIn_button() {
    cy.get(".login").contains("Sign in").should("be.visible").click();

    // URL RegEx match

    // General URL match:
    //
    //    /https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/
    //
    // For URL's like:
    //    http://google.com
    //    http://google.com/help.php
    //    http://google.com/help.php?a=5
    //    http://www.google.com
    //    http://www.google.com/help.php
    //    http://www.google.com?a=5
    //    google.com?a=5
    //    google.com/help.php
    //    google.com/help.php?a=5

    //    http://www.m.google.com/help.php?a=5 (and all its permutations)
    //    www.m.google.com/help.php?a=5 (and all its permutations)
    //    m.google.com/help.php?a=5 (and all its permutations)
    //
    // The important thing for any URLs that don't start with http or www is that they must include a / or ?

    // Find anything that starts with http:
    //    https?:\/\/w{0,3}\w*?\.\w{2,3}\S*

    // Find anything that starts with www:
    //    www\.\w*?\.\w{2,3}\S*

    // Or find anything that must have a text then a dot then at least 2 letters and then a ? or /:
    //    \w*?\.\w{2,3}[\/\?]\S*

    // SOURCE: https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url
    //---------------------------------------------------------------------------------------------------------------------------------------//

    // OPTION 1:

    // cy.url().should("contain", "http://automationpractice.com");

    // OPTION 2:

    // cy.url().should(
    //   "match",
    //   /https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/
    // );

    // OPTION 3:

    cy.url().should(
      "eq",
      Cypress.config().baseUrl +
        "/index.php?controller=authentication&back=my-account"
    );

    cy.get("h1").contains("Authentication").should("be.visible");

    return this;
  }
}

export default new Header();
