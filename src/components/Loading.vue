<template>
  <div class="loading">
    <img src="../assets/img/loading.gif" alt="loading">
  </div>
</template>

<script>
  export default  {
   name: "Loading"
  }
</script>

<style scoped>

  .loading {
    width: 90%;
    max-width: 1200px;
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
