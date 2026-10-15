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

// ai-studio-step-id: pwb3kauy00
await leapwork.step("Open account menu and sign out", async () => {
    const accountMenu = page.locator("#mectrl_headerPicture");
    await expect(accountMenu).toBeVisible({ timeout: 10000 });
    await accountMenu.click();

    const signOutButton = page.locator("#mectrl_body_signOut");
    await expect(signOutButton).toBeVisible({ timeout: 10000 });
    await signOutButton.click();
}, {
    action: "click",
    relativeXpath: "//*[@id='mectrl_headerPicture']"
});

// ai-studio-step-id: pwn890zf00
await leapwork.step("Validate 'Pick an account' page if it appears", async () => {
    const pickAccountHeading = page.getByRole("heading", {
        name: "Pick an account"
    });

    try {
        await expect(pickAccountHeading).toBeVisible({ timeout: 15000 });
        await expect(pickAccountHeading).toHaveText("Pick an account");
    } catch {
        console.log("'Pick an account' page did not appear. Continuing...");
    }
}, {
    action: "validate",
    relativeXpath: "//*[@id='loginHeader']/div"
});

// ai-studio-step-id: pw1ej1h5g0
await leapwork.step("Wait 10 seconds", async () => {
    await page.waitForTimeout(10000);
}, {
    action: "custom"
});