<template>
  <div class="window">
    <tab v-for="tab in tabs" :key="tab.id" v-bind:tab="tab"></tab>
  </div>
</template>

<script>
import Tab from "./Tab.vue"

export default {
  name: "window",

  components: {
    "tab": Tab
  },
  
  props: ["window"],

  computed: {
    tabs() {
      console.log(this.window)
      return this.window.tabs
    }
  },

  methods: {
    open($event) {
      window.open($event.target.href)
    }
  }
}
</script>

<style>
.window {
  padding-top: 10px;
}
</style>
