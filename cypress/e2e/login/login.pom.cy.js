import Header from "../../POM/components/header.component";
import Authentication from "../../POM/pages/authentication.page";
import HomePage from "../../POM/pages/home.page";

describe("Should sign in as already registered user", () => {
  it("Sign in", () => {
    HomePage.open_HomePage("macbook-15");

    Header.click_SignIn_button();

    Authentication.enter_Email("something@something.qa")
      .enter_Password("P@ss01133")
      .click_SignIn_button();
  });
});
