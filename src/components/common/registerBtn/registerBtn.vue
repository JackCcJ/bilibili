<template>
 <div class="loginBtnn" @click="loginClick()">
     <div class="loginBtn">
         <slot></slot>
     </div>
 </div>
</template>

<script>
 export default {
  name: '',
  data () {
   return {

   }
  },
  components: {

  }
  ,
  methods:{
      loginClick(){
          this.$emit('loginSubmit')
      }
  }
 }
</script>

<style scoped lang="scss">
    .loginBtn{
        display: flex;
        color: #fff;
        height: 11.222vw;
        border-radius: 6.111vw;
        background-color: #ffa8b6;
        justify-content: center;
        align-items: center;
    }
    .loginBtnn{
        margin-top: 5.556vw;
    }
</style>
