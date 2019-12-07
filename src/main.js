import Vue from 'vue';
import vuetify from './Vuetify/plugins';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
