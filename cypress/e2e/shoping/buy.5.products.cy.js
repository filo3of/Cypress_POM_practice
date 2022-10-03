import HomePage from "../../POM/pages/home.page";
import HomePageMiddleSection from "../../POM/pages/home.page.middle.section";
import ProductPageModalView from "../../POM/pages/product.page.modal.view";
import Products from "../../fixtures/products.json";

describe("Buy different products using different options", () => {
  it("Buy 5 Blouses using Quick View option, M size", () => {
    HomePage.open_HomePage();

    HomePageMiddleSection.hover_and_click_on_Product(
      Products.Blouse.name
    ).verify_modalView(Products.Blouse.name);

    ProductPageModalView.select_size(
      Products.Blouse.size_M
    ).click_On_PlusOne_quantity(5);
  });
});
