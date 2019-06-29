<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: auto auto auto;
}
</style>
