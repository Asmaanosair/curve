import 'core-js/stable'
import Vue from 'vue'
import Vuelidate from 'vuelidate';

import CoreuiVue from '@coreui/vue'
import App from './App'
Vue.use(Vuelidate);
import router from './router/index'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import vuexI18n from 'vuex-i18n';
import Locales from './locale/vue-i18n-locales.generated.js';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import Pusher from "pusher-js";
import axios from 'axios';
import i18n from './i18n';



// let pusher = new Pusher('ujaEp3Zv', {
//   cluster: 'mt1',
//   wsHost:"soc.twistfleet.com",
//   wssPort: 6001
// });
let pusher = new Pusher('242b832874ffd57a4325', {
  cluster: 'eu',

});


Vue.prototype.$pusher = pusher;


Vue.use(CoreuiVue);



// Vue.use(vuexI18n.plugin, store);
// Vue.i18n.add('en', Locales.en);
// Vue.i18n.set(locale);


let locale = 'en'
if (typeof localStorage.locale !== 'undefined') {
  locale = localStorage.getItem("locale")
}

document.documentElement.lang = locale;

axios.defaults.headers['Accept-Language'] = locale;




new Vue({
  i18n,
  el: '#app',
  router,
  store,
  //CIcon component documentation: https://coreui.io/vue/docs/components/icon
  icons,
  template: '<App/>',
  components: {
    App
  },
});




