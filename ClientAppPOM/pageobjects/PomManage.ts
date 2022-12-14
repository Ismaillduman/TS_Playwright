import { Page } from "@playwright/test";
import { CartPage } from "./CartPage";
import { DashboardPage } from "./DashboardPage";
import { LoginPage } from "./LoginPage";
import { PlaceOrderPage } from "./PlaceOrderPage";
import { OrdersHistoryPage } from "./OrdersHistoryPage";

export class PomManage{
    
    page: Page;
    loginpage: LoginPage;
    dashboardPage: DashboardPage;
    cartPage:CartPage;
    placeOrderPage: PlaceOrderPage;
    orderHistoryPage: OrdersHistoryPage;

constructor(page: Page){

this.page=page;
this.loginpage=new LoginPage(this.page);
this.dashboardPage=new DashboardPage(this.page);
this.cartPage=new CartPage(this.page);
this.placeOrderPage= new PlaceOrderPage(this.page);



    }

    getLoginPage(){
        return this.loginpage;
    }

    getDashBoardPage(){
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }
    getPlaceOrderPage(){
     return this.placeOrderPage;
    }

    getOrdersHistoryPage(){
        return this.orderHistoryPage;
    }


}