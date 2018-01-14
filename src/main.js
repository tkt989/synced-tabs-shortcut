import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import "babel-regenerator-runtime"

import "./index.html"
import "./manifest.json"

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
