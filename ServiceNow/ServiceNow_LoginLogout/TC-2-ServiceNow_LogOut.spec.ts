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

// ai-studio-step-id: gx1xvn3G
await leapwork.step("Click the System Administrator Available profile button", async () => {
    // Click img "System Administrator is Available"
    await page.getByRole('button', { name: 'System Administrator:' }).click();
}, { action: "click", relativeXpath: ".//span/span/img" });

// ai-studio-step-id: pwlqba5l00
await leapwork.step("Validate ServiceNow shows the user as \"System Administrator\"", async () => {
    // Assert div contains "System Administrator"
    await expect(page.getByText('System Administrator').first()).toContainText("System Administrator");
}, { action: "validate", relativeXpath: ".//span[2]/div/div[1]/div/span/div" });

// await leapwork.step("Validate the ServiceNow user menu header shows 'System AdministratorSystem AdministratorServiceNow'", async () => {
//     // Assert div contains "System AdministratorSystem AdministratorServiceNow"
//     await expect(page.locator('div').filter({ hasText: '/^System AdministratorSystem AdministratorServiceNow$/' }).first()).toContainText("System AdministratorSystem AdministratorServiceNow");
// }, { action: "validate", relativeXpath: "//*[@id=\"userMenu\"]/span/span[2]/div/div[1]" });

// ai-studio-step-id: ocaIvCYr
await leapwork.step("Validate that the Log out button shows 'Log out' on the ServiceNow page", async () => {
    // Assert div contains "Log out"
    await expect(page.getByRole('button', { name: 'Log out' })).toContainText("Log out");
}, { action: "validate", relativeXpath: ".//span/span[2]/div/div[3]/button[@aria-label=\"Log out\"]/div" });

// ai-studio-step-id: 3jfXCnMu
await leapwork.step("Click the Log out button", async () => {
    // Click div
    await page.getByRole('button', { name: 'Log out' }).click();
}, { action: "click", relativeXpath: ".//span/span[2]/div/div[3]/button[@aria-label=\"Log out\"]/div" });

// ai-studio-step-id: Xq9iudJY
await leapwork.step("Validate the User name label shows 'User name' on the ServiceNow Log in page", async () => {
    // Assert label contains "User name"
    await expect(page.getByText('User name')).toContainText("User name");
}, { action: "validate", relativeXpath: "//*[@id=\"loginPage\"]/div[1]/label" });