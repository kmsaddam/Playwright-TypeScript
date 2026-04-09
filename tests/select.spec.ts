import { expect, Location, Locator, test } from "@playwright/test";

test('Select Box', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="country"]').selectOption({ value: 'brazil' });


    let countriesSelect:Locator = page.locator('//select[@id="country"]/option');
    let countries = (await countriesSelect.allInnerTexts()).map(t=>t.trim());

    console.log(countries);

   await expect(countries).toContain("Japan");

    await page.waitForTimeout(5000)
})