import Vue from 'vue'
import App from './App.vue'

import ObjectTrafic from './index'

Vue.use(ObjectTrafic , { lang: 'pt' , api:{ baseUrl: ''} })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
