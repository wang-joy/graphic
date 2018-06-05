import Vue from 'vue'

import App from './App'
import store from './store'
import './assets/css/reset'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import { SvgPlugin } from './plugin/SvgPlugin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'svg.select.js/dist/svg.select.min.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(SvgPlugin, store)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
