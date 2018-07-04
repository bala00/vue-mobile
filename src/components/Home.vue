<template>
  <div class="home">
      <img class="bg" src="@/assets/image/bg1.png">
      <div class="text">
          <p><span class="hd">山°</span>{{msgA}}</p>
          <p>{{msgB}}</p>
          <div class="line"></div>
      </div>
      <div class="btn-group" v-if="isLogin == 0">
          <router-link class="btn btn-login" to="/user/login">登录</router-link>/
          <router-link class="btn btn-register" to="/user/register">注册</router-link>
      </div>
  </div>
</template>

<script>  
export default {
  name: 'Home',
  data () {
    return {
      msgA: '有木兮',
      msgB: '木有枝',
      isLogin: 0
    }
  },
  mounted () {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    if(userInfo){
      this.isLogin = 100
    }else{
      this.isLogin = 0
    }
  }
}
</script>

<style scoped>
  .home{
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .bg{
    position: absolute;
    width: 100%;
    bottom:10%
  }
  .text{
    position: absolute;
    left: 30%;
    top: 17%;
    width: 70px;
    height: 230px;
  }
  .hd{
    position: relative;
    left: -8px;
    font-size: 1.8em;
  }
  .text p{
    position: absolute;
    margin:0;
    width: 1.4em;
    font-size:1.4em;
    color: #763b0e;
  }
  .text p:first-child{
    right: 0;
  }
  .text p:nth-child(2){
    bottom: 35px;
  }
  .line{
    position: absolute;
    width: 70px;
    height: 5px;
    left: -15px;
    bottom: 28px;
    border-bottom: 1px solid #763b0e;
    transform: rotate(140deg)
  }
  .btn-group{
    position: absolute;
    padding-right: 5%;
    width: 100%;
    left: 0;
    top:5%;
    font-size:1.2em;
    /* bottom:13%; */
    text-align: right;
    color: #a34ee5;
  }
  .btn{
    display: inline-block;
    padding: 0;
    width: 52px;
    /* width: 100px; */
    height: 36px;    
    /* background: rgba(252, 218, 239, .3); */
    border: 0;
    text-align: center;
    line-height: 36px;
    font-size: 0.9em;
    color: #a34ee5;
    border-radius: 20px;
  }

  /* .btn-list{
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 50%;
    animation: twinkling 1s infinite ease-in-out
  }
  @keyframes twinkling{
    0%{box-shadow:0 0 10px 2px rgba(201,203,243,.8);}
    25%{box-shadow:0 0 10px 4px rgba(201,203,243,.6);}
    50%{box-shadow:0 0 10px 6px rgba(201,203,243,.4);}
    75%{box-shadow:0 0 10px 4px rgba(201,203,243,.6);}
    100%{box-shadow:0 0 10px 2px rgba(201,203,243,.8);}
  } */
</style>
