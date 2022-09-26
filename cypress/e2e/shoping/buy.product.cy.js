import HomePage from "../../POM/pages/home.page";
import HomePageMiddleSection from "../../POM/pages/home.page.middle.section";
import Data from "../../support/data";
import ProductPage from "../../POM/pages/product.page";
import ProductPageModalView from "../../POM/pages/product.page.modal.view";
import AutomationUsers from "../../fixtures/automation_users.json";
import ProductDetails from "../../POM/pages/product.details.page";

describe("Buy different products using different options", () => {
  it.only("Buy a Faded Short Sleeve T-shirts using click on the product option, L size", () => {
    HomePage.open_HomePage(Data.device);

    HomePageMiddleSection.click_On_Product(
      "Faded Short Sleeve T-shirts",
      AutomationUsers.QA_John.name
    );

    ProductPage.select_size("L").click_On_PlusOne_quantity(1);

    ProductDetails.check_price(AutomationUsers.QA_John.name);
  });

  it("Buy 5 Blouses using Quick View option, M size", () => {
    HomePage.open_HomePage(Data.device);

    HomePageMiddleSection.hover_and_click_on_Product("Blouse").verify_modalView(
      "Blouse"
    );

    ProductPageModalView.select_size("M").click_On_PlusOne_quantity(5);
  });
});
