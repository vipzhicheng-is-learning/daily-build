# 2022-02-21

## 计划

Laravel 出了 v9 把玩一下

## 依赖

* composer
* php8

## 总结

Laravel有多种安装方法，我用了全局命令行的方式

```
composer global require laravel/installer
laravel new example-app
```

由于现在 L9 已经发布，所以这里安装的就是 L9，如果后面加上 `--dev` 则安装的是 L10 的开发版

一开始发现VSC的Lint不太工作，对PHP8的新语法不支持，后来发现是没有按照 php intelephense 插件的要求进行设置。

由于 PHP 的项目体积普遍都比较大，还是从仓库中删掉吧
