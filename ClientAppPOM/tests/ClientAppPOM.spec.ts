//The spec files are unit tests for your source files
import {test,expect} from '@playwright/test';
import { PomManage } from '../pageobjects/PomManage';

const userName='busrayusuf@gmail.com';
const password='HKNclb8318.';
test.describe('CLIENT APP POM', () => {
    
})
test('client app pom', async ({ page }) => {
    
const pomManage= new PomManage(page);



const placeOrderPage=pomManage.getPlaceOrderPage();

//login
const loginpage= pomManage.getLoginPage();
await loginpage.goTo();
await loginpage.validLogin(userName,password);

await page.pause();
//dashboard
const dashboardPage=pomManage.getDashBoardPage();
await dashboardPage.addProduct("iphone 13 pro");
await dashboardPage.naviToCart();

//cart page
const cartPage=pomManage.getCartPage();
await cartPage.verifyProduct("iphone 13 pro");
await cartPage.checkOut();

})
