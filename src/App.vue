<template>
  <div v-if="isAuth === false">
    <projectPage v-on:auth="authUser"/>
  </div>
  <div v-else-if="addProject === false">
    <projectPageAuth username="Sergey Lebedev" v-on:add="goToTheProjectPage"/>
  </div>
  <div v-else>
    <add-project-page username="Sergey Lebedev"/>
  </div>
</template>

<script>
import projectPage from './components/projects.vue'
import projectPageAuth from './components/projectsAuth.vue'
import addProjectPage from "./components/addProjectPage";
export default {
  name: 'App',
  components: {
    projectPage,
    projectPageAuth,
    addProjectPage
  },
  data() {
    return {
      isAuth: false,
      addProject: false
    }
  },
  methods: {
    authUser() {
      this.isAuth = true;
    },
    goToTheProjectPage() {
      this.addProject = true;
    }
  }
}
</script>

<style>

#app {
  font-family: 'Inter', sans-serif;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
