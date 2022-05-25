import HelloWorld from "./components/HelloWorld.vue";
import vuetify from '@/plugins/vuetify' // path to vuetify export

const AlertApside = {
 install(Vue, options) {
    console.log(options)
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
    Vue.prototype.$vuetify = vuetify.framework;
    Vue.component("hello-world-apside", HelloWorld);
 }
};

// export function install(Vue) {
// 	if (install.installed) return;
// 	install.installed = true;
// 	Vue.component("hello-world", HelloWorld);
// }

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AlertApside);
}

export default AlertApside;