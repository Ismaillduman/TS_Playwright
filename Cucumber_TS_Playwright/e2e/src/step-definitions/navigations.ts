import { Given } from '@cucumber/cucumber'

Given(
    'Im on the homepage',
    async function(page) {

        console.log("I am on the home page");

        await page.goto("http://localhost:3000/")

    }
)