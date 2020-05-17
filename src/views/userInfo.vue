<template>
  <div class="userInfo">
    <nav-bar>
        <div slot="left"><img src="@/assets/logo.png" alt=""></div>
        <div slot="center"><van-search v-model="value" placeholder="请输入搜索关键词" /></div>
        <div slot="right"><img  src="@/assets/default_img.jpg" alt=""><span class="app">下载app</span></div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/navBar/navBar'
export default {
    components:{
        navBar
    }
}
</script>

<style lang='scss' scoped>
  .app{
    color: #fff;
    width: 50px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    background-color: #fb7299;
    border-radius: 3px;
    position: relative;
    margin-left: 3px;
    bottom: 8px;
    font-size: 10px;
  }
</style>