<template>
    <Input v-model="value" class="m-textarea" @on-change="modify(message,value)" type="textarea" :maxlength="30" autofocus placeholder="介绍下自己..."></Input>
</template>
<script>
    import Bus from '@/bus.js'
    export default {
        props: ['message'],
        name: 'Textarea',
        data () {
            return {
                value: this.$route.query.value
            }
        },
        methods:{
            modify(n, v){
                Bus.$emit('modify',{name: n, value: v})
            }
        }
    }
</script>
<style>
    .m-textarea .ivu-input{
        padding: 1em 1.2em;
        height: 80px;
        resize: none;
    }
</style> 