<template>
  <div class="footer">
    <div class="codeLink"><a href="https://github.com/Captain-Tab/cnode-demo">源码地址</a></div>
    <div class="websiteLink">
      <ul>
        <li class="imgContainer C-web">
          <span>网站API由CNode社区提供</span>
          <a href="https://cnodejs.org/">
            <img src="../assets/img/cnodejs.svg" alt="cNode">
          </a>
        </li>
        <li class="imgContainer G-web">
          <span>网站托管由GitHub提供</span>
          <a href="https://github.com/">
            <img src="../assets/img/github-logo.svg" alt="GitHub">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    padding: 20px 0;
    color: black;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
    height: auto;
  }

  .codeLink a:hover {
    text-decoration: underline;
  }

  .websiteLink {
    margin: 10px 0;
  }

  .imgContainer {
    color: #999999;
  }

  li.imgContainer {
    display: inline;
    margin-right: 50px;
  }

  .C-web img {
    width: 150px;
  }
  .G-web img {
    width: 50px;
  }
</style>
