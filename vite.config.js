import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

let hmr = true;
let port = 3000;

if (process.env.GITPOD_WORKSPACE_CONTEXT) {
  hmr = {
    host: `${port}-${process.env.GITPOD_WORKSPACE_ID}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`,
    port: 443,
    protocol: "wss"
  };
}

export default defineConfig({
  server: {
    hmr,
    port
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook")
          })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }]
          },
          setupFiles: [".storybook/vitest.setup.js"]
        }
      }
    ]
  }
});