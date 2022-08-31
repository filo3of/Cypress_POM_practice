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

  device = "macbook-15";

  // Use unix time stamp to generate unique email address
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  email = "qa_+" + this.getUnixTimeStamp() + "@something.qa";

  password = "P@ss01133";

  man = "1";

  woman = "2";

  firstName = faker.name.firstName();

  lastName = faker.name.lastName();

  address = faker.address.streetAddress();

  postcode = "36094";

  city = faker.address.cityName();

  state = "Alabama";

  stateValue = "1";

  phoneNumber = faker.phone.number("+1 202 ### ####");

  userEmail = "qa.test@something.qa";

  userPassword = "Pas@101";

  save_email(user) {
    cy.readFile("cypress/fixtures/users.json").then((records) => {
      records.users.push({
        email: user,
      });

      cy.writeFile("cypress/fixtures/users.json", records);
    });
  }
}

export default new Data();
