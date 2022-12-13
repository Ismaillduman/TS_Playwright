

import {test , expect} from '@playwright/test';

test.only(' Pop up validation', async ({ page }) => {
    
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const alertBtn= page.locator('#alertbtn');
await page.pause();

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




})
