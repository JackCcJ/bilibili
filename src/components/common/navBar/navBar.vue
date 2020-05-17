<template>
 <div class="navBar">
     <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name="center"></slot></div>
     <div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
 export default {
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped lang="scss">
.navBar{
    display: flex;
    height: 12.222vw;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    div{
        align-items: center;
        text-align: center;
        flex: 1;
    }
    div img{
        width: 80%;
    }
    .right img {
        width: 30px;
        height:30px;
    }
    .van-search{
        margin-top: 1.567vw;
        padding: 0;
    }
    .center{
        height: 44px;
        padding: 0;
        flex: 2;
    }
    .right{
        font-size: 3.5vw;
    }
}
</style>
