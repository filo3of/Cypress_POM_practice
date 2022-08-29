import { faker } from "@faker-js/faker";

// Setup Faker to use English/United States
faker.locale = "en_US";

class Data {
  // Faker initialization
  faker = faker;

  device = "macbook-15";

  email = "something@something.qa";

  password = "P@ss01133";

  man = "1";

  woman = "2";

  firstName = faker.name.firstName();

  lastName = faker.name.lastName();
}

export default new Data();
