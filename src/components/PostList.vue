<template>
  <div>
    <Loading v-if="isLoading"></Loading>

    <div class="posts" v-else>
      <ul>
        <li>
          <div class="top_bar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>

        <li v-for="post in post"
            class="postItem">
          <img :src="post.author.avatar_url" alt="userProfile">
          <span>
            <span class="reply_count">{{post.reply_count}}</span>
            /{{post.visit_count}}
          </span>
          <span :class="[{
            put_good:(post.good === true),
            put_top:(post.top === true),
            'topiclist-tab':(post.good != true && post.top != true)
          }]">
            <span>
              {{post| tabFormate}}
            </span>
          </span>

          <router-link :to="{
            name:'post_content',
            params:{
              id: post.id,
              name: post.author.loginname
             },
          }">
              <span class="post_title">
                 {{post.title}}
              </span>
          </router-link>

          <span class="last_reply">
            {{post.last_reply_at | formatDate}}
          </span>
        </li>
        <li>
          <Pagination @handleRender="handleRender"></Pagination>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Loading from './Loading'
  import Pagination from './Pagination'

  export default {
    name: "PostList",
    components: {Loading, Pagination},
    data() {
      return {
        isLoading: false,
        post: [],
        postPage: 1
      }
    },
    methods: {
      getData() {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          params: {
            page: this.postPage,
            limit: 20
          }
        })
          .then(res => {
            this.isLoading = false
            this.post = res.data.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      handleRender(value) {
        this.postPage = value
        this.getData()
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getData()
    }
  }
</script>

<style scoped>

  .posts {
    background-color: #e1e1e1;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  ul {
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .posts li {
    padding: 10px 0 10px 10px;
    position: relative;
    border-top: 1px solid #f0f0f0;
  }

  .posts li:first-child {
    padding: 10px 0 10px 0px;
  }

  .postItem img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .post_title:hover {
    text-decoration: underline;
  }

  .top_bar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .top_bar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .top_bar span:hover {
    color: #9e78c0;
  }

</style>
