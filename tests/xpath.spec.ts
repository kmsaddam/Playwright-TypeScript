import {test, expect, Locator} from '@playwright/test'


test("Verify Xpath", async({page}) => {
await page.goto('https://demowebshop.tricentis.com/')
const logo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
await expect(logo).toBeVisible();

// await page.locator("//input[@type='text' and @value='Search store']").fill("gift");
// await page.locator("//a[text()='$25 Virtual Gift Card' and @class='ui-corner-all']").click()
// await page.locator("//div[contains(@class, 'product-grid')]//div[contains(@class, 'item-box')]").count()

let products:Locator =  page.locator("//h2/a[contains(@href, 'computer')]");
let productsCount = await products.count();

console.log("Total Products:", productsCount)
console.log("First Product Name:", await products.first().textContent())
console.log("Last Product Name:", await products.last().textContent())

console.log("Nth Product Name:", await products.nth(2).textContent())


})