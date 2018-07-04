<template>
    <div class="user-detail pr">
        <img class="img-reposive theme-bg" src="@/assets/image/themeBG.jpg" />
        <div class="detail-top">

            <div class="avatar-wrap" @click="upload">
                <Avatar :src="avatar" />
                <div class="icon-wrap">
                    <Icon type="android-camera"></Icon>
                </div>
                <input id="upload_file" type="file" @change="preview" accept="image/jpeg,image/png,image/jpg" ref="file" style="width:0; height: 0;opacity: 0;" />
            </div>
        </div>
        <div class="content">
            <div v-for="items in userLink">
                <div class="color-hr"></div>
                <ul>
                    <li v-for="item in items.data">
                        <a v-if="typeof item.url == 'undefined'">
                            <div class="item"><div class="icon-i" :style="{background:item.color}"><Icon :type="item.iconType"></Icon></div></div>
                            <div class="item">{{item.name}}</div>
                            <div class="txr item"></div>
                            <div class="txr item" style="color: #b2b4b3">{{item.value}}</div>
                        </a>
                        <router-link v-else :to="{path:'/account/modify/'+item.url, query: {name: item.name, value: item.proValue}}">
                            <div class="item"><div class="icon-i" :style="{background:item.color}"><Icon :type="item.iconType"></Icon></div></div>
                            <div class="item">{{item.name}}</div>
                            <div class="txr item"><Icon type="ios-arrow-right" color="#afb5ae" style="font-size: 1.4em"></Icon></div>
                            <div class="txr item">{{item.value}}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <img style="margin-top:5em;" class="img-reposive" src="@/assets/image/bg2.jpg" />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'UserDetail',
        data (){
            return {
                avatar: JSON.parse(localStorage.getItem('userInfo')).avatar ? JSON.parse(localStorage.getItem('userInfo')).avatar : 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                userLink: [
                    {
                        id: 1,
                        name: 'section1',
                        data: [
                            {
                                iconType: 'ios-telephone',
                                name: '账号',
                                value: JSON.parse(localStorage.getItem('userInfo')).vueMobile,
                                color:'#e77dc0'
                            },{
                                iconType: 'ios-person',
                                name: '昵称',
                                color: '#00cdd3',
                                url: 'nickName',
                                proValue: JSON.parse(localStorage.getItem('userInfo')).name,
                                value: JSON.parse(localStorage.getItem('userInfo')).name ? JSON.parse(localStorage.getItem('userInfo')).name : "暂无",
                            },{
                                iconType: 'transgender',
                                name: '性别',
                                color: '#897dfa',
                                url: 'sex',
                                proValue: JSON.parse(localStorage.getItem('userInfo')).sex,
                                value: JSON.parse(localStorage.getItem('userInfo')).sex == 0 ? "男" : "女",

                            },{
                                iconType: 'star',
                                name: '星座',
                                color: '#ff9a07',
                                url: 'star',
                                proValue: JSON.parse(localStorage.getItem('userInfo')).constellation,
                                value: JSON.parse(localStorage.getItem('userInfo')).constellation ? JSON.parse(localStorage.getItem('userInfo')).constellation : "请选择"
                            }
                        ]
                    },{
                        id: 2,
                        name: 'section2',
                        data: [
                            {
                                iconType: 'bowtie',
                                name: '职业',
                                color: '#47b3f7',
                                url: 'occupation',
                                proValue: JSON.parse(localStorage.getItem('userInfo')).occupation,
                                value: JSON.parse(localStorage.getItem('userInfo')).occupation ? JSON.parse(localStorage.getItem('userInfo')).occupation : "请输入"
                            },{
                                iconType: 'heart',
                                name: '爱好',
                                color: '#fc2e01',
                                url: 'hobby',
                                proValue: JSON.parse(localStorage.getItem('userInfo')).hobby,
                                value: JSON.parse(localStorage.getItem('userInfo')).hobby ? JSON.parse(localStorage.getItem('userInfo')).hobby : '请输入'
                            },{
                                iconType: 'compose',
                                name: '个性签名',
                                color: '#3ce468',
                                url: 'signature',
                                proValue: JSON.parse(localStorage.getItem('userInfo')).signature,
                                value: JSON.parse(localStorage.getItem('userInfo')).signature ? JSON.parse(localStorage.getItem('userInfo')).signature : '请输入'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            upload(){
                this.$refs.file.click();
            },
            preview(e){
                let file = e.target.files[0];
                let param = new FormData();
                param.append('file',file,file.name);
                param.append('mobile',JSON.parse(localStorage.getItem('userInfo')).vueMobile);
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                }; 
                this.axios.post('/api/upload',param,config)
                    .then(response=>{
                        console.log(response.data);
                })   
            }
        }
    }
</script>
<style scoped>
    .theme-bg{
        height: 200px;
    }
    .detail-top{
        position: absolute;
        padding-top: 80px;
        width: 100%;
        height: 200px;
        top:0;
        left: 0;
        box-sizing: border-box;
        background:rgba(0, 0, 0, .4)
    }
    .avatar-wrap{
        position: relative;
        margin:0 auto;
        width: 70px;
        height: 70px;
        overflow: hidden
    }
    .ivu-avatar{
        width: 70px;
        height:70px;
        border-radius: 50%;
    }
    .icon-wrap{
        position: absolute;
        width: 25px;
        height: 25px;
        line-height: 26px;
        right: 0;
        bottom: 0;
        z-index: 1;
        color: #fff;
        font-size: 1.1em;
        text-align: center;
        background: #6bbbf5;
        border-radius: 50%;
    }
    .color-hr{
        height: 1.8em;
        background:#f4f4f4;
    }
    .content{background: #fff;}
    .content ul{
        padding: 0 1.2em;
    }
    .content ul li{
        height: 52px;
        line-height: 52px;
        border-bottom: 1px solid #dfe7e7;
    }
    .content ul li:last-child{
        border-bottom: none;
    }
    .content ul li a{
        display: block;
        width: 100%;
        height: 52px;
    }
    .content ul li a:hover, .content ul li a:active{
        color: #333;
    }
    .item{
        display: inline-block;
    }
    .item:nth-child(1){
        margin-right: .5em;
        width: 28px;
    }
    .item:nth-child(2){
        width: 30%;
    }
    .item:nth-child(3){
        float: right;
        width: 30px;
    }
    .item:nth-child(4){
        float: right;
        width: 30%;
        color: #838b89
    }
    .icon-i{
        width: 28px;
        height: 28px;
        line-height: 28px;
        color: #fff;
        border-radius: 50%;
        text-align: center;
    }
</style>