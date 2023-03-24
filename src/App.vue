<template>
  <router-view
      v-on:auth="checkInDatabase"
      v-on:main="goToMain"
      v-bind:username=username
  />
</template>
<script>
import store from './store'
import router from '@/router'
export default {
  name: 'App',
  data() {
    return {
      isAuth: false,
      username: '',
      database: [
        {
          'login': 'admin',
          'password': '1234',
          'username': 'Sergey Lebedev',
        }
      ],
    }
  },
  methods: {
    checkInDatabase(data) {
      data = JSON.stringify(data)
      data = JSON.parse(data)
      for (let i = 0; i < this.database.length; i++) {
        if (this.database[i]['login'] === data.login && this.database[i]['password'] === data.password) {
          this.username = this.database[i]['username']
          store.state.username = this.username
          store.dispatch('login')
          store.dispatch('usernameChange')
          router.push('dashboard')
          return 1;
        }
      }
      alert('Login failed. Check your credentials and try once more')
    },
    goToMain() {
      if (store.getters.isAuthenticated)
        router.push('/dashboard')
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
