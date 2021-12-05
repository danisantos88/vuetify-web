import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify'
import router from './router'
// import axios from 'axios' //add

// Vue.prototype.$http = axios //add

Vue.config.productionTip = false
Vue.use(VueRouter);

// const router = new VueRouter({
//   routes
// });

new Vue({
  vuetify,
  router,
  // //add axios things
  // el: '#app',
  // components: { App },
  // template: '<App/>',
  // //end add
  render: h => h(App)
}).$mount('#app')
