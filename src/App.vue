<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="sidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'
  import './assets/style/reset.css'

  export default {
    name: 'App',
    components: {Header, PostList}
  }
</script>

<style scoped >
 .main{
   width: 100%;
   margin: 0 auto;
 }
</style>
