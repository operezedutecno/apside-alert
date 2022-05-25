import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

export default new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
