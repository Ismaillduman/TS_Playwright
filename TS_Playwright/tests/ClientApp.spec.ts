import {test,expect, Locator} from '@playwright/test';

test.describe('CLIENT APP', () => {
    


test.only('Client App Login', async ({ page }) => {
    
const userEmail=page.locator('#userEmail');
const userPassword= page.locator('#userPassword');
const loginBtn=page.locator('#login');
const email= 'ismaildumann@web.de';
const password= "HKNclb8318.";
await page.goto("https://rahulshettyacademy.com/client");

await userEmail.type(email);
await userPassword.type(password);
await loginBtn.click();

await page.waitForLoadState('networkidle');

console.log(await page.title());
await expect(page).toHaveTitle("Let's Shop");

const cardTitles= page.locator(".card-body b");
const productName= "zara coat 3";
const product = page.locator(".card-body");
const addCart= ("text= Add To Cart");

const titles= await cardTitles.allTextContents();
console.log(titles);
// product choose and add with a LOOP
 const count = await product.count();
 for(let i=0;i<count;i++ ){
if(await product.nth(i).locator('b').textContent()===productName)
{
await product.nth(i).locator(addCart).click();
break;
}
 }

 const cartBtn=page.locator('[routerlink*="/dashboard/cart"]');

 await cartBtn.click();
 
 await page.locator('div li').first().waitFor();
 const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
 expect(bool).toBeTruthy();


const checkout = page.locator('text=Checkout');
await checkout.click();

const countrySelect= page.locator("[placeholder='Select Country']");
await countrySelect.type('ind',{delay:100});
//delay? <number> Time to wait between key presses in milliseconds.

const dropDown= page.locator('.ta-results');
await dropDown.waitFor();

const optionsCount = await dropDown.locator('button').count();
for (let i=0; i<optionsCount;i++){
const text= await dropDown.locator('button').nth(i).textContent();
if(text ===" India"){
await dropDown.locator('button').nth(i).click();
break;}

}
await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();

await expect(page.locator('.hero-primary')).toHaveText('Thankyou for the order.');
const orderId:string=await page.locator('.em-spacer-1 .ng-star-inserted').textContent()as string;
console.log(orderId);
const orders=page.locator("button[routerLink*='myorders']");
page.pause();
await orders.click();

await page.locator('tbody').waitFor();
const rows= page.locator('tbody tr');

const rowCount = await rows.count();

for(let i=0;i<rowCount; i++){
    const rowOrderId:string= await rows.nth(i).locator("th").textContent()as string;
    if(orderId.includes(rowOrderId)){
await rows.nth(i).locator("button").first().click();
break;
    }

}
const orderIdDetails:string=await page.locator(".col-text").textContent()as string;
expect(orderIdDetails.includes(orderIdDetails)).toBeTruthy();
console.log(orderIdDetails+ "  OrderIdDetails");




    
 










})
})