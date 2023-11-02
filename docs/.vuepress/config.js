module.exports = {
  title: "Hello Vuepress",
  description: "Vuepress Demo",
  theme: "reco",
  themeConfig: {
    lastUpdated: "上次更新",
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "我的博客",
        items: [
          { text: "Github", link: "https://github.com" },
          {
            text: "掘金",
            link: "https://juejin.cn",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          {
            title: "条件类型",
            path: "/handbook/ConditionalTypes",
          },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: ["@vuepress/back-to-top", "@vuepress/nprogress"],
};
