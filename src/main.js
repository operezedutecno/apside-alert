import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

const app = new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')

console.log(app);
console.log(App);
console.log(vuetify);
