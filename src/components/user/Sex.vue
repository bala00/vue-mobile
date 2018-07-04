<template>
    <Layout class="m-sex">
        <Content>
            <label>
                <div class="icon-sex"><Icon type="male"></Icon></div>
                <span>男</span>
                <div class="fr">
                    <input type="radio" name="sex" v-model="sex" @change="modify" class="user-radio" value="0">
                </div>
            </label>
            <label>
                <div class="icon-sex"><Icon type="female"></Icon></div>
                <span>女</span>
                <div class="fr">
                    <input type="radio" name="sex" v-model="sex" @change="modify" class="user-radio" value="1">
                </div>
            </label>
        </Content>
    </Layout>
</template>
<script>
    import Bus from '@/bus.js'
    export default {
        name: 'Sex',
        data() {
            return {
                sex: this.$route.query.value
            }
        },
        methods:{
            modify(){
                Bus.$emit('modify', {name: 'sex', value: this.sex})
            }
        }
    }
</script>
<style scoped>
    .m-sex {
        padding: 0 1.2em;
        background: #fff
    }
    .m-sex label{
        display: block;
        width: 100%;
        height: 42px;
        line-height: 42px;
    }
    .icon-sex{
        position: relative;
        display: inline-block;
        margin-right: 8px;
        width: 18px;
        height: 18px;
        top: -1px;
        line-height: 18px;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        background: #f67cd0;
    }
    .m-sex label:first-child .icon-sex{
        font-size: .8em;
        background: #61a7fa
    }
</style>