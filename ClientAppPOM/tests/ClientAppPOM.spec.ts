//The spec files are unit tests for your source files
import {test,expect} from '@playwright/test';

import { PomManage } from '../pageobjects/PomManage';


test.describe('CLIENT APP POM', () => {
    
})
test('client app pom', async ({ page }) => {
    
const pomManage= new PomManage(page);





//login
const loginpage= pomManage.getLoginPage();
await loginpage.goTo();
await loginpage.validLogin(loginpage.userName,loginpage.userpassword);


//dashboard
const dashboardPage=pomManage.getDashBoardPage();
await dashboardPage.addProduct("iphone 13 pro");
await dashboardPage.naviToCart();

//cart page
const cartPage=pomManage.getCartPage();
await cartPage.verifyProduct("iphone 13 pro");
await cartPage.checkOut();


//placeOrderPage
const placeOrderPage=pomManage.getPlaceOrderPage();
await placeOrderPage.userCountry("Ge","Germany");
await placeOrderPage.verifyUserEmail(loginpage.userName);
const orderId=await placeOrderPage.orderConfirmationGetOrderId();
console.log(orderId+"with return");
await placeOrderPage.naviOrders();

//order history
//await page.pause();
const orderHistoryPage=pomManage.getOrdersHistoryPage();

 await orderHistoryPage.selectOrderId(orderId);

expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
await orderHistoryPage.writeOrderId();



})