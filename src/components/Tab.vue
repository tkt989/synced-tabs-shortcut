<template>
  <div class="tab">
    <a class="title" v-bind:href="url" v-on:click="open($event)">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: "tab",

  props: ["tab"],

  computed: {
    title() {
      return this.tab.title
    },

    url() {
      return this.tab.url
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
.tab {
  padding-top: 5px;
}

.title {
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

a.title {
  color: #0277BD;
}
</style>
