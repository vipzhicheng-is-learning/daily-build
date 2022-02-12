# 2022-02-12

## 计划

从头构建 vue3 + unplug-auto-import，体验不需要写导入语句的用法

## 依赖

* vue3
* vite
* typescript
* unplug-auto-import

## 总结

样板代码当然是越简洁越好，别看只是少了几个import，但是减少的心智负担还是很大的。

unplugin-auto-import 不仅支持 vue 还支持 react，不仅支持 vite 还支持各种构建工具，是个不错的工具，目前国内大厂的UI库都是支持这个东东的，所以在使用UI的API时就可以不import了，全局自动引入还是很香的，后面在体验UI的时候，一定要用上。

体会，AutoImport 插件的配置不是可有可无的，默认是不生效的，没有说默认支持vue这样的操作，针对什么扩展名自动引入什么规则是需要明确声明的。

另一个体会是，我之前用 vite 的 ts 模块初始化时的 tsconfig.json 在 helloworld 阶段没有什么特殊的，我直接用 `tsc --init` 默认生成的配置一样可以编译成功。