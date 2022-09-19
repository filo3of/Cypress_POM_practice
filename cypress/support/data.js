/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import moment from "moment";

// Setup Faker to use English/United States
faker.locale = "en_US";

// Setup Moment to use Canada time format
moment.locale("en");

class Data {
  // Faker initialization
  faker = faker;

  // Device in which view we are running our tests
  device = "macbook-15";

  // Options which we are using to select desired gender during registration
  man = "1";
  woman = "2";

  gender_man = "man";
  gender_woman = "woman";

  // Credentials of the user which will be used for all other tests
  userEmail = "qa.test@something.qa";
  userPassword = "P@ss01133";

  // Registration variables
  first_Female_Name = faker.name.firstName("female");

  last_Female_Name = faker.name.lastName("female");

  first_Male_Name = faker.name.firstName("male");

  last_Male_Name = faker.name.lastName("male");

  address = faker.address.streetAddress();

  postcode = "36094";

  city = faker.address.cityName();

  state = "Alabama";

  stateValue = "1";

  phoneNumber = faker.phone.number("+1 202 ### ####");

  // Use unix time stamp to generate unique email address
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  man_email = "qa.test_man+" + this.getUnixTimeStamp() + "@something.qa";
  woman_email = "qa.test_woman+" + this.getUnixTimeStamp() + "@something.qa";

  password = "P@ss01133";

  // Save the email address in the corresponding json file
  save_email(user) {
    switch (user) {
      case this.woman_email:
        cy.readFile("cypress/fixtures/users_woman.json").then((records) => {
          records.users.push({
            email: user,
          });
          cy.writeFile("cypress/fixtures/users_woman.json", records);
        });

        break;

      case this.man_email:
        cy.readFile("cypress/fixtures/users_man.json").then((records) => {
          records.users.push({
            email: user,
          });
          cy.writeFile("cypress/fixtures/users_man.json", records);
        });

        break;

      default:
        break;
    }
  }

  // Get latest email address that was registered for specific user group
  lastEmail(gender) {
    const records = require("../fixtures/users_" + gender + ".json");

    let candidate = records.users.length - 1;
    let lastEmail = records.users[candidate].email;

    return lastEmail;
  }
}

export default new Data();
