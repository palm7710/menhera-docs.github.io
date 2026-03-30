import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "menhera-docs",
  description: "My docs site",
  base: "/",

  themeConfig: {
    logo: "/logo.png",

    nav: [{ text: "Docs", link: "/install" }],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Install", link: "/install" },
          { text: "Uninstall", link: "/uninstall" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    docFooter: {
      prev: "Previous",
      next: "Next",
    },
  },
});
