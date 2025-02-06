import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  description: "个人博客说明",
  themeConfig: {
    logo: "/logo.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "学习内容", link: "/learning-content" },
      { text: "个人履历", link: "/personal-resume" },
    ],

    sidebar: [
      {
        // text: "Examples",
        items: [
          { text: "学习内容", link: "/learning-content" },
          { text: "个人履历", link: "/personal-resume" },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
