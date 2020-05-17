<template>
 <div class="login">
    <nav-bar>
        <div slot="center">注册bilibil</div>
    </nav-bar>
    <login-name label="姓名" class="account" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res => name = res"></login-name>
    <login-name label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => userName = res"></login-name>
    <login-name 
    label="密码" 
    type="password" 
    placeholder="请输入密码" 
    rule="^.{6,16}$" 
    @inputChange="res => passWord = res" />
    <login-btn @loginSubmit="loginSubmit">
        <div>登录</div>
    </login-btn>
 </div>
</template>

<script>
import navBar from '@/components/common/navBar/navBar'
import loginName from '@/components/common/loginName/loginName'
import loginBtn from '@/components/common/loginBtn/loginBtn'
 export default {
  name: 'login',
  data () {
   return {
       name:'',
       userName:'',
       passWord:''
   }
  },
  components: {
      navBar,
      loginName,
      loginBtn
  },
  methods:{
      successIput(res){
          console.log(res);
      },
      loginSubmit(){
          if(this.name != '' &&  this.userName != '' && this.passWord != ''){

          }else{
              this.$notify({
                  type:'warning',
                  message:'输入格式错误'
              });
          }
      }
  }
 }
</script>

<style scoped lang="scss">
    .account{
        margin: 4.167vw 0 4.167vw 0;
    }
</style>
