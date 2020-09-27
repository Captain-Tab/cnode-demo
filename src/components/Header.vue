<template>
  <div class="header">
    <router-link :to="{name:'root'}">
      <img src="../assets/img/cnodejs_light.svg" alt="cnode-logo">
    </router-link>
  </div>
</template>

<script>
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
