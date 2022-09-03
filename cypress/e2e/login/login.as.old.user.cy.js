import Header from "../../POM/components/header.component";
import Authentication from "../../POM/pages/authentication.page";
import HomePage from "../../POM/pages/home.page";
import Data from "../../support/data";

describe("Should sign in as already registered user", () => {
  it("Sign in", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_Email(Data.userEmail)
      .enter_Password(Data.userPassword)
      .click_SignIn_button();
  });
});
