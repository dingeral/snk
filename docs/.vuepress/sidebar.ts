import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  // "/DailyRoutine",
  // "/Fitness",
  // "/Read",
  // {
  //   text: "🚀 基础工程",
  //   icon: "",
  //   prefix: "/基础工程/",
  //   link: "",
  //   collapsible: true,
  //   children: [
  //     "README.md",
  //     {
  //       text: "Basic",
  //       icon: "emmet",
  //       collapsible: true,
  //       children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
  //     },
  //     {
  //       text: "FrondEnd",
  //       icon: "app",
  //       collapsible: true,
  //       children: ["Vue.md", "HTML.md", "JavaScript.md", "Python.md"],
  //     },
  //   ],
  // },
  // {
  //   text: "🧰 人的基建",
  //   icon: "",
  //   prefix: "/人的基建/",
  //   link: "",
  //   collapsible: true,
  //   children: "structure",
  // },
  {
    text: "🏳️‍🌈 基础工程",
    icon: "",
    prefix: "/基础工程/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🌐 竹简",
    icon: "",
    prefix: "/竹简/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "✍ 写",
    icon: "",
    prefix: "/write/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🧩 图片",
    icon: "",
    prefix: "/image/",
    link: "",
    collapsible: true,
    children: "structure",
  },

  // {
  //   text: "🛖 生活",
  //   icon: "",
  //   prefix: "/family/",
  //   link: "",
  //   collapsible: true,
  //   children: "structure",
  // },
  // {
  //   text: "博客文章",
  //   icon: "blog",
  //   prefix: "/_posts/",
  //   link: "/blog",
  //   collapsible: true,
  //   children: "structure",
  // },
]);
