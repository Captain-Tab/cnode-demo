<template>
  <div class="author-info">
    <div class="author-summary">
      <div class="top-bar">作者</div>
      <div class="author-profile">
        <router-link :to="{
        name:'user_info',
        params:{
          name: userData.loginname
        }
      }">
          <img :src="userData.avatar_url" alt="">
          <span>{{userData.loginname}}</span>
        </router-link>
      </div>

    </div>
    <div class="recent_topics">
      <div class="top-bar">作者最近参与的主题</div>
      <ul>
        <li v-for="list in topicLimit">
          <router-link :to="{
           name: 'post_content',
           params: {
             id: list.id,
             name: list.author.loginname
           }
         }">{{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="top-bar">作者最近创建的主题</div>
      <ul>
        <li v-for="list in replyLimit">
          <router-link :to="{
           name: 'post_content',
           params: {
             id: list.id,
             name: list.author.loginname
           }
         }">{{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    data() {
      return {
        userData: {}
      }
    },
    methods: {
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            if (res.data.success === true) {
              this.isLoading = false
              this.userData = res.data.data
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    computed: {
      topicLimit() {
        if (this.userData.recent_replies) {
          return this.userData.recent_replies.slice(0, 5)
        }
      },
      replyLimit() {
        if (this.userData.recent_topics) {
          return this.userData.recent_topics.slice(0, 5)
        }
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getData()
    },
  }
</script>

<style scoped>
  .author-summary, .recent_replies, .recent_topics {
    background-color: #fff;
  }

  .author-info {
    width: 22%;
    float: right
  }
  .author-profile{
    display: block;
  }
  .author-profile img{
    vertical-align: middle;
  }

  li {
    padding: 7px 0;
  }

  .recent_replies ul, .recent_topics ul {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .top-bar {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .login-name {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .login-name a {
    text-decoration: none;
    color: #778087;
  }

  .author-summary .top-bar {
    margin-top: 0;
  }
</style>
