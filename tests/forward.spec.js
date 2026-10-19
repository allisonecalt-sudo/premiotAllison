const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

// Runs against the LOCAL forwarding page, so it checks this commit even
// before the GitHub Pages deploy finishes.
test('v1 forwards to v2', async ({ page }) => {
  await page.goto(pathToFileURL(path.resolve('index.html')).href);
  await expect(page).toHaveURL(/premiotAllison-v2\/?$/);
});
