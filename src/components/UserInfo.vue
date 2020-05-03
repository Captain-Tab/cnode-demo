<template>
  <div class="">
    <Loading v-if="isLoading"></Loading>
    <div class="user-information">
      <section>
        <img :src="userData.avatar_url" alt="">
        <span>{{userData.loginname}}</span>
        <p>
          {{userData.score}}积分
        </p>
        <p>注册时间:{{userData.create_at | formatDate }}</p>
      </section>

      <div>
        <p>回复的主题</p>
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

      <div >
        <p>创建的主题</p>
        <ul>
          <li v-for="item in userData.recent_topics">
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

  </div>
</template>

<script lang="js">
  import Loading from './Loading'

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
  .user-information {
    background: white;
    width: 75%;
    margin: 10px auto;
  }

  .user-information section {
    padding: 12px;
  }

  .user-information img {
    width: 30px;
  }

  .user-information li {
    list-style: none;
  }

  .user-information, .user-information{
    font-size: 0.72rem;
  }

  .user-information > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }

  .user-information > div > ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }

  .user-information > div > ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
</style>
