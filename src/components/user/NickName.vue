<template>
    <div class="m-nickname">
        <Input v-model="value" @on-change="modify(listName,value)" placeholder="请输入..." autofocus clearable></Input>
    </div>
</template>
<script>
    import Bus from '@/bus.js'

    export default {
        name: 'NickName',
        data() {
            return {
                listName: 'name',
                value: this.$route.query.value
            }
        },
        methods:{
            modify(n,v){
                this.value = v;
                Bus.$emit('modify',{name: n, value: v})
            }
        }
    }
</script>