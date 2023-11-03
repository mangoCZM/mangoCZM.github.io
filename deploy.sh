#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

time=$(date "+%Y/%m/%d %H:%M:%S")
commitMsg="commit vuepress dirs ${time}"

git add .
git commit -m "${commitMsg}"
git push

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:mangoCZM/mangoCZM.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -