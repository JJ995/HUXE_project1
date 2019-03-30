import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Authentication plugin
import AuthPlugin from "./plugins/auth";

import { createProvider } from './vue-apollo'
Vue.use(AuthPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#app');
