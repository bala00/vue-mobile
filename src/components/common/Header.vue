<template>
    <Layout :class="className">
        <Header>
            <Row class-name="top-header">
                <Col span="3"><router-link :to="{path: backUrl, query:{name: backName}}"><Icon type="ios-arrow-left"></Icon></router-link></Col>
                <Col span="17">{{title}}</Col>
                <Col span="4"><span @click="modifyBtn">{{btnText}}</span></Col>
            </Row>
        </Header>
    </Layout>
</template>

<script>
    import Bus from '@/bus.js';
    import qs from 'qs';

    export default {
        props: ['backUrl','backName','btnText', 'className'],
        data () {
            return {
                title: this.$route.query.name,
                mobile: JSON.parse(localStorage.getItem('userInfo')).vueMobile,
                name: '',
                value: ''
            }
        },
        updated () {
            this.title = this.$route.query.name;
        },
        beforeCreate(){
            Bus.$on('modify', (e) => {
                this.name = e.name;
                this.value = e.value
                
            })
        },
        beforeDestroy() {
            Bus.$off('modify');
        },
        methods: {
            modifyBtn () {
                // console.log('test');
                let params = qs.stringify({
                    listName : this.name,
                    listVal: this.value,
                    mobile: this.mobile
                });
                console.log('params-->',params);
                this.axios.post('/api/modify', params).then((res) => {
                    console.log('res---',res);
                    if(res.data.code == '0'){
                        let _userInfo = JSON.parse(localStorage.getItem("userInfo"));
                        _userInfo[this.name] = this.value;
                        localStorage.setItem('userInfo',JSON.stringify(_userInfo));
                        alert('修改成功');
                    }else{
                        alert('修改失败，系统错误，请重试！');
                    }

                    this.$router.push({path: '/account/detail', query:{name: '我'}})
                })       
            }
        }
    }
</script>

<style scoped>
    .ivu-layout-header{
        padding: 0 1.4em;
        height: 54px;
        line-height: 54px;
        color: #fff;
        background: #6961c0;
    }
    .top-header .ivu-col{
        height: 54px;
    }
    .top-header .ivu-col:nth-child(1) a{
        color: #fff;
        font-size: 1.5em;
    }
    .top-header .ivu-col:nth-child(2){
        font-size: 1.2em;
        text-align: center
    }
    .top-header .ivu-col:nth-child(3){
        font-size: 1.2em;
        color: #eee;
        text-align: right
    }
    .user-detail-tm{
        position:absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 9999;
        background: transparent;
    }
    .user-detail-tm .ivu-layout-header{background: transparent;}
</style>