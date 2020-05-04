<template>
  <div class="article">
    <Loading v-if="isLoading"></Loading>
    <div v-else class="article_main">
      <SideBar></SideBar>

      <div class="article-content">

        <div class="topic_header">
          <div class="topic_title">{{post.title}}</div>
          <ul>
            <li>• 发布于: {{post.create_at | formatDate}}</li>
            <li>• 作者: {{post.author.loginname}}</li>
            <li>• {{post.visit_count}}次浏览</li>
            <li>• 来自{{post | tabFormate}}</li>
          </ul>
        </div>

        <div v-html="post.content" class="topic_content markdown-body"></div>

        <div id="reply">
          <div class="top_bar">回复</div>
          <div v-for="(reply,index) in post.replies" class="replySec">
            <div class="replyUp">
              <router-link
                :to="{
            name:'user_info',
            params:{
              name:reply.author.loginname
            }
          }">
                <img :src="reply.author.avatar_url" alt="">
              </router-link>
              <span>{{reply.author.loginname}}</span>
              <span class="textColor">{{index+1}}楼</span>
              <span class="textColor">•{{reply.create_at | formatDate}}</span>
            </div>
            <p v-html="reply.content"></p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Loading from '../components/Loading'
  import 'github-markdown-css'
  import SideBar from '../components/SideBar'

  export default {
    name: "Article",
    components: {SideBar, Loading},
    data() {
      return {
        isLoading: false,
        post: {}
      }
    },
    methods: {
      getArticleData() {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            if (res.data.success === true) {
              this.isLoading = false
              this.post = res.data.data
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getArticleData()
    },
    watch: {
      '$route'(to, from) {
        this.getArticleData()
      }
    }
  }
</script>

<style>

  .markdown-body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }

  .top_bar {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 12px;
    margin-top: 10px;
  }

  .article {
    background-color: #e1e1e1;
    padding: 20px 0;
  }

  .article_main {
    max-width: 1200px;
    margin: 0 auto;
  }

  .article-content {
    width: 77%;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
    background-color: #fff;
  }


  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }


  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }

  span.textColor {
    margin-left: 2px;
    color: #08c !important;
  }

  .replySec .markdown-text {
    margin: 25px 20px;
  }

  .replySec .markdown-text li {
    list-style-type: disc;
  }

  .replySec {
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0 0;
    margin: 6px 0;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

</style>
