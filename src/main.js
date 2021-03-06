import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';

import VueClipboard from 'vue-clipboard2'


Vue.config.productionTip = false


Vue.use(VueClipboard)

Vue.use(ElementUI);


Vue.prototype.$axios=Axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
