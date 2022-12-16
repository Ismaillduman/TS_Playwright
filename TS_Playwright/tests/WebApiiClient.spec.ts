//request liblary import with requst keyword
import {test, expect, request} from '@playwright/test';
import { ApiUtil } from '../utils/ApiUtil';
//loginpayload from network payload
const loginPayload= {userEmail: "ismaildumann@web.de", userPassword: "HKNclb8318."};
const orderPayload= {orders: [{country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0"}]};


let response:any;
test.beforeAll(async () => 
{
    const apiContext= await request.newContext(); 
    const apiUtil= new ApiUtil(apiContext,loginPayload);
    response=await apiUtil.createOrder(orderPayload);
    


});
test('@Web place orders', async ({ page }) => {

    page.addInitScript(value=>{
//from application local storage take the token and direct bypass and reach to page 
        window.localStorage.setItem('token',value)
    }, response.token);
    
    await page.goto("https://rahulshettyacademy.com/client");
    
  
    await page.waitForLoadState('networkidle');
    
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");


const orders=page.locator("button[routerLink*='myorders']");
page.pause();
await orders.click();

await page.locator('tbody').waitFor();
const rows= page.locator('tbody tr');

const rowCount = await rows.count();

for(let i=0;i<rowCount; i++){
    const rowOrderId= await rows.nth(i).locator("th").textContent();
    //order id come with orderResponse json 
    //we skip all the steps and go straight order page
    if(response.orderId .includes(rowOrderId!)){
await rows.nth(i).locator("button").first().click();
break;
    }

}
const orderIdDetails=<string>await page.locator(".col-text").textContent();
await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
//Argument of type 'string | null' is not assignable to parameter of type 'string'.
//Type 'null' is not assignable to type 'string' to solve this problem we can use '!' (orderDetails! )or end of the line write as string
//const orderIdDetails=await page.locator(".col-text").textContent()as string; 
console.log(orderIdDetails+ "  OrderIdDetails");




    
 










})
    

