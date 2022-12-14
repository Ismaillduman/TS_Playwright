import { Page } from "@playwright/test";

export class LoginPage{
    signInbutton: any;


    constructor(page: Page){

        const email=page.locator("#userEmail");

    }

 
}