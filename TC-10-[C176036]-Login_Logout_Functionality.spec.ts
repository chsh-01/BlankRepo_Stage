import { leapwork } from "./leapwork";

leapwork.configuration({
  enableSelfHeal: false
});

leapwork.variables.set("emailOrPhone", "svc.dyn365bc.automation@leapwork.com", leapwork.storage.LOCAL);
const lw__emailOrPhone = leapwork.variables.get("emailOrPhone", leapwork.storage.LOCAL) as string;

leapwork.variables.set("password", "HNJM@Le@pW0rk#2025!bc100%", leapwork.storage.LOCAL);
const lw__password = leapwork.variables.get("password", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: j7Mg3rFz
await leapwork.step("Click the Enter your email or phone field on the Sign in page", async () => {
    // Click textbox "Enter your email or phone"
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).click();
}, { relativeXpath: "//*[@id=\"i0116\"]" });

// ai-studio-step-id: 7n6vMmEt
await leapwork.step(`Fill the Enter your email or phone field with ${lw__emailOrPhone}`, async () => {
    // Change textbox "Enter your email or phone"
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(String(lw__emailOrPhone));
}, { action: "input", relativeXpath: "//*[@id=\"i0116\"]" });

// ai-studio-step-id: R1IwTGGh
await leapwork.step("Click the Next button on the Microsoft sign-in page", async () => {
    // Click button "Next"
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: QDvS9xl3
await leapwork.step("Fill the password field for svc.dyn365bc.automation@leapwork.com", async () => {
    // Change textbox "Enter the password for svc.dyn365bc.automation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).fill(String(lw__password));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: oU60kP0U
await leapwork.step("Click the Sign in button on the Microsoft stay signed in prompt", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: Gr9BcVrA
await leapwork.step("Click the Yes button on the Microsoft login page", async () => {
    // Click button "Yes"
    await page.getByRole('button', { name: 'Yes' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

await page.waitForTimeout(13000);

// ai-studio-step-id: WgVw4bTW
await leapwork.step("Click the Account manager button for Dynamic365 BC Test Automation", async () => {
    const accountManagerButton = page.getByRole('button', {
      name: 'Account manager for Dynamic365 BC Test Automation',
    });
    await expect(accountManagerButton).toHaveCount(1);
    await accountManagerButton.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"O365_MainLink_Me\"]" });

// ai-studio-step-id: CqS4rCuE
await leapwork.step("Click the Sign out button for the current account", async () => {
    // Click button "Sign out of this account"
    await page.getByRole('button', { name: 'Sign out of this account' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"mectrl_body_signOut\"]" });