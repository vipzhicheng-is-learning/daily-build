# 20220209

从0构建 vue3+ts 的 Hello World 环境

## 依赖

* pnpm
* vite
* vue3
* typescript

## 总结

我是先看了 vite 的官方初始化模板 `vue-ts` 再开始操作的，过程中也需要反复对照官方的生成的代码，找出自己的遗漏。

在从0开始初始化一个vue3的ts项目中，安装完了依赖还需要自己生成以下几个文件

* tsconfig.json，这个可以用 `npx tsc --init` 获得一个模板，然后再改成需要的配置
* vite.config.ts，这个没有自动生成器，需要自己手写，在里面加载 `@vitejs/plugin-vue`
* src/env.d.ts， 这个类型声明，使得 main.ts 可以导入 *.vue 的组件

### 一个小坑

我已经栽了两次了，就是 index.html 载入 main.ts时要写 `/src/main.ts` 而不是 `src/main.ts`

### 为什么要安装 vue-tsc

这个在构建时使用 `vue-tsc --noEmit && vite build`

### tsconfig.json 的配置

* target 指构建以后的运行环境，环境越先进，这里就可以定义的越激进，这里的 esnext 应该是很激进的了。
* module 模块封装规范，比如 CommonJS, AMD, UMD等等，这里的 esnext 也是浏览器的最新模块规范
* useDefineForClassFields 这是一个比较新的过渡配置，大概意思是未来JS的类规范会发生变化，会导致一些破坏性的更新，如果提前知道新规范怎么使用类，这里可以切换，因为Typescript认为这个规范很可能最终成为正式规范。
* moduleResolution 模块解析策略，这里官方文档貌似说的是如果module设置成了 esnext，这里可以设置成Classic，但是实际测试还是要用 node，不然会大量报错。
* lib Typescript自带的一些类型声明
* jsx 这里的preserve意思是编译后，保持JSX结构不变，如果是react，结构就变了
* resolveJsonModule 支持解析 JSON 模块，默认是不支持的，必须用这个打开，很有用
* esModuleInterop 由于不是所有的npm模块都是符合es6标准的，开启这个规范可以实现兼容，不然会报错。
* sourceMap 用于生成调试的map数据，可以看到报错代码在ts中的代码行数
* strict Typescript 类型检查强约束，如果hold不住可以关掉
* include 基于 tsconfig.js 定义可以被tsc解析的文件模式。

## 结论

考虑到要手写，调整很多配置，后面还是基于 vite 模板来生成更香一些。