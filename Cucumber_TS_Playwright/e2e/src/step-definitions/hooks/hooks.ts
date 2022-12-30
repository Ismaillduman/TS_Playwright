import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
const  playwright  = require ("playwright");

BeforeAll(async() => {
    global.browser = await playwright['chromium'].launch({
        headless:false,
    })
});

AfterAll(async() => {
    await global.browser.close();
});

Before(async() => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

After(async() => {
    await global.page.close()
});


