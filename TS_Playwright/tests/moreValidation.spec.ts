

import {test , expect} from '@playwright/test';

test(' Pop up validation', async ({ page, browser }) => {
    
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const alertBtn= page.locator('#alertbtn');


page.on('dialog',dialog=> dialog.accept()); //popup handel
await alertBtn.click();
await page.locator("#confirmbtn").click();
const hideBtn=page.locator('#hide-textbox');
const displayText=page.locator('#displayed-text');

await hideBtn.click();
 await expect(displayText).toBeHidden();

await page.locator('#show-textbox').click();
await expect(displayText).toBeVisible();
const hoverTop= page.locator(".mouse-hover-content a[href='#top']");
const hover= page.locator('#mousehover');
await hover.hover();


//all of the ceheckboxes are try
const checkBox= page.locator("[type='checkbox']");
const count = await checkBox.count();

for(let i=0;i<count;i++){
await checkBox.nth(i).check();
expect(await checkBox.nth(i).isChecked()).toBeTruthy();

}

for (let i = 0; i < count; i++) {
    await checkBox.nth(i).uncheck();
    expect(await checkBox.nth(i).isChecked()).toBeFalsy();
    }
   
// iframe handel

    const framesPage = page.frameLocator("#courses-iframe");
    await Promise.all([

        page.waitForLoadState(),
        await framesPage.locator("li a[href*='lifetime-access']:visible").click(),
    ]);
    //await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    //await page.waitForLoadState();
    //await framesPage.locator("li a[href*='lifetime-access']:visible").click();
     const textCheck =await framesPage.locator(".text h2").textContent() as string;
 console.log( textCheck.split(" ")[1]);

 

 



})

test.only('child window', async ({ browser }) => {
    //child window handel
    const context= await browser.newContext();
    const page=await context.newPage(); 
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
const newWindow= page.locator("#openwindow");
const[newPage]=await Promise.all([
    context.waitForEvent('page'),
    newWindow.click(),
]);

const childText= newPage.locator(".col-md-8 h3");
 console.log(await childText.textContent());
 console.log(await newPage.title());
})