<template>
 <div class="login">
    <nav-bar>
        <div slot="center">登陆bilibil</div>
        <div slot="right" @click="$router.push('./register')">注册bilibil</div>
    </nav-bar>
    <register-name class="account" label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username = res"></register-name>
    <register-name 
    label="密码" 
    type="password" 
    placeholder="请输入密码" 
    rule="^.{6,16}$" 
    @inputChange="res => model.password = res" />
    <register-btn @loginSubmit="loginSubmit">
        <div>注册</div>
    </register-btn>
 </div>
</template>

<script>
import navBar from '@/components/common/navBar/navBar'
import registerBtn from '@/components/common/registerBtn/registerBtn'
import registerName from '@/components/common/registerName/registerName'
 export default {
  name: 'login',
  data () {
   return {
      model:
      { 
        username:'',
        password:''
       }
       }
  },
  components: {
      navBar,
      registerBtn,
      registerName
  },
  methods:{
      successIput(res){
          console.log(res);
      },
     async loginSubmit(){
         let rulg = /^.{6,16}$/
            if(rulg.test(this.model.username) && rulg.test(this.model.password) ){
            const res = await this.$request.post('/login',this.model)
            console.log(res);
                this.$toast.fail(res.data.msg)
          }else{
                this.$toast.fail('请检查输入格式')
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
