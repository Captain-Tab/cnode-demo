#!/user/bin/env bash

# 当发生错误时终止脚本
set -e

# 构建
npm run build
# 进入构建输出的目录下
cd dist
# 本地初始化git仓库
git init
git add -A
git commit -m 'deploy'

# 部署到github page
git push -f git@github.com:Captain-Tab/cnode-demo-build.git master:gh-pages

cd -
