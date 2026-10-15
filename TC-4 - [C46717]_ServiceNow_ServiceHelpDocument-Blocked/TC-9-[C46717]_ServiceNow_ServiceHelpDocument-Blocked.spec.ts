import { leapwork } from "./leapwork";

import { ServiceNowLoginToServiceNow } from "@assets/ServiceNow/ServiceNow_LoginLogout/ServiceNow_LoginToServiceNow";
import { ServiceNowLogOut } from "@assets/ServiceNow/ServiceNow_LoginLogout/ServiceNow_LogOut";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 30000
});

// await  leapwork.team.settings.get("timeoutMs");

// ai-studio-step-id: 17cd0e5e
await leapwork.step("Use test case: ServiceNow_LoginToServiceNow", async () => {
    return await ServiceNowLoginToServiceNow();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: MeTLsicM
await leapwork.step("Click the Show help button in the ServiceNow navigation bar", async () => {
    // Click img
    await page.getByRole('button', { name: 'Show help' }).click();
}, { action: "click", relativeXpath: ".//svg" });



// await leapwork.step("Validate the ServiceNow Docs page shows “Agree and Proceed” for cookie consent", async () => {
//     // Assert button "Agree and Proceed" contains "Agree and Proceed"
//     await expect(page.getByRole('button', { name: 'Agree and Proceed' })).toContainText("Agree and Proceed");
// }, { action: "validate", relativeXpath: ".//div/div/div[1]/div/div[4]/a[1]" });

// ai-studio-step-id: X5YE0vmh
await leapwork.step("Click Browse product documentation in the ServiceNow Help Center", async () => {
    // Click link "Browse product documentation"
    await page.getByRole('link', { name: 'Browse product documentation' }).click();
}, { action: "click", relativeXpath: ".//div/a" });

// await leapwork.step("Switch to tab \"ServiceNow • Docs | ServiceNow\"", async () => {
//     const pages = context.pages().filter(candidate => !candidate.isClosed());
//     if (pages.length <= 1) {
//       throw new Error('No alternate tab is available to switch to.');
//     }
    
//     const normalize = (value) => String(value ?? '')
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, ' ')
//       .trim();
//     const tokenize = (value) => Array.from(new Set(
//       normalize(value)
//         .split(/\s+/)
//         .filter(token => token.length >= 2 && !new Set(['http', 'https', 'www', 'com', 'in', 'amazon', 'ref', 'page', 'tab']).has(token))
//     ));
//     const parseUrl = (value) => {
//       if (!value) return null;
//       try {
//         return new URL(value);
//       } catch {
//         return null;
//       }
//     };
//     const countTokenMatches = (haystack, tokens) => tokens.reduce((count, token) => (
//       haystack.includes(token) ? count + 1 : count
//     ), 0);
    
//     const currentPageUrl = typeof page.url === 'function' ? page.url() : '';
//     const currentPageTitle = await page.title().catch(() => '');
//     const expectedTitle = "ServiceNow • Docs | ServiceNow";
//     const expectedUrl = "https://www.servicenow.com/docs/";
//     const expectedTitleNormalized = normalize(expectedTitle);
//     const expectedTitleTokens = tokenize(expectedTitle);
//     const expectedUrlObject = parseUrl(expectedUrl);
//     const expectedUrlTokens = tokenize(expectedUrlObject
//       ? `${expectedUrlObject.hostname} ${expectedUrlObject.pathname} ${expectedUrlObject.search}`
//       : expectedUrl);
    
//     const ranked = await Promise.all(pages.map(async (candidate, index) => {
//       const candidateTitle = await candidate.title().catch(() => '');
//       const candidateUrl = candidate.url();
//       const candidateTitleNormalized = normalize(candidateTitle);
//       const candidateUrlNormalized = normalize(candidateUrl);
//       const candidateUrlObject = parseUrl(candidateUrl);
    
//       let score = 0;
//       if (candidateUrl === currentPageUrl) score -= 900;
//       if (candidateTitle && candidateTitle === currentPageTitle) score -= 900;
//       score += countTokenMatches(candidateTitleNormalized, expectedTitleTokens) * 20;
//       score += countTokenMatches(candidateUrlNormalized, expectedUrlTokens) * 8;
    
//       if (expectedTitleNormalized) {
//         if (candidateTitleNormalized === expectedTitleNormalized) score += 120;
//         else if (candidateTitleNormalized.includes(expectedTitleNormalized)) score += 60;
//       }
    
//       if (expectedUrlObject && candidateUrlObject) {
//         if (candidateUrlObject.hostname === expectedUrlObject.hostname) score += 10;
//         if (candidateUrlObject.pathname === expectedUrlObject.pathname) score += 15;
//       }
    
//       return {
//         candidate,
//         index,
//         score,
//         title: candidateTitle,
//         url: candidateUrl,
//       };
//     }));
    
//     ranked.sort((left, right) => right.score - left.score);
//     const targetPage = ranked[0]?.candidate ?? null;
//     const targetPageTitle = targetPage ? await targetPage.title().catch(() => '') : '';
//     const targetPageUrl = targetPage?.url() ?? '';
//     const targetMatchesCurrentPage = targetPage != null
//       && targetPageUrl === currentPageUrl
//       && targetPageTitle === currentPageTitle;
//     if (!targetPage || targetMatchesCurrentPage) {
//       throw new Error(`Unable to find the intended tab for step 9xGOqJnk. Ranked tabs: ${JSON.stringify(ranked.map(entry => ({
//         index: entry.index,
//         score: entry.score,
//         title: entry.title,
//         url: entry.url,
//       })))}`);
//     }
    
//     await targetPage.bringToFront();
//     await setActiveExecutionPage(targetPage);
//     await Promise.allSettled([
//       targetPage.waitForLoadState('domcontentloaded', { timeout: 10_000 }),
//       targetPage.waitForLoadState('load', { timeout: 10_000 }),
//     ]);
//     await targetPage.waitForFunction(() => document.readyState === 'complete', undefined, {
//       timeout: 5_000,
//     }).catch(() => undefined);
//     await targetPage.waitForLoadState('networkidle', { timeout: 2_000 }).catch(() => undefined);
// }, { action: "switch_tab" });

// await leapwork.step("Validate that ServiceNow Docs shows “Your Choices Regarding Cookies on the Site”", async () => {
//     // Assert heading "Your Choices Regarding Cookies on the Site" contains "Your Choices Regarding Cookies on the Site"
//     await expect(page.getByRole('heading', { name: 'Your Choices Regarding' })).toContainText("Your Choices Regarding Cookies on the Site");
// }, { action: "validate", relativeXpath: "//*[@id=\"cookieMainHeader\"]/div[2]/h1" });



















 /*relativeXpath: ".//div[@name='trustarc_cm]//a"})*/;  /*relativeXpath: ".//div/div/div[1]/div/div[4]/a[1]" */

// ai-studio-step-id: pw1m7j9i90
await leapwork.step("Click Agree and Proceed on the cookie consent dialog", async () => {
    // Click button "Agree and Proceed"
    await page.getByRole('button', { name: 'Agree and Proceed' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[1]/div/div[4]/a[1]" });

// ai-studio-step-id: pw1p0u12i0
await leapwork.step("Click Close on the cookie preferences confirmation message", async () => {
    // Click button "Close"
    await page.getByRole('button', { name: 'Close', exact: true }).click();
}, { action: "click", relativeXpath: "//*[@id=\"gwt-debug-close_id\"]" });

// ai-studio-step-id: pw19rhi0f0
await leapwork.step("Click the APIs link in the ServiceNow Docs navigation.", async () => {
    // Click span
    await page.getByRole('link', { name: 'APIs' }).click();
}, { action: "click", relativeXpath: ".//span" });

// ai-studio-step-id: pwgw2qww00
await leapwork.step("Click the API implementation link in the ServiceNow API Reference documentation.", async () => {
    // Click span
    await page.getByRole('link', { name: 'API implementation Set up Web' }).click();
}, { action: "click", relativeXpath: ".//tbody/tr/td[1]/p/a/span[1]" });