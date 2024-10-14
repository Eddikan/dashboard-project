import Vue from 'vue'
import './assets/style.scss';
import 'typeface-inter';
import App from './App.vue'
import router from './router'; // Import the router
import store from './store'; // Import the Vuex store

Vue.config.productionTip = false

new Vue({
  router, // Add router to the Vue instance
  store,  // Add Vuex store to the Vue instance
  render: h => h(App),
}).$mount('#app')
