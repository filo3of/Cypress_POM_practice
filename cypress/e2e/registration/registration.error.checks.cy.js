import Header from "../../POM/components/header.component";
import Authentication from "../../POM/pages/authentication.page";
import Registration from "../../POM/pages/registration.page";
import HomePage from "../../POM/pages/home.page";
import Data from "../../support/data";
import Error from "../../fixtures/error_messages.json";

describe("Should check error messages on the registration process for the female user", () => {
  it("Verify error when first name is missing", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_NewEmail(
      Data.woman_email
    ).click_CreateAccount_button();

    Registration.select_gender(Data.woman)
      .enter_LastName(Data.last_Female_Name)
      .verify_EnteredEmailAddress(Data.woman_email)
      .enter_Password(Data.password)
      .verify_Address_LastName(Data.last_Female_Name)
      .enter_Address(Data.address)
      .enter_City(Data.city)
      .selectState(Data.state)
      .enter_Postcode(Data.postcode)
      .select_Country("United States")
      .enter_MobilePhone(Data.phoneNumber)
      .click_OnSubmit_Button()
      .verify_Error(Error.first_name_is_required);
  });

  it("Verify error when last name is missing", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_NewEmail(
      Data.woman_email
    ).click_CreateAccount_button();

    Registration.select_gender(Data.woman)
      .enter_FirstName(Data.first_Female_Name)
      .verify_EnteredEmailAddress(Data.woman_email)
      .enter_Password(Data.password)
      .verify_Address_FirstName(Data.first_Female_Name)
      .enter_Address(Data.address)
      .enter_City(Data.city)
      .selectState(Data.state)
      .enter_Postcode(Data.postcode)
      .select_Country("United States")
      .enter_MobilePhone(Data.phoneNumber)
      .click_OnSubmit_Button()
      .verify_Error(Error.last_name_is_required);
  });

  it("Verify zip code error", () => {
    HomePage.open_HomePage(Data.device);

    Header.click_SignIn_button();

    Authentication.enter_NewEmail(
      Data.woman_email
    ).click_CreateAccount_button();

    Registration.select_gender(Data.woman)
      .enter_FirstName(Data.first_Female_Name)
      .enter_LastName(Data.last_Female_Name)
      .verify_EnteredEmailAddress(Data.woman_email)
      .enter_Password(Data.password)
      .verify_Address_FirstName(Data.first_Female_Name)
      .verify_Address_LastName(Data.last_Female_Name)
      .enter_Address(Data.address)
      .enter_City(Data.city)
      .selectState(Data.state)
      .select_Country("United States")
      .enter_MobilePhone(Data.phoneNumber)
      .click_OnSubmit_Button()
      .verify_Error(Error.postcode_error);
  });
});
