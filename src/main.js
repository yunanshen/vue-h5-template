import Vue from 'vue'
import App from './App.vue'
import router from './route'
import loading from '@/components/loading/index.js' // 引入loading

Vue.use(loading)

Vue.config.productionTip = false

import "@/assets/less/reset.less"
import "../public/static/aliIcon/iconfont.css"
import "../public/static/flexible.js"


// router.beforeEach((to, from, next) => {
//   if (from.name === 'newsList') {
//     if (to.name === 'newsDetail') {
//       from.meta.isBack = true
//     }
//   }
//   next()
// })




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
