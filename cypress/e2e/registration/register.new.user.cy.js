// import Header from "../../POM/components/header.component";
// import Authentication from "../../POM/pages/authentication.page";
// import Registration from "../../POM/pages/registration.page";
// import HomePage from "../../POM/pages/home.page";
// import Data from "../../support/data";

// describe("Registration", { tags: "@smoke" }, () => {
//   it("Register new female user", () => {
//     HomePage.open_HomePage();

//     Header.click_SignIn_button();

//     Authentication.enter_NewEmail(
//       Data.woman_email
//     ).click_CreateAccount_button();

//     Registration.select_gender(Data.woman)
//       .enter_FirstName(Data.first_Female_Name)
//       .enter_LastName(Data.last_Female_Name)
//       .verify_EnteredEmailAddress(Data.woman_email)
//       .enter_Password(Data.password)
//       .verify_Address_FirstName(Data.first_Female_Name)
//       .verify_Address_LastName(Data.last_Female_Name)
//       .enter_Address(Data.address)
//       .enter_City(Data.city)
//       .selectState(Data.state)
//       .enter_Postcode(Data.postcode)
//       .select_Country("United States")
//       .enter_MobilePhone(Data.phoneNumber)
//       .click_OnSubmit_Button()
//       .verify_user_is_registered();

//     Data.save_email(Data.woman_email);
//   });

//   it("Register new male user", () => {
//     HomePage.open_HomePage();

//     Header.click_SignIn_button();

//     Authentication.enter_NewEmail(Data.man_email).click_CreateAccount_button();

//     Registration.select_gender(Data.man)
//       .enter_FirstName(Data.first_Male_Name)
//       .enter_LastName(Data.last_Male_Name)
//       .verify_EnteredEmailAddress(Data.man_email)
//       .enter_Password(Data.password)
//       .verify_Address_FirstName(Data.first_Male_Name)
//       .verify_Address_LastName(Data.last_Male_Name)
//       .enter_Address(Data.address)
//       .enter_City(Data.city)
//       .selectState(Data.state)
//       .enter_Postcode(Data.postcode)
//       .select_Country("United States")
//       .enter_MobilePhone(Data.phoneNumber)
//       .click_OnSubmit_Button()
//       .verify_user_is_registered();

//     Data.save_email(Data.man_email);
//   });
// });
