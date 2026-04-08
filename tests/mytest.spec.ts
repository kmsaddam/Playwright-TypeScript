// import {test, expect} from '@playwright/test'

import { test, expect } from '@playwright/test';



// test ("First Test", async () => {})


test("Verify Title", async ({page}) => {
await page.goto("https://automationstepbystep.com/")
let title:string = await page.title()
console.log('Title:', title)
await expect(page).toHaveTitle("NEVER STOP LEARNING - Automation Step by Step")
})


test("Verify URL", async ({page}) => {
await page.goto("https://automationstepbystep.com/")
let url:string = await page.url()
console.log('Url:', url)
await expect(page).toHaveURL(/automationstepbystep/)
})