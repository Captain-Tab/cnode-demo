<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/img/loading.gif" alt="loading">
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
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      getData() {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          page: 1,
          limit: 20
        })
          .then(res => {

          })
          .catch(error=>{
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

</style>
