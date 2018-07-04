// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'  
import VueAxios from 'vue-axios'  
import qs from 'qs'

import store from '../lib/store'
import App from './App'
import iView from '../node_modules/iview';
import '../node_modules/iview/dist/styles/iview.css';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://192.168.0.172:8002';

Vue.use(VueAxios, axios)
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,// store 实例注入
  router,
  components: { App },
  template: '<App/>'
})