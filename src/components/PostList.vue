<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <div>
      <ul>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script lang="js">

  export default {
    name: "PostList",
    data(){
      return{
        isLoading:false
      }
    },
    methods:{
      getData(){

      }
    }
  }
</script>

<style scoped>

</style>
