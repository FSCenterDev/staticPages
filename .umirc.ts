import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/vsct_login_success", component: "vsct_login_success" },
    { path: "/vsct_login_fail", component: "vsct_login_fail" },
  ],
  favicons: [
    "favicon.ico"
  ],
  exportStatic: {},
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
