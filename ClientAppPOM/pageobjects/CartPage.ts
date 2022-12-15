import { expect, Locator, Page } from "@playwright/test";

export class CartPage{
    
    checkout:Locator;
    page:Page;
    table:Locator;
 constructor(page: Page)

{
this.checkout=page.locator("text=Checkout");
this.page=page;
this .table=page.locator("div .cart");

}


async getProductLocator(productName:string){
return this.page.locator("h3:has-text('"+productName+"')")
}

async verifyProduct(productName:string){
await this.table.waitFor();
const bool=(await this.getProductLocator(productName)).isVisible();
expect(bool).toBeTruthy();
}

async checkOut(){
await this.checkout.click();
}
}