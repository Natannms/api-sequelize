<template>
  <div id="nav">
    <h1>NAVBAR</h1>
    <router-link to="/">
        <img id="logo" alt="">
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
