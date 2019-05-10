<template>
  <div id="app">
    <Header :title="title"/>
      <router-view />
    <Footer :content="content"/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  data() {
    return {
    title: 'Vue Movie DB',
    content: 'Build with ❤️ by Ndene SENE 🦅'
    }
  },
  components: {
    Header,
    Footer
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
