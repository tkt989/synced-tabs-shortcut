<template>
  <div id="app">
    <device v-for="device in devices" :key="device.deviceName" v-bind:device="device"></device>
  </div>
</template>

<script>
import Device from "./components/Device.vue"

export default {
  name: 'app',
  components: {
    "device": Device
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      devices: []
    }
  },

  created() {
    chrome.sessions.getDevices(null, (devices) => {
      this.devices = devices
    })
  }
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  padding: 0px 10px 10px 10px;
}
</style>
