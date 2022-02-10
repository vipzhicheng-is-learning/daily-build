# 20220210

## 计划

今天的计划是从0开始，基于vite和tailwindcss，写个Hello world，不依赖于任何前端UI库，目的是体验一下 vanilla tailwindcss开发工作流

## 依赖

* vite
* tailwindcss

## 总结

* 由于是 vanilla 项目，vite开箱即用，不需要 `vite.config.js` 配置文件。
* 在 `main.js` 里导入css，`import './style.css', html和css都可以热更新。
* 得益于 vite 的强大，整合 tailwindcss 很方便。

```sh
pnpm install tailwindcss postcss autoprefixer -D
pnpx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

一个小坑

在整合 tailwindcss 之后，热更新不生效，要重新启动一下开发环境 `pnpm dev`

Tailwind 有一个自己的 CLI 工具，这个比较适合连 vite 都不需要的场景，就是纯 基础技术栈进行开发，有 watch 功能，直接加载编译之后的文件，没有热更新，需要自己刷新浏览器。