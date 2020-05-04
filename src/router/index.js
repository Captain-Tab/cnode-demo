import Vue from 'vue'
import Router from 'vue-router'
import Article from '../view/Article'
import PostList from '../view/PostList'
import UserInfo from '../view/UserInfo'
import SideBar from '../components/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
      }
    },
    {
      name:'user_info',
      path:'/user_info/:name',
      components:{
        main: UserInfo
      },
    }
  ]
})
