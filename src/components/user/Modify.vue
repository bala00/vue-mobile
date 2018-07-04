<template>
    <div class="user-modify">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'Modify',
        data(){
            return {
                mobile: JSON.parse(localStorage.getItem('userInfo')).vueMobile
            }
        }
    }
</script>
<style>
    .user-modify{
        padding-top: 1.8em;
    }
    .user-modify .ivu-input {
        height: 42px;
        border-radius: 0;
        border-color: transparent;
    }
    .user-modify .ivu-input:hover {
        border-color: transparent
    }

    .user-modify .ivu-input:focus {
        border-color: transparent;
        outline: 0;
        -webkit-box-shadow: none;
        box-shadow: none
    }
    .user-modify .ivu-input-icon{
        height: 42px;
        line-height: 42px;
    }
    .ivu-radio {
        margin-right: 15px;
    }
</style>