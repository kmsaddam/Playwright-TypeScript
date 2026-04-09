import { test, expect } from "@playwright/test";

test ('AutoSuggestion', async({page}) => {
    await page.goto("https://www.flipkart.com/")

    await page.locator('//input[@name="q" and @type="text"]').fill("Smart")

})