const resolve = require("vuepress-theme-hope/resolve");

module.exports = resolve({
  title: "LunaTechsDev",
  description: "Just playing around",
  baseLang: "en-US",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["script", { src: "https://hcaptcha.com/1/api.js" }, "async defer"],
  ],
  locales: {
    "/": {
      lang: "en-US",
      themeColor: "Accent Color",
      themeMode: "Mode",
    },
  },
  themeConfig: {
    author: "LunaTechs Contributors",
    repo: "https://github.com/LunaTechsDev",
    logo: "/logo.png",
    fullscreen: false,
    pageInfo: false,
    editLinks: false,
    lastUpdated: false,
    footer: {
      display: true,
    },
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Plugins", link: "/plugins/" },
      {
        text: "Support",
        items: [
          { text: "F.A.Q", link: "/faq" },
          { text: "Terms", link: "/terms-of-use" },
          { text: "Report Bug", link: "/report-bug" },
        ],
      },
    ],
  },
});
