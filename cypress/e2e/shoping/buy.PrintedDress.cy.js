import HomePage from "../../POM/pages/home.page";
import MiddleHomePage from "../../POM/pages/middle.home.page";
import Data from "../../support/data";
import ProductPage from "../../POM/pages/product.page";

describe("Buy a dress", () => {
  it("Buy two Printed Dresses, L size", () => {
    HomePage.open_HomePage(Data.device);

    MiddleHomePage.click_On_Product("Blouse");

    ProductPage.select_size("L").click_On_PlusOne_quantity();
  });
});
