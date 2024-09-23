# crossgate

魔力全书网址： https://crossgate-book.github.io/

# 相关参考文档

- https://nodejs.org/zh-cn/download/package-manager


```
安装
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
- nvm install 16 && nvm use 16
- corepack enable

验证
- node -v
- npm -v
- yarn -v
```


- https://v1.vuepress.vuejs.org/zh/


home/vuepress-dev 
home/wwwroot/vuepress


```
安装
- mkdir vuepress-starter && cd vuepress-starter
- yarn init
- yarn add -D vuepres

```

```package.json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
```
开发
- yarn docs:dev
发布
- yarn docs:build --dest 发布路径 ../wwwroot/

```