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

// ai-studio-step-id: pw6ysth800
await leapwork.step("Click Delete in the confirmation dialog for the order guides list", async () => {
    // Click button "Delete"
    const frame = page.frameLocator('#gsft_main');
    await frame.getByRole('button', { name: 'Delete' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"ok_button\"]" });