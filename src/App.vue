<template>
  <div id="app">
    <Header></Header>
    <PostList></PostList>
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

</style>
