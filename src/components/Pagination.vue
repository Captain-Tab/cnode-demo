<template>
  <div class="pagination">
    <button @click="clickButton">首页</button>
    <button @click="clickButton">«</button>
    <button v-if="addDot" class="page-btn">...</button>
    <button v-for="btn in page_btn"
            :class="[{currentPage:btn === currentPage},'page-btn']"
            @click="clickButton(btn)">
      {{btn}}
    </button>
    <button @click="clickButton">»</button>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Pagination',
    data() {
      return {
        page_btn: [1, 2, 3, 4, 5, '...'],
        currentPage: 1,
        addDot:false
      }
    },
    methods: {
      clickButton(page) {
        if (typeof page != 'number') {
          switch (page.target.innerText) {
            case '«':
              $('button.currentPage').prev().click()
              break
            case '»':
              $('button.currentPage').next().click()
              break
            case '首页':
              this.page_btn = [1, 2, 3, 4, 5, '...'];
              this.clickButton(1)
              break
            default:
              break
          }
          return
        }

        this.currentPage = page
        if(page>4){
          this.addDot = true
        }else {
          this.addDot = false
        }
        if (page === this.page_btn[4]) {
          this.page_btn.shift()
          this.page_btn.splice(4, 0, this.page_btn[3] + 1)
        } else if (page === this.page_btn[0] && page !== 1) {
          this.page_btn.unshift(this.page_btn[0] - 1)
          this.page_btn.splice(5, 1)
        }
        this.$emit('handleRender', this.currentPage)
      },
    }
  }
</script>

<style scoped>
  .pagination {
    background-color: white;
    border-radius: 5px;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    padding: 0 2px;
    width: 42px;
    height: 37px;
  }

  .page-btn {
    position: relative;
    width: 40px;
    margin: 0 4px;
  }

  button:hover{
    background-color: #bfbfbf;
  }
  .currentPage {
    color: white;
    background-color: #1f1b1b;
  }
  .currentPage:hover{
    background-color: #1f1b1b;
  }
</style>
