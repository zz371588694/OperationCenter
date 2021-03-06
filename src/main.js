// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "babel-polyfill";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import './css/reset.css'
import './css/theme-green/index.css'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
		template: '<App/>',
		components: { App }
});