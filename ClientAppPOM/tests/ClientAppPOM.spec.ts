//The spec files are unit tests for your source files .spec
import {test,expect} from '@playwright/test';
import {customtest} from "../utils/testBase" ;
import { PomManage } from '../pageobjects/PomManage';
//firstly i have to convert my json file to string an than to ts file
const dataset= JSON.parse(JSON.stringify(require("../utils/clientAppTestData.json")));

//parameterization with different test data
for(const data of dataset){
test(`client app pom for ${data.productName}`, async ({ page }) => {
    //to make unique test title name use the productName otherwiese failure will occur
const pomManage= new PomManage(page);



//login
const loginpage= pomManage.getLoginPage();
await loginpage.goTo();
await loginpage.validLogin(data.userName,data.userpassword);


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
await placeOrderPage.verifyUserEmail(data.userName);
const orderId=await placeOrderPage.orderConfirmationGetOrderId();
console.log(orderId+"with return");
await placeOrderPage.naviOrders();

//order history
//await page.pause();
const orderHistoryPage=pomManage.getOrdersHistoryPage();

 await orderHistoryPage.selectOrderId(orderId);

expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
await orderHistoryPage.writeOrderId();


});

}

customtest.only("@web client  pom custom data ", async ({ page,username ,password,productName}) => {
    //to make unique name use the productName otherwiese failure will occur
const pomManage= new PomManage(page);

//login
const loginpage= pomManage.getLoginPage();
await loginpage.goTo();
await loginpage.validLogin(username,password);


//dashboard
const dashboardPage=pomManage.getDashBoardPage();
await dashboardPage.addProduct(productName);
await dashboardPage.naviToCart();

//cart page
const cartPage=pomManage.getCartPage();
await cartPage.verifyProduct(productName);
await cartPage.checkOut();
})