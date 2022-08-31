import Header from "../../POM/components/header.component";
import Authentication from "../../POM/pages/authentication.page";
import Registration from "../../POM/pages/registration.page";
import HomePage from "../../POM/pages/home.page";
import Data from "../../support/data";

describe("Registration", () => {
  it("Register new user", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_NewEmail(Data.email).click_CreateAccount_button();

    Registration.select_gender(Data.woman)
      .enter_FirstName(Data.firstName)
      .enter_LastName(Data.lastName)
      .verify_EnteredEmailAddress(Data.email)
      .enter_Password(Data.password)
      .verify_Address_FirstName(Data.firstName)
      .verify_Address_LastName(Data.lastName)
      .enter_Address(Data.address)
      .enter_City(Data.city)
      .selectState(Data.state)
      .enter_Postcode(Data.postcode)
      .select_Country("United States")
      .enter_MobilePhone(Data.phoneNumber)
      .click_OnSubmit_Button();

    Data.save_email(Data.email);
  });
});
