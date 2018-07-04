<template>
    <div class="wrapper" :style="{backgroundImage: 'url(' + LoginBG + ')' }">
        <img class="logo" src="@/assets/image/logo.png">
        <div class="form login-wrap" v-show="showLogin">
            <input v-focus type="text" placeholder="手机号" v-model="mobile">
            <div class="pr">
                <input class="password" :type="this.inout_data.pwdType" placeholder="登录密码" v-model="password">
                <Icon :type="inout_data.icon" class="icon-font" @click="changeType()"></Icon>
            </div>
            <input type="button" v-on:click="login" value="登录">
            <p>
                <span>没有账号？</span>
                <a class="link-btn" v-on:click="ToRegister">
                    </router-link>注册</a>
            </p>
        </div>

        <div class="form register-wrap" v-show="showRegister">
            <input type="text" placeholder="请输入手机号" v-model="newMobile">
            <div class="pr clearfix">
                <input type="text" id="checkcode" placeholder="短信验证码">
                <span id="get-checkcode">获取验证码</span>
            </div>
            <div class="pr">
                <input class="password" :type="this.inout_data.pwdType" placeholder="注册密码" v-model="newPassword">
                <Icon :type="inout_data.icon" class="icon-font" @click="changeType()"></Icon>
            </div>
            <input type="button" v-on:click="register" value="注册">
            <p>
                <span>已有账号？</span>
                <a class="link-btn" v-on:click="ToLogin">登录</a>
            </p>
        </div>
        <Modal
            title="提示"
            v-model="modalFlag"
            class-name="vertical-center-modal">
            <p>{{modalMSG}}</p>
        </Modal>
    </div>
</template>

