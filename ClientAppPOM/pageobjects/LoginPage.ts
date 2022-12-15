import { Locator, Page } from "@playwright/test";

export class LoginPage{

    signInbutton: Locator;
    email: Locator;
    password:Locator;
    page:Page;


    constructor(page: Page){
        this.page=page;// for navigate url need
        this.email=page.locator("#userEmail");
        this.password=page.locator("#userPassword");
        this.signInbutton=page.locator("[value='Login']");


    }

async goTo(){

    await this.page.goto("https://rahulshettyacademy.com/client/");

}

async validLogin(userName:string, password:string){

    await this.email.type(userName);
    await this.password.fill(password);
    await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');
}
 
}