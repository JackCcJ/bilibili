<template>
 <div class="login">
    <nav-bar>
        <div slot="center">注册bilibil</div>
    </nav-bar>
    <login-name label="姓名" class="account" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res => model.name = res"></login-name>
    <login-name label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => model.username = res"></login-name>
    <login-name 
    label="密码" 
    type="password" 
    placeholder="请输入密码" 
    rule="^.{6,16}$" 
    @inputChange="res => model.password = res" />
    <login-btn @loginSubmit="loginSubmit">
        <div>注册</div>
    </login-btn>
 </div>
</template>

<script>
import navBar from '@/components/common/navBar/navBar'
import registerName from '@/components/common/registerName/registerName'
import registerBtn from '@/components/common/registerBtn/registerBtn'
 export default {
  name: 'login',
  data () {
   return {
      model:
      { name:'',
        username:'',
       password:''
       }
       
       }
  },
  components: {
      navBar,
      registerName,
      registerBtn
  },
  methods:{
      successIput(res){
          console.log(res);
      },
     async loginSubmit(){
         let rulg = /^.{6,16}$/
            if(rulg.test(this.model.name)  &&  rulg.test(this.model.username) && rulg.test(this.model.password) ){
            const res = await this.$request.post('/register',this.model)
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
