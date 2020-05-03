<template>
  <div class="loading">
    <img src="../assets/img/loading.gif" alt="loading">
  </div>
</template>

<script lang="js">
  export default  {
   name: "Loading"
  }
</script>

<style scoped>

  .loading {
    width: 90%;
    max-width: 1080px;
    margin: auto;
    position: relative;
    background-color: #ffffff;
  }

  .loading > img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
  }

</style>
