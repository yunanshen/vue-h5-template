import Vue from 'vue'
import App from './App.vue'
import router from './route'

Vue.config.productionTip = false

// import "@/assets/less/common.less"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
