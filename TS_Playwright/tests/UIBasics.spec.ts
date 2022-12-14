import {test,expect, Locator} from '@playwright/test';

test.only('Browser Context-Validating Error login', async ({ browser }) => {
    const Context= await browser.newContext();
    const page= await Context.newPage();

    const username= page.locator('#username');
    const userName= 'rahulshetty';
    const Password='learning';
    const password=page.locator('#password');
    const signIn=page.locator('#signInBtn');
    const cardTitles= page.locator('.card-body a');
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill(userName);
    await password.type(Password);
    await signIn.click();
    console.log(await page.title());
    console.log(await page.locator("[style*='block']").textContent());
    expect (page.locator("[style*='block']")).toContainText('Incorrect');

    await username.fill("");
    await username.fill('rahulshettyacademy');

    await Promise.all([
page.waitForNavigation(),
signIn.click()
    ]);
    


    
    console.log(await page.title());
    
    await expect(page).toHaveTitle('ProtoCommerce');
    

    await page.pause();

const allTitles= await cardTitles.allTextContents();
console.log(allTitles);

});

test(' UIcontrols', async ({ page }) => {
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const radioBtn= page.locator('.radiotextsty');//2
const dropDown=page.locator("select.form-control");
const webPopUp= page.locator("#okayBtn");
const terms= page.locator('#terms');
const dokumentLink= page.locator('.blinkingText');
await radioBtn.last().click();
await radioBtn.last().isChecked();
await expect(radioBtn.last()).toBeChecked();
await dropDown.selectOption('consult');
//expect(dropDown.selectOption('consult')).toContain('consult');

await webPopUp.click();
await terms.click(),
await expect (terms).toBeChecked();
await terms.uncheck();
expect(await terms.isChecked()).toBeFalsy();

console.log(await dokumentLink.textContent());
expect(await dokumentLink.textContent()).toEqual("Free Access to InterviewQues/ResumeAssistance/Material");

});

test(' Child Windows Handel', async ({ browser }) => {
    const Context= await browser.newContext();
    const page =await Context.newPage();
    const dokumentLink= page.locator('.blinkingText');
    
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const [newPage] =await Promise.all(
        [
            Context.waitForEvent('page'),
            dokumentLink.click(),
            page.pause(),
        ]
    )

  
    const sentence= newPage.locator('.red');
    const text:string = await sentence.textContent() as string;
    const arraytext= text.split('@');
    const domain= arraytext[1].split(' ')[0];
    console.log(domain);
   
    await page.locator('#username').type(domain);
    console.log(await page.locator('#username').textContent());
    
   


})


