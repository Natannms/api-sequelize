<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NavBar />
  <Login msg="TELA DE LOGIN" />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Login  from './components/Login.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
