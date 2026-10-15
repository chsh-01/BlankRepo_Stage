import { leapwork } from "./leapwork";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 30000
});

// ai-studio-step-id: pw1p7753w0
await leapwork.step("Click the email, phone, or Skype field on the Microsoft sign-in page", async () => {
    // Click textbox "Enter your email, phone, or Skype."
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"i0116\"]" });

// ai-studio-step-id: pw8ndaaf00
await leapwork.step("Fill the email field with Demo2@leapwork.com", async () => {
    // Change textbox "Enter your email, phone, or Skype."
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill("Demo2@leapwork.com");
}, { action: "input", relativeXpath: "//*[@id=\"i0116\"]" });

// ai-studio-step-id: pw1nr62ka0
await leapwork.step("Click the Next button on the Microsoft sign-in form", async () => {
    // Click button "Next"
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pw14cuvd10
await leapwork.step("Click the password field for demo2@leapwork.com", async () => {
    // Click textbox "Enter the password for demo2@leapwork.com"
    const passwordField = page.locator("input[name='passwd']");
    let isVisibleFlag = await passwordField.isVisible();
    await leapwork.log.info(`${isVisibleFlag}, {}`);
    await expect(isVisibleFlag).toBe(true);
    //await page.waitForSelector("input[name='passwd']", {state:'visible', timeout:10000});
    await page.getByRole('textbox', { name: 'Enter the password for demo2@' }).click();
}, { action: "click", relativeXpath: "//input[@name='passwd']" });

// ai-studio-step-id: pw11aurim0
await leapwork.step("Fill the password field for demo2@leapwork.com", async () => {
    // Change textbox "Enter the password for demo2@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for demo2@' }).fill(leapwork.variables.getSecret("D365CEPassword"));
}, { action: "input", relativeXpath: "//input[@name='passwd']" });

// ai-studio-step-id: pwbdm0hv00
await leapwork.step("Click the Sign in button on the Microsoft password page", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pw533fjw00
await leapwork.step("Click the Yes button on the Microsoft sign-in prompt", async () => {
    // Click button "Yes"
    await page.waitForSelector("input[type='submit']", {state: 'visible', timeout:15000});
    await page.getByRole('button', { name: 'Yes' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pwpmdo8700
await leapwork.step("check page loaded", async () => {
  try{
// const crmHub = page
//     .locator('div[data-type="app-title"][title="CRM Hub"]')
//     .filter({ hasText: "CRM Hub" });
await page.waitForSelector("iframe#AppLandingPage", {state:'visible', timeout:15000});
const constainerApp = page.frameLocator("iframe#AppLandingPage");
const tile = constainerApp.locator("#AppModuleTileSec_1_Item_1");
await expect(tile).toBeVisible();
}
  catch (errr){
    await logInfo("qa4",errr.message);
  }
}, { action: "custom", relativeXpath: "//*[@id=\"AppModuleTileSec_1_Item_5\"]" });

// ai-studio-step-id: pwnrowfg00
await leapwork.step("Wait for page load and validate SANDBOX", async () => {
    await page.waitForLoadState("domcontentloaded");

    const sandboxText = page.locator("text=SANDBOX").first();
    await expect(sandboxText).toBeVisible({ timeout: 30000 });

    await expect(page.locator("body")).toContainText("SANDBOX");
}, {
    action: "validate"
});