import Vue from 'vue'
import App from './App.vue'
import "@/assets/styles/tailwind.scss";
import BaseComponent from "@/components/global";

Vue.use(BaseComponent);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
