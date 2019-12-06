import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://stock-trader-cb2c0.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
