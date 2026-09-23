import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://truebridgetherapy.com",
  // Prefer trailing-slash URLs so sitemap, canonicals, and static paths stay aligned
  // (avoids Google treating /path and /path/ as competing variants).
  trailingSlash: "always",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // Blog is review-only: built and reachable by direct URL, but not listed in the sitemap.
      filter: (page) => !page.includes("/blog"),
    }),
  ],
  vite: {
    envPrefix: ["PUBLIC_", "NEXT_PUBLIC_"],
  },
});
