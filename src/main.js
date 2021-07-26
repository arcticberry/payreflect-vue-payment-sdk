import Vue from 'vue'
import App from './App.vue'
import "@/assets/styles/tailwind.scss";
import BaseComponent from "@/components/global";
import { apiClient } from "./plugins/axios";
import request from './request'

Vue.prototype.$request = request(apiClient)
Vue.use(BaseComponent);
Vue.prototype.$axios = apiClient;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
