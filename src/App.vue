<template>
  <div id="app">
    <Header :title="title"/>
    <router-view />
</div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'app',
  data() {
    return {
    title: 'Vue Movie DB'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
