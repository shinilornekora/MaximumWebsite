<template>
  <div v-if="isAuth === false">
    <projectPage v-on:auth="authUser"/>
  </div>
  <div v-else>
    <div>Ну, функционал ещё готовится</div>
  </div>
</template>

<script>
import projectPage from './components/projects.vue'

export default {
  name: 'App',
  components: {
    projectPage
  },
  data() {
    return {
      isAuth: false
    }
  },
  methods: {
    authUser() {
      this.isAuth = true;
     // window.location.href = '/homepage'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Inter', serif;
  text-align: center;
  color: #2c3e50;
}
</style>
