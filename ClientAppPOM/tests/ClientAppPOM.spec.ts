//The spec files are unit tests for your source files
import {test,expect} from '@playwright/test';
import { PomManage } from '../pageobjects/PomManage';


test.describe('CLIENT APP POM', () => {
    
})
test('client app pom', async ({ page }) => {
    
const pomManage= new PomManage(page);
const loginpage= pomManage.getLoginPage();
const cartPage=pomManage.getCartPage();
const dashboardPage=pomManage.getDashBoardPage();
const placeOrderPage=pomManage.getPlaceOrderPage();
})
