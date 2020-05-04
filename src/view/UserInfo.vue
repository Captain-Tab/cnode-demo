<template>
  <div class="user_inf">
    <Loading v-if="isLoading"></Loading>
    <div class="user-information" v-else>

      <section>
        <div class="link">
          <router-link :to="{name:'root'}">
            <span>主页 /</span>
          </router-link>
        </div>
        <div class="short-info">
          <img :src="userData.avatar_url" alt="">
          <span>{{userData.loginname}}</span>
          <p>
            {{userData.score}}积分
          </p>
          <p>注册时间:{{userData.create_at | formatDate }}</p>
        </div>
      </section>

      <div class="after-section">
        <div class="content-header">
          <span>参与的主题</span>
        </div>

        <div class="topic-list">
          <ul>
            <li v-for="item in userData.recent_replies">
              <router-link :to="{
              name:'post_content',
              params:{
                id:item.id
              }
            }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="end-section">
        <div class="content-header">
          <span>创建的主题</span>
        </div>

        <div class="topic-list">
          <ul>
            <li v-for="item in userData.recent_topics">
              <router-link :to="{
              name:'post_content',
              params:{
                id:item.id,
              }
            }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Loading from '../components/Loading'

  export default {
    name: "UserInfo",
    components: {Loading},
    data() {
      return {
        isLoading: false,
        userData: []
      }
    },
    methods: {
      getData() {
        this.$http.get(` https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            this.isLoading = false
            this.userData = res.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getData()
    }
  }

</script>

<style scoped>
  .user_inf {
    background-color: #e1e1e1;
    padding: 20px 0;
  }

  .user-information {
    max-width: 1200px;
    margin: 0 auto;
  }

  .user-information section {
    margin-bottom: 20px;
  }

  .link {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #80bd01;
  }

  .link span:hover {
    text-decoration: underline;
  }

  .short-info {
    padding: 10px;
    background-color: #ffffff;
  }

  .short-info img {
    vertical-align: middle;
  }

  .short-info span {
    margin-left: 10px;
  }

  .short-info p {
    margin: 14px 0;
  }

  .user-information img {
    width: 30px;
  }

  .user-information li {
    list-style: none;
  }

  .after-section {
    margin-bottom: 20px;
  }

  .content-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }

  .topic-list {
    background-color: #ffffff;
  }

  .user-information > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    margin: 0;
  }

  .topic-list > ul > li {
    padding: 10px 18px 10px 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
    border-bottom: 1px solid #f6f6f6;
  }

  .topic-list > ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

  .topic-list > ul > li > a:hover {
    text-decoration: underline;
  }
</style>
