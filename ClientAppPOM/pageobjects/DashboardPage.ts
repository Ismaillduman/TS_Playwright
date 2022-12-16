import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  product: Locator;
  productText: Locator;
  addCart: string;
  cart: Locator;
 

  constructor(page: Page) {
    // i can write here public page:Page

    this.product = page.locator("div .card-body");
    this.productText = page.locator("div .card-body b");
    this.addCart = ".w-10";
    this.cart = page.locator("[routerlink='/dashboard/cart']");
   
  }

  async addProduct(productName: string) {
    const text = await this.productText.allTextContents();//in array list
    console.log(text);

    const count = await this.product.count();
    for (let i = 0; i < count; i++) {
      const text2 = await this.product.nth(i).locator("b").textContent();//one by one write
      console.log(text2);
      if (
        (await this.product.nth(i).locator("b").textContent()) === productName
      ) {
        await this.product.nth(i).locator(this.addCart).click();
        break;
      }
    }
  }

  async naviToCart(){
    await this.cart.click();
  }
}
