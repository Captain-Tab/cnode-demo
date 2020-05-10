### cnode社区的基本构架
组件：
* `Header`头部
* `PosltList` 列表
* `Article` 文章的详情页
* `SlideBar` 侧边栏
* `UserInfo` 用户个人信息
* `Psgination` 分页组件


初始化项目
```
vue init webpack cnode-demo
```
![](https://user-gold-cdn.xitu.io/2020/5/1/171d01e05ce9956a?w=586&h=231&f=jpeg&s=29301)

### PostList组件
使用官方使用的`API`接口, 获取帖子列表：https://cnodejs.org/api/v1/topics

请求返回数据后的参数分析
```
author.avatar_url: 头像
reply_count/visit_count: 回复量/浏览量
title: 帖子的标题

需要使用到过滤器：last_reply_at : 时间

帖子分类
-top: 是否置顶
-good: 代表是否精华
-tab: 是表示除了置顶和精华之外的其余分区
    --share: 分享
    --ask: 问答
    --job: 招聘
```


### 问题和解决方法
问题：
```
This relative module was not found:
* ./components in ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.
vue
```
解决方法：
* 提示文件引入错误，找不到相关模块
* 在我的项目中，原因是引入`Vue`错误，正确引入即可解决。

问题2：引入外部`css`样式
解决方法：创建样式文件，然后在`APP.vue`组件中引入
```
<script>
import './assets/style/reset.css'
***********
<script>
```
问题：引入`github-markdown-css`
解决方法：为了是我们的展示的数据样式更好看些，我们可以引入`github-markdown-css`来给我们要展示的内容添加一些样式

安装
```
npm install github-markdown-css 或 cnpm install github-markdown-css
```
引入
```
// html引入
<link rel="stylesheet" href="github-markdown.css">
<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
<article class="markdown-body">
	<h1>Unicorns</h1>
	<p>All the things</p>
</article>

或者JS引入
import 'github-markdown-css';
```
使用
注意容器`div`要添加`markdown-body`类名
```
<div class="markdown-body" v-html="topic_data.content"></div>
```
问题：`css`居中

问题：分离方法，创建公用方法

步骤一：创建文件夹和文件
![](https://user-gold-cdn.xitu.io/2020/5/3/171d851199e09ebd?w=309&h=233&f=jpeg&s=14799)
步骤二：定义方法
```
export default {
  alert(){
    alert('我是插入的元素')
  }
}
```
步骤三：在`main.js`文件中挂载到原型
![](https://user-gold-cdn.xitu.io/2020/5/3/171d8892a9f2c268?w=407&h=79&f=jpeg&s=13572)
步骤四：调用方法
```
 this.$alert.alert()
```
问题：为什么`vue.js`同一个页面检测不到路由变化。在router里面配置了一个id参数，发现vue路由参数改变，组件数据没重新更新

情况分析：路由参数获取现在生命周期里，多次进行参数切换，页面不能够实时监听，导致页面数据不更新，我们的请求`data`的初始化代码都是放在`beforemount`中.组件复用,这个方法永远只会执行一次,所有`getdata`也不会触发
解决办法：①使用`watch`对路由进行监听
```
watch:{
      '$route'(to,from){
        // this.getArticleData()
      }
    }
```
问题：部署到`github`, `css`和`js`加载不出来
生成`build`文件
```
yarn build
```
本地预览`dist`文件中的网页
```
yarn global add serve
serve -s dist
```
新建仓库，将`dist`推送到该仓库
```
cd dist
git init
git add .
git commit -m "xxx"
git remote add origin git@github.com:Captain-Tab/cnode-demo-build.git
git push -u origin master
```
解决问题：
进入`config->index.js`文件
![](https://user-gold-cdn.xitu.io/2020/5/5/171e2d2401248dc2?w=323&h=116&f=jpeg&s=11397)

在`build`对象里面将`assetsPublicPath`改为`./`,原因是将绝对路径修改为相对路径
![](https://user-gold-cdn.xitu.io/2020/5/5/171e310e36eb2888?w=553&h=242&f=jpeg&s=24537)
