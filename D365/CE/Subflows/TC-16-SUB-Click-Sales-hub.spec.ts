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

// ai-studio-step-id: pwwbzwy000
await leapwork.step("Click Sales Hub to open the sales tools.", async () => {
    const appFrame = page.locator('iframe[title="AppLandingPage"]');
    await expect(appFrame).toHaveCount(1);
    
    const salesHub = page
      .frameLocator('iframe[title="AppLandingPage"]')
      .getByRole('link', {
        name: /^Sales Hub\b/i,
        exact: true,
      });
    await expect(salesHub).toHaveCount(1);
    await salesHub.click({ force: true });
}, {
    action: "click",
    relativeXpath: "//*[@id=\"AppModuleTileSec_1_Item_20\"]"
});