#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist
cp -b ../beaudar.json .

git init
git fetch
git add -A
git commit -m 'deploy'
git remote -v

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:crossgate-book/crossgate-book.github.io.git master
