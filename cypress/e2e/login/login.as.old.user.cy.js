import Header from "../../POM/components/header.component";
import Authentication from "../../POM/pages/authentication.page";
import HomePage from "../../POM/pages/home.page";
import Data from "../../support/data";
import AutomationUsers from "../../fixtures/automation_users.json";

describe("Should log in as already registered user", () => {
  it("Log in as old user", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_Email(AutomationUsers.QA_John.email)
      .enter_Password(AutomationUsers.QA_John.password)
      .click_SignIn_button();
  });

  it("Log in as newly registered man user", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_Email(Data.lastEmail(Data.gender_man))
      .enter_Password(AutomationUsers.password)
      .click_SignIn_button();
  });

  it("Log in as newly registered woman user", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_Email(Data.lastEmail(Data.gender_woman))
      .enter_Password(AutomationUsers.password)
      .click_SignIn_button();
  });
});
