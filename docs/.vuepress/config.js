module.exports = {
  title: "Hello Vuepress",
  description: "Vuepress Demo",
  theme: "reco",
  themeConfig: {
    // 评论
    vssueConfig: {
      platform: "github",
      owner: "mangoCZM",
      repo: "mangoCZM.github.io",
      clientId: "b96576353ac9ae065231",
      clientSecret: "92be9297f07648b46ecfd317b4ed231e188f5cc8",
    },
    // 需要登录
    keyPage: {
      // 202cb962ac59075b964b07152d234b70
      keys: ["d9b1d7db4cd6e70935368a1efb10e377"], //MD5
      color: "#42b983", // 登录页动画球的颜色
      lineColor: "#42b983", // 登录页动画线的颜色
    },
    author: "Hello world",
    startYear: "2023",
    lastUpdated: "上次更新",
    subSidebar: "auto",
    nav: [
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: "首页", link: "/", icon: "reco-home" },
      { text: " GitHub", link: "https://github.com", icon: "reco-github" },
      {
        text: "HuaWei",
        link: "https://www.huawei.com/cn/",
        icon: "reco-huawei",
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
