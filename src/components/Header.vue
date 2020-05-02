<template>
  <div class="header">
    <img src="../assets/img/cnodejs_light.svg" alt="cnode-logo">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script lang="js">
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header {
    background-color: #5a5555;
    height: 50px;
  }

  img {
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
  }

  ul{
    float: right;
    margin: 4px;
  }

  li{
    display: inline-block;
    padding: 15px 15px;
  }

  a{
    color: #ccc;
    font-size: 14px;
  }
</style>
