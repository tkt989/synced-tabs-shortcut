<template>
  <md-card class="device">
    <div class="header">
      <h1 class="name">{{ name }}</h1>

      <md-button class="toggle-button md-icon-button" v-on:click="open = !open">
        <md-icon v-if="open">keyboard_arrow_up</md-icon>
        <md-icon v-else>keyboard_arrow_down</md-icon>
      </md-button>
    </div>

    <div v-if="open" class="window-list">
      <window v-for="session in sessions" :key="session.id" v-bind:window="session.window"></window>
    </div>
  </md-card>
</template>

<script>
import Window from "./Window.vue"

export default {
  name: 'device',

  components: {
    "window": Window
  },

  props: ["device"],

  data() {
    return {
      open: false
    }
  },

  computed: {
    name() {
      return this.device.deviceName
    },

    sessions() {
      return this.device.sessions
    }
  }
}
</script>

<style>
.device {
  margin-top: 10px;
  padding: 5px;
  padding-left: 10px;
}

.header {
  display: flex;
}

.header .name {
  margin: 0;
  font-size: 1.2rem;
  flex-grow: 1;
  align-self: center;
  font-weight: normal;
}

.window-list {
  padding-left: 20px;
}
</style>
