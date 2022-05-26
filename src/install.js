import HelloWorld from "./components/HelloWorld.vue";
//import vuetify from '@/plugins/vuetify' // path to vuetify export
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

const AlertApside = {
  install(Vue/*, options*/) {
    //Vue.use(vuetify);
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("hello-world-apside", HelloWorld);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AlertApside);
}

export default AlertApside;