import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {},
    // actions:{},
    // mutations:{}

    state: {   //存储数据
        count: 0
    },
    mutations: {  //修改数据
        increment(state) {
            state.count++
        },
        decrease (state) {
            state.count --
        }
    }
})


// READ ME
//数据保存在state字段内
//通过$store.state.count读取
//在组件内，来自store的数据只能读取，不能手动改变，改变store中数据的唯一途径就是显式地提交mutations
//在组件内，荣国this.$store.commit方法来执行mutations

