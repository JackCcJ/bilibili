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
        text-align: center;
        flex: 1;
        font-size: 4.444vw;
    }
}
</style>
