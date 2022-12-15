import { expect, Locator, Page } from "@playwright/test";
import { stringify } from "querystring";
import { text } from "stream/consumers";

export class PlaceOrderPage {
  userEmail: Locator;
  selectCountry: Locator;
  placeOrderBtn: Locator;
  dropDown: Locator;
  confirmationText: Locator;
  orderId: any;
  ordersBtn:Locator;
  constructor(page: Page) {
    this.userEmail = page.locator(".mt-5 [type='text']").first();
    this.selectCountry = page.locator("[placeholder='Select Country']");
    this.placeOrderBtn = page.locator("text=Place Order ");
    this.dropDown = page.locator(".ta-results");
    this.confirmationText = page.locator(".hero-primary");
    this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    this.ordersBtn=page.locator("button[routerlink='/dashboard/myorders']");
  }

  async verifyUserEmail(userName) {
    await expect(this.userEmail).toHaveText(userName);
    console.log(await this.userEmail.textContent());
  }

  async userCountry(countrycode, countryName) {

    await this.selectCountry.type(countrycode, { delay: 100 });
    await this.dropDown.waitFor();
    // i create a loop for country options, for that firstly creat a options count
    const optionsCount = await this.dropDown.locator("button").count();
    // for(let i=0;i<optionsCount;i++){
    //     if(await this.dropDown.nth(i).locator("button")===countrycode){
    //         await this.dropDown.nth(i).locator("button").click();
    //     }

    // }
    for (let i = 0; i < optionsCount; i++) {
      const text = (await this.dropDown
        .locator("button")
        .nth(i)
        .textContent()) as string; //casting
      if (text.trim() === countryName) {
        await this.dropDown.locator("button").nth(i).click();
        break;
      }
    }
  }

  async orderConfirmationGetOrderId() {
    await this.placeOrderBtn.click();
    await expect(this.confirmationText).toHaveText(" Thankyou for the order. ");
    //console.log((await this.orderId.textContent()) + "Order Id");
    return await this.orderId.textContent();//to use another pages
  }

  async naviOrders(){
    await this.ordersBtn.click();
}
}
