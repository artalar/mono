const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}{ext}",
  use: {
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  },
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 }
  }
});
