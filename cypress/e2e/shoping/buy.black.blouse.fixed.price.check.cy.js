import HomePage from "../../POM/pages/home.page";
import HomePageMiddleSection from "../../POM/pages/home.page.middle.section";
import ProductPage from "../../POM/pages/product.page";
import AutomationUsers from "../../fixtures/automation_users.json";
import ProductDetails from "../../POM/pages/product.details.page";
import CheckoutModal from "../../POM/pages/checkout.modal.page";
import Products from "../../fixtures/products.json";

describe("Buy different products using different options", () => {
  it("Buy a Blouse using click on the product option, L size, with fixed price check", () => {
    HomePage.open_HomePage();

    HomePageMiddleSection.click_On_Product(
      Products.Blouse.name,
      AutomationUsers.QA_John.name
    );

    ProductPage.select_size(Products.Blouse.size_L).click_On_PlusOne_quantity(
      1
    );

    ProductDetails.check_Fixed_price(
      Products.Blouse.name
    ).click_Add_To_Cart_button();

    CheckoutModal.verify_Checkout_isOpened().check_price(
      AutomationUsers.QA_John.name
    );
  });
});
