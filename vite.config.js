import { defineConfig } from "vite";

let hmr = true;
let port = 3000;

if (process.env.GITPOD_WORKSPACE_CONTEXT) {
  hmr = {
    host: `${port}-${process.env.GITPOD_WORKSPACE_ID}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`,
    port: 443,
    protocol: "wss",
  };
}

export default defineConfig({
  server: { hmr, port },
});
