import {test, expect, Locator } from "@playwright/test"

// test ("Verify Locators", async({page}) => {
//     await page.goto("https://demo.nopcommerce.com/")
//     const logo:Locator = page.getByAltText("nopCommerce demo store")
//     // logo.click()
//     await expect(logo).toBeVisible();

//     const text:Locator = page.getByText("Welcome ");
//     await expect(text).toBeVisible();

//     // const link:Locator = page.getByRole("link")
// await page.mouse.wheel(0, 5000);
//     await page.getByRole('link', {name: 'Contact Us'}).click();

//     // await expect(page.getByRole('heading', {name: 'Register'})).toBeVisible();
//     // await expect(page.getByRole('heading', {name: 'Your Personal Details'})).toBeVisible();

    
//     await expect(page.getByRole('heading', {name: 'Contact Us'})).toBeVisible();


//    await page.getByLabel('Your name:').fill("Saddam")
//    await page.getByLabel('Your email:').fill("Hossain")
//    await page.getByLabel('Enquiry:').fill("tory@pppgmail.com")
// })

test ("Verify Locators", async({page}) => {
    await page.goto("https://demo.nopcommerce.com/")
    await page.getByPlaceholder("Search store").fill('Apple Macbook');
    await page.getByRole('button', {name: 'Search'}).click()
})