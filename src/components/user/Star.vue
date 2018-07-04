<template>
    <Layout class="m-star">
        <Content>
            <ul>
                <li v-for="v in star" @click="selectStar(v.name)" :class="{active: activeName == v.name}">
                    <div class="item">
                        <i class="iconfont" :class="v.icon" :style="{background: v.bg}"></i>
                    </div><div class="item">
                        {{v.name}}
                    </div><div class="item">
                        {{v.time}}
                    </div><div class="item">
                        <Icon type="checkmark-circled"></Icon>
                    </div>
                </li>
            </ul>
        </Content>
    </Layout>
</template>
<script>
    import '@/assets/css/font/iconfont.css';
    import Bus from '@/bus.js'

    export default {
        name: 'Star',
        data() {
            return {
                activeName: this.$route.query.value,
                star:[{
                    icon: 'icon-ziyuan',
                    name: '白羊座',
                    bg: '#ff3d51',
                    time: '3.21 - 4.19'
                },{
                    icon: 'icon-xingzuojinniuzuo',
                    name: '金牛座',
                    bg: '#01acf8',
                    time: '4.20 - 5.20'
                },{
                    icon: 'icon-xingzuo-shuangzizuo',
                    name: '双子座',
                    bg: '#b693ee',
                    time: '5.21 - 6.21'
                },{
                    icon: 'icon-xingzuojuxiezuo',
                    name: '巨蟹座',
                    bg: '#08c2c9',
                    time: '6.22 - 7.22'
                },{
                    icon: 'icon-xingzuoshizizuo',
                    name: '狮子座',
                    bg: '#8680eb',
                    time: '7.23 - 8.22'
                },{
                    icon: 'icon-xingzuochunvzuo',
                    name: '处女座',
                    bg: '#0ac97e',
                    time: '8.23 - 9.22'
                },{
                    icon: 'icon-xingzuotianchengzuo',
                    name: '天秤座',
                    bg: '#fc9205',
                    time: '9.23 - 10.23'
                },{
                    icon: 'icon-xingzuotianhezuo',
                    name: '天蝎座',
                    bg: '#fc7ae9',
                    time: '10.24 - 11.22'
                },{
                    icon: 'icon-xingzuo-sheshouzuo',
                    name: '射手座',
                    bg: '#ffd349',
                    time: '11.23 - 12.21'
                },{
                    icon: 'icon-xingzuo-mojiezuo',
                    name: '摩羯座',
                    bg: '#f24e7e',
                    time: '12.22 - 1.19'
                },{
                    icon: 'icon-xingzuoshuipingzuo',
                    name: '水瓶座',
                    bg: '#9de445',
                    time: '1.20 - 2.18'
                },{
                    icon: 'icon-xingzuo-shuangyuzuo',
                    name: '双鱼座',
                    bg: '#78a5b0',
                    time: '2.19 - 3.20'
                }]
            }
        },
        methods:{
            selectStar (gameName) {
                this.activeName = gameName;
                Bus.$emit('modify',{name: 'constellation', value: this.activeName})
            }
        }
    }
</script>
<style scoped>
    .m-star{padding: 0 1.2em;}
    .m-star .item{
        display: inline-block;
        height: 52px;
        line-height: 52px;
        font-size: 1em;
    }
    .m-star .item:nth-child(2){
        margin-right: 2em;
    }
    .m-star .item:nth-child(3){
        width: 55%;
    }
    .m-star .item:last-child{
        display: none;
    }
    .m-star .active .item:last-child{
        display: inline-block;
    }
    .m-star i{
        display: inline-block;
        margin-right: .8em;
        width: 24px;
        height: 24px;
        color: #fff;
        line-height: 24px;
        font-size: .9em;
        font-weight: bold;
        text-align: center;
        border-radius: 50%;
    }
    .m-star .item:last-child i{
        position: relative;
        top: 2px;
        color: #6bbbf5;
        font-size: 1.6em;
        background: transparent
    }
</style>