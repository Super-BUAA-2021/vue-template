import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

/* 引入 axios 并挂载到 Vue 实例上，在各 Vue 组件通过 this.$axios 进行使用 */
Vue.prototype.$axios = axios

/* 指定 axios 发送请求的目标后端地址的根路径，一般为后端服务器IP+端口，若有部署域名则可以是域名地址；如果是在本地同时跑前后端，则可能是 http://localhost:8000 */
axios.defaults.baseURL = 'http://localhost:8000';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
