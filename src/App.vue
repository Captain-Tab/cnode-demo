<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="sidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './view/PostList'
  import Footer from './components/Footer'
  import './assets/style/reset.css'

  export default {
    name: 'App',
    components: {Header, PostList,Footer}
  }
</script>

<style scoped >
 .main{
   width: 100%;
   margin: 0 auto;
 }
</style>