<script>
    import Vue from 'vue';
    import qs from 'qs';
    import { setCookie, getCookie } from '@/assets/js/cookie.js'
    import LoginBG from '@/assets/image/bg0.jpg'

    Vue.directive('focus', {
        inserted: function (el) {
            el.focus();
        }
    });

    export default {
        name: 'Login',
        data() {
            return {
                mobile: '',
                password: '',
                newMobile: '',
                newPassword: '',
                showLogin: true,
                showRegister: false,
                LoginBG: LoginBG,
                inout_data: {
                    pwdType: 'password',
                    icon: 'eye-disabled'
                },
                modalFlag: false,
                modalMSG: ''
            }
        },
        mounted() {            
            if (this.$route.params.id == 'login') {
                this.showRegister = false
                this.showLogin = true
            } else {
                this.showRegister = true
                this.showLogin = false
            }

            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if (userInfo) {
                this.$router.push('/account');
            }
            // if(getCookie('mobile')){
            //     this.$router.push('/account')
            // }
        },
        methods: {
            changeType() {
                this.inout_data.pwdType = this.inout_data.pwdType == 'password' ? 'text' : 'password';
                this.inout_data.icon = this.inout_data.icon == 'eye-disabled' ? 'eye' : 'eye-disabled';
            },
            ToRegister() {
                this.showRegister = true
                this.showLogin = false
            },
            ToLogin() {
                this.showRegister = false
                this.showLogin = true
            },
            login() {
                if (this.mobile == '' || this.password == '') {
                    this.modalMSG="请输入手机号或者密码";
                    this.modalFlag = true
                    // alert('请输入手机号或者密码')
                } else {
                    // alert('开始提交登录表单');

                    // URLSearchParams对象是为了让参数以form data形式   存在兼容
                    // let params = new URLSearchParams();
                    // params.append('mobile',this.mobile);
                    // params.append('password',this.password);
                    // 方法二
                    let params = qs.stringify({
                        mobile: this.mobile,
                        password: this.password
                    })

                    this.axios.post('/api/login', params).then((res) => {
                        let v = res.data;

                        if (v.code != '0') {
                            // alert(res.data.msg)
                            this.modalMSG=res.data.msg;
                            this.modalFlag = true
                        } else {
                            // alert('登录成功');
                            this.modalMSG='登录成功';
                            this.modalFlag = true
                            // 方法一 存储Cookie
                            // setCookie('mobile',this.mobile,1000*60)
                            // 方法二 存储localStorage
                            let userInfo = {
                                vueMobile: this.mobile,                                                 //账号
                                avatar: v.data[0].avatar ? v.data[0].avatar : "",                       //头像
                                name: v.data[0].name ? v.data[0].name : "",                           //昵称
                                signature: v.data[0].signature ? v.data[0].signature : "",              //签名
                                attention: v.data[0].attention ? v.data[0].attention : 0,               //关注
                                fans: v.data[0].fans ? v.data[0].fans : 0,                              //粉丝
                                sex: v.data[0].sex,                                                     //性别
                                constellation: v.data[0].constellation ? v.data[0].constellation : '',  //星座
                                occupation: v.data[0].occupation ? v.data[0].occupation : '',           //职业
                                hobby: v.data[0].hobby ? v.data[0].hobby : ''                           //爱好
                            }
                            localStorage.setItem('userInfo', JSON.stringify(userInfo));

                            // 方法三：存储在vuex或者bus中 鉴于刷新问题，采用方法二

                            // localStorage加密方式存放用户信息
                            setTimeout(function () {
                                this.$router.push('/account')
                            }.bind(this), 1000)
                        }
                    })
                }
            },
            register() {
                if (this.newMobile == "" || this.newPassword == '') {
                    alert('请输入手机号或者密码')
                } else {
                    let params = qs.stringify({
                        newMobile: this.newMobile,
                        newPassword: this.newPassword
                    })
            
                    this.axios.post('/api/addUser', params).then((res) => {
                        let v = res.data;
                        if (v.code == 0) {
                            this.modalMSG='注册成功';
                            this.modalFlag = true
                            // alert('注册成功');
                            
                            let userInfo = {
                                vueMobile: this.newMobile,
                                avatar: "",
                                name: '',
                                signature: '',
                                attention: 0,
                                fans: 0,
                                sex: 0,   //性别
                                constellation: '',  //星座
                                occupation: '', //职业
                                hobby: '' //爱好
                            }
                            localStorage.setItem('userInfo',JSON.stringify(userInfo));
                            setTimeout(function(){
                                this.$router.push('/account/detail')
                            }.bind(this),2000)
                        } else {
                            // alert(v.msg)
                            this.modalMSG=v.msg;
                            this.modalFlag = true
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100%;
    }
    .logo {
        position: absolute;
        margin-left: -18%;
        width: 36%;
        left: 50%;
        top: 8%;
        z-index: 1;
    }
    .link-btn {color: #cecece;}
    .form {
        position: absolute;
        left: 11%;
        top: 33%;
        width: 78%;
    }
    input {
        display: block;
        margin: 10px auto 0;
        padding: 0 10px;
        width: 100%;
        height: 36px;
        color: #cecece;
        line-height: 36px;
        border: 1px solid #878787;
        border-radius: 5px;
        font-size: 0.8em;
        background: rgba(255, 255, 255, .2);
        box-sizing: border-box;
        outline: none;
        caret-color: #568bc0;
    }
    input[type="button"] {
        color: #cecece;
        border: 0;
        font-size: 1.2em;
        font-weight: 100;
        letter-spacing: 2px;
        background-color: #568bc0;
    }
    .password {padding: 0 30px 0 10px;}
    input:focus {border: 1px solid #878787;}
    input[type="submit"]:focus {
        background: #4b79a8;
        border: 0;
    }
    .icon-font {
        position: absolute;
        top: 9px;
        right: 10px;
        color: #cecece;
        font-size: 1.3em;
    }
    p {
        margin-top: 5px;
        color: #cecece;
        font-size: 1em;
    }
    a {float: right;}
    #checkcode {float: left;width: 60%;}
    #get-checkcode {
        float: right;
        margin-top: 10px;
        width: 36%;
        height: 36px;
        color: #cecece;
        line-height: 36px;
        border-radius: 5px;
        border: 1px solid #878787;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.8em;
        background: rgba(255, 255, 255, .2);
    }
</style>