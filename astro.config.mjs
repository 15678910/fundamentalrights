import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Custom domain (GitHub Pages, repo github.com/15678910/fundamentalrights)
  site: "https://fundamentalrights.kr",
  base: "/",
  integrations: [sitemap()],
});
