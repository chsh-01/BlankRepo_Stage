import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userName", "admin", leapwork.storage.LOCAL);
const lw__userName = leapwork.variables.get("userName", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw4nocxc00
await leapwork.step("Click the User name field on the ServiceNow login page", async () => {
    // Click textbox "User name"
    await page.getByRole('textbox', { name: 'User name' }).click();
}, { relativeXpath: "//*[@id=\"user_name\"]" });

// ai-studio-step-id: 6bOS887W
await leapwork.step(`Fill the User name field with "${lw__userName}"`, async () => {
    // Fill textbox "User name"
    await page.getByRole('textbox', { name: 'User name' }).fill(String(lw__userName));
}, { action: "input", relativeXpath: "//*[@id=\"user_name\"]" });

// ai-studio-step-id: CU47apfc
await leapwork.step("Validate the User name field shows 'admin' on the ServiceNow Log in page", async () => {
    // Assert textbox "User name" contains "admin"
    await expect(page.getByRole('textbox', { name: 'User name' })).toHaveValue("admin");
}, { action: "validate", relativeXpath: "//*[@id=\"user_name\"]" });

// ai-studio-step-id: Sr3Z9Zrl
await leapwork.step("Click the Password field on the Log in page", async () => {
    // Click textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"user_password\"]" });

// ai-studio-step-id: pwmohtdo00
await leapwork.step(`Fill the Password field on Service Now`, async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).fill(leapwork.variables.getSecret("snowPassword"));
}, { action: "input", relativeXpath: "//*[@id=\"user_password\"]" });

// ai-studio-step-id: MpbPpS6o
await leapwork.step("Validate the Password field shows on the ServiceNow Log in page", async () => {
    // Assert textbox "Password" contains "Qcu@gXzT4%4I"
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue(leapwork.variables.getSecret("snowPassword"));
}, { action: "validate", relativeXpath: "//*[@id=\"user_password\"]" });

// ai-studio-step-id: yw7QPFBp
await leapwork.step("Click the Log in button", async () => {
    // Click button "Log in"
    await page.getByRole('button', { name: 'Log in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"sysverb_login\"]" });

// ai-studio-step-id: pw1g2lr120
await leapwork.step("Validate on the ServiceNow page that the System Administrator status shows 'Available'", async () => {
    // Assert img "System Administrator is Available" contains "System Administrator is Available"
    await expect(page.getByRole('button', { name: 'System Administrator:' })).toHaveAttribute('aria-label',"System Administrator: Available");
}, { action: "validate", relativeXpath: ".//span/span/img" });

// ai-studio-step-id: pw1l096vy0
await leapwork.step("wait for page load", async () => {
  // Step implementation
  await page.waitForLoadState("load");
});