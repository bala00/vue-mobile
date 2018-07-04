<template>
    <div class="list">
        <img class="theme-bg" src="@/assets/image/themeBG.jpg" />
        <div class="user-top">
            <div class="user-info-wrap">
                <ul class="user-info">
                    <li>
                        <Avatar :src="avatar" />
                    </li>
                    <li>
                        <p>{{userName}}</p>
                        <p>{{signature}}</p>
                    </li>
                </ul>
            </div>
            <Row class-name="wodebt">
                <Col span="8">
                <span class="wbt">{{attention}}</span><br>
                <span style="display: block;">关注</span>
                </Col>
                <Col span="8">
                <span class="wbt">{{fans}}</span><br>
                <span style="display: block;">粉丝</span>
                </Col>
                <Col span="8">
                <span class="wbt">100</span><br>
                <span style="display: block;">作品</span>
                </Col>
            </Row>
        </div>
        <Content>
            <Row>
                <Col v-for='item of userList' :key="item.id" span="8">
                    <a v-if="item.url == ''">
                        <Icon :type="item.iconType"></Icon>
                        <p>{{item.name}}</p>
                    </a>
                    <router-link v-else :to="{path:item.url, query:{name: item.hdTitle}}">
                        <Icon :type="item.iconType"></Icon>
                        <p>{{item.name}}</p>
                    </router-link>
                </Col>
                <Col span="8" >
                    <a @click="logoutModal = true">
                        <Icon type="log-out"></Icon>
                        <p>退出登录</p>
                    </a>
                </Col>
            </Row>
            <Modal
                v-model="logoutModal"
                :mask-closable="false"
                class-name="ive-logout"
                ok-text="退出"
                @on-ok="ok"
                @on-cancel="cancel">
                <p>是否狠心退出登录？</p>
            </Modal>
        </Content>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                userInfo: JSON.parse(localStorage.getItem('userInfo')),
                logoutModal: false,
                userList: [{
                    id: 1,
                    name: '我的消息',
                    iconType: 'chatbubble-working',
                    url: '',
                    hdTitle: ''
                },{
                    id: 2,
                    name: '我的好友',
                    iconType: 'person-stalker',
                    url: '',
                    hdTitle: ''
                },{
                    id: 3,
                    name: '添加好友',
                    iconType: 'person-add',
                    url: '',
                    hdTitle: ''
                },{
                    id: 4,
                    name: '我的点赞',
                    iconType: 'ios-heart',
                    url: '',
                    hdTitle: ''
                },{
                    id: 5,
                    name: '我的关注',
                    iconType: 'android-star',
                    url: '',
                    hdTitle: ''
                },{
                    id: 6,
                    name: '我的作品',
                    iconType: 'ios-paper',
                    url: '',
                    hdTitle: ''
                },{
                    id: 7,
                    name: '用户信息',
                    iconType: 'edit',
                    url: '/account/detail',
                    hdTitle: '我'
                },{
                    id: 8,
                    name: '系统设置',
                    iconType: 'android-settings',
                    url: '',
                    hdTitle: ''
                    
                }]
            }
        },
        computed: {
            fans(){
                return this.userInfo.fans;
            },
            attention (){
                return this.userInfo.attention
            },
            avatar() {
                return this.userInfo.avatar ? this.userInfo.avatar : 'https://i.loli.net/2017/08/21/599a521472424.jpg'
            },
            userName() {
                return this.userInfo.name ? this.userInfo.name : this.userInfo.vueMobile;
            },
            signature() {
                return this.userInfo.signature ? this.userInfo.signature : '暂无签名';
            }
        },
        methods: {
            ok () {
                console.log('退出登录。。。。');
                localStorage.removeItem('userInfo');
                this.$router.push('/');
            },
            cancel () {
                console.log('取消登录...')
            }
        }
    }
</script>

<style scoped>
    .user-top, .theme-bg {
        width: 100%;
        height: 200px;
    }
    .user-top {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .3)
    }
    .user-info-wrap {
        display: flex;
        height: 140px;
        align-items: center;
    }
    .ivu-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info {
        display: flex;
        padding-left: 2rem;
        width: 100%;
        color: #f5f5f5;
        align-items: center;
    }
    .user-info li {
        display: inline-block;
        font-size: 1.2em;
        font-weight: bold
    }
    .user-info li:nth-child(2) {
        padding-left: 1rem;
        width: 60%;
    }
    .user-info li p:nth-child(2) {font-size: 0.8em;}
    .wodebt {
        position: absolute;
        padding-top: 9px;
        width: 100%;
        height: 60px;
        left: 0;
        bottom: 0;
        color: #f5f5f5;
        text-align: center;
        background: rgba(0, 0, 0, .35)
    }
    .ivu-layout-content{
        font-size:1em;
        text-align: center;
    }
    .ivu-layout-content .ivu-col{padding: 1em;}
    .ivu-layout-content .ivu-col p{padding-top: 3px;}
    .ivu-layout-content .ivu-icon{
        position: relative;
        font-size:1.8em;
    }
    .ivu-layout-content .ivu-col:nth-child(1) .ivu-icon{color: #31b04c}
    .ivu-layout-content .ivu-col:nth-child(2) .ivu-icon{color: #3faee3}
    .ivu-layout-content .ivu-col:nth-child(3) .ivu-icon{
        background: -webkit-linear-gradient(left top, #f8bf2d, #ef4c00);
        background: -o-linear-gradient(bottom right, #f8bf2d, #ef4c00);
        background: -moz-linear-gradient(bottom right, #f8bf2d, #ef4c00); 
        background: linear-gradient(to bottom right, #f8bf2d, #ef4c00); 
        -webkit-background-clip: text;
        color: transparent;
        /* color: #ec871f */
        }
    .ivu-layout-content .ivu-col:nth-child(4) .ivu-icon{color: #fa0202}
    .ivu-layout-content .ivu-col:nth-child(5) .ivu-icon{color: #f7a818}
    .ivu-layout-content .ivu-col:nth-child(6) .ivu-icon{color: #d488d2}
    .ivu-layout-content .ivu-col:nth-child(7) .ivu-icon{color: #2967b2}
    .ivu-layout-content .ivu-col:nth-child(8) .ivu-icon{color: #8999ae}
    .ivu-layout-content .ivu-col:nth-child(9) .ivu-icon{
        background: -webkit-linear-gradient(#fa493f,#880601 );
        background: -o-linear-gradient(#fa493f, #880601 );
        background: -moz-linear-gradient(#fa493f, #880601 ); 
        background: linear-gradient(#fa493f, #880601 ); 
        -webkit-background-clip: text;
        color: transparent;
        /* color: #8999ae */
    }

    .ivu-layout-content .ivu-col:nth-child(1) .ivu-icon::after{
        display: none;
        position: absolute;
        content: "";
        width: 7px;
        height: 7px;
        right: 0;
        top: 0;
        border-radius: 50%;
        background-color: red;
        /* content: "1";
        display: block;
        position: absolute;
        right: -3px;
        top:-2px;
        width: 12px;
        height: 12px;
        line-height: 12px;
        border-radius: 50%;
        background-color: red;
        font-size: .4em;
        color: #fff; */
    }
    
</style>