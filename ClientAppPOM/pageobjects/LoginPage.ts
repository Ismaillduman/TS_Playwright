import { Locator, Page } from "@playwright/test";

export class LoginPage{
    
    readonly userName='busrayusuf@gmail.com';
    readonly userpassword='HKNclb8318.';
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

async validLogin(userName:string, userpassword:string){

    await this.email.type(userName);
    await this.password.fill(userpassword);
    await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');
}
 
}