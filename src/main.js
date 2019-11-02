import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ObjectTrafic from './index'

Vue.use(ObjectTrafic , { lang: 'pt' })

new Vue({
  render: h => h(App),
}).$mount('#app')
