import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ganesh-macherla.github.io",

  base: "/astro-paper",

  integrations: [sitemap()],
});