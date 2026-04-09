import test, { expect, page } from "@playwright/test";

test('Select Box', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="country"]').selectOption({ value: 'brazil' });
})